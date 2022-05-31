import React, { useState } from 'react'
import axios from 'axios';
import "./katilkayitol.css"

const KatilKayitOl = () => {

    const [gonderilecek, setGonderilecek] = useState({});
    const [hata, setHata] = useState("");



    const onFormSubmit = (event) => {
        event.preventDefault();
        setHata("");
        const objj = {
            katilimci_ad: gonderilecek.katilimci_ad, katilimci_soyad: gonderilecek.katilimci_soyad, ogrenimdurumu: gonderilecek.ogrenimdurumu,
            universite: gonderilecek.universite, bolum: gonderilecek.bolum, sinif: gonderilecek.sinif, telefon: gonderilecek.telefon, email: gonderilecek.email, password: gonderilecek.password
        }

       

        axios.post("http://localhost:8080/api/Katilimci/add", objj)


            .then((responses) => {
                alert("Katılımcı eklendi");
                window.location.replace("http://localhost:3000/");
            })
            .catch((error) => {
                
                setHata(error.response.data.message);
            });
    };


    const onInputChange = (event) => {
        setGonderilecek({ ...gonderilecek, [event.target.name]: event.target.value });

    }
    return (
        <React.Fragment>
            <h3>Katılımcı Kayıt Formu</h3>
            <div>
                
                <form >
                    <label htmlFor="katilimci_ad">Katılımcı adı</label>
                    <input type="text" id="katilimci_ad"  name="katilimci_ad" placeholder="Katılımcı adını giriniz..." onChange={onInputChange} required />
                
                    <label htmlFor="katilimci_soyad">Katılımcı soyadı</label>
                    <input type="text" id="katilimci_soyad" required name="katilimci_soyad" placeholder="Katılımcının soyadını giriniz..." onChange={onInputChange} />

                    <label htmlFor="ogrenimdurumu">Öğrenim Durumu</label>
                    <input type="text" id="ogrenimdurumu" required name="ogrenimdurumu" placeholder="Katılımcının öğrenim durumunu giriniz..." onChange={onInputChange} />

                    <label htmlFor="universite">Üniversitesi</label>
                    <input type="text" id="universite" required name="universite" placeholder="Katılımcının üniversitesini giriniz..." onChange={onInputChange} />

                    <label htmlFor="bolum">Bölümü</label>
                    <input type="text" id="bolum" required name="bolum" placeholder="Katılımcının bölümünü giriniz..." onChange={onInputChange} />

                    <label htmlFor="sinif">Sınıfı</label>
                    <input type="text" id="sinif" required name="sinif" placeholder="Katılımcının sınıfını giriniz..." onChange={onInputChange} />

                    <label htmlFor="telefon">Telefon numarası</label>
                    <input type="tel" id="telefon" required name="telefon" placeholder="Katılımcının telefon numarasını giriniz..." onChange={onInputChange} />

                    <label htmlFor="email">E-postası</label>
                    <input type="email" id="email" required name="email" placeholder="Katılımcının e-posta adresini giriniz..." onChange={onInputChange} />

                    <label htmlFor="password">Şifresi</label>
                    <input type="password" id="password" required name="password" placeholder="Şifre belirleyiniz..." onChange={onInputChange} />
                    {hata && <h4 style={{color:"white", backgroundColor:"red" }}>{hata}</h4>}
                    <input type="submit" onClick={onFormSubmit} id='buton' value="Kayıt Ol" />
                </form>
            </div>










            {/* <form className="ui form">
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
            </form> */}
        </React.Fragment>
    )
}
export default KatilKayitOl;