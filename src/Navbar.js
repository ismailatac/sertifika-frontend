import React from 'react'


const Navbar = (props) => {
    const id = props.id;
    const user_type = props.user_type;
    return (
        <React.Fragment>
            <h1>Sertifika sitesi</h1>
             <div className="ui menu">
                <a className="item" href={`http://localhost:3000/${user_type}/${id}/anasayfa/etkinlik`}>Etkinlikler</a>
                {user_type ==1 && <React.Fragment><a className="item" href={`http://localhost:3000/${user_type}/${id}/anasayfa/sertifika`}>Sertifikalarım</a>
                </React.Fragment>}
               {user_type ==2 && <React.Fragment>  <a className="item" href={`http://localhost:3000/${user_type}/${id}/anasayfa/krmain/etkinlikekle`}>Etkinlik ekle</a>
               <a className="item" href={`http://localhost:3000/${user_type}/${id}/anasayfa/etkinliklerim`}>Etkinliklerim</a>
                 <a className="item" href={`http://localhost:3000/${user_type}/${id}/anasayfa/krmain/sertifikaekle`}>Sertifika ekle</a>
                <a className="item" href={`http://localhost:3000/${user_type}/${id}/anasayfa/afisekle`}>Afiş Ekle</a>
                <a className="item" href={`http://localhost:3000/${user_type}/${id}/anasayfa/kurumekle`}>Kurum Ekle</a> 
                <a className="item" href={`http://localhost:3000/${user_type}/${id}/anasayfa/etkkurum`}>Etkinliğe Kurum Ekle</a> 
                <a className="item" href={`http://localhost:3000/${user_type}/${id}/anasayfa/etkkonusmaci`}> Etkinliğe Konuşmacı Ekle</a> 
                </React.Fragment>}
                <a className="item" href={`http://localhost:3000/${user_type}/${id}/anasayfa/profil`}> Profil</a> 
                <a className="item" href={`http://localhost:3000/`}> Çıkış Yap</a> 
            </div>





        </React.Fragment>
    )
}
export default Navbar;