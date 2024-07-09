import '../styles/Approach.css'
import '../styles/ContentBox.css'

import { Container, Row , Col} from 'react-bootstrap';
import Box from "./Box"

export default function Approach(){
    return(
        <Container className='w-75 Approach mt-5'>
            <Row  className='ApproachHeader'>
                <h2 className='d-flex justify-content-center align-items-center'>OUR SOLUTION APPROACH</h2>
                <p className=''>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perferendis nemo, ipsam obcaecati ullam repellat repellendus distinctio, tempore cum fuga soluta necessitatibus atque ea debitis placeat illo recusandae odio aspernatur sunt.</p>
            </Row>
            <Row  className='mt-5 justify-content-center align-items-center Contentboxs'>
                <Col style={{position:"relative" , height:"60vh", marginTop:"10%" ,left:"25%" }} className='FirstSide justify-content-center align-items-center ' >
                    <Box ID={"Box1"} className="ApproachBox" W="90px" H="90px" content={"Unlimited Data center"}></Box>
                    <Box ID={"Box2"} className="ApproachBox" W="90px" H="90px" content={"Unlimited Data center"}></Box>
                    <Box ID={"Box3"} className="ApproachBox" W="90px" H="90px" content={"Unlimited Data center"}></Box>
                </Col>

                <Col style={{}} className='d-flex justify-content-center align-items-center'>
                    <div  className='ApproachCircle d-flex justify-content-center align-items-center'><h1>Approach</h1></div>
                </Col>
                
                <Col style={{ position:"relative" , height:"60vh" , marginTop:"10%" , right:"10%"}} className='SecondSide justify-content-center align-items-center'>
                    <Box ID={"Box6"} className="ApproachBox" W="90px" H="90px" content={"Unlimited Data center"}></Box>
                    <Box ID={"Box4"} className="ApproachBox" W="90px" H="90px" content={"Unlimited Data center"}></Box>
                    <Box ID={"Box5"} className="ApproachBox" W="90px" H="90px" content={"Unlimited Data center"}></Box>
                </Col>
            </Row>
        </Container>
    )
}