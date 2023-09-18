import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function AutoLayoutSizingExample() {
  return (
    <Container responsive="sm" className='Sales-info'>

    <div>
      <h1 className='sales'>Sales Information</h1>
      <Row className='input-row'>
        <Col>Customer</Col>
        <Col>Invoice ID</Col>
        <Col>Start Date</Col>
        <Col>End Date</Col>
      </Row>
      <Col className='PlaceHolder-input'>
        
       <input type="text" placeholder='Enter Costumer Name' className='input1' />
       <input type="text" placeholder='Enter Invoice ID' className='input2' />
       <input type="text" placeholder='Start Date' className='input3' />
       <input type="text" placeholder='End Date' className='input4' />
    
       
      </Col>
      </div>
      </Container>

  );
}

export default AutoLayoutSizingExample;