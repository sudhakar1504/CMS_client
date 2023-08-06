import { SET_WORKSPACE, UPDATE_WORKSPACE } from "../Actiontype";

export const SetWorkspace = (data) => ({
    type: SET_WORKSPACE,
    payload: data
 });
export const PutWorkspace = (data) => ({
    type: UPDATE_WORKSPACE,
    payload: data
 });