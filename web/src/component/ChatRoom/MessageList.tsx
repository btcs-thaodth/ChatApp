import React, { useEffect, useRef } from 'react';
import { Message } from '../../models/Message';
import MessageItem from "./MessageItem";
import Notify from './Notify';
interface Props{
    messages: Message[],
}
const MessageList = ({messages} :Props) => {
    const messageEndRef = useRef<HTMLDivElement>(null)
    useEffect(() => {
        messageEndRef.current?.scrollIntoView();
    },[messages])
    return (
        <ul>
            {messages.map((item:Message) => (
                <div key={item.id} >
                {item.label === 'message' ? (
                    <div className="grid grid-cols-3 gap-4">
                    <MessageItem user={item.user} message={item.message} time={item.createdAt}></MessageItem>
                </div>
                ): (
                    <div className="flex justify-center items-center">
                        <Notify user={item.user} message={item.message}></Notify>
                    </div>
                )}
                </div>
            ))}
            <div ref={messageEndRef}></div>
        </ul>
    )
}
export default MessageList;