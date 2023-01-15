import { Navbar, Container, Nav } from "react-bootstrap"
import { Link, Outlet } from "react-router-dom"

const NavBar = () => {
	return (
		<>
			<Navbar className="navBg" bg="dark" variant="dark" expand="sm">
				<Container>
					<Navbar.Brand as={Link} to="/MisProyectos">Mis proyectos</Navbar.Brand>
					<Navbar.Toggle aria-controls="basic-navbar-nav" />
					<Navbar.Collapse id="basic-navbar-nav">
						<Nav className="me-auto ">
							<Nav.Link as={Link} to="/Action">Action</Nav.Link>
						</Nav>
					</Navbar.Collapse>
				</Container>
			</Navbar>|

			<section>
				<Outlet></Outlet>
			</section>
		</>
	)
}

export default NavBar