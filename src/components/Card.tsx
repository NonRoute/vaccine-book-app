import Image from 'next/image'
import InteractiveCard from './InteractiveCard'
import { Rating } from '@mui/material'

export default function Card({
	hospitalName,
	imgSrc,
	onCompare,
	compareList
}: {
	hospitalName: string
	imgSrc: string
	onCompare?: Function
	compareList?: Map<string, number>
}) {
	return (
		<InteractiveCard contentName={hospitalName}>
			<div className="w-full h-[60%] relative rounded-t-lg">
				<Image
					src={imgSrc}
					className="object-cover rounded-t-lg"
					alt="Product Picture"
					fill={true}
					objectFit="cover"
				/>
			</div>
			{onCompare && compareList ? (
				<Rating
					className="px-2 pt-3 h-[10%]"
					value={compareList.get(hospitalName) || 0}
					onClick={(e) => {
						e.stopPropagation()
					}}
					onChange={(event, newValue) => {
						onCompare(hospitalName, newValue)
					}}
					size="small"
				/>
			) : (
				''
			)}
			<div className="w-full h-[30%] p-[10px] font-semibold">{hospitalName}</div>
		</InteractiveCard>
	)
}
