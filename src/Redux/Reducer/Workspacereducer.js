import { SET_WORKSPACE, UPDATE_WORKSPACE } from "../Actiontype";
let initialState={
   workspace_id:null,
   workspace_list:[]
}
export default (state = initialState, action) =>{
    switch (action.type) {
       case SET_WORKSPACE:
          return {...state,workspace_id:action.payload.id,workspace_list:[...state?.workspace_list,action.payload.list]};
       case UPDATE_WORKSPACE:
          return {...state,workspace_id:action.payload.id,workspace_list:[...action.payload.list]};
       default:
          return state;
    }
 }