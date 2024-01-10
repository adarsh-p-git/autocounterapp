import React from 'react'
import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarBrand
} from 'mdb-react-ui-kit';
function Header() {
  return (
    <div>
       <MDBNavbar light bgColor='light'>
        <MDBContainer fluid>
          <MDBNavbarBrand href='#'>
            <img
              src='https://th.bing.com/th/id/R.0167760e7db6a7bee922141b8646caf7?rik=in3AaDh9R0fCOA&riu=http%3a%2f%2fwww.clipartbest.com%2fcliparts%2fRcG%2fEy9%2fRcGEy9rGi.gif&ehk=K9LsGiB8aeBhpY%2fiekrn%2fYPTAHFl3CD%2bgRkfS%2fwJUVA%3d&risl=&pid=ImgRaw&r=0'
              height='30'
              alt=''
              loading='lazy'
            />
            Automatic Counter App
          </MDBNavbarBrand>
        </MDBContainer>
      </MDBNavbar>
    </div>
  )
}

export default Header