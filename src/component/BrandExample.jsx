import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';


function BrandExample() { 
  return (
    <div className='Topic'>
      <h1>Medico Sales</h1>

      <div className='Manu-bar'>
      <Navbar className="bg-body-tertiary1">
        <Container>
          <Navbar.Brand href="#home">
            <img src={'./images/img1.png'}
            />{' '}
            Dashboard
          </Navbar.Brand> 
        </Container>
      </Navbar>
      
      <Navbar className="bg-body-tertiary1">
        <Container>
          <Navbar.Brand>
            <img src={'./images/img2.png'}
            />{' '}
            Lab Test
          </Navbar.Brand>
        </Container>
      </Navbar>
      
      <Navbar className="bg-body-tertiary1">
        <Container>
          <Navbar.Brand>
             <img src={'./images/img3.png'}
            />{' '}
            Appointment
          </Navbar.Brand>
        </Container>
      </Navbar>
      

      <Navbar className="bg-body-tertiary1">
        <Container>
          <Navbar.Brand>
              <img src={'./images/img4.png'}
            />{' '}
            Medicine Order
          </Navbar.Brand>
        </Container>
      </Navbar>
      


      <Navbar className="bg-body-tertiary1">
        <Container>
          <Navbar.Brand>
             <img src={'./images/img5.png'}
            />{' '}
            Message
          </Navbar.Brand>
        </Container>
      </Navbar>
    

      <Navbar className="bg-body-tertiary1">
        <Container>
          <Navbar.Brand href="#home">
            <img src={'./images/img6.png'}
            />{' '}
            Payment
          </Navbar.Brand>
        </Container>
      </Navbar>

      <Navbar className="bg-body-tertiary1">
        <Container>
          <Navbar.Brand href="#home">
            <img src={'./images/img7.png'}
            />{' '}
            Settings
            </Navbar.Brand>
        </Container>
          </Navbar>
          
      <Navbar className="bg-body-tertiary2">
        <Container>
          <Navbar.Brand href="#home">
            <img src={'./images/img8.png'}
            />{' '}
            Help
          </Navbar.Brand>
        </Container>
      </Navbar>
        </ div>
      </ div>
      

  );
}
 
export default BrandExample;