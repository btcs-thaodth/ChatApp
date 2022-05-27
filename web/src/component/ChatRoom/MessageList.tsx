import React from 'react';
import MessageItem from "./MessageItem";

interface Props{
    messages: any,
}
const MessageList = ({messages} :Props) => {
    return (
        <ul>
            {messages.map((item:any) => (
                <div className="grid grid-cols-3 gap-4">
                    <MessageItem key={item.id} user={item.user} message={item.message}></MessageItem>
                </div>
            ))}
        </ul>
    )
}
export default MessageList;