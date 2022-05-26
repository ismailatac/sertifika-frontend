import React,{useState} from 'react'
import axios from 'axios';

 const KatilKayitOl = () => {
     
    const [gonderilecek, setGonderilecek] = useState({});
    const [hata, setHata] = useState("");



    const onFormSubmit = (event) => {
        event.preventDefault();
        setHata("");
        const objj = {katilimci_ad:gonderilecek.katilimci_ad,katilimci_soyad:gonderilecek.katilimci_soyad,ogrenimdurumu:gonderilecek.ogrenimdurumu,
            universite:gonderilecek.universite,bolum:gonderilecek.bolum,sinif:gonderilecek.sinif,telefon:gonderilecek.telefon,email:gonderilecek.email,password:gonderilecek.password}
        
        console.log(objj);
        
            axios.post("http://localhost:8080/api/Katilimci/add", objj)
           
        
        .then((responses) => {
            alert("Katılımcı eklendi");
            window.location.replace("http://localhost:3000/");
         })
         .catch((error) => {
                console.log(error);
                setHata("Kayıt olma işlemi başarısız ");
            });
    };


    const onInputChange = (event) => {
        setGonderilecek({ ...gonderilecek, [event.target.name]: event.target.value });
        
    }
  return (
    <React.Fragment>
            <form className="ui form">
                <div className="field">
                    <label>Katılımcı adı</label>
                    <input name="katilimci_ad" placeholder="Katılımcı adı gir" onChange={onInputChange} />
                </div>
                <div className="field">
                    <label>Katılımcı soyadı</label>
                    <input name="katilimci_soyad" placeholder="Katılımcı soyadı gir" onChange={onInputChange} />
                </div>
                <div className="field">
                    <label>Öğrenim Durumu</label>
                    <input name="ogrenimdurumu" placeholder="Öğrenim Durumu gir" onChange={onInputChange} />
                </div>
                <div className="field">
                    <label>Üniversitesi</label>
                    <input name="universite" type="text" placeholder="Üniversitesi gir" onChange={onInputChange} />
                </div>
                <div className="field">
                    <label>Bölümü</label>
                    <input name="bolum" type="text" placeholder="Bölümü gir" onChange={onInputChange} />
                </div>
                <div className="field">
                    <label>Sınıfı</label>
                    <input name="sinif" type="text" placeholder="Sınıfı gir" onChange={onInputChange} />
                </div>
               
                <div className="field">
                    <label>Katılımcı Telefon Numarası</label>
                    <input name="telefon" type="text" placeholder="Katılımcı telefon numarası gir" onChange={onInputChange} />
                </div>
                <div className="field">
                    <label>Katılımcı E-posta</label>
                    <input name="email" type="email" placeholder="E-posta gir" onChange={onInputChange} />
                </div>
                <div className="field">
                    <label>Şifre</label>
                    <input name="password" type="password" placeholder="Şifre gir" onChange={onInputChange} />
                </div>
                <button className="ui button" type="submit" onClick={onFormSubmit}>Gönder</button>
            </form>
        </React.Fragment>
  )
}
export default KatilKayitOl;