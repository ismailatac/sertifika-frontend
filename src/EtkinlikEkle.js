import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useParams } from 'react-router-dom';
import "./etkinlikekle.css"


const EtkinlikEkle = () => {
    const { katilimci_id } = useParams();
    const {user_type } = useParams();
    const [hata, setHata] = useState("");
    const [sertifikalar, setSertifikalar] = useState([]);
    const [gonderilecek, setGonderilecek] = useState({});
    const [kurum, setKurum] = useState({});
    console.log("katilimcii", katilimci_id);




    useEffect(() => {
        axios.all([
            axios.get(`http://localhost:8080/api/Sertifika/getAllSertifika`),

            axios.get(`http://localhost:8080/api/Kurum/getByUser_UserId?userId=${katilimci_id}`)

        ])
            .then(response => {
                setSertifikalar(response[0].data.data);
                setKurum(response[1].data.data);

            })
    }, []);






    const onFormSubmit = (event) => {
        event.preventDefault();
        setHata("");

        const objj = {
            etkinlikAciklama: gonderilecek.etkinlikAciklama,
            etkinlikAd: gonderilecek.etkinlikAd,
            kurumId: kurum.kurumId,
            sertifikaImageId: parseInt(gonderilecek.sertifikaId),
            tarih: gonderilecek.tarih, yer: gonderilecek.yer
        }


        

        axios.all([
            axios.post("http://localhost:8080/api/Etkinlik/add", objj)

        ])
            .then((responses) => {
                alert("Etkinlik eklendi");
                window.location.replace(`http://localhost:3000/${user_type}/${katilimci_id}/anasayfa/etkinlik`);
            })
            .catch((error) => {
                console.log(error);

                setHata(error.response.data.message);
            });
    };


    const onInputChange = (event) => {
        setGonderilecek({ ...gonderilecek, [event.target.name]: event.target.value });
    }




    return (
        <React.Fragment>









            
            <div>
            {hata && <h4 style={{color:"white", backgroundColor:"red" }}>{hata}</h4>}
                <form>
                    <h4>Etkinlik eklemek için öncelikle bir sertifika oluşturup, oluşturduğunuz sertifikaya da bir resim eklemelisiniz. Daha sonra o sertifikayı seçerek
                        etkinliğinizi oluşturabilirsiniz. Etkinliği oluşturduktan sonra afiş eklemelisiniz.
                    </h4>
                    <div>
                        <label>Etkinlik adı</label>
                        <input required name="etkinlikAd" placeholder="Etkinlik adını giriniz..." onChange={onInputChange} />
                    </div>
                    <div>
                        <label>Etkinlik açıklama</label>
                        <input required name="etkinlikAciklama" placeholder="Etkinlik açıklama gir" onChange={onInputChange} />
                    </div>

                    <label htmlFor="sertifika">Sertifika seç:</label>

                    <select name="sertifikaId" onChange={onInputChange} id="sertifika">
                        {sertifikalar.map(sert => {
                            return (
                                <option key={sert.sertifikaId} value={sert.sertifikaId} name="sertifikaId" >{sert?.sertifikaAd}</option>
                            )
                        })}
                    </select>
                    <div >
                        <label>Tarih</label>
                        <input required name="tarih" type="date" placeholder="Tarih gir" onChange={onInputChange} />
                    </div>
                    <div >
                        <label>Yer</label>
                        <input required name="yer" placeholder="Yer gir" onChange={onInputChange} />
                    </div>





                    <button type="submit" onClick={onFormSubmit}>Gönder</button>
                </form>
            </div>




        </React.Fragment>
    )
}
export default EtkinlikEkle;