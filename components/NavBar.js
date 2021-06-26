import React from 'react'
import { Navbar, Nav } from 'react-bootstrap';
import styles from "../styles/Navbar.module.css";

const NavBar = () => {
    return (
			<div className={styles.nav}>
				<Navbar collapseOnSelect expand='lg'>
					<Navbar.Toggle aria-controls='responsive-navbar-nav' />
					<Navbar.Collapse id='responsive-navbar-nav'>
						<Nav className={styles.navbar}>
							<Nav.Link className={styles.a} href='#features'>
								Home
							</Nav.Link>
							<Nav.Link className={styles.a} href='#pricing'>
								Contact
							</Nav.Link>
							<Nav.Link className={styles.a} href='#features'>
								About
							</Nav.Link>
							<Nav.Link className={styles.a} href='#pricing'>
								Pricing
							</Nav.Link>
							<button className={styles.get_started}>Get Started</button>
						</Nav>
					</Navbar.Collapse>
				</Navbar>
			</div>
		);
}

export default NavBar
