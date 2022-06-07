import { io } from "socket.io-client";

let url = ''
if(process.env.REACT_APP_SERVER){
    url = process.env.REACT_APP_SERVER
}
console.log('aaaa', url)
const socket = io(url)

export function sendInputMess(id: string, message: string, user?: string){
    socket.emit('msgToServer', {id: id, message: message, user: user})
}

export function handleLoginLogout(title:string, id:string, user?: string){
    socket.emit(title, {id: id, user: user})
}

export function socketOn(message: string, handleFunction?: any){
    socket.on(message, handleFunction);
}

export function socketOff(message: string, handleFunction?: any){
    socket.off(message, handleFunction);
}