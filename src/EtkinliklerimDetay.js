import React,{useEffect} from 'react'
import { useParams } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';
import EtkinlikSil from './EtkinlikSil';
import { Image } from 'cloudinary-react';



 const EtkinliklerimDetay = () => {

    const { etkinlik_id } = useParams();
    const {katilimci_id} = useParams();
    const {user_type} = useParams();
    const [detay, setDetay] = useState({});
    const [katilimci, setKatilimci] = useState({});
    
    const [gonderilecek, setGonderilecek] = useState({});
    const [hata, setHata] = useState("");
    const [konusmaci,setKonusmaci] = useState([]);
    const [kurum, setKurum] = useState([]);
    const [afis,setAfis] = useState({});
   

    const obj = {etkinlik:{etkinlikId:etkinlik_id},katilimci:{katilimciId:katilimci_id}}


    useEffect(() => {

        axios.all([
            axios.get(`http://localhost:8080/api/Etkinlik/getById?etkinlikId=${etkinlik_id}`),
            axios.get(`http://localhost:8080/api/Katilimci/getById?katilimciId=${katilimci_id}`),
            axios.get(`http://localhost:8080/api/EtkinlikVeKonusmacilar/getByEtkinlikId?etkinlikId=${etkinlik_id}`),
            axios.get(`http://localhost:8080/api/EtkinlikVeKurumlar/getByEtkinlikId?etkinlikId=${etkinlik_id}`),
            axios.get(`http://localhost:8080/api/EtkinlikImages/getByEtkinlikId?etkinlikId=${etkinlik_id}`),
        ])
            .then((responses) => {
                setDetay(responses[0].data.data);
                setKatilimci(responses[1].data.data);
                setKonusmaci(responses[2].data.data);
                setKurum(responses[3].data.data);
                setAfis(responses[4].data.data);
            })
    }, []);


    const onInputChange = (event) => {
        setGonderilecek({ ...gonderilecek, [event.target.name]: event.target.value });
    }

    

    const onFormSubmit = (event) => {
        event.preventDefault();
        setHata("");
        console.log("objj",obj);
        axios.post("http://localhost:8080/api/EtkinlikVeKatilimcilar/add", obj )
            .then((response) => {
                
                setTimeout(() => { console.log("katılma işlemi başarılı"); }, 5000);
               window.location.replace("http://localhost:3000/:katilimci_id/etkinlik");
            })
            .catch((error) => {
                console.log(error);
                setHata("Katılma işlemi başarısız ");
            });
        };

    

  return (
    <React.Fragment>
            
                <div className="ui grid">

                   {hata && <div className="ui warning message">
                        <div className="header">Hata
                        </div>
                        <p>{hata}</p>
                        </div>}
                   <a class="btn btn-primary" href={`http://localhost:3000/${user_type}/${katilimci_id}/anasayfa/etkinlik/${etkinlik_id}/duzenle`}>Düzenle</a>
                    <EtkinlikSil etkinlik_id={etkinlik_id} katilimci_id={katilimci_id}  />
                    <header></header>
                    <div>
                        <div className="four wide column">
                            <Image style={{width:"500px",height:"500px"} } cloudName="dp6gr7men" publicId={afis.afis_resmi} />
                        </div>
                        <div className="nine wide column">
                            <h1>Etkinlik Adı:</h1>
                            <p> {detay.etkinlikAd} </p>
                            <h1>Etkinlik Açıklaması:</h1>
                            <p> {detay.etkinlikAciklama} </p>
                            <h1>Etkinlik Tarihi:</h1>
                            <p>{detay.tarih}</p>
                            <h1>Etkinlik Yeri:</h1>
                            <p> {detay.yer} </p>
                            <h1 >Konuşmacılar:</h1>
                           {konusmaci?.map(konus => {
                               return(<React.Fragment>
                               
                                <p key={konus?.konusmaci.konusmaciId}> {konus?.konusmaci.konusmaciAd} {konus?.konusmaci.konusmaciSoyad} </p>
                                </React.Fragment>
                               )
                           })
                          }
                          <h1 >Kurumlar:</h1>
                          {kurum?.map( krm => {
                               return(<React.Fragment>
                               
                                <p key={krm?.kurum.kurumId}> {krm?.kurum.yetkiliAd} {krm?.kurum.yetkiliSoyad} &nbsp;  {krm?.kurum.kurumAd} </p>
                                </React.Fragment>
                               )
                           })
                          }

                        </div>
                    </div>

                  
                </div>
                


           
        </React.Fragment>
  )
}
export default EtkinliklerimDetay;