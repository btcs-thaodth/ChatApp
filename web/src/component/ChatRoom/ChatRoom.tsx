import { useEffect, useState } from "react"
import Header from "../Header"
import InputMess from "./InputMess"
import MessageList from "./MessageList"
import { io } from "socket.io-client";

const socket = io("http://localhost:3001/")
interface Message{
    id: string,
    user: string,
    message: string
}
const ChatRoom = () => {
    const [messages, setMessage] = useState<Message[]>([])
    useEffect(() => {
        const messageListener = (data: any) => {
            setMessage((prev)=> {
                return[
                    ...prev,
                    {
                        id: data.data.id,
                        user: data.data.user,
                        message: data.data.message
                    }
                ];
            })
        };
        socket.on('msgToClient', messageListener);
    
        return () => {
          socket.off('msgToClient', messageListener);
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