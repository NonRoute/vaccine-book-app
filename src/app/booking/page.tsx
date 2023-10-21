'use client'
import HospitalDateReserve from '@/components/HospitalDateReserve'
import TextField from '@mui/material/TextField'
import getUserProfile from '@/libs/getUserProfile'
import { useEffect, useState } from 'react'
import dayjs, { Dayjs } from 'dayjs'
import { BookingItem } from '../../../interfaces'
import { addBooking } from '@/redux/features/bookSlice'
import { useDispatch } from 'react-redux'
import { AppDispatch } from '@/redux/store'
import { useSession } from 'next-auth/react'

export default function Booking() {
	const { data: session } = useSession()
	if (!session || !session.user.token) return null

	const [profile, setProfile] = useState<any>(null)
	const [firstName, setFirstName] = useState<string | null>(null)
	const [lastName, setLastName] = useState<string | null>(null)
	const [nationalID, setNationalID] = useState<string | null>(null)
	const [hospital, setHospital] = useState<string | null>(null)
	const [vaccinationDate, setVaccinationDate] = useState<Dayjs | null>(null)

	useEffect(() => {
		const fetchData = async () => {
			const profile = await getUserProfile(session.user.token)
			setProfile(profile)
		}
		fetchData()
	}, [])

	if (!profile) return <div className="mx-8 my-5">Profile is Loading ...</div>

	var createdAt = new Date(profile.data.createdAt)

	const dispatch = useDispatch<AppDispatch>()

	const makeBooking = () => {
		if (firstName && lastName && nationalID && hospital && vaccinationDate) {
			const item: BookingItem = {
				firstName,
				lastName,
				nationalID,
				hospital,
				vaccinationDate: dayjs(vaccinationDate).format('YYYY/MM/DD')
			}
			dispatch(addBooking(item))
		}
	}

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
				<TextField
					fullWidth
					label="First Name"
					variant="standard"
					onChange={(e) => {
						setFirstName(e.target.value)
					}}
				/>
				<TextField
					fullWidth
					label="Last Name"
					variant="standard"
					onChange={(e) => {
						setLastName(e.target.value)
					}}
				/>
				<TextField
					fullWidth
					type="number"
					label="National ID"
					variant="standard"
					onChange={(e) => {
						setNationalID(e.target.value)
					}}
				/>
				<div className="w-fit space-y-2">
					<div className="text-md text-left text-gray-600 mt-2">Vaccination Date and Hospital</div>
					<HospitalDateReserve
						onDateChange={(value: Dayjs) => setVaccinationDate(value)}
						onHospitalChange={(value: string) => setHospital(value)}
					/>
				</div>
			</div>
			<button
				className="block rounded-md bg-sky-600 hover:bg-indigo-600 px-3 py-2 text-white shadow-sm"
				onClick={makeBooking}
			>
				Book Vaccine
			</button>
		</main>
	)
}
