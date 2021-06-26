import React from 'react'
import Icons from './Icons';
import Features from './Features';
import styles from "../styles/Animation.module.css";
import duck from '../public/V6/duck.png'
import graph from "../public/V6/Graph.png";
import shelf from "../public/V6/5.png";
import person from "../public/V6/4-2.png";

const Animation = () => {
    return (
			<div className={styles.main}>
				<div className={styles.circle1} />
				<div className={styles.circle2} />
				<div className={styles.circle3} />
				<div className={styles.paper}>
					<div className={styles.grid}>
						<div className={styles.hero}>
							<h1 className={styles.title}>
								Social Media
								<br /> Marketing
							</h1>
							<div className={styles.tags}>
								<div>
									<img className={styles.icons} src='/V6/5.png' alt='shelf' />
								</div>
								<div>
									<h3 className={styles.h3}>Idea</h3>
									<p className={styles.p}>Renovate your ideas using Glass UI</p>
								</div>
							</div>
							<div className={styles.tags}>
								<div>
									<img
										className={styles.icons}
										src='/V6/Graph.png'
										alt='Graph'
									/>
								</div>
								<div>
									<h3 className={styles.h3}>Sales</h3>
									<p className={styles.p}>Sell millions of goods online</p>
								</div>
							</div>
							<div className={styles.tags}>
								<div>
									<img
										className={styles.icons}
										src='/V6/4-2.png'
										alt='Person'
									/>
								</div>
								<div>
									<h3 className={styles.h3}>Marketing</h3>
									<p className={styles.p}>
										Proper market setup quite important
									</p>
								</div>
							</div>
						</div>
						<img className={styles.duck} src='/V6/duck.png' alt='Duck' />
					</div>
					<div>
						<Icons />
					</div>
					<div>
						<Features />
					</div>
				</div>
			</div>
		);
}

export default Animation
