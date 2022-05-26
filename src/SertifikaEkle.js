import axios from 'axios'
import React, { useEffect, useState } from 'react'

const SertifikaEkle = () => {
        const[sertifikaEkle,setSertifikaEkle] = useState({});
        const[hata, setHata] = useState("");

        const onFormSubmit = (event) => {
            event.preventDefault();
            setHata("");
           
            console.log("hele",sertifikaEkle)
            const objj = {sertifikaAd:sertifikaEkle.sertifikaAd, sertifikaMetni:sertifikaEkle.sertifikaMetni}
            console.log(objj);
    
            axios.all([
                axios.post("http://localhost:8080/api/Sertifika/add", objj)
            ])
            .then((response) => {
                window.location.replace("http://localhost:3000/");
             })
             .catch((error) => {
                    console.log(error);
                    setHata("Katılma işlemi başarısız ");
                });
        };
  

    const onInputChange = (event) => {
        setSertifikaEkle({ ...sertifikaEkle, [event.target.name]: event.target.value });
    }

   



    return (
        <React.Fragment>
            <form className="ui form">
                <div className="field">
                    <label>Sertifika Adı</label>
                    <input placeholder="Sertifika adı gir" name='sertifikaAd' onChange={onInputChange} />
                </div>
                <div className="field">
                    <label>Sertifika Metni</label>
                    <textarea  name="sertifikaMetni" rows="4" cols="50" placeholder="Sertifika metni gir" onChange={onInputChange}></textarea>
                </div>
                <br></br>
                <button className="ui button" type="submit" onClick={onFormSubmit}>Sertifika Ekle</button>
            </form>

        </React.Fragment>
    )
}
export default SertifikaEkle;