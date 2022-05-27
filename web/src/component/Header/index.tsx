interface Props{
    title: string
}
const Header = ({title}: Props) => {
    return(
        <div className="flex justify-between flex-shrink-0 px-8 py-4 border-b border-gray-300">
				<h1 className="text-xl font-semibold">{title}</h1>
				{/* <button className="flex items-center h-8 px-2 text-sm bg-gray-300 rounded-sm hover:bg-gray-400">New post</button> */}
			</div>
    )
}
export default Header;