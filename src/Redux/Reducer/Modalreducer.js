import { SELECT_SECTION_MODAL } from "../Actiontype";
let initialState={
   addsection_modal:false,
   addpage_modal:false
}
export default (state = initialState, action) =>{
    switch (action.type) {
       case SELECT_SECTION_MODAL:
          return {...state,[action.payload?.name]:action.payload?.value};
       default:
          return state;
    }
 }