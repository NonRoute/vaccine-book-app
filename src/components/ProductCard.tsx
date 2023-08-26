import Image from 'next/image'

export default function ProductCard({ hospitalName, imgSrc }: { hospitalName: string; imgSrc: string }) {
	return (
		<div className="w-1/5 h-[300px] rounded-lg shadow-lg">
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
		</div>
	)
}
