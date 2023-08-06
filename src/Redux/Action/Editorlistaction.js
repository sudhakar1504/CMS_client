import { ADD_EDITOR_LIST, CLEAR_EDIT_LIST, SET_EDITOR_BOX_INDEX, SET_EDITOR_INDEX, SET_EDIT_LIST, UPDATE_EDIT_BOX, UPDATE_EDIT_BOX_ARRAY } from "../Actiontype";

export const AddEditorlist = (data) => ({
    type: ADD_EDITOR_LIST,
    payload: data
 });
export const SetEditorIndex = (id) => ({
    type: SET_EDITOR_INDEX,
    payload: id
 });
export const SetEditorBoxIndex = (id) => ({
    type: SET_EDITOR_BOX_INDEX,
    payload: id
 });
export const Update_Edit_box = (data) => ({
    type: UPDATE_EDIT_BOX,
    payload: data
 });
export const Update_Edit_box_array = (data) => ({
    type: UPDATE_EDIT_BOX_ARRAY,
    payload: data
 });
export const Clear_Edit_List = (data) => ({
    type: CLEAR_EDIT_LIST,
    payload: data
 });
export const Set_Edit_List = (data) => ({
    type: SET_EDIT_LIST,
    payload: data
 });