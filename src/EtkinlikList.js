import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import "./etkinliklist.css"


const EtkinlikList = () => {
    const [etkinlik, setEtkinlik] = useState([]);
    const { katilimci_id } = useParams();
    const { user_type } = useParams();

    useEffect(() => {
        axios.get("http://localhost:8080/api/Etkinlik/getAllEtkinlik")
            .then((response) => {
                setEtkinlik(response.data.data);
            });
    }, []
    );

    return (
        <React.Fragment>

            <div>

                <table>
                    <h1>Etkinlik Listesi</h1>
                    <tbody><tr>


                    </tr>
                        {etkinlik?.map(etk => {
                            return (<React.Fragment>

                                <tr key={etk?.etkinlikId} >
                                    <a href={`http://localhost:3000/${user_type}/${katilimci_id}/anasayfa/etkinlik/${etk?.etkinlikId}`}>
                                        <p>{etk?.etkinlikAd}</p>
                                        <p >{etk?.etkinlikAciklama}</p>
                                    </a>
                                </tr>
                                <hr></hr>
                            </React.Fragment>

                            )
                        })}
                    </tbody>
                </table>
            </div>
        </React.Fragment>
    )
}
export default EtkinlikList;