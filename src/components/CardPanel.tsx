'use client'
import { useReducer } from 'react'
import Card from './Card'
import Link from 'next/link';

export default function CardPanel() {
	const compareReducer = (
		compareList: Map<string, number>,
		action: { type: string; hospitalName: string; rating: number }
	) => {
		switch (action.type) {
			case 'add': {
				return new Map(compareList.set(action.hospitalName, action.rating || 0))
			}
			case 'remove': {
				compareList.delete(action.hospitalName)
				return new Map(compareList)
			}
			default:
				return compareList
		}
	}

	const [compareList, dispatchCompare] = useReducer(compareReducer, new Map<string, number>())

	const mockHospitalRepo = [
		{ hid: '001', name: 'Chulalongkorn Hospital', image: '/img/chula.jpg' },
		{ hid: '002', name: 'Rajavithi Hospital', image: '/img/rajavithi.jpg' },
		{ hid: '003', name: 'Thammasat University Hospital', image: '/img/thammasat.jpg' }
	]

	return (
		<div>
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
				{mockHospitalRepo.map((hospitalItem) => (
					<Link href={`/hospital/${hospitalItem.hid}`} className="w-1/5">
						<Card
							hospitalName={hospitalItem.name}
							imgSrc={hospitalItem.image}
							onCompare={(hospitalName: string, rating: number) =>
								dispatchCompare({ type: 'add', hospitalName, rating })
							}
							compareList={compareList}
						/>
					</Link>
				))}
			</div>
			<div className="w-full text-xl font-medium ml-4">Hospital Lists</div>
			{Array.from(compareList).map(([hospitalName, rating]) => (
				<div
					key={hospitalName}
					onClick={() => dispatchCompare({ type: 'remove', hospitalName, rating })}
					className="ml-4"
				>
					{`${hospitalName}, Rating = ${rating}`}
				</div>
			))}
		</div>
	)
}
