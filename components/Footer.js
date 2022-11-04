/* eslint-disable @next/next/no-img-element */
import { MDBFooter, MDBContainer, MDBRow, MDBCol } from 'mdb-react-ui-kit';
import Link from 'next/link';
import React from 'react';
import { BsInstagram } from 'react-icons/bs';
import { FaFacebook } from 'react-icons/fa';
import { IoLocationSharp, IoLogoWhatsapp } from 'react-icons/io5'
import { MdEmail } from 'react-icons/md';
import { Container} from 'react-bootstrap';



const Footer = (props) => {
  return (
    <Container>
    <MDBFooter className='text-center text-lg-start text-muted footer-customs'>

      <section className='d-flex justify-content-center justify-content-lg-between p-1' >

        <MDBContainer className='text-center text-md-start mt-5' fluid="true">
          <MDBRow className='text-center text-md-start mt-5'>
            <MDBCol md="3" lg="2" xl="3" >


              <Link href='/'>

                <img src='/recycling-2x.png' alt=''
                  className='img-fluid pb-5'
                />

              </Link>
            </MDBCol>

            <MDBCol fluid="true">
              <MDBRow className='mt-3'>
                <MDBCol md="3" lg="2" xl="2" className='me-auto pb-2'>
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
                <MDBCol md="4" lg="3" xl="2" className='me-auto mb-4 pb-2'>
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

                <MDBCol md="5" lg="4" xl="3" className='me-auto mb-md-0 mb-4 pb-2'>
                  <h6 className='text-uppercase fw-bold mb-4'>Contact</h6>
                  <p>
                    <IoLocationSharp size={22} className="me-2" />
                    New York, NY 10012, US
                  </p>
                  <p>
                    <MdEmail size={22} className="me-3" />
                    info@example.com
                  </p>
                  <p>
                    <IoLogoWhatsapp size={24} className="me-3" /> + 01 234 567 88
                  </p>
                </MDBCol>

                <MDBCol md="2" lg="3" xl="2" className='me-auto pb-5' >
                  <h6 className='text-uppercase fw-bold mb-4'>Síguenos</h6>
                  <a href='' className='me-4 text-reset'>
                    <FaFacebook size={23} />
                  </a>
                  <a href='' className=' text-reset'>
                    <BsInstagram size={22} />
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
    </Container>
  )
}

export default Footer

