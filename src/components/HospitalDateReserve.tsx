'use client'
import { DatePicker } from '@mui/x-date-pickers'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { Select, MenuItem } from '@mui/material'
import InputLabel from '@mui/material/InputLabel'
import FormControl from '@mui/material/FormControl'

export default function HospitalDateReserve() {
	return (
		<div className="bg-slate-100 rounded-lg space-x-10 space-y-2 w-fit px-10 py-5 flex flex-row justify-center items-center">
			<LocalizationProvider dateAdapter={AdapterDayjs}>
				<DatePicker className="bg-white" />
			</LocalizationProvider>

			<FormControl>
				<InputLabel>Hospital</InputLabel>
				<Select variant="standard" name="hospital" id="hospital" label="Hospital" className="h-[2em] w-[260px]">
					<MenuItem value="chula">Chulalongkorn Hospital</MenuItem>
					<MenuItem value="rajavithi">Rajavithi Hospital</MenuItem>
					<MenuItem value="thammasat">Thammasat University Hospital</MenuItem>
				</Select>
			</FormControl>
		</div>
	)
}
