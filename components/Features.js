import React from 'react'
import styles from '../styles/Features.module.css'
import { features } from './Data';
import Image from "next/image";


const Features = () => {
    return (
			<div>
				<h1 className={styles.header}>FEATURES</h1>
				{features.slice(0, 4).map(({title, purchasingUnit, type, imageUrl, message}) => (
					<div key={title} style={{position: "relative"}}>
						<div className={styles.circle1} />
						<div className={styles.circle2} />
						<div className={styles.circle3} />
						<div className={styles.main}>
							<div className={styles.img}>
								<Image height={500} width={500} src={imageUrl} alt={imageUrl} />
							</div>
							<div className={styles.flex}>
								<h1>{title}</h1>
						<div style={{color:'black', margin:'1rem', marginLeft:'0'}}>{ message}</div>
							</div>
						</div>
					</div>
				))}
			</div>
		);
}

export default Features
