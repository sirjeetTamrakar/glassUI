import React from 'react'
import { Navbar, Nav } from 'react-bootstrap';
import Link from 'next/link'
import styles from "../styles/Navbar.module.css";

const NavBar = () => {
    return (
			<div className={styles.nav}>
				<Navbar collapseOnSelect expand='lg'>
					<Navbar.Toggle aria-controls='responsive-navbar-nav' />
					<Navbar.Collapse id='responsive-navbar-nav'>
						<Nav className={styles.navbar}>
							<Link className={styles.a} href='#home'>
								Home
							</Link>
							<Link className={styles.a} href='#contact'>
								Contact
							</Link>
							<Link className={styles.a} href='#about'>
								About
							</Link>
							<Link className={styles.a} href='#pricing'>
								Pricing
							</Link>
							<button className={styles.get_started}>Get Started</button>
						</Nav>
					</Navbar.Collapse>
				</Navbar>
			</div>
		);
}

export default NavBar
