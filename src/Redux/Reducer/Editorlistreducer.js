import { ADD_EDITOR_LIST, CLEAR_EDIT_LIST, SET_EDITOR_BOX_INDEX, SET_EDITOR_INDEX, SET_EDIT_LIST, UPDATE_EDIT_BOX } from "../Actiontype";
let initialState={
   selected_index:null,
   select_edit_box:null,
   List:[]
};


export default (state = initialState, action) =>{
   
    switch (action.type) {
       case ADD_EDITOR_LIST:
               state.List?.splice(state?.selected_index,0,{
                  component_id:action.payload.id,
                  component_config:action.payload.config,
              })
          return {...state,selected_index:null,List:[...state?.List]};
       case SET_EDITOR_INDEX:
             
          return {...state,selected_index:action.payload};
       case SET_EDITOR_BOX_INDEX:
          return {...state,select_edit_box:action.payload};
       case CLEAR_EDIT_LIST:
          return {...state,select_edit_box:null,selected_index:null,List:[]};
       case SET_EDIT_LIST:
          return {...state,select_edit_box:null,selected_index:null,List:action.payload.value};
       case UPDATE_EDIT_BOX:
         let Duplicate = state.List;
         let config_duplicate = Duplicate[state?.select_edit_box].component_config;
         config_duplicate[action.payload.index].value = action.payload.value;

         Duplicate[state?.select_edit_box]={...Duplicate[state?.select_edit_box],component_config:[...config_duplicate]
         }
            
          return {...state,List:[...Duplicate]};
       default:
          return state;
    }
 }