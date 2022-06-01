import { useEffect, useState } from "react"
import { useRecoilState } from "recoil"
import { socketOff, socketOn } from "../../server/chatapp"
import { listUserStore } from "../../store/ListUser"
import Header from "../Header"
import InputMess from "./InputMess"
import MessageList from "./MessageList"

interface Message{
    id: string,
    user: string,
    message: string,
    label: string
}
const ChatRoom = () => {
    const [messages, setMessage] = useState<Message[]>([])
    const [ , setListUser] = useRecoilState(listUserStore)
    console.log('aaaa', messages)
    useEffect(() => {
        const messageListener = (data: any) => {
            setMessage((prev)=> {
                return[
                    ...prev,
                    {
                        id: data.data.id,
                        user: data.data.user,
                        message: data.data.message,
                        label: 'message'
                    }
                ];
            })
        };
        socketOn('msgToClient', messageListener)
    
        return () => {
            socketOff('msgToClient', messageListener);
        };
    }, []);

    useEffect(() => {
        const loginListener = (data: any) => {
            setMessage((prev)=> {
                return[
                    ...prev,
                    {
                        id: data.data.id,
                        user: data.data.user,
                        message: 'joined the chat room',
                        label: 'connected'
                    }
                ];
            })
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
    }, [setListUser]);

    useEffect(() => {
        const logoutListener = (data: any) => {
            setMessage((prev)=> {
                return[
                    ...prev,
                    {
                        id: data.data.id,
                        user: data.data.user,
                        message: 'has left the chat room',
                        label: 'disconnected'
                    }
                ];
            })
        };
        socketOn('disconnectedToClient', logoutListener)
    
        return () => {
            socketOff('disconnectedToClient', logoutListener);
        };
    }, []);


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