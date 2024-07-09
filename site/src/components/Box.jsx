import { Container, Row, Col ,Button} from 'react-bootstrap';

export default function Box({content , imgPath , H="35vh", W="35vh" , ID}){
    return(
        <Col lg={6} className="d-flex justify-content-center align-items-center">
            <div id={ID} className='BoxClass' style={{height:H, width:W }}>
                {content && <h5>{content}</h5>}
                {imgPath && <img src={imgPath} alt="Box Image" />}
            </div>
        </Col>
    )
}