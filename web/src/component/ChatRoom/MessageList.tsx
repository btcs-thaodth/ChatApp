import React from 'react';
import MessageItem from "./MessageItem";
import Notify from './Notify';
interface Props{
    messages: any,
}
const MessageList = ({messages} :Props) => {
    return (
        <ul>
            {messages.map((item:any) => (
                <div key={item.id} >
                {item.label === 'message' ? (
                    <div className="grid grid-cols-3 gap-4">
                    <MessageItem user={item.user} message={item.message}></MessageItem>
                </div>
                ): (
                    <div className="flex justify-center items-center">
                        <Notify user={item.user} message={item.message}></Notify>
                    </div>
                )}
                </div>
            ))}
            
        </ul>
    )
}
export default MessageList;