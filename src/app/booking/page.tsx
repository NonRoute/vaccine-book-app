import HospitalDateReserve from '@/components/HospitalDateReserve'
import TextField from '@mui/material/TextField'
import { getServerSession } from 'next-auth'
import { authOptions } from '../api/auth/[...nextauth]/route'
import getUserProfile from '@/libs/getUserProfile'

export default async function Booking() {
	const session = await getServerSession(authOptions)
	if (!session || !session.user.token) return null

	const profile = await getUserProfile(session.user.token)
	var createdAt = new Date(profile.data.createdAt)

	return (
		<main className="w-[100%] flex flex-col items-center space-y-4">
			<div className="bg-slate-100 rounded-lg p-4 m-4">
				<div className="text-center font-semibold text-2xl">User Profile</div>
				<table className="table-auto border-separate border-spacing-4">
					<tbody>
						<tr>
							<td>Name</td>
							<td>{profile.data.name}</td>
						</tr>
						<tr>
							<td>Email</td>
							<td>{profile.data.email}</td>
						</tr>
						<tr>
							<td>Tel.</td>
							<td>{profile.data.tel}</td>
						</tr>
						<tr>
							<td>Member Since</td>
							<td>{createdAt.toString()}</td>
						</tr>
					</tbody>
				</table>
			</div>
			<div className="text-center font-semibold text-2xl mt-4">Booking</div>
			<div className="w-fit space-y-4">
				<TextField fullWidth label="First Name" variant="standard" />
				<TextField fullWidth label="Last Name" variant="standard" />
				<TextField fullWidth type="number" label="National ID" variant="standard" />
				<div className="w-fit space-y-2">
					<div className="text-md text-left text-gray-600 mt-2">Vaccination Date and Hospital</div>
					<HospitalDateReserve />
				</div>
			</div>
			<button className="block rounded-md bg-sky-600 hover:bg-indigo-600 px-3 py-2 text-white shadow-sm">
				Check Availability
			</button>
		</main>
	)
}
