import React,{useState,useEffect} from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';


const EtkinlikList = () => {
    const [etkinlik, setEtkinlik] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:8080/api/Etkinlik/getAllEtkinlik")
            .then((response) => {
                setEtkinlik(response.data.data);
            });
    }, []
    );

    return (
        <React.Fragment>
            <h1>Etkinlik Listesi</h1>

            {etkinlik?.map(etk => {
                return (

                    <div className="ui relaxed divided list" key={etk?.etkinlikId} >
                        <Link to={`/etkinlik/${etk?.etkinlikId}`} className="content">
                            <div className="item" >
                                <i className="angle double right icon"></i>
                                <div className="content">
                                    Etkinlik adı {etk?.etkinlikAd}
                                    <div className="description"> Ekinlik açıklama {etk?.etkinlikAciklama}</div>
                                </div>
                            </div>
                        </Link>
                    </div>
                )
            })}

        </React.Fragment>
    )
}
export default EtkinlikList;