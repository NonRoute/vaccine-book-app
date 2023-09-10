'use client'
import Image from 'next/image'
import { useState } from 'react'

export default function Banner() {
	const covers = ['/img/cover1.jpg', '/img/cover2.jpg', '/img/cover3.jpg', '/img/cover4.jpg']
	const [index, setIndex] = useState(0)

	return (
		<div
			className="p-[5px] m-0 w-[100vw] h-[80vh] relative"
			onClick={() => {
				setIndex((prev) => prev + 1)
			}}
		>
			<Image src={covers[index % 4]} alt="cover" fill={true} priority objectFit="cover" />
			<div className="relative top-[100px] z-20 text-center">
				<h1 className="text-4xl font-medium">Vaccine Service</h1>
				<h3 className="text-xl font-serif">Build a shield of protection together</h3>
			</div>
		</div>
	)
}
