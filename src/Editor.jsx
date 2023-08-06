import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { SetModal } from "./Redux/Action/Modalaction";
import { SetEditorBoxIndex, SetEditorIndex } from "./Redux/Action/Editorlistaction";
import { ComponentsList } from "./components/Data/Data";

const Editor = () => {
  const EditorList = useSelector((store)=>store.EditorList);
  const SectionList = useSelector((store)=>store.Sectioncomponents);
  const Dispatch = useDispatch()
  const Addsection = (id) => {
    Dispatch(SetEditorIndex(id))
    Dispatch(SetModal({
      name:'addsection_modal',
      value:true
    }))
  };
  const EditSection =(id)=>{
    Dispatch(SetEditorBoxIndex(id));
  }
  return (
    <div>
      {EditorList?.List?.length == 0 ? (
        <button className="add-section" onClick={()=>Addsection(0)}>
          Add section
        </button>
      ) : (
        ""
      )}
      {EditorList?.List?.length > 0
        ? EditorList?.List?.map((item, index) => {
          const Element = ComponentsList?.filter((filt,filindex)=>{
            return item?.component_id == filt.component_id
           })
           let Tagname = Element[0]?.component_element;
            return (
              <div key={index} className="editor-section-holder">
                <div className="editor-section-wrapper" onDoubleClick={()=>EditSection(index)}>
                  {/* <div className="editor-wrapper-btn"> */}
                    <button className="delete-section-btn">Delete section</button>
                  {/* </div> */}
                  <div className={`editor-div${index}`}> 

                   <Tagname config={item?.component_config}/>
                  </div>
                   
                </div>
                <div className="editor-add-section">
                  <button onClick={()=>Addsection(index+1)}>Add section</button>
                </div>
              </div>
            );
          })
        : ""}
    </div>
  );
};

export default Editor;
