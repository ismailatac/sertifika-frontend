import React from 'react'
import "./navbar.css";
import icon from "./cikisyapicon.png"


const Navbar = (props) => {
    const id = props.id;
    const user_type = props.user_type;
    return (
        <React.Fragment>
            <h1>WebCert</h1>
            <div className="topnav">
            <a href={`http://localhost:3000/${user_type}/${id}/anasayfa/etkinlik`}>Etkinlikler</a>
                {user_type == 1 && <React.Fragment><a href={`http://localhost:3000/${user_type}/${id}/anasayfa/sertifika`}>Sertifikalarım</a>
                </React.Fragment>}
                {user_type == 2 && <React.Fragment>  <a href={`http://localhost:3000/${user_type}/${id}/anasayfa/krmain/etkinlikekle`}>Etkinlik ekle</a>
                    <a href={`http://localhost:3000/${user_type}/${id}/anasayfa/etkinliklerim`}>Etkinliklerim</a>
                    <a href={`http://localhost:3000/${user_type}/${id}/anasayfa/krmain/sertifikaekle`}>Sertifika ekle</a>
                    <a href={`http://localhost:3000/${user_type}/${id}/anasayfa/afisekle`}>Afiş Ekle</a>
                    
                    <a href={`http://localhost:3000/${user_type}/${id}/anasayfa/etkkurum`}>Etkinliğe Kurum Ekle</a>
                    <a href={`http://localhost:3000/${user_type}/${id}/anasayfa/etkkonusmaci`}> Etkinliğe Konuşmacı Ekle</a>
                </React.Fragment>}
                <a href={`http://localhost:3000/${user_type}/${id}/anasayfa/profil`}> Profil</a>
                <a href={`http://localhost:3000/`}><img style={{width:"15px",height:"15px" }} src={icon}/> Çıkış Yap</a>
            </div>








            
            {/* <div classNameName="ui menu">
                <a href={`http://localhost:3000/${user_type}/${id}/anasayfa/etkinlik`}>Etkinlikler</a>
                {user_type == 1 && <React.Fragment><a href={`http://localhost:3000/${user_type}/${id}/anasayfa/sertifika`}>Sertifikalarım</a>
                </React.Fragment>}
                {user_type == 2 && <React.Fragment>  <a href={`http://localhost:3000/${user_type}/${id}/anasayfa/krmain/etkinlikekle`}>Etkinlik ekle</a>
                    <a href={`http://localhost:3000/${user_type}/${id}/anasayfa/etkinliklerim`}>Etkinliklerim</a>
                    <a href={`http://localhost:3000/${user_type}/${id}/anasayfa/krmain/sertifikaekle`}>Sertifika ekle</a>
                    <a href={`http://localhost:3000/${user_type}/${id}/anasayfa/afisekle`}>Afiş Ekle</a>
                    <a href={`http://localhost:3000/${user_type}/${id}/anasayfa/kurumekle`}>Kurum Ekle</a>
                    <a href={`http://localhost:3000/${user_type}/${id}/anasayfa/etkkurum`}>Etkinliğe Kurum Ekle</a>
                    <a href={`http://localhost:3000/${user_type}/${id}/anasayfa/etkkonusmaci`}> Etkinliğe Konuşmacı Ekle</a>
                </React.Fragment>}
                <a href={`http://localhost:3000/${user_type}/${id}/anasayfa/profil`}> Profil</a>
                <a href={`http://localhost:3000/`}> Çıkış Yap</a>
            </div> */}





        </React.Fragment>
    )
}
export default Navbar;