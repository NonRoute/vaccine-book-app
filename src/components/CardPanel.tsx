'use client'
import { useReducer } from 'react'
import Card from './Card'

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
				<Card
					hospitalName="Chulalongkorn Hospital"
					imgSrc="/img/chula.jpg"
					onCompare={(hospitalName: string, rating: number) =>
						dispatchCompare({ type: 'add', hospitalName, rating })
					}
					compareList={compareList}
				/>
				<Card
					hospitalName="Rajavithi Hospital"
					imgSrc="/img/rajavithi.jpg"
					onCompare={(hospitalName: string, rating: number) =>
						dispatchCompare({ type: 'add', hospitalName, rating })
					}
					compareList={compareList}
				/>
				<Card
					hospitalName="Thammasat University Hospital"
					imgSrc="/img/thammasat.jpg"
					onCompare={(hospitalName: string, rating: number) =>
						dispatchCompare({ type: 'add', hospitalName, rating })
					}
					compareList={compareList}
				/>
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
