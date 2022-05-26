import React from 'react'
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom'

import EtkinlikDetay from './EtkinlikDetay'
import EtkinlikList from './EtkinlikList'
import Navbar from './Navbar'
import Sertifika from './Sertifika'
import EtkinlikEkle from './EtkinlikEkle'

import SertifikaEkle from './SertifikaEkle'
import AfisEkle from './AfisEkle'
import EtkinlikDuzenle from './EtkinlikDuzenle'
import KurumEkle from './KurumEkle'
import EtkinlikKurumEsle from './EtkinlikKurumEsle'
import EtkinlikKonusmaciEsle from './EtkinlikKonusmaciEsle'
import { useParams } from 'react-router-dom'



const Anasayfa = (props) => {
  const id = (props.match.params.katilimci_id)
  const user_type =props.match.params.user_type;
  console.log(user_type);
  return (
    <React.Fragment>
          <Navbar id={id} user_type={user_type} />
       
                
               




    </React.Fragment>
  )
}
export default Anasayfa;