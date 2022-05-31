import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

const EtkinlikKonusmaciEsle = () => {
    const {user_type} = useParams();
    const {katilimci_id} = useParams();
    const [yeniet, setYeniet] = useState(0);
    const [yenikr, setYenikr] = useState(0);
    const [konusmaci, setKonusmaci] = useState([]);
    const [etkinlik, setEtkinlik] = useState([]);
    const [hata,setHata] = useState("");
    const [basarilimi, setBasarilimi] = useState(false);

    // const onInputChange = (event) => {
    //     console.log(gonderilecek);
    //     setGonderilecek({ ...gonderilecek, [event.target.name]: event.target.value });
    // }

    useEffect(() => {
       
            axios.get(`http://localhost:8080/api/EtkinlikVeKurumlar/getByKurum_User_UserId?userId=${katilimci_id}`)
            .then(res =>{
                setEtkinlik(res.data.data);
            });
            axios.get(`http://localhost:8080/api/Konusmaci/getAllKonusmaci`)
            .then(res1 => {
                setKonusmaci(res1.data.data);
            });
    },[true])
    
    const onFormSubmit = (event) => {
        event.preventDefault();
        setHata("");
        console.log(yenikr,yeniet)
        const objj3 = {etkinlik:{etkinlikId:yeniet}, konusmaci: {konusmaciId:yenikr } }

        console.log("etkinlik konusmaci:", objj3);
        axios.all([
            axios.post(`http://localhost:8080/api/EtkinlikVeKonusmacilar/add`, objj3),
        ])
            .then((responses) => {
                setBasarilimi(true);
            //window.location.replace(`/${user_type}/${katilimci_id}/anasayfa/etkinlik`);
            })
            .catch((error) => {
                console.log(error);
                setHata(error.response.data.message);
            });
    };



    return (
        <React.Fragment>
            <br></br>
            {hata && <p style={{backgroundColor:"red",color:"white"}}>{hata}</p>}
           {basarilimi && <div style={{color:"green"}}><p style={{backgroundColor:"green", color:"white"}}>İşlem Başarılı</p><p>Eşleştirme işlemi başarıyla tamamlandı.</p></div>}
            <form>
                <label key={etkinlik?.etkinlikKurumId}  htmlFor="etkinlikId">Etkinlik seç:</label>

                <select name="etkinlikId" id="etkinlik" onChange={(e) => { setYeniet(e.target.value) }}>
                    {etkinlik?.map(etk => {
                        return (
                            <option value={etk.etkinlik.etkinlikId} >{etk?.etkinlik.etkinlikAd}</option>
                        )
                    })}
                </select>
                <br></br>





                <label key={konusmaci.konusmaciId} htmlFor="konusmaci">Konuşmacı seç:</label>

                <select name="konusmaciId" id="konusmaci" onChange={(e) => { setYenikr(e.target.value) }}>
                    {konusmaci?.map(kn => {
                        return (
                            <option value={kn.konusmaciId}>{kn?.konusmaciAd}&nbsp;{kn?.konusmaciSoyad}</option>
                        )
                    })}
                </select>
                <br></br>
                <button type="submit" onClick={onFormSubmit}>Gönder</button>
            </form>




        </React.Fragment>
    )
}
export default EtkinlikKonusmaciEsle;
