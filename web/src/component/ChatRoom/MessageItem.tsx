import { useRecoilState } from "recoil";
import { currentUserStore } from "../../store/CurrentUser";
interface Props {
    user: string,
    message: string,
    time: Date
}
const MessageItem = ({user, message, time}: Props) => {
    const [currentUser] = useRecoilState(currentUserStore)
    const timeSendMess = new Date(time)
    const hours = timeSendMess.getHours() + ':' + timeSendMess.getMinutes()
    return (
        <>
        
        <li  className={`${user === currentUser ? 'col-end-4' : 'col-start-1 col-end-3'} mt-5 ml-3 mr-3`}>
            <div className={`${user === currentUser ? 'float-right' : 'float-left'} font-bold -mt-3`}>{user}</div>
            <div className={`${user === currentUser ? 'bg-sky-300' : 'bg-green-400'} rounded-2xl min-h-[44px] mt-3 max-w-max`}>
                <div className="break-words ml-3 mr-3">{message}</div>
            </div>
            <div className={`${user === currentUser ? 'float-right' : 'float-left'} break-words ml-1 mr-3 text-[12px]`}>{hours}</div>
        </li>
        </>
    )
}
export default MessageItem;
