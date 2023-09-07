import Image from 'next/image'
import InteractiveCard from './InteractiveCard'

export default function Card({ hospitalName, imgSrc }: { hospitalName: string; imgSrc: string }) {
	return (
		<InteractiveCard contentName={hospitalName}>
			<div className="w-full h-[70%] relative rounded-t-lg">
				<Image
					src={imgSrc}
					className="object-cover rounded-t-lg"
					alt="Product Picture"
					fill={true}
					objectFit="cover"
				/>
			</div>
			<div className="w-full h-[30%] p-[10px] font-semibold">{hospitalName}</div>
		</InteractiveCard>
	)
}
