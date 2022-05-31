import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Image } from 'cloudinary-react';
import { upload } from '@testing-library/user-event/dist/upload';
import { useParams } from 'react-router-dom';

const AfisEkle = () => {
    const {user_type} = useParams();
    const {katilimci_id} = useParams();
    const [afis, setAfis] = useState("");
    const [etkinlik, setEtkinlik] = useState([]);
    const [gonderilecek, setGonderilecek] = useState({});
    const [basarilimi, setBasarilimi] = useState(false);
    const [hata, setHata] = useState("");

    const uploadImage = (files) => {
       setHata("");
        
        const formData = new FormData();
        formData.append("file",files); 
        formData.append("upload_preset","ml_default" );
        console.log("aaaa",gonderilecek.etkinlikId)
        axios.post(`http://localhost:8080/api/EtkinlikImages/upload?etkinlikId=${gonderilecek.etkinlikId}`,
        formData).then(res =>{
            setBasarilimi(true);
            //window.location.replace(`http://localhost:3000/${user_type}/${katilimci_id}/anasayfa/etkinlik`)
        })
        .catch(error =>{
            setBasarilimi(false);
            setHata(error.response.data.message);
        })
      
    }
    
    useEffect(() => {

        axios.all([
            axios.get(`http://localhost:8080/api/EtkinlikVeKurumlar/getByKurum_User_UserId?userId=${katilimci_id}`),
        ])
            .then(res => {
                setEtkinlik(res[0].data.data);
            })
    })


    const onInputChange2 = (event) => {
        console.log("xx",gonderilecek);
        setGonderilecek({ ...gonderilecek, [event.target.name]: event.target.value });
    }
    
    // const submitt = (event) =>{
    //     event.preventDefault();
    //     const fd = new FormData();
        
        
    // }

    // const onFormSubmit = (event) => {
    //     event.preventDefault();


    //     const fd = new FormData();

    //     fd.append('file', afis.name,afis);

    //     let etid = gonderilecek.etkinlikId * 1;
    //     const obj = {file: fd, etkinlikId: etid };
    //     console.log("obje",obj,fd);
    //     const config = {
    //         headers: {
    //             'content-type': 'multipart/form-data'
    //         }
    //     }
    //     axios.post(`http://localhost:8080/api/EtkinlikImages/upload?etkinlikId=${etkinlik.etkinlikId}`, )
    //         .then(res => {
    //             console.log(res)
    //         });




    // };

    

    return (
        <React.Fragment>
            <h1>Etkinliğe Afiş Ekle</h1>
            {hata && <p style={{color:"red"}}>{hata}</p>}
           {basarilimi && <div style={{color:"green"}}><p>Yükleme İşlemi Başarılı</p><p>Yükleme işlemi başarıyla tamamlandı.</p></div>}
            <form encType="multipart/form-data">
                <select name="etkinlikId" onChange={onInputChange2} id="etkinlik">
                    {etkinlik.map(etk => {
                       
                        return (
                            <option key={etk?.etkinlik?.etkinlikId} value={etk.etkinlik.etkinlikId} name="etkinlikId"  >{etk?.etkinlik.etkinlikAd}</option>
                        )
                    })}
                </select>
                <br></br>
                <br></br>
                <input type="file" name="afis_resmi" onChange={(event)=>{
                 
                    uploadImage(event.target.files[0]);
                    
                    
                }} />
                
            </form>


        </React.Fragment>
    )
}
export default AfisEkle;