import React,{useState, useEffect} from 'react'
import axios from 'axios';
import { useParams } from 'react-router-dom';

const SertifikaResimEsle = () => {
    const {user_type} = useParams();
    const {katilimci_id} = useParams();
    const [afis, setAfis] = useState("");
    const [sertifika, setSertifika] = useState([]);
    const [gonderilecek, setGonderilecek] = useState({});
    const [basarilimi, setBasarilimi] = useState(false);
    const [hata, setHata] = useState("");

    const uploadImage = (files) => {
       setHata("");
        
        const formData = new FormData();
        formData.append("file",files); 
        formData.append("upload_preset","ml_default" );
        
        axios.post(`http://localhost:8080/api/SertifikaImages/upload?sertifikaId=${gonderilecek.sertifikaId}`,
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
            axios.get(`http://localhost:8080/api/Sertifika/getAllSertifika`),
        ])
            .then(res => {
                setSertifika(res[0].data.data);
            })
    })


    const onInputChange2 = (event) => {
        setGonderilecek({ ...gonderilecek, [event.target.name]: event.target.value });
    }
    return (
        <React.Fragment>
            <h1>Etkinliğe Afiş Ekle</h1>
            {hata && <p style={{ color: "red" }}>{hata}</p>}
            {basarilimi && <div style={{ color: "green" }}><p>Yükleme İşlemi Başarılı</p><p>Yükleme işlemi başarıyla tamamlandı.</p></div>}
            <form encType="multipart/form-data">
                <select name="sertifikaId" onChange={onInputChange2} id="sertifika">
                    {sertifika.map(srt => {
                        return (
                            <option key={srt.sertifikaId} value={srt.sertifikaId} name="sertifikaId" >{srt?.sertifikaAd}</option>
                        )
                    })}
                </select>
                <br></br>
                <br></br>
                <input type="file" name="sertifika_resmi" onChange={(event) => {

                    uploadImage(event.target.files[0]);


                }} />

            </form>


        </React.Fragment>
    )
}
export default SertifikaResimEsle;
