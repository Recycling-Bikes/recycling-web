/* eslint-disable @next/next/no-img-element */
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon} from 'mdb-react-ui-kit';
import Link from 'next/link';
import React from 'react';

const Footer = (props) => {
  return (
    <MDBFooter className='text-center text-lg-start text-muted footer-customs' fluid>

      <section className='d-flex justify-content-center justify-content-lg-between p-1' >
      
        <MDBContainer className='text-center text-md-start mt-5' fluid>
        <MDBRow className='text-center text-md-start mt-5'>
            <MDBCol md="3" lg="2" xl="3" >

          
              <Link href='/'>

                <img src='/recycling-2x.png' alt=''
                className='img-fluid'
                />

              </Link>
            </MDBCol>

          <MDBCol fluid>
              <MDBRow className='mt-3'>
                <MDBCol md="3" lg="2" xl="2" className='me-auto'>
              <h6 className='text-uppercase fw-bold mb-4'>Products</h6>
              <p>
                <a href='#!' className='text-reset'>
                  Angular
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  React
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Vue
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Laravel
                </a>
              </p>
            </MDBCol>
            <MDBCol md="4" lg="3" xl="2" className='me-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Useful Linkss</h6>
              <p>
                <a href='#!' className='text-reset'>
                  Pricing
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Settings
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Orders
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Help
                </a>
              </p>
            </MDBCol>

            <MDBCol md="5" lg="4" xl="3" className='me-auto mb-md-0 mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Contact</h6>
              <p>
                <MDBIcon icon="home" className="me-2" />
                New York, NY 10012, US
              </p>
              <p>
                <MDBIcon icon="envelope" className="me-3" />
                info@example.com
              </p>
              <p>
                <MDBIcon icon="phone" className="me-3" /> + 01 234 567 88
              </p>
            </MDBCol>

            <MDBCol md="2" lg="3" xl="2" className='me-auto'>
              <h6 className='text-uppercase fw-bold mb-4'>Síguenos</h6>
              <a href='' className='me-4 text-reset'>
                <MDBIcon fab icon="facebook-f" className='ms-1' size='lg' />
              </a>
              <a href='' className=' text-reset'>
                <MDBIcon fab icon="instagram" className='ms-1' size='lg' />
              </a>
            </MDBCol>
          </MDBRow>
          </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>

      <div className='text-center p-4 text-final-footer'>
        2022 © Recycling. Todos los derechos reservados
      </div>
    </MDBFooter>
  )
}

export default Footer

