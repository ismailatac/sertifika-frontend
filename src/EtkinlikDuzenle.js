import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import axios from 'axios';



const EtkinlikDuzenle = () => {
    const {etkinlik_id} = useParams();
    const {katilimci_id} = useParams();
    const [hata, setHata] = useState("");
    const [sertifikalar, setSertifikalar] = useState([]);
    const [gonderilecek, setGonderilecek] = useState({});
    const [kurum, setKurum] = useState([]);
    const [belliEtkinlik, setBelliEtkinlik] = useState({});
    const [etkinlikKurum, setetkinlikKurum] = useState([]);
    const [sertifikaimageId, setSertifikaimageId] = useState({});



    useEffect(() => {
        axios.all([
            axios.get(`http://localhost:8080/api/Sertifika/getAllSertifika`),
            axios.get(`http://localhost:8080/api/Kurum/getAllKurum`),
            axios.get(`http://localhost:8080/api/Etkinlik/getById?etkinlikId=${etkinlik_id}`),
            axios.get(`http://localhost:8080/api/EtkinlikVeKurumlar/getByKurum_User_UserId?userId=${katilimci_id}`)
        ])
            .then(response => {
                setSertifikalar(response[0].data.data);
                setKurum(response[1].data.data);
               setBelliEtkinlik(response[2].data.data);
               setetkinlikKurum(response[3].data.data);
            })
    }, []);


   
  
   


    const onFormSubmit = (event) => {
        event.preventDefault();
        setHata("");
        console.log("sertifikaid",gonderilecek.sertifikaId);
        
            axios.get(`http://localhost:8080/api/SertifikaImages/getBySertifikaId?sertifikaId=${gonderilecek.sertifikaId}`)
        
        .then( res =>{
            setSertifikaimageId(res.data.data);
        })
        console.log("iamgeid::",sertifikaimageId?.sertifikaImageId)
        const objj = { 
            etkinlikAciklama: gonderilecek.etkinlikAciklama,
            etkinlikAd: gonderilecek.etkinlikAd,
            etkinlikId: etkinlik_id,
            sertifikaImage: { sertifikaImageId:sertifikaimageId.sertifikaImageId },
            tarih: gonderilecek.tarih,
            yer: gonderilecek.yer }
        
       
        console.log("objj",objj);
        
        axios.all([
            axios.post("http://localhost:8080/api/Etkinlik/update", objj)
           
        ])
            .then((responses) => {
                alert("Etkinlik güncellendi");
                window.location.replace("http://localhost:3000/etkinlik");
            })
            .catch((error) => {
                console.log(error);
                setHata("Düzenleme işlemi başarısız ");
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
                    <input name="etkinlikAd" defaultValue={belliEtkinlik.etkinlikAd} placeholder="Etkinlik adı gir" onChange={onInputChange} />
                </div>
                <div className="field">
                    <label>Etkinlik açıklama</label>
                    <input name="etkinlikAciklama" defaultValue={belliEtkinlik.etkinlikAciklama} placeholder="Etkinlik açıklama gir" onChange={onInputChange} />
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
                    <input name="tarih" type="datetime-local" defaultValue={belliEtkinlik.tarih} placeholder="Tarih gir" onChange={onInputChange} />
                </div>
                <div className="field">
                    <label>Yer</label>
                    <input name="yer" placeholder="Yer gir" defaultValue={belliEtkinlik.yer} onChange={onInputChange} />
                </div>

                <label htmlFor="kurum">Kurum seç:</label>

                <select disabled name="kurumId" onChange={onInputChange} id="kurum">
                    {kurum.map(kr => {
                        return (
                            <option key={kr.kurumId} value={kr.kurumId} name="kurumId" >{kr?.kurumAd}</option>
                        )
                    })}
                </select>


                <button className="ui button" type="submit" onClick={onFormSubmit}>Gönder</button>
            </form>




        </React.Fragment>
    )
}
export default EtkinlikDuzenle;
