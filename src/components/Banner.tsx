import Image from 'next/image'

export default function Banner() {
	return (
		<div className="p-[5px] m-0 w-[100vw] h-[80vh] relative">
			<Image src={'/img/cover.jpg'} alt="cover" fill={true} priority objectFit="cover" />
			<div className="relative top-[100px] z-20 text-center">
				<h1 className="text-4xl font-medium">Vaccine Service</h1>
				<h3 className="text-xl font-serif">Build a shield of protection together</h3>
			</div>
		</div>
	)
}
