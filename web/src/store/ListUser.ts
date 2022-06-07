import { atom } from 'recoil';

export const listUserStore = atom<string[]>({
  key: 'listUser',
  default: [],
});
