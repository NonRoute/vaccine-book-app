import Link from 'next/link'

export default function MenuItem({ title, pageRef }: { title: string; pageRef: string }) {
	return (
		<Link
			href={pageRef}
			className="w-[120px] h-full text-center flex justify-center items-center font-sans text-sm text-gray-600 hover:bg-gray-200"
		>
			{title}
		</Link>
	)
}
