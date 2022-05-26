import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useParams } from 'react-router-dom';


const EtkinlikEkle = () => {
    const {katilimci_id} = useParams();
    const [hata, setHata] = useState("");
    const [sertifikalar, setSertifikalar] = useState([]);
    const [gonderilecek, setGonderilecek] = useState({});
    const [kurum, setKurum] = useState({});
    console.log("katilimcii",katilimci_id);
    
    
   
   
    useEffect(() => {
        axios.all([
            axios.get(`http://localhost:8080/api/Sertifika/getAllSertifika`),
            
            axios.get(`http://localhost:8080/api/Kurum/getByUser_UserId?userId=${katilimci_id}`)

        ])
            .then(response => {
                setSertifikalar(response[0].data.data);
                setKurum(response[1].data.data);
               
            })
    }, []);

   

   


    const onFormSubmit = (event) => {
        event.preventDefault();
        setHata("");
       


        

        const objj = {etkinlikAciklama:gonderilecek.etkinlikAciklama,
             etkinlikAd:gonderilecek.etkinlikAd,
             kurumId: kurum.kurumId,
             sertifikaImageId:gonderilecek.sertifikaId,
             tarih:gonderilecek.tarih,yer:gonderilecek.yer}
        
       
        console.log("objj",objj);
      
        axios.all([
            axios.post("http://localhost:8080/api/Etkinlik/add", objj)
          
        ])
        .then((responses) => {
            alert("Etkinlik eklendi");
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
                    <label>Etkinlik adı</label>
                    <input name="etkinlikAd" placeholder="Etkinlik adı gir" onChange={onInputChange} />
                </div>
                <div className="field">
                    <label>Etkinlik açıklama</label>
                    <input name="etkinlikAciklama" placeholder="Etkinlik açıklama gir" onChange={onInputChange} />
                </div>

                <label htmlFor="sertifika">Sertifika seç:</label>

                <select name="sertifikaId" onChange={onInputChange} id="sertifika">
                    {sertifikalar.map(sert => {
                        return (
                            <option key={sert.sertifikaId} value={sert.sertifikaId} name="sertifikaId" >{sert?.sertifikaAd}</option>
                        )
                    })}
                </select>
                <div className="field">
                    <label>Tarih</label>
                    <input name="tarih" type="date" placeholder="Tarih gir" onChange={onInputChange} />
                </div>
                <div className="field">
                    <label>Yer</label>
                    <input name="yer" placeholder="Yer gir" onChange={onInputChange} />
                </div>

                
                
                

                <button className="ui button" type="submit" onClick={onFormSubmit}>Gönder</button>
            </form>




        </React.Fragment>
    )
}
export default EtkinlikEkle;