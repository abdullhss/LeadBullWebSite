import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';
import 'bootstrap/dist/css/bootstrap.min.css';
import "../styles/Header.css"
export default function Header(){
    return(
        <>
            <Navbar key="lg" expand="lg" className="bg-body-tertiary mb-3 navbar" style={{ borderColor: 'white' }}>
            <Container>
                <Navbar.Brand href="#"><img src="../../public/leadbull logo .png" alt="logo" /></Navbar.Brand>
                <Navbar.Toggle style={{ backgroundColor: 'white' }} aria-controls={`offcanvasNavbar-expand-lg`} />
                <Navbar.Offcanvas
                id={`offcanvasNavbar-expand-lg`}
                aria-labelledby={`offcanvasNavbarLabel-expand-lg`}
                placement="end"
                >
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title id={`offcanvasNavbarLabel-expand-lg`}>
                    Offcanvas
                    </Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    <Nav className="justify-content-center flex-grow-1 pe-3">
                    <Nav.Link href="#action1" className='me-2 Link'>Home</Nav.Link>
                    <Nav.Link href="#action2" className='me-2 Link'>About US</Nav.Link>
                    <NavDropdown
    className='me-2 Dropdown'
    title={<span className="text-white">Services</span>}
    id={`offcanvasNavbarDropdown-expand-lg`}
>
    <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
    <NavDropdown.Item href="#action4">
        Another action
    </NavDropdown.Item>
    <NavDropdown.Divider />
    <NavDropdown.Item href="#action5">
        Something else here
    </NavDropdown.Item>
</NavDropdown>
                    <Nav.Link href="#action2" className='Link'>Support</Nav.Link>
                    </Nav>
                    <Button className='me-2'>log in</Button>
                    <Button>Countact</Button>
                </Offcanvas.Body>
                </Navbar.Offcanvas>
            </Container>
            </Navbar>
        </>
    )
}