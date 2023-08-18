import Image from 'next/image'
import styles from './productcard.module.css'

export default function ProductCard() {
	return (
		<div className={styles.card}>
			<div className={styles.cardimg}>
				<Image src={'/img/vaccine1.jpg'} alt="Product Picture" fill={true} objectFit="cover" />
			</div>
			<div className={styles.cardtext}>
				<h4>Vaccine</h4>
				<p>Vaccines are vital for preventing diseases.</p>
			</div>
		</div>
	)
}
