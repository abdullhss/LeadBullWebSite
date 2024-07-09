import React from 'react';
import '../styles/AboutUs.css'
import '../styles/Box.css'
import Box from './Box.jsx'
import { Container, Row, Col ,Button} from 'react-bootstrap';

export default function AboutUs (){
return (
    <Container id="AboutUsContent">
    <Row className='mb-5 mt-5'>
        <Col>
            <h1>About Us</h1>
            <p className='mt-4'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita exercitationem minima cum ducimus impedit dolores totam amet eveniet! Ullam repellat necessitatibus quibusdam aspernatur, nesciunt impedit asperiores officia corporis ipsum aliquid?</p>
        </Col>
    </Row>

    <Row className='mb-5 mt-5'>
        <Col>
            <h1>History</h1>
            <p className='mt-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate et iste reiciendis aliquid magnam, deleniti officia, excepturi at quo doloribus quidem! Quis hic autem excepturi! Sit quod dicta voluptatem animi.</p>
            <Button>Read More</Button>
        </Col>
    </Row>
    
    <Row>
        <Col lg={6}>
            <div>
                <h1>Profile</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum architecto beatae aperiam vitae culpa obcaecati placeat tenetur voluptas vero dignissimos. Voluptatibus voluptate molestiae repudiandae vel. Ipsam quod recusandae necessitatibus placeat!</p>
                <Row className="gridiant mb-2">
                    <Col xs={2}>   
                        <h5 style={{marginTop:"30%"}}>Mission:</h5>
                    </Col>
                    <Col>   
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi, reprehenderit quod. Accusantium doloremque beatae ducimus</p>
                    </Col>
                </Row>
                <Row className="mb-2 gridiant">
                    <Col xs={2} >   
                        <h5  style={{marginTop:"30%"}}>Vision:</h5>
                    </Col>
                    <Col>   
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi, reprehenderit quod. Accusantium doloremque beatae</p>
                    </Col>
                </Row>
                <Row className='gridiant'>
                    <Col xs={2}>   
                        <h5  style={{marginTop:"30%"}}>Values:</h5>
                    </Col>
                    <Col>   
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi, reprehenderit quod. Accusantium doloremque beatae</p>
                    </Col>
                </Row>
            </div>
        </Col>
        <Box imgPath="../../public/man.png"></Box>
    </Row>

    </Container>
)
}