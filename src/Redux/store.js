
import { combineReducers, createStore } from "redux";
import Headerreducer from "./Reducer/Headerreducer";
import Modalreducer from "./Reducer/Modalreducer";
import Sectionreducer from "./Reducer/Sectionreducer";
import Editorlistreducer from "./Reducer/Editorlistreducer";
import Workspacereducer from "./Reducer/Workspacereducer";
 
const rootReducer = combineReducers({
   Header_config:Headerreducer,
   Modal_box:Modalreducer,
   Sectioncomponents:Sectionreducer,
   EditorList:Editorlistreducer,
   Workspace:Workspacereducer
});
 
export default createStore(rootReducer);