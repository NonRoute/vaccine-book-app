import Image from 'next/image'
import styles from './banner.module.css'

export default function Banner() {
	return (
		<div className={styles.banner}>
			<Image src={'/img/cover.jpg'} alt="cover" fill={true} priority objectFit="cover" />
			<div className={styles.bannerText}>
				<h1>Vaccine Service</h1>
				<h3>Build a shield of protection together</h3>
			</div>
		</div>
	)
}
