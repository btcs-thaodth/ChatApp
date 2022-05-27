import { Button } from "antd";
import { useState } from "react";
import { useRecoilState } from "recoil";
import { io } from "socket.io-client";
import { currentUserStore } from "../../store/CurrentUser";
import { v4 as uuid } from 'uuid';

const socket = io("http://localhost:3001/")
const InputMess = () => {
    const [currentUser] = useRecoilState(currentUserStore)
    const [message, setMessage] = useState('')
    const handleInput = (event:any) => {
        setMessage(event.target.value);
    }
    const handleSubmitMess = () => {
        socket.emit('msgToServer', {id: uuid(), message: message, user: currentUser})
        setMessage('')
    }
    return (
        <div>
            <div className="flex justify-between items-center">
                <input type="text" value={message} className="p-2 bg-transparent border border-gray-500 rounded w-full" placeholder="Type your message here" onChange={(event) => handleInput(event)} />
                <Button size="large" className='text' onClick={handleSubmitMess}>Send</Button>
            </div>
        </div>
     )
}
export default InputMess;