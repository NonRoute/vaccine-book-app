import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { BookingItem } from '../../../interfaces'

type BookState = {
	bookItem: BookingItem | null
}

const initialState: BookState = { bookItem: null }
export const bookSlice = createSlice({
	name: 'book',
	initialState,
	reducers: {
		addBooking: (state, action: PayloadAction<BookingItem>) => {
			state.bookItem = action.payload
		},
		removeBooking: (state, action: PayloadAction<BookingItem>) => {
			state.bookItem = null
		}
	}
})

export const { addBooking, removeBooking } = bookSlice.actions
export default bookSlice.reducer
