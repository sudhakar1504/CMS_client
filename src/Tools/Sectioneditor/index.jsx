import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Clear_Edit_List, Update_Edit_box } from "../../Redux/Action/Editorlistaction";
import { PutWorkspace, SetWorkspace } from "../../Redux/Action/Workspaceaction";
import { useNavigate, useParams } from "react-router-dom";
import { Button, ColorPicker, Input } from "antd";
import Uploadinput from "../../UIcomponents/Upload";
import {
  DeleteTwoTone,
  PlusCircleTwoTone,
  CheckCircleTwoTone,
  DoubleLeftOutlined,
  DoubleRightOutlined
} from "@ant-design/icons";
import { useState } from "react";

const Editorpanel = () => {
  const { TextArea } = Input;
  const { workspace, screen_index } = useParams();
  const Navigate = useNavigate();
  const EditConfig = useSelector((store) => store?.EditorList);
  const WorkspaceState = useSelector((store) => store.Workspace);
  const Edit_this =
    EditConfig.List[EditConfig?.select_edit_box]?.component_config;
  const Dispatch = useDispatch();
  const [Minimze, setMinimze] = useState(false)

  const ValueHandler = (e, value, index) => {
    Dispatch(Update_Edit_box({ index, value }));
  };
  const UploadHandler = (index, value) => {
    ValueHandler("", value, index);
  };
  const Array_Text_Handler = (value, M_index, sub_index,obj_index) => {
    let DuplcateArray = Edit_this[M_index].value;
    DuplcateArray[sub_index][obj_index].value= value;
    ValueHandler("", DuplcateArray, M_index);
  };
  const Array_upload = (index,sub_index,obj_index,value)=>{
    Array_Text_Handler(value,index,sub_index,obj_index)
  }

  const AddArray = (index, structure) => {
    let DuplcateArray = Edit_this[index].value;
    if (structure == "nav_link_1") {
      DuplcateArray.push([{type:'input',label:'Name and url',value:'',maxlength:300,placeholder:'Enter title'},{type:'input',label:'',value:'',maxlength:3000,placeholder:'Enter url'}]);
    }else if(structure == 'slider_1'){
      DuplcateArray.push([{type:'input',label:'Slide details',value:'',maxlength:200,placeholder:'Enter slide name'},{type:'input',label:'',value:'',maxlength:300,placeholder:'Enter slide description'},{type:'upload',maxlength:1,value:[{
        "uid": "rc-upload-1690996093173-4",
      "lastModified": 1690123713025,
      "lastModifiedDate": "2023-07-23T14:48:33.025Z",
      "name": "Explosion 2_40.png",
      "size": 880,
      "type": "image/png",
      "percent": 100,
      "originFileObj": {
        "uid": "rc-upload-1690996093173-4"
      },
      "status": "done",
      "response": {
        "name": "xxx.png",
        "status": "done",
        "url": "https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png",
        "thumbUrl": "https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
      },
      "xhr": {},
      "thumbUrl": "https://tecdn.b-cdn.net/img/Photos/Slides/img%20(22).jpg"
      }]}]);
    }

    ValueHandler("", DuplcateArray, index);
  };

  const DeleteArray = (index, subindex) => {
    let DuplcateArray = Edit_this[index].value;
    DuplcateArray?.splice(subindex, 1);
    ValueHandler("", DuplcateArray, index);
  };
 
  const SaveHandler = () => {
    if (EditConfig.List?.length) {
      let html_Code = "";
      let Screen_config = [];
      for (let i = 0; i < EditConfig.List.length; i++) {
        html_Code += document.querySelector(`.editor-div${i}`).innerHTML;
        Screen_config.push(EditConfig.List[i])
      }
      let appends = `<!DOCTYPE html>
      <html lang="en">
      
      <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Document</title>
          <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
              integrity="sha512-iecdLmaskl7CVkqkXNQ/ZH/XLlvWZOJyj7Yy7tcenmpD1ypASozpmT/E0iPtmFIB46ZmdtAc9eNBvH0H/ZpiBw=="
              crossorigin="anonymous" referrerpolicy="no-referrer" />
          <script src="https://cdn.tailwindcss.com"></script>
      
      </head>
      
      <body>
       ${html_Code}
      </body>
      <script type="text/javascript" src="./tw-elements.umd.min.js"></script>
      <script type="module">
          import { Collapse, Carousel, initTE } from "tw-elements";
      
          initTE({ Collapse, Carousel });
      </script>
      
      </html>`;
      const DuplicateWorkspace = WorkspaceState?.workspace_list;
      DuplicateWorkspace[screen_index] = {
        screen_id: DuplicateWorkspace[screen_index]?.screen_id,
        file_name: DuplicateWorkspace[screen_index]?.file_name,
        file_url: DuplicateWorkspace[screen_index]?.file_url,
        html_code: appends,
        assest: [],
        congig_list:Screen_config
      };
      Dispatch(
        PutWorkspace({
          id: workspace,
          list: DuplicateWorkspace,
        })
      );
      Dispatch(Clear_Edit_List({
        clear:'',
      }))
      Navigate(`/workspace/${workspace}`)
      // const data = { codes: appends };
      // postJSON(data);
    }
  };
  // if (EditConfig?.select_edit_box != null)
  return (
    <div className={`editor-tool fixed top-[25%] left-0 right-0 ${Minimze ? 'w-[4%]' : 'w-[25%]'}  h-[60%]  ${Minimze ? 'min-w-[10px]':'min-w-[250px]'  }   max-w-[300px] z-[999]`}>
      <div className="flex items-center justify-between py-1 px-4 border-b-2">
       {!Minimze && <h2 className="text-lg font-medium text-[#0008]">Editor </h2>}
        <button className="px-2" onClick={()=> setMinimze(!Minimze)}>
        {!Minimze ?  <DoubleLeftOutlined /> : <DoubleRightOutlined />}
        </button>
      </div>
     {!Minimze && <div className="p-3 overflow-y-auto h-[80%]">
        {Edit_this?.map((item, index) => {
          if (item?.type == "color") {
            return (
              <div
                key={index}
                className="background-edit my-2 flex items-center justify-between w-full"
              >
                <p className="font-semibold">{item?.label}</p>
                <ColorPicker
                  trigger="hover"
                  value={item?.value}
                  onChange={(e, value) => ValueHandler(e, value, index)}
                />
              </div>
            );
          }
          if (item?.type == "upload") {
            return (
              <div
                key={index}
                className="input-edit my-2 flex items-start flex-col justify-start w-full"
              >
                <p className="font-semibold">{item?.label}</p>
                <Uploadinput
                type='individual'
                  indexcount={index}
                  files={item?.value}
                  upload_on_change={UploadHandler}
                  maxcount={item?.maxlength}
                />
              </div>
            );
          }
          if (item?.type == "Array") {
         
            return item?.value?.map((arr, arrindex) => {
              return arr?.map((arr2,arr2_index)=>{
                if(arr2?.type=='input'){
                  return <div key={arr2_index} className="input-edit my-2 flex items-start flex-col justify-start w-full">
                  <p className="font-semibold flex items-center">
                    {arr2_index == 0 ? arrindex + 1+'.' + arr2?.label : ''}
                    {arrindex != 0 && arr2_index == 0 ? (
                      <Button
                        onClick={() => DeleteArray(index, arrindex)}
                        className="ant-btn-css bg-[white]"
                        shape="circle"
                        type="text"
                        icon={<DeleteTwoTone twoToneColor="#F96161" />}
                      ></Button>
                    ) : (
                      ""
                    )}
                  </p>
                  <Input
                    className="my-1"
                    showCount
                    maxLength={arr2?.maxlength}
                    value={arr2?.value}
                    onInput={(e) =>
                      Array_Text_Handler(
                        e.target.value,
                        index,
                        arrindex,
                        arr2_index
                      )
                    }
                    placeholder={arr2?.placeholder}
                  />


                  
                  {arrindex == item?.value?.length - 1 &&
                    item?.value?.length < item?.array_length && arr2_index== arr?.length - 1? (
                      <Button
                        onClick={() =>
                          AddArray(index, item?.duplicate_structrue)
                        }
                        className="ant-btn-css bg-[#fff]"
                        type="primary"
                        size="middle"
                        icon={<PlusCircleTwoTone twoToneColor="#552BFF" />}
                        shape="circle"
                      ></Button>
                    ) : (
                      ""
                    )}
                </div>
                }
                if(arr2?.type=='upload'){
                  return <div
                  key={arr2_index}
                  className="input-edit my-2 flex items-start flex-col justify-start w-full"
                >
                  <p className="font-semibold">{arr2?.label}</p>
                  <Uploadinput
                    type='array'
                    indexcount={index}
                    files={arr2?.value}
                    upload_on_change={Array_upload}
                    maxcount={arr2?.maxlength}
                    sub_index={arrindex}
                    obj_index={arr2_index}
                  />
                   {arrindex == item?.value?.length - 1 &&
                    item?.value?.length < item?.array_length && arr2_index== arr?.length - 1? (
                      <Button
                        onClick={() =>
                          AddArray(index, item?.duplicate_structrue)
                        }
                        className="ant-btn-css bg-[#fff]"
                        type="primary"
                        size="middle"
                        icon={<PlusCircleTwoTone twoToneColor="#552BFF" />}
                        shape="circle"
                      ></Button>
                    ) : (
                      ""
                    )}
                </div>
                }
              })
            });
            
          }
          if (item?.type == "input") {
            return (
              <div
                key={index}
                className="input-edit my-2 flex items-start flex-col justify-start w-full"
              >
                <p className="font-semibold flex items-center">{item?.label}</p>
                <Input
                  className="my-1"
                  showCount
                  maxLength={item?.maxlength}
                  value={item?.value}
                  onInput={(e) => ValueHandler("", e.target.value, index)}
                  placeholder={"Enter " + item?.label}
                />
              </div>
            );
          }
          if (item?.type == "textarea") {
            return (
              <div
                key={index}
                className="input-edit my-2 mb-5 flex items-start flex-col justify-start w-full"
              >
                <p className="font-semibold">Textarea</p>
                <TextArea
                  showCount
                  maxLength={item?.maxlength}
                  style={{
                    height: 120,
                    resize: "none",
                  }}
                  value={item?.value}
                  onInput={(e) => ValueHandler("", e.target.value, index)}
                  placeholder={"Enter " + item?.label}
                />
              </div>
            );
          }
        })}

      </div>}

      {!Minimze&& <div className="flex items-center pt-2 justify-center">
        <Button
          onClick={SaveHandler}
          className="ant-btn-css bg-[#552BFF]"
          type="primary"
          icon={<CheckCircleTwoTone twoToneColor="#4453f6" />}
          size={"middle"}
        >
          Save
        </Button>
      </div>}
    </div>
  );
};

export default Editorpanel;
