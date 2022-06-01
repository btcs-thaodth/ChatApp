import { Button } from "antd";
import { useState } from "react";
import { useRecoilState } from "recoil";
import { currentUserStore } from "../../store/CurrentUser";
import { v4 as uuid } from 'uuid';
import { sendInputMess } from "../../server/chatapp";

const InputMess = () => {
    const [currentUser] = useRecoilState(currentUserStore)
    const [message, setMessage] = useState('')
    const handleInput = (event:any) => {
        setMessage(event.target.value);
    }
    const handleSubmitMess = () => {
        sendInputMess(uuid(),message,currentUser)
        setMessage('')
    }
    const sendMessOn = (event: any) => {
        if (event.key === 'Enter'){
            handleSubmitMess()
        }
    }
    return (
        <div>
            <div className="flex justify-between items-center">
                <input type="text" value={message} className="p-2 bg-transparent border border-gray-500 rounded w-full" placeholder="Type your message here" onChange={(event) => handleInput(event)} onKeyDown={event => sendMessOn(event)} />
                <Button size="large" className='text' onClick={handleSubmitMess}>Send</Button>
            </div>
        </div>
     )
}
export default InputMess;