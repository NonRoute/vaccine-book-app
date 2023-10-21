'use client'
import { removeBooking } from '@/redux/features/bookSlice'
import { AppDispatch, useAppSelector } from '@/redux/store'
import { useDispatch } from 'react-redux'

export default function ReservationCart() {
	const bookItem = useAppSelector((state) => state.bookSlice.bookItem)
	const dispatch = useDispatch<AppDispatch>()

	if (!bookItem) {
		return <div className="mx-8 my-5">No Vaccine Booking</div>
	}

	return (
		<div className="bg-slate-200 rounded px-8 mx-8 py-5 my-5">
			<div className="text-md">First Name : {bookItem.firstName}</div>
			<div className="text-md">Last Name : {bookItem.lastName}</div>
			<div className="text-md">National ID : {bookItem.nationalID}</div>
			<div className="text-md">Hospital : {bookItem.hospital}</div>
			<div className="text-md">Vaccination Date: {bookItem.vaccinationDate}</div>
			<button
				className="block rounded-md mt-3 bg-sky-600 hover:bg-indigo-600 px-3 py-2 text-white shadow-sm"
				onClick={() => dispatch(removeBooking(bookItem))}
			>
				Cancel Booking
			</button>
		</div>
	)
}
