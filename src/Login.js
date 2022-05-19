import React, { useState } from 'react'


 const Login = (props) => {
  const [check,setCheck] = useState({username:"",password:""});
  

    const onInputChange = (event) => {
        setCheck({ ...check, [event.target.name]: event.target.value });
    }
    const checkFunc = (event) => {
        event.preventDefault();
        if(check.username === "user" && check.password === "1234"){
          props.setGirisYapildi(true);
          window.location.replace("http://localhost:3000/etkinlik");
        }
        if(check.username === "admin" && check.password === "1234"){
          props.setGirisYapildi(true);
          window.location.replace("http://localhost:3000/krmain");
          }
    }



  return (
    <React.Fragment>
                <h1>Giriş Yap</h1>
            <form className="ui form">
                <div className="field">
                    <label>Kullanıcı Adı</label>
                    <input type="text" name='username'value={check.username} onChange={onInputChange} placeholder="Kullanıcı adı gir" />
                </div>
                <div className="field">
                    <label>Şifre</label>
                    <input  type="password" name='password' value={check.password} onChange={onInputChange} placeholder="Şifreyi gir" />
                </div>
                <div className="field">
                   
                </div>
                <button className="ui button" type="submit" onClick={checkFunc}>Giriş yap</button>
            </form>





        </React.Fragment>
  )
}
export default Login;