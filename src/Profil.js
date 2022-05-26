import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

const Profil = () => {
  const { katilimci_id } = useParams();
  const { user_type } = useParams();
  const [profil, setProfil] = useState([]);
  useEffect(() => {
    if (user_type == 1) {
      axios.all([
        axios.get(`http://localhost:8080/api/Katilimci/getByUser_UserId?userId=${katilimci_id}`)
      ])
        .then(res => {
          setProfil(res[0].data.data);
        })
    }
    if (user_type == 2) {
      axios.all([
        axios.get(`http://localhost:8080/api/Kurum/getByUser_UserId?userId=${katilimci_id}`)
      ])
        .then(res => {
          setProfil(res[0].data.data);
        })
    }

  })





  return (
    <React.Fragment>
      <img src="/" className="ui small image" alt='Profil Fotosu' />

      { user_type == 1 &&
        <React.Fragment>
        <h1>
        Kullanıcı adı soyadı : {profil?.katilimci_ad}&nbsp; {profil?.katilimci_soyad}
      </h1>
      <h1>
        Kullanıcı Öğrenim Durumu : {profil?.ogrenimdurumu}
      </h1>
      <h1>
        Kullanıcı Sınıfı : {profil?.sinif}
      </h1>
      <h1>
        Kullanıcı Telefonu : {profil?.telefon}
      </h1>
      <h1>
        Kullanıcı Üniversitesi : {profil?.universite}
      </h1>
      <h1>
        Kullanıcı email : {profil?.user?.email}
      </h1>
      </React.Fragment>
      }
      { user_type == 2 &&
        <React.Fragment>
        <h1>
        Kurum adı: {profil?.kurumAd}
      </h1>
      <h1>
        Kurum Açıklaması : {profil?.kurumAciklama}
      </h1>
      <h1>
        Kurum Adresi : {profil?.adres}
      </h1>
      <h1>
        Yetkili Adı : {profil?.yetkiliAd}
      </h1>
      <h1>
      Yetkili Soyadı : {profil?.yetkiliSoyad}
      </h1>
      <h1>
       Yetkili Telefon Numarası : {profil?.yetkiliTel}
      </h1>
      <h1>
       Kurum Email : {profil?.user?.email}
      </h1>
      </React.Fragment>
      }







    </React.Fragment>
  )
}

export default Profil;