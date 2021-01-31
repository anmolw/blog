import React from 'react';
import BSNavbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';

export class Navbar extends React.Component {
    render() {
        return (
            <BSNavbar bg="dark" variant="dark" expand="md" fixed="top" className="shadow-sm">
                <Container>
                    <BSNavbar.Brand>My Blog</BSNavbar.Brand>
                    <BSNavbar.Toggle aria-controls="basic-navbar-nav" />
                    <BSNavbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto">
                            <Nav.Link as={Link} to="/">Home</Nav.Link>
                            <NavDropdown title="Categories" id="categories-dropdown">
                                <NavDropdown.Item>News</NavDropdown.Item>
                                <NavDropdown.Item>Recipes</NavDropdown.Item>
                                <NavDropdown.Item>Anecdotes</NavDropdown.Item>
                            </NavDropdown>
                            <NavDropdown title="Tags" id="tags-dropdown">
                                <NavDropdown.Item>News</NavDropdown.Item>
                                <NavDropdown.Item>Recipes</NavDropdown.Item>
                                <NavDropdown.Item>Anecdotes</NavDropdown.Item>
                            </NavDropdown>
                            <Nav.Link as={Link} to="/about">About</Nav.Link>
                        </Nav>
                        <Button className="mr-sm-2" variant="outline-primary">Login</Button>
                    </BSNavbar.Collapse>
                </Container>
            </BSNavbar >
        )
    }
}