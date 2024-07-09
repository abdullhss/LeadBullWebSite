import { Container , Row } from "react-bootstrap";
import ProgressBarBox from "./ProgressBarBox";
export default function Benefits(){
    return(
    <Container>
        <Row>
            <h3>KEY SERVICE</h3>
            <h1>BENEFITS</h1>
            <Row className="d-flex">
                <ProgressBarBox percentage></ProgressBarBox>
                <span>+30</span>
            </Row>
        </Row>
    </Container>
)
}