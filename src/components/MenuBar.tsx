import Image from 'next/image'
import MenuItem from './MenuItem'
import Link from 'next/link'

export default function MenuBar() {
	return (
		<div className="h-[50px] bg-white fixed top-0 left-0 right-0 z-30 border-t border-t-gray-400 flex justify-end shadow-md">
			<MenuItem title="Booking" pageRef="/booking" />
			<Link href="/">
				<Image
					src={'/img/medical-5459661_640.png'}
					className="h-full w-auto"
					alt="logo"
					width={0}
					height={0}
					sizes="100vh"
				/>
			</Link>
		</div>
	)
}
