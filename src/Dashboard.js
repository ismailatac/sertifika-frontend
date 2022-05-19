import React from 'react'
import { BrowserRouter as Router,Route } from 'react-router-dom'
import Anasayfa from './Anasayfa'
import EtkinlikDetay from './EtkinlikDetay'
import EtkinlikList from './EtkinlikList'
import Navbar from './Navbar'
import Sertifika from './Sertifika'
import EtkinlikEkle from './EtkinlikEkle'
import Login from './Login'
import SertifikaEkle from './SertifikaEkle'
import AfisEkle from './AfisEkle'

const Dashboard = () => {
    return (
        <React.Fragment>
            <Navbar/>
            <Router>
                <div className="main_wrapper">
                    <header></header>
                    <div className="ui raised very padded text container segment">
                       
                        
                        <Route exact path="/etkinlik" component={EtkinlikList} />
                        <Route exact path="/sertifika" component={Sertifika} />
                        <Route exact path="/etkinlik/:etkinlik_id" component={EtkinlikDetay} />
                        <Route exact path="/krmain/etkinlikekle" component={EtkinlikEkle} />
                        <Route exact path="/krmain/sertifikaekle" component={SertifikaEkle} />
                        <Route exact path="/afisekle" component={AfisEkle} />
                        
                        





                    </div>

                </div>
            </Router>





        </React.Fragment>
    )
}
export default Dashboard;
