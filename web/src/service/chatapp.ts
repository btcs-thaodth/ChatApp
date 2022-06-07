import { io } from "socket.io-client";

let url = ''
if(process.env.REACT_APP_SERVER){
    url = process.env.REACT_APP_SERVER
}
const socket = io(url)

export function sendInputMess(message: string, user?: string){
    socket.emit('msgToServer', {message: message, user: user, label: 'message'})
}

export function handleLoginLogout(title:string, message: string, user?: string, label?: string){
    socket.emit(title, {message: message, user: user, label: label})
}

export function socketOn(message: string, handleFunction?: any){
    socket.on(message, handleFunction);
}

export function socketOff(message: string, handleFunction?: any){
    socket.off(message, handleFunction);
}