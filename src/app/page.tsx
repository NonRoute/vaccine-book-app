import Banner from '@/components/Banner'
import Card from '@/components/Card'

export default function Home() {
	return (
		<main>
			<Banner />
			<div
				style={{
					margin: '20px',
					display: 'flex',
					flexDirection: 'row',
					flexWrap: 'wrap',
					justifyContent: 'space-around',
					alignContent: 'space-around'
				}}
			>
				<Card hospitalName="Chulalongkorn Hospital" imgSrc="/img/chula.jpg" />
				<Card hospitalName="Rajavithi Hospital" imgSrc="/img/rajavithi.jpg" />
				<Card hospitalName="Thammasat University Hospital" imgSrc="/img/thammasat.jpg" />
			</div>
		</main>
	)
}
