import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { List,Button } from 'semantic-ui-react'
import { Link } from 'react-router-dom';
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
            <List divided relaxed>
               
                   
            { srt?.map(srtt => {
                      return(
                         
                        <List.Item key={srtt.etkinlikKatilimciId}>
                        <List.Icon name='chevron right' size='large' verticalAlign='middle' />
                        <List.Content>
                            <List.Header as='a'>Sertifika Adı: {srtt?.etkinlik?.sertifikaImage?.sertifika?.sertifikaAd}    </List.Header>
                            <List.Description as='a'>Sertifika Metni:{srtt?.etkinlik?.sertifikaImage?.sertifika?.sertifikaMetni}      </List.Description>
                        </List.Content>
                        <a href={srtt.etkinlik?.sertifikaImage?.image}><Button color='orange' >Göster</Button></a>
                    </List.Item>


                      )
                  })
                  
                  }
                 
                 
                    
                   
              

            </List>





         </React.Fragment>
     )
}
export default Sertifika;
