import React from 'react'

const Navbar = () => {
    const kurum = 1;
    return (
        <React.Fragment>
            <div className="ui menu">
                <a className="item" href='http://localhost:3000/etkinlik'>Etkinlikler</a>
                <a className="item" href='http://localhost:3000/sertifika'>Sertifikalarım</a>
                { kurum === 1 && <a className="item" href='http://localhost:3000/krmain/etkinlikekle'>Etkinlik ekle</a>}
                { kurum === 1 && <a className="item" href='http://localhost:3000/krmain/sertifikaekle'>Sertifika ekle</a>}
                <a className="item" href='http://localhost:3000/afisekle'>Afiş Ekle</a>
            </div>





        </React.Fragment>
    )
}
export default Navbar;