import React from 'react'
import styles from '../styles/Pricing.module.css'
import { pricing } from './Data'
import Image from 'next/image'

const Pricing = () => {
    return (
        <div className={styles.back}>
            <div className={styles.color}/>
        <div id='pricing' className={styles.main}>
				{pricing.map(
					({id, plan, price, space, bandwidth, domain, accounts}) => (
						<div key={id} className={styles.price}>
							<h3>{plan}</h3>
							<h1>${price}</h1>
							<p>{space}</p>
							<p>{bandwidth}</p>
							<p>{domain}</p>
                            <p>{accounts}</p>
                            <button className={styles.btn}>Buy Now</button>
						</div>
					)
				)}
            </div>
        </div>
		);
}

export default Pricing
