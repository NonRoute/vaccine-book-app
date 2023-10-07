import Link from 'next/link'
import Card from './Card'

export default async function HospitalCatalog({ hospitalJson }: { hospitalJson: Object }) {
	const hospitalJsonReady = await hospitalJson
	return (
		<>
			Explore {hospitalJsonReady.count} Hospitals
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
				{hospitalJsonReady.data.map((hospitalItem) => (
					<Link href={`/hospital/${hospitalItem.id}`} className="w-1/5">
						<Card hospitalName={hospitalItem.name} imgSrc={hospitalItem.picture} />
					</Link>
				))}
			</div>
		</>
	)
}
