import { Header_Set } from "../Actiontype";

export const SetHeader = (data) => ({
    type: Header_Set,
    payload: data
 });