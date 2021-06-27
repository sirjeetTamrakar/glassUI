import React from 'react'
import styles from '../styles/Footer.module.css'

const Footer = () => {
	return (
		<div className={styles.main}>
			<div className={styles.circle}/>
			<div className={styles.grid}>
				<div className={styles.title}>
					Get Started
					<div className={styles.content}>
						<div>Sign Up</div>
						<div>Current Offers</div>
						<div>Download the App</div>
					</div>
				</div>
				<div className={styles.title}>
					Get Help
					<div className={styles.content}>
						<div>How it works</div>
						<div>FAQ</div>
						<div>Help Desk</div>
					</div>
				</div>
				<div className={styles.title}>
					About Us
					<div className={styles.content}>
						<div>Company</div>
						<div>Careers</div>
						<div>Press</div>
					</div>
				</div>
				<div className={styles.title}>
					Partnerships
					<div className={styles.content}>
						<div>Brand</div>
						<div>Retail</div>
						<div>Contact Sales</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Footer
