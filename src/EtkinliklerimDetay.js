import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';
import EtkinlikSil from './EtkinlikSil';
import { Image } from 'cloudinary-react';



const EtkinliklerimDetay = () => {

    const { etkinlik_id } = useParams();
    const { katilimci_id } = useParams();
    const { user_type } = useParams();
    const [detay, setDetay] = useState({});
    const [katilimci, setKatilimci] = useState({});

    const [gonderilecek, setGonderilecek] = useState({});
    const [hata, setHata] = useState("");
    const [konusmaci, setKonusmaci] = useState([]);
    const [kurum, setKurum] = useState([]);
    const [afis, setAfis] = useState({});


    const obj = { etkinlik: { etkinlikId: etkinlik_id }, katilimci: { katilimciId: katilimci_id } }


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
        console.log("objj", obj);
        axios.post("http://localhost:8080/api/EtkinlikVeKatilimcilar/add", obj)
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
            
            <div class="hepsi">
                
                <h2>{detay.etkinlikAd}</h2>
                <p>{detay.etkinlikAciklama}</p>
                <div>
                <Image style={{ width: "500px", height: "500px" }} cloudName="dp6gr7men" publicId={afis.afisImage} />
                </div>
                <div class="a">
                <h1>Tarihi</h1>
                    <p>{detay.tarih}</p>
                </div>
                <div class="aa">
                <h1>Yeri</h1>
                    <p>{detay.yer}</p>
                </div>
                <div class="a">
                    <h1>Konuşmacılar</h1>
                    <p>{konusmaci?.map(konus => {
                        return (<React.Fragment key={konus?.konusmaci.konusmaciId}>

                            <p > {konus?.konusmaci.konusmaciAd} {konus?.konusmaci.konusmaciSoyad} </p>
                        </React.Fragment>
                        )
                    })
                    }</p>
                </div>
                <div class="aa">
                <h1>Kurumlar</h1>
                    <p>{kurum?.map(krm => {
                        return (<React.Fragment key={krm?.kurum.kurumId}>

                            <p > {krm?.kurum.yetkiliAd} {krm?.kurum.yetkiliSoyad} &nbsp;  {krm?.kurum.kurumAd} </p>
                        </React.Fragment>
                        )
                    })
                    }</p>
                   
                </div>
                <br></br>
                <EtkinlikSil etkinlik_id={etkinlik_id} katilimci_id={katilimci_id} />
                    



            </div>
















            {/* <div className="ui grid">

                {hata && <div className="ui warning message">
                    <div className="header">Hata
                    </div>
                    <p>{hata}</p>
                </div>}


                <header></header>
                <div>
                    <div className="four wide column">
                        <Image style={{ width: "500px", height: "500px" }} cloudName="dp6gr7men" publicId={afis.afis_resmi} />
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
                            return (<React.Fragment key={konus?.konusmaci.konusmaciId}>

                                <p > {konus?.konusmaci.konusmaciAd} {konus?.konusmaci.konusmaciSoyad} </p>
                            </React.Fragment>
                            )
                        })
                        }
                        <h1 >Kurumlar:</h1>
                        {kurum?.map(krm => {
                            return (<React.Fragment key={krm?.kurum.kurumId}>

                                <p > {krm?.kurum.yetkiliAd} {krm?.kurum.yetkiliSoyad} &nbsp;  {krm?.kurum.kurumAd} </p>
                            </React.Fragment>
                            )
                        })
                        }

                    </div>
                    <EtkinlikSil etkinlik_id={etkinlik_id} katilimci_id={katilimci_id} />
                </div>


            </div>

 */}


        </React.Fragment>
    )
}
export default EtkinliklerimDetay;