import React from 'react'
import { Carousel } from 'react-bootstrap';
import styles from '../styles/Carousel.module.css'
import { people } from './Data'
import Image from 'next/image'

const Car = () => {
	return (
		<div style={{position: "relative"}}>
			<div className={styles.circle1} />
			<div className={styles.circle2} />
			<div className={styles.circle3} />
			<h1 className={styles.header}>OUR TEAM</h1>
			<Carousel prevLabel='' nextLabel=''>
				{people.map(({name, id, avatar, designation, message}) => (
					<Carousel.Item key={id}>
						<div className={styles.main}>
							<div className={styles.card}>
								<div className={styles.div}>
									<Image
										className={styles.image}
										src={avatar}
										height={100}
										width={100}
										alt={name}
									/>
									<h1>{name}</h1>
									<p>{message}</p>
								</div>
							</div>
						</div>
					</Carousel.Item>
				))}
			</Carousel>
		</div>
	);
}

export default Car
