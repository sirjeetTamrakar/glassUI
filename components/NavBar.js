import React from 'react'
import { Navbar, Nav } from 'react-bootstrap';
import Link from 'next/link'
import Image from 'next/image'
import styles from "../styles/Navbar.module.css";

const NavBar = () => {
    return (
			<div className={styles.nav}>
				<Navbar collapseOnSelect expand='lg'>
					<Navbar.Toggle aria-controls='responsive-navbar-nav'>
						<Image height={40} width={40} src='https://img.icons8.com/ios-filled/50/000000/xbox-menu.png' alt='icon'/>
					</Navbar.Toggle>
					<Navbar.Collapse id='responsive-navbar-nav'>
						<Nav className={styles.navbar}>
							<Link href='#home'>
								<a className={styles.a}>Home</a>
							</Link>
							<Link href='#contact'>
								<a className={styles.a}>Contact</a>
							</Link>
							<Link href='#pricing'>
								<a className={styles.a}>Pricing</a>
							</Link>
							<Link href='#team'>
								<a className={styles.a}>Team</a>
							</Link>
							<button className={styles.get_started}>Get Started</button>
						</Nav>
					</Navbar.Collapse>
				</Navbar>
			</div>
		);
}

export default NavBar
