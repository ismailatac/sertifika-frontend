import axios from 'axios';
import React, { useEffect, useState } from 'react'

import { useParams } from 'react-router-dom';


const Sertifika = (props) => {
        const [srt,setSrt] = useState([]);
        
        const {katilimci_id} =useParams();
    
  
        useEffect(() => {
            axios.get(`http://localhost:8080/api/EtkinlikVeKatilimcilar/getByKatilimci_User_UserId?userId=${katilimci_id}`)
            .then( response => {
                setSrt(response.data.data);
            })
            
            
        }, []);

      
        

    return (
        <React.Fragment>
            <h1>Sertifikalarım</h1>
            <header></header>
            
               
                   
            { srt?.map(srtt => {
                      return(
                         
                        <table key={srtt.etkinlikKatilimciId}  >
                        
                        <tbody >  
                            <tr>
                            <th style={{textAlign:"center",color:"white"}} >{srtt?.etkinlik?.sertifikaImage?.sertifika?.sertifikaAd}    </th>
                            </tr>
                            <tr>
                            <td style={{textAlign:"right"}}><a  href={srtt.etkinlik?.sertifikaImage?.image}><button style={{color:"white"}} >Göster</button></a></td>
                            </tr>
                        </tbody>
                    </table>


                      )
                  })
                  
                  }
                 
                 
                    
                   
              

            





         </React.Fragment>
     )
}
export default Sertifika;
