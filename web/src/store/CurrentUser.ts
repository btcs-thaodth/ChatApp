import { atom } from 'recoil';

export const currentUserStore = atom<string | undefined>({
  key: 'currentUser',
  default: undefined,
});
