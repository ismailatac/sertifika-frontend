import axios from 'axios';
import React, { useEffect, useState } from 'react'

const AfisEkle = () => {
    const [afis, setAfis] = useState("");
    const [etkinlik, setEtkinlik] = useState([]);
    const [gonderilecek, setGonderilecek] = useState({});

    const fileSelectedHandler = (event) => {

        setAfis(event.target.files[0]);

    }
   
    useEffect(() => {

        axios.all([
            axios.get(`http://localhost:8080/api/Etkinlik/getAllEtkinlik`),
        ])
            .then(res => {
                setEtkinlik(res[0].data.data);
            })
    })


    const onInputChange2 = (event) => {
        setGonderilecek({ ...gonderilecek, [event.target.name]: event.target.value });
    }
    
    const fileUploadHandler = (event) =>{
        event.preventDefault();
        const fd = new FormData();
        const blob = new Blob(afis, {type : 'image/jpeg'});
        console.log(afis);
        fd.append("image",afis);
        const etkk = gonderilecek.etkinlikId * 1;
       
        axios.post(`http://localhost:8080/api/EtkinlikImages/upload?etkinlikId=${etkk}`,etkk,fd)
        .then( res =>{
            console.log(res);
        })
        .catch(error =>{
            console.log(error);
        })
    }

    const onFormSubmit = (event) => {
        event.preventDefault();


        const fd = new FormData();

        fd.append('file', afis.name,afis);

        let etid = gonderilecek.etkinlikId * 1;
        const obj = {file: fd, etkinlikId: etid };
        console.log("obje",obj,fd);
        const config = {
            headers: {
                'content-type': 'multipart/form-data'
            }
        }
        axios.post(`http://localhost:8080/api/EtkinlikImages/upload?etkinlikId=${etkinlik.etkinlikId}`, )
            .then(res => {
                console.log(res)
            });




    };



    return (
        <React.Fragment>
            <h1>Etkinliğe Afiş Ekle</h1>
            <form encType="multipart/form-data">
                <select name="etkinlikId" onChange={onInputChange2} id="etkinlik">
                    {etkinlik.map(etk => {
                        return (
                            <option key={etk.etkinlikId} value={etk.etkinlikId} name="etkinlikId" >{etk?.etkinlikAd}</option>
                        )
                    })}
                </select>
                <br></br>
                <br></br>
                <input type="file" name="afis_resmi" onChange={fileSelectedHandler} />
                <button type="submit" onClick={fileUploadHandler} >Gönder</button>
            </form>


        </React.Fragment>
    )
}
export default AfisEkle;