import { useState } from 'react';
import { Container, Row, Col, Navbar, Nav } from 'react-bootstrap';

const Home = () => {
    const danger = "/assets/Red.png";
    const dark = "/assets/Black.png";
    const colorDanger = 'danger';
    const colorDark = 'dark';
    const merah = '#DC3545';
    const hitam = '#343a40';

    const color = { danger, dark };
    const [selected, setSelected] = useState(color.danger);
    const [selectedColor, setSelectedColor] = useState('danger');
    const [warna, setWarna] = useState('#DC3545');
    const [shake, setShake] = useState(false);

    const changeDark = () => {
        setSelected(color.dark);
        setSelectedColor(colorDark);
        setWarna(hitam);
        setShake(true);
        setTimeout(() => setShake(false), 2000);
    }

    const changeDanger = () => {
        setSelected(color.danger);
        setSelectedColor(colorDanger);
        setWarna(merah);
        setShake(true);
        setTimeout(() => setShake(false), 2000);
    }

    return (
        <>
            <Navbar bg={selectedColor} variant="dark">
                <Container>
                    <Navbar.Brand href="#home">
                        <img
                            src="/assets/Logo.png"
                            width="auto"
                            height="50"
                            alt="cocacola"
                        />
                    </Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#features">Features</Nav.Link>
                        <Nav.Link href="#pricing">Pricing</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
            <div className='wrapper'>
            <Container className='mt-5'>
                <Row>
                    <Col md="5" className='mt-4'>
                        <span style={{ fontWeight: '800', color: warna, fontSize: '60px' }}>Making Life's <span style={{ fontWeight: '400', fontFamily: 'Tilt Prism', fontSize: '70px' }}>Everyday</span> Moments More <span style={{ fontWeight: '400', fontFamily: 'Tilt Prism', fontSize: '70px' }}>Meaningful</span></span>
                        <div className='mt-3'>
                            <img
                                src="/assets/Red.png"
                                className="image-cola"
                                alt="cocacola"
                                height="75"
                                onClick={changeDanger}
                            />
                            <img
                                src="/assets/Black.png"
                                className="image-cola"
                                alt="cocacola"
                                height="75"
                                onClick={changeDark}
                            />
                        </div>
                    </Col>
                    <Col md="2"></Col>
                    <Col md="5">
                        <img
                            id='can'
                            src={selected}
                            alt="cocacola"
                            height="500"
                            style={{ display: "block", marginLeft: "auto", marginRight: "auto" }}
                            className={shake ? `shake` : null}
                        />
                    </Col>
                </Row>
            </Container>
            </div>
        </>
    )
}
export default Home;