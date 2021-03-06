import React from 'react'
import styles from '../styles/Pricing.module.css'
import { pricing } from './Data'
import Image from 'next/image'

const Pricing = () => {
    return (
			<div className={styles.back}>
				<h1 className={styles.header}>PRICING</h1>
			<div id='pricing' className={styles.main}>
					{pricing.map(
						({id, plan, price, space, bandwidth, domain, accounts}) => (
							<div key={id} className={styles.price}>
								<div>
									<h3 className={styles.head}>{plan}</h3>
									<h1 className={styles.dollar}>
										<sup><small>$</small></sup>
										{price}
									</h1>
								</div>
								<div className={styles.p}>
									<p>{space}</p>
									<p>{bandwidth}</p>
									<p>{domain}</p>
									<p>{accounts}</p>
								</div>
								<button className={styles.btn}>Buy Now</button>
							</div>
						)
					)}
				</div>
			</div>
		);
}

export default Pricing
