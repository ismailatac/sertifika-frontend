import React from 'react'

import "./kayitol.css"

 const KayitOl = () => {
  return (
    <React.Fragment>
      <div>
        <h3>Hangi kullanıcı türünde kayıt yaptırmak istediğinizi seçiniz</h3>
       <a id='buton' href='http://localhost:3000/ktkayitol' > Katılımcı</a>
       <a id='buton' href='http://localhost:3000/krkayitol'>Kurum</a>
       </div>




    </React.Fragment>
  )
}
export default KayitOl;
