import Image from 'next/image'
import MenuItem from './MenuItem'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/app/api/auth/[...nextauth]/route'
import { Link } from '@mui/material'

export default async function MenuBar() {
	const session = await getServerSession(authOptions)

	return (
		<div className="h-[50px] bg-white fixed top-0 left-0 right-0 z-30 border-t border-t-gray-400 flex justify-end shadow-md">
			{session ? (
				<Link href="/api/auth/signout">
					<div className="w-[120px] h-full text-center flex justify-center items-center font-sans text-sm text-cyan-600 hover:bg-gray-200 absolute left-0">
						Sign-Out of {session.user?.name}
					</div>
				</Link>
			) : (
				<Link href="/api/auth/signin">
					<div className="w-[120px] h-full text-center flex justify-center items-center font-sans text-sm text-cyan-600 hover:bg-gray-200 absolute left-0">
						Sign-In
					</div>
				</Link>
			)}
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
