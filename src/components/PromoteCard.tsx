'use client'
import { useState } from 'react'
import { VideoPlayer } from './VideoPlayer'
import { useWindowListener } from '@/hooks/useWindowListener'

export function PromoteCard() {
	const [playing, setPlaying] = useState(true)

	useWindowListener('contextmenu', (e) => {
		e.preventDefault()
	})

	return (
		<div className="w-[80%] shadow-lg mx-[10%] my-10 p-2 rounded-lg bg-gray-200 flex flex-row">
			<VideoPlayer vdoSrc="/video/getvaccine.mp4" isPlaying={playing}></VideoPlayer>
			<div className="m-5 flex flex-col justify-between items-start">
				Get your vaccine today
				<button
					className="block rounded-full bg-sky-600 hover:bg-indigo-600 px-8 py-2 text-white shadow-sm"
					onClick={() => {
						setPlaying((prev) => !prev)
					}}
				>
					{playing ? 'Pause' : 'Play'}
				</button>
			</div>
		</div>
	)
}
