

import { NavLink } from"react-router-dom";
import {Navbar, Nav} from 'react-bootstrap';
function NavigationBar(){

return(
<Navbar bg='info' expand="lg">
    <Navbar.Brand href='/'>Welcome to The fitness Tracker</Navbar.Brand>
    <Navbar.Toggle aria-controls='basic-navbar-nav'/>
    <Navbar.Collapse id='basic-navbar-nav'>
    <Nav className = 'mr-auto'>

    <Nav.Link as={NavLink} to="/"activeclassname="active">
      Home
      </Nav.Link>

    <Nav.Link as={NavLink} to="/addExercise" activeclassname="active">
        Add Exercise
        </Nav.Link>

        <Nav.Link as={NavLink} to="/viewsExercise" activeclassname="active">
        View Exercise
        </Nav.Link>

     </Nav>
        </Navbar.Collapse>
    </Navbar>

  );
}
export default NavigationBar;