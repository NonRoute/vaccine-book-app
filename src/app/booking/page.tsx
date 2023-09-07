import HospitalDateReserve from '@/components/HospitalDateReserve'
import TextField from '@mui/material/TextField'

export default function Booking() {
	return (
		<main className="w-[100%] flex flex-col items-center space-y-4">
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
