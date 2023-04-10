import { atom } from "recoil";

export const globalStyle = atom({
    key: 'globalStyle',
    default: {
        color: 'blue'
    }
});
