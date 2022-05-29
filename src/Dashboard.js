import React from 'react'
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom'
import Anasayfa from './Anasayfa'
import EtkinlikDetay from './EtkinlikDetay'
import EtkinlikList from './EtkinlikList'
import Navbar from './Navbar'
import Sertifika from './Sertifika'
import EtkinlikEkle from './EtkinlikEkle'
import Login from './Login'
import SertifikaEkle from './SertifikaEkle'
import AfisEkle from './AfisEkle'
import EtkinlikDuzenle from './EtkinlikDuzenle'

import EtkinlikKurumEsle from './EtkinlikKurumEsle'
import EtkinlikKonusmaciEsle from './EtkinlikKonusmaciEsle'
import { useState } from 'react'
import axios from 'axios';
import Profil from './Profil'
import KurumKayitOl from './KurumKayitOl'
import KatilKayitOl from './KatilKayitOl'
import KayitOl from './KayitOl'
import Etkinliklerim from './Etkinliklerim'
import EtkinliklerimDetay from './EtkinliklerimDetay'

const Dashboard = (props) => {
    

    return (
        <React.Fragment>
         
            <Router>
            <Route exact path="/" component={Login} />
            <Route exact path="/kayitol" component={KayitOl} />
            <Route exact path="/krkayitol" component={KurumKayitOl} />
            <Route exact path="/ktkayitol" component={KatilKayitOl} />
            
            <Route  path="/:user_type/:katilimci_id/anasayfa" component={Anasayfa}/>
            <Route exact path="/:user_type/:katilimci_id/anasayfa/etkinliklerim" component={Etkinliklerim} />
            <Route exact path="/:user_type/:katilimci_id/anasayfa/etkinliklerim/:etkinlik_id" component={EtkinliklerimDetay} />
            <Route exact path="/:user_type/:katilimci_id/anasayfa/etkinlik" component={EtkinlikList} />
             <Route exact path="/:user_type/:katilimci_id/anasayfa/sertifika" component={Sertifika} />
            <Route  exact path="/:user_type/:katilimci_id/anasayfa/etkinlik/:etkinlik_id" component={EtkinlikDetay} />
            <Route exact path="/:user_type/:katilimci_id/anasayfa/krmain/etkinlikekle" component={EtkinlikEkle} />
             <Route exact path="/:user_type/:katilimci_id/anasayfa/krmain/sertifikaekle" component={SertifikaEkle} />
             <Route exact path="/:user_type/:katilimci_id/anasayfa/afisekle" component={AfisEkle} />
            <Route exact path="/:user_type/:katilimci_id/anasayfa/etkinlik/:etkinlik_id/duzenle" component={EtkinlikDuzenle} />
             
             <Route exact path="/:user_type/:katilimci_id/anasayfa/etkkurum" component={EtkinlikKurumEsle} />
             <Route exact path="/:user_type/:katilimci_id/anasayfa/etkkonusmaci" component={EtkinlikKonusmaciEsle} />
             <Route  exact path="/:user_type/:katilimci_id/anasayfa/profil" component={Profil} />
            </Router>
            
        </React.Fragment>

        



    )
}
export default Dashboard;
