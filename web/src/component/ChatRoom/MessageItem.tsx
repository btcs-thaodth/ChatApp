import { useRecoilState } from "recoil";
import { currentUserStore } from "../../store/CurrentUser";

const MessageItem = ({user, message}: any) => {
    const [currentUser] = useRecoilState(currentUserStore)
    return (
        <>
        
        <li  className={`${user === currentUser ? 'col-start-2 col-end-4' : 'col-start-1 col-end-3'}`}>
            <div className="-mb-2 font-bold">{user}</div>
            <div className={`${user === currentUser ? 'col-start-2 col-end-4 bg-sky-300' : 'col-start-1 col-end-3 bg-green-400'} rounded-2xl min-h-[44px] mt-3`}>
                <div className="break-words ml-3 mr-3">{message}</div>
            </div>
            {/* <div>
                <div className="time">10:56 am</div>
            </div> */}
        </li>
        </>
    )
}
export default MessageItem;
