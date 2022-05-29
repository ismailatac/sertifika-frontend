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
      

      { user_type == 1 &&
        <React.Fragment>

<div class="hepsi">
  <h2>Kişisel Bilgilerim</h2>
  <div class="a">
    <p>Katılımcı adı soyadı:{profil?.katilimci_ad}&nbsp; {profil?.katilimci_soyad}</p>
  </div>
  <div class="aa">
    <p>Katılımcı Öğrenim Durumu : {profil?.ogrenimdurumu}</p>
  </div>
  <div class="a">
    <p> Katılımcı Sınıfı : {profil?.sinif}</p>
  </div>
  <div class="aa">
    <p>Katılımcı Telefonu : {profil?.telefon}</p>
  </div><div class="a">
    <p> Katılımcı Üniversitesi : {profil?.universite}</p>
  </div>
  <div class="aa">
    <p>Kullanıcı email : {profil?.user?.email}</p>
  </div>
  
</div>







        {/* <h1>
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
      </h1> */}
      </React.Fragment>
      }
      { user_type == 2 &&
        <React.Fragment>

<div class="hepsi">
  <h2>Kişisel Bilgilerim</h2>
  <div class="a">
    <p> Kurum adı: {profil?.kurumAd}</p>
  </div>
  <div class="aa">
    <p>Kurum Açıklaması : {profil?.kurumAciklama}</p>
  </div>
  <div class="a">
    <p> Kurum Adresi : {profil?.adres}</p>
  </div>
  <div class="aa">
    <p>Yetkili Adı : {profil?.yetkiliAd}</p>
  </div><div class="a">
    <p>Yetkili Soyadı : {profil?.yetkiliSoyad}</p>
  </div>
  <div class="aa">
    <p>Yetkili Telefon Numarası : {profil?.yetkiliTel}</p>
  </div>
  <div class="a">
    <p>Kurum Email : {profil?.user?.email}</p>
  </div>
  
</div>



        {/* <h1>
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
      </h1> */}
      </React.Fragment>
      }







    </React.Fragment>
  )
}

export default Profil;