import React from 'react'
import styles from '../styles/Animation.module.css'
import Image from "next/image";


const Features = () => {
    return (
			<div>
				<Image
					height={200}
					width={200}
					src='/V6/scooter.png'
					alt='Scene'
				/>
				<Image
					height={400}
					width={400}
					src='/V6/chick.png'
					alt='Chick'
				/>
				<Image
					height={400}
					width={200}
					src='/V6/boy.png'
					alt='Boy'
				/>
			</div>
		);
}

export default Features
