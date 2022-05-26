import React,{useState} from "react";
import axios from "axios";




const Login = (props) => {
  const [check, setCheck] = useState({ email: "", password: "" });
  const [hata, setHata] = useState("");
  const [type,setType] = useState(0);
  const {navigation} = props;

  let katilimci_id = 0;

  const onInputChange = (event) => {
    setCheck({ ...check, [event.target.name]: event.target.value });
  }

  const onFormSubmit = (event) => {
    event.preventDefault();
    setHata("");

    const obj = { email: check.email, password: check.password }


    console.log("obje", obj);

    axios.all([
      axios.post(`http://localhost:8080/api/users/login`, obj),

    ])
      .then((responses) => {
       const user_type = (responses[0].data.data.userType)

       
        katilimci_id = responses[0].data.data.userId;
       window.location.replace(`http://localhost:3000/${user_type}/${katilimci_id}/anasayfa`)
       setType({});

      })
      .catch((error) => {
        console.log(error);
        setHata(error.response.data.message);
        setCheck({email: "", password: ""});
        setType(0)
      });
  };



  return (<React.Fragment>
    <h1>Giriş Yap</h1>
    {hata && <p style={{color:"red"}}>{hata}</p>}
    <form className="ui form">
      <div className="field">
        <label>Email</label>
        <input type="email" name='email' value={check.email} onChange={onInputChange} placeholder="E-mail gir" />
      </div>
      <div className="field">
        <label>Şifre</label>
        <input type="password" name='password' value={check.password} onChange={onInputChange} placeholder="Şifreyi gir" />
      </div>
      <div className="field">

      </div>
      <button className="ui blue button" type="submit" onClick={onFormSubmit}>Giriş yap</button>
      
    </form>
    <br></br>
    <a href="http://localhost:3000/kayitol"><button className="ui red button">Kayıt ol</button></a>
  </React.Fragment>

  )
}
export default Login;