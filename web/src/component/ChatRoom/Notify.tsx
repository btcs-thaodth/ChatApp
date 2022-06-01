import {FaBell} from "react-icons/fa"

const Notify = ({user, message}: any) => {
    return (
        <>
        <FaBell></FaBell>
        <p className="italic font-bold mr-1 mt-3 ml-1">
        {user} 
        </p>
        {message}
        </>
    )
}
export default Notify;
