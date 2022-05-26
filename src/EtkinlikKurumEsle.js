import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

const EtkinlikKurumEsle = () => {
    const {user_type} = useParams();
    const {katilimci_id} = useParams();
    const [kurum, setKurum] = useState([]);
    const [etkinlik, setEtkinlik] = useState([]);
    const [yeniet, setYeniet] = useState(0);
    const [yenikr, setYenikr] = useState(0);
    const [hata,setHata] = useState("");

    useEffect(() => {
        axios.all([
            axios.get(`http://localhost:8080/api/EtkinlikVeKurumlar/getByKurum_User_UserId?userId=${katilimci_id}`),
            axios.get(`http://localhost:8080/api/Kurum/getAllKurum`),


        ])
            .then(response => {
                setEtkinlik(response[0].data.data);
                setKurum(response[1].data.data);

            })
    }, []);

    const onFormSubmit = (event) => {
        event.preventDefault();
        setHata("");
       


        

        const objj = {etkinlik:{etkinlikId:yeniet}, kurum:{kurumId:yenikr}}
        
        console.log("etkinlik konusmaci:",objj);
        axios.all([
            axios.post("http://localhost:8080/api/EtkinlikVeKurumlar/add", objj),
            
        ])
        .then((responses) => {
            alert("EtkUrum eklendi");
            window.location.replace(`/${user_type}/${katilimci_id}/anasayfa/etkinlik`);
         })
         .catch((error) => {
                console.log(error);
                
                setHata(error.message);
            });
    };
    

    return (
        <React.Fragment>
            {hata && <p>{hata}</p>}
            <form className="ui form">

                <label htmlFor="etkinlik">Etkinlik seç:</label>

                <select name="etkinlikId" id="etkinlik" onChange={(e) => { setYeniet(e.target.value) }}>
                    {etkinlik?.map(etk => {
                        return (
                            <option value={etk.etkinlik.etkinlikId}  >{etk?.etkinlik.etkinlikAd}</option>
                        )
                    })}
                </select>

                <label htmlFor="kurum">Kurum seç:</label>

                <select name="kurumId" onChange={(e) => { setYenikr(e.target.value) }} id="kurum">
                    {kurum?.map(kr => {
                        return (
                            <option value={kurum.kurumId}  >{kr?.kurumAd}</option>
                        )
                    })}
                </select>
                <button onClick={onFormSubmit}> Gönder</button>
            </form>
        </React.Fragment>
    )
}
export default EtkinlikKurumEsle;