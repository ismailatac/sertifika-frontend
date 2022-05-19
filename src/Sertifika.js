import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { List } from 'semantic-ui-react'
import { Link } from 'react-router-dom';

const Sertifika = () => {
        const [srt,setSrt] = useState([]);
        const [katilimci,setKatilimci] = useState({});
        const katilimci_id = 1;

        useEffect(() => {
            axios.get(`http://localhost:8080/api/EtkinlikVeKatilimcilar/getByKatilimciId?katilimciId=${katilimci_id}`)
            .then( response => {
                setSrt(response.data.data);
            })
            
        }, []);

      
        

    return (
        <React.Fragment>
            <h1>Sertifikalarım</h1>
            <header></header>
            <List divided relaxed>
               
                   
            { srt?.map(srtt => {
                      return(
                         
                        <List.Item key={srtt.etkinlikKatilimciId}>
                        <List.Icon name='chevron right' size='large' verticalAlign='middle' />
                        <List.Content>
                            <List.Header as='a'>Sertifika Adı: {srtt?.etkinlik?.sertifika?.sertifikaAd}    </List.Header>
                            <List.Description as='a'>Sertifika Metni:{srtt?.etkinlik?.sertifika?.sertifikaMetni}      </List.Description>
                        </List.Content>
                    </List.Item>


                      )
                  })
                  
                  }
                 
                 
                    
                   
              

            </List>





         </React.Fragment>
     )
}
export default Sertifika;
