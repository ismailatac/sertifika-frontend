import React, { useState } from 'react'
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import axios from 'axios';
import "./etkinliklerim.css";


 const Etkinliklerim = () => {
    const [etkinliklerim, setEtkinliklerim] = useState([]);
    const { etkinlik_id } = useParams();
    const {katilimci_id} = useParams();
    const {user_type} = useParams();
  
    const [gonderilecek, setGonderilecek] = useState({});
   
    
   

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
             
            <h1>Etkinliklerim Listesi</h1>
            <table>
               
            {etkinliklerim?.map(etk => {
                return (
                    <React.Fragment>
                    <tr  key={etk?.etkinlik.etkinlikId} >
                        <a href={`http://localhost:3000/${user_type}/${katilimci_id}/anasayfa/etkinliklerim/${etk?.etkinlik.etkinlikId}`}>
                                   <p>{etk?.etkinlik.etkinlikAd}</p> 
                                    <p> {etk?.etkinlik.etkinlikAciklama}</p>
                                
                        </a>
                    </tr>
                    <br></br>
                    </React.Fragment>
                )
            })}
            </table>
            
        </React.Fragment>
    )
}
export default Etkinliklerim;