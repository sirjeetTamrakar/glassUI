import React from 'react'
import styles from '../styles/Features.module.css'
import { features } from './Data';
import Image from "next/image";


const Features = () => {
    return (
		<div>
			<h1 className={styles.header}>FEATURES</h1>
			{features.slice(0,4).map(({ title, purchasingUnit, type, imageUrl }) => (
				<div className={styles.main}>
					<div className={styles.img}>
						<Image  height={500} width={500} src={imageUrl} alt={imageUrl} />
					</div>
					<div className={styles.flex}>
						<h1>{title}</h1>
						<h4>{purchasingUnit}</h4>
						<h4>{ type}</h4>
					</div>
				</div>
				))}

		</div>
		);
}

export default Features
