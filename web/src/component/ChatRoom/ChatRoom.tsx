import { useCallback, useEffect } from "react"
import { useRecoilState } from "recoil"
import { socketOff, socketOn } from "../../service/chatapp"
import messageApi from "../../service/messageApi"
import { listUserStore } from "../../store/ListUser"
import { messageStore } from "../../store/Message"
import Header from "../Header"
import InputMess from "./InputMess"
import MessageList from "./MessageList"

const ChatRoom = () => {
    const [messages, setMessage] = useRecoilState(messageStore)
    const [ listUser, setListUser] = useRecoilState(listUserStore)
    const messageListener = useCallback(async() => {
        try {
            const mess = await messageApi.getAllMessages()
            setMessage([...mess.data])
        } catch {
            //TODO: handle get all member fail
        }
    },[setMessage]);
    useEffect(() => {
        
        socketOn('msgToClient', messageListener)
    
        return () => {
            socketOff('msgToClient', messageListener);
        };
    }, [messageListener]);

    useEffect(() => {
        const loginListener = (data: any) => {
            messageListener()
            setListUser((prev) => {
                return[
                  ...prev,
                  data.data.user
                ]
              })
        };
        socketOn('connectionToClient', loginListener)
    
        return () => {
            socketOff('connectionToClient', loginListener);
        };
    }, [setListUser, messageListener]);

    useEffect(() => {
        const logoutListener = (data: any) => {
            const user = listUser.filter((item) => item !== (data.data.user))
            setListUser([...user])
            messageListener()
        };
        socketOn('disconnectedToClient', logoutListener)
    
        return () => {
            socketOff('disconnectedToClient', logoutListener);
        };
    }, [setListUser, listUser, messageListener]);


    return (
        <div>
           <Header title="Chat Room"></Header>
           <div className="chat_window">
               <div className="overflow-auto" style={{ height: 'calc(100vh - 120px)'}}>
                    <MessageList messages={messages}/>
               </div>
               <div className="fixed bottom-0 w-[57%]">
                    <InputMess/>
               </div>
               
           </div>
         </div>
     )
}
export default ChatRoom