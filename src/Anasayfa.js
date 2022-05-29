import React from 'react'
import Navbar from './Navbar'




const Anasayfa = (props) => {
  const id = (props.match.params.katilimci_id)
  const user_type =props.match.params.user_type;
  
  return (
    <React.Fragment>
          <Navbar id={id} user_type={user_type} />
        
                
               




    </React.Fragment>
  )
}
export default Anasayfa;