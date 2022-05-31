import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

const SertifikaEkle = () => {
    const [sertifikaEkle, setSertifikaEkle] = useState({});
    const [hata, setHata] = useState("");
    const {user_type} = useParams();
    const {katilimci_id} = useParams();

    const onFormSubmit = (event) => {
        event.preventDefault();
        setHata("");

        console.log("hele", sertifikaEkle)
        const objj = { sertifikaAd: sertifikaEkle.sertifikaAd, sertifikaMetni: sertifikaEkle.sertifikaMetni }
        console.log(objj);

        axios.all([
            axios.post("http://localhost:8080/api/Sertifika/add", objj)
        ])
            .then((response) => {
                window.location.replace(`http://localhost:3000/${user_type}/${katilimci_id}/anasayfa/etkinlik`);
            })
            .catch((error) => {
                
                setHata(error.response.data.message);
            });
    };


    const onInputChange = (event) => {
        setSertifikaEkle({ ...sertifikaEkle, [event.target.name]: event.target.value });
    }





    return (
        <React.Fragment>
            <div>
                <h4>Oluşturduğunuz sertifikaya resim eklemeyi unutmayınız.</h4>
            {hata && <h4 style={{color:"white", backgroundColor:"red" }}>{hata}</h4>}
                <form >
                    <label>Sertifika Adı</label>
                    <input placeholder="Sertifika adı gir" name='sertifikaAd' onChange={onInputChange} />

                    <label>Sertifika Metni</label>
                    <textarea name="sertifikaMetni" rows="4" cols="199" placeholder="Sertifika metni gir" onChange={onInputChange}></textarea>

                    <button type="submit" onClick={onFormSubmit}>Sertifika Ekle</button>
                </form>
            </div>








            {/* <form className="ui form">
                <div className="field">
                    <label>Sertifika Adı</label>
                    <input placeholder="Sertifika adı gir" name='sertifikaAd' onChange={onInputChange} />
                </div>
                <div className="field">
                    <label>Sertifika Metni</label>
                    <textarea name="sertifikaMetni" rows="4" cols="50" placeholder="Sertifika metni gir" onChange={onInputChange}></textarea>
                </div>
                <br></br>
                <button className="ui button" type="submit" onClick={onFormSubmit}>Sertifika Ekle</button>
            </form> */}

        </React.Fragment>
    )
}
export default SertifikaEkle;