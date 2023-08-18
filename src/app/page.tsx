import Banner from '@/components/Banner'
import ProductCard from '@/components/ProductCard'

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
				<ProductCard />
			</div>
		</main>
	)
}
