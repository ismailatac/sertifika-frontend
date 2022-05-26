import React from 'react'
import { Button,Modal } from 'semantic-ui-react';
import {useState} from "react";
import axios from 'axios';
import { useParams } from 'react-router-dom';

 const EtkinlikSil = () => {
   const {katilimci_id} = useParams();
    const {etkinlik_id} = useParams();
    const {user_type} = useParams();
    const [open, setOpen] = useState(false);
    const [hata, setHata] = useState("");

    const show = () => {
        setOpen(true);
    }
    const close = () => {
        setOpen(false);
    }
   
    

    const handleDelete = (id) => {
        axios.delete(`http://localhost:8080/api/Etkinlik/delete?etkinlikId=${id}`)
            .then(() => {
                setHata("");
                close();
                window.location.replace(`http://localhost:3000/${user_type}/${katilimci_id}/anasayfa/etkinliklerim`)
            })
            .catch(() => {
                setHata("Yazıyı silerken bir hata oluştu")
            })
    }

    return (

        <React.Fragment>

<Button color="red" onClick={show}> Sil </Button>


<Modal size="mini" open={open} onClose={close}>

<Modal.Header>Yazıyı Sil</Modal.Header>

<Modal.Content>
    <p>Bu yazıyı silmek istediğinizden emin misiniz?</p>
    {hata && <p>{hata}</p>}
</Modal.Content>

<Modal.Actions>
    <Button negative onClick={close}>İptal Et </Button>
    <Button positive
        icon="delete"
        labelPosition="right"
        content="Evet,Sil!"
        onClick={() => { handleDelete(etkinlik_id) }}
    />
</Modal.Actions>
</Modal>














            
        </React.Fragment>
    )
}
export default EtkinlikSil;
