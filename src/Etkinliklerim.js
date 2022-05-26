import React, { useState } from 'react'
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import axios from 'axios';


 const Etkinliklerim = () => {
    const [etkinliklerim, setEtkinliklerim] = useState([]);
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
            axios.get(`http://localhost:8080/api/EtkinlikVeKurumlar/getByKurum_User_UserId?userId=${katilimci_id}`),
           
        ])
            .then((responses) => {
                setEtkinliklerim(responses[0].data.data);
            
                
            })
    }, []);


    const onInputChange = (event) => {
        setGonderilecek({ ...gonderilecek, [event.target.name]: event.target.value });
    }


    return (
        <React.Fragment>
             
            <h1>Etkinlik Listesi</h1>

            {etkinliklerim?.map(etk => {
                return (

                    <div className="ui relaxed divided list" key={etk?.etkinlik.etkinlikId} >
                        <a href={`http://localhost:3000/${user_type}/${katilimci_id}/anasayfa/etkinliklerim/${etk?.etkinlik.etkinlikId}`}>
                            <div className="item" >
                                <i className="angle double right icon"></i>
                                <div className="content">
                                    Etkinlik adı {etk?.etkinlik.etkinlikAd}
                                    <div className="description"> Ekinlik açıklama {etk?.etkinlik.etkinlikAciklama}</div>
                                </div>
                            </div>
                        </a>
                    </div>

                )
            })}
            
        </React.Fragment>
    )
}
export default Etkinliklerim;