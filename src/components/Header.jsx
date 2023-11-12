import {Container, Nav, Navbar} from "react-bootstrap";
import {NavLink} from "react-router-dom";

export const Header = () => {
  return (
    <>
      <Navbar className="pink" data-bs-theme="dark">
  <Container className="p-0 d-flex justify-content-between">
    
    <Nav className="align-items-center">
      <NavLink to="/" className={({isActive, isPending}) => isActive && !isPending ? "nav-link active" : "nav-link"}>
        Home
      </NavLink>
      <NavLink to="/contact" className={({isActive, isPending}) => isActive && !isPending ? "nav-link active" : "nav-link"}>
        Contacto
      </NavLink>
    </Nav>

    
    <NavLink to="/" className="navbar-brand">
      <i className="fa-solid fa-cake-candles"></i> Happy Cake
    </NavLink>
  </Container>
</Navbar>

    </>
);
};