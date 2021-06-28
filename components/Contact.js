import React, {useState, useEffect} from "react";
import styles from "../styles/Contact.module.css"
import Image from 'next/image'
const Contact = () => {
	const [sent, setSent] = useState(false);
	const [alert, setAlert] = useState(false);
	const done = () => {
		setAlert(true);
	};

	useEffect(() => {
		const timeout = setTimeout(() => {
			setAlert(false);
		}, [2000]);
		return () => clearTimeout(timeout);
	}, [alert]);

	const sendEmail = e => {
		e.preventDefault();
		emailjs.sendForm(
				"service_2gswzwv",
				"template_2gamusm",
				e.target,
				"user_BoL6jhzMm2dNvVpf04Zck"
			)
			.then(
				result => {
					console.log(result.text);
				},
				error => {
					console.log(error.text);
				}
			);
		e.target.reset();
		setSent(true);
	};

	return (
		<>
			<div className={`mx-auto ${styles.form}`}>
				<div  className={styles.imgBg}>
					<Image
						layout='fill'
						className={styles.imgForm}
						src="/V6/Scene6.png"
						alt='Snow'
					/>
					<div className={styles.center}>
						<div>Address: Baluwatar, Kathmandu</div>
						<div>sirjeettamrakar007@gmail.com</div>
						<div>9860913929</div>
					</div>
				</div>
				<form
					className={`mx-auto ${styles.w}`}
					onSubmit={sendEmail}
				>
					<h2 className={styles.head}>Contact</h2>
					<input
						className={styles.input}
						title='Name'
						name='name'
						type='text'
						placeholder='Your Name'
						required
					/>
					<input
						className={styles.input}
						title='Email'
						name='email'
						type='email'
						placeholder='Your Email'
						required
					/>
					<input
						className={styles.input}
						title='Subject'
						name='subject'
						type='text'
						placeholder='Subject'
						required
					/>
					<textarea
						className={styles.input}
						title='Message'
						name='message'
						type='text'
						placeholder='Message'
						required
					/>
					<button
						className={`${styles.get_started}`}
						type='submit'
						onClick={() => done()}
					>
						Send Email
					</button>
				</form>
			</div>
			<div className={styles.bg} />
		</>
	);
};

export default Contact;
