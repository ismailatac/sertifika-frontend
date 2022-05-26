import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useParams } from 'react-router-dom';
const KurumEkle = () => {
    const  {katilimci_id}  = useParams();
    const [hata, setHata] = useState("");
    
    const [gonderilecek, setGonderilecek] = useState({});
 
    const onFormSubmit = (event) => {
        event.preventDefault();
        setHata("");
       




        const objj = {adres:gonderilecek.adres, kurumAciklama:gonderilecek.kurumAciklama, kurumAd:gonderilecek.kurumAd, user:{userId:katilimci_id},yetkiliAd:gonderilecek.yetkiliAd,yetkiliSoyad:gonderilecek.yetkiliSoyad,yetkiliTel:gonderilecek.yetkiliTel}
        
        console.log(objj);
        axios.all([
            axios.post("http://localhost:8080/api/Kurum/add", objj),
           
        ])
        .then((responses) => {
            alert("Kurum eklendi");
            window.location.replace("http://localhost:3000/etkinlik");
         })
         .catch((error) => {
                console.log(error);
                setHata("Ekleme işlemi başarısız ");
            });
    };


    const onInputChange = (event) => {
        setGonderilecek({ ...gonderilecek, [event.target.name]: event.target.value });
    }


    

    return (
        <React.Fragment>
            {hata && <div>{hata}</div>}
            <form className="ui form">
                <div className="field">
                    <label>Kurum adı</label>
                    <input name="kurumAd" placeholder="Kurum adı gir" onChange={onInputChange} />
                </div>
                <div className="field">
                    <label>Kurum açıklama</label>
                    <input name="kurumAciklama" placeholder="Kurum açıklama gir" onChange={onInputChange} />
                </div>
                <div className="field">
                    <label>Kurum adresi</label>
                    <input name="adres" placeholder="Kurum adresi gir" onChange={onInputChange} />
                </div>






               
              
          
                
                <div className="field">
                    <label>Yetkili Ad</label>
                    <input name="yetkiliAd" type="text" placeholder="Yetkili Adı gir" onChange={onInputChange} />
                </div>
                <div className="field">
                    <label>Yetkili Soyadı</label>
                    <input name="yetkiliSoyad" type="text" placeholder="Yetkili Soyadı gir" onChange={onInputChange} />
                </div>
                <div className="field">
                    <label>Yetkili Telefon Numarası</label>
                    <input name="yetkiliTel" type="text" placeholder="Yetkili telefon numarası gir" onChange={onInputChange} />
                </div>

                
                

                <button className="ui button" type="submit" onClick={onFormSubmit}>Gönder</button>
            </form>




        </React.Fragment>
    )
  
}
export default KurumEkle;
