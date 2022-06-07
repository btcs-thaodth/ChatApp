import { atom } from 'recoil';
import { Message } from '../models/Message';

export const messageStore = atom<Message[]>({
  key: 'message',
  default: [],
});
