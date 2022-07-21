import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';

const Header = () => {
    return (
        <Navbar bg="dark" variant='dark' expand="lg">
            <Container>
                {/* <Navbar.Brand href="#" title='gambling jackpot'>G.J.</Navbar.Brand> */}
                <OverlayTrigger
                    overlay={
                        <Tooltip id={`tooltip-bottom`}>
                            <strong>gambling jackpot</strong>.
                        </Tooltip>
                    }
                >
                    <Navbar.Brand href="#" title='gambling jackpot'>gam-jack</Navbar.Brand>
                </OverlayTrigger>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="ms-auto my-2 my-lg-0"
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                    >
                        <Nav.Link href="#action1">Home</Nav.Link>
                        <Nav.Link href="#action2">Hasibul Islam $(59.77)</Nav.Link>
                        <Nav.Link href="#action3">Statement</Nav.Link>
                        <Nav.Link href="#action4">Logout</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Header;