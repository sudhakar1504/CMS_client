import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { SetModal } from '../../Redux/Action/Modalaction'
import { Modal, Tabs } from 'antd'
import { AddEditorlist } from '../../Redux/Action/Editorlistaction'
import { ComponentsList } from '../../components/Data/Data'


const Addsection = () => {
  // const SectionList = useSelector((store)=>store.Sectioncomponents);
    const Modal_data = useSelector((store)=>store.Modal_box);
    const Is_Modal = Modal_data?.addsection_modal;
   
    const Dispatch = useDispatch()
    const CloseModal_Handler=()=>{
        Dispatch(SetModal({
          name:'addsection_modal',
          value:false
        }))
    }
    const Add_to_EditorList=(data)=>{
      const id = data?.component_id;
     
      // const config=[...data?.component_config];
        Dispatch(AddEditorlist({
          id:id,
          config:id == 1 ? [
            {
              type:'color',
              label:'Background',
              value:'tomato'
            },
            {
              type:'color',
              label:'Text color',
              value:'#fff'
            },
            {
              type:'Array',
              each_array:1,
              array_length:6,
              duplicate_structrue:'nav_link_1',
              label:'Navbar link',
              value:[
                [{type:'input',label:'Name and url',value:'',maxlength:300,placeholder:'Enter title'},{type:'input',label:'',value:'',maxlength:3000,placeholder:'Enter url'}]
                // {maxlength:300,type:'input',title:'',url:'',children:[]}
              ]
            },
            {
              type:'upload',
              label:'Logo',
              maxlength:1,
              duplicate_structrue:'uploads',
              size:'80px X 84px',
              value:[{
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
                "thumbUrl": "https://tecdn.b-cdn.net/img/logo/te-transparent-noshadows.webp",
                "preview": "https://tecdn.b-cdn.net/img/logo/te-transparent-noshadows.webp"
              }]
            }
          ] : id == 2 ?[
            {
              type:'color',
              label:'Background',
              value:'tomato'
            },
            {
              type:'color',
              label:'Title',
              value:'white'
            },
            {
              type:'color',
              label:'description',
              value:'white'
            },
            {
              type:'input',
              label:'Title text',
              maxlength:200,
              value:'"Spicy life"project'
            },
           
            {
              type:'textarea',
              label:'description text',
              maxlength:400,
              value:'Nunc tincidunt vulputate elit. Mauris varius purus malesuada neque iaculis malesuada. Aenean gravida magna orci, non efficitur est porta id. Donec magna diam.'
            },
            {
              type:'color',
              label:'Button background',
              value:'red'
            },
            {
              type:'color',
              label:'Button Text',
              value:'white'
            },
            {
              type:'input',
              label:'Button text',
              maxlength:20,
              value:'Get started'
            },
            {
              type:'upload',
              label:'Banner',
              maxlength:1,
              duplicate_structrue:'uploads',
              size:'450px X 580px',
              value:[{
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
                "thumbUrl": "https://mdbcdn.b-cdn.net/img/new/ecommerce/vertical/097.jpg",
                "preview": "https://mdbcdn.b-cdn.net/img/new/ecommerce/vertical/097.jpg",
              }]
            }
          ] : id == 3 ? [
            {
              type:'Array',
              each_array:1,
              array_length:6,
              duplicate_structrue:'slider_1',
              label:'Slide',
              value:[
                [{type:'input',label:'Slide details',value:'Slide 1',maxlength:200,placeholder:'Enter slide name'},{type:'input',label:'',value:'some description ',maxlength:300,placeholder:'Enter slide description'},{type:'upload',maxlength:1,value:[{
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
                "thumbUrl": "https://tecdn.b-cdn.net/img/Photos/Slides/img%20(22).jpg",
                "preview": "https://tecdn.b-cdn.net/img/Photos/Slides/img%20(22).jpg",
                }]}],
                [{type:'input',label:'Slide details',value:'Slide 2',maxlength:200,placeholder:'Enter slide name'},{type:'input',label:'',value:'Slide 2 description',maxlength:300,placeholder:'Enter slide description'},{type:'upload',maxlength:1,value:[{
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
                "thumbUrl": "https://tecdn.b-cdn.net/img/Photos/Slides/img%20(15).jpg",
                "preview": "https://tecdn.b-cdn.net/img/Photos/Slides/img%20(15).jpg",
                }]}]
           
              ]
            },
          ] : id == 4 ? [
            {
              type:'color',
              label:'Background',
              value:'white'
            },
            {
              type:'color',
              label:'Heading color',
              value:"black"
            },
            {
              type:'input',
              label:'Heading',
              maxlength:200,
              value:"for an adventure?"
            },
            {
              type:'color',
              label:'Description color',
              value:"black"
            },
            {
              type:'textarea',
              label:'Description',
              maxlength:300,
              value:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima officia consequatur adipisci tenetur repudiandae rerum quos."
            },
          ] : id == 5 ? [
    
            {
              type:'input',
              label:'Heading',
              maxlength:200,
              value:"Are you ready for an adventure"
            },
            {
              type:'color',
              label:'Heading color',
              value:"white"
            },
            {
              type:'input',
              label:'Description',
              maxlength:200,
              value:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima officia consequatur adipisci tenetur repudiandae rerum quos."
            },
            {
              type:'color',
              label:'Description color',
              value:"white"
            },
            {
              type:'upload',
              label:'Banner',
              maxlength:1,
              duplicate_structrue:'uploads',
              size:'80px X 84px',
              value:[{
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
                "thumbUrl": "https://tecdn.b-cdn.net/img/logo/te-transparent-noshadows.webp",
                "preview": "https://mdbcdn.b-cdn.net/img/new/standard/nature/071.jpg"
              }]
            }
          ] : id == 6 ? [
            {
              type:'color',
              label:'Background',
              value:"tomato"
            },
            {
              type:'color',
              label:'Heading color',
              value:"white"
            },
            {
              type:'textarea',
              label:'Heading',
              maxlength:150,
              value:"Lorem ipsum dolor sit amet consectetur adipisicing elit."
            },
            {
              type:'input',
              label:'Button 1 text',
              maxlength:30,
              value:"Get started"
            },
            {
              type:'input',
              label:'Button 1 URL',
              maxlength:3000,
              value:""
            },
            {
              type:'color',
              label:'Button 1 BG',
              value:"white"
            },
            {
              type:'color',
              label:'Button 1 text color',
              value:"tomato"
            },
            {
              type:'input',
              label:'Button 2 text',
              maxlength:30,
              value:"Learn more"
            },
            {
              type:'input',
              label:'Button 2 URL',
              maxlength:3000,
              value:""
            },
            {
              type:'color',
              label:'Button 2 text color',
              value:"white"
            },
          ] : []
        }));
        Dispatch(SetModal({
          name:'addsection_modal',
          value:false
        }))
    }
    const items = [
      {
        key: '1',
        label: `Navbar`,
        children:
        <div style={{maxHeight:'500px',overflow:'auto'}} className='w-full'>
          {ComponentsList?.map((item,index)=>{
          let Tagname = item?.component_element;
          if(item?.category == 'Navbar')
            return <div key={index}
            className="m-3 w-[90%] py-2 border-b-2 border-[#ccc]"
            onClick={()=>Add_to_EditorList(item)}
            style={{  zoom: "100%", height: "auto",cursor:'pointer' }}
          >
           <div style={{pointerEvents:'none'}} className='w-full'>
           <Tagname config={item?.component_config}/>
           </div>
          </div>
        })}
        </div>
      },
      {
        key: '2',
        label: `Banner`,
        children:
        <div style={{maxHeight:'500px',overflow:'auto'}} className='w-full'>
        {ComponentsList?.map((item,index)=>{
          let Tagname = item?.component_element;
          if(item?.category == 'Banner')
            return <div key={index}
            className="m-3 w-[90%]  py-2 border-b-2 border-[#ccc]"
            onClick={()=>Add_to_EditorList(item)}
            style={{  zoom: "100%", height: "auto",cursor:'pointer' }}
          >
           <div style={{pointerEvents:'none'}}>
           <Tagname config={item?.component_config}/>
           </div>
          </div>
        })}
        </div>,
      },
      {
        key: '3',
        label: `Slider`,
        children: <div style={{maxHeight:'500px',overflow:'auto'}} className='w-full'>
          {ComponentsList?.map((item,index)=>{
          let Tagname = item?.component_element;
          if(item?.category == 'Slider')
            return <div key={index}
            className="m-3  w-[90%] py-2 border-b-2 border-[#ccc]"
            onClick={()=>Add_to_EditorList(item)}
            style={{  zoom: "100%", height: "auto",cursor:'pointer' }}
          >
           <div style={{pointerEvents:'none'}}>
           <Tagname config={item?.component_config}/>
           </div>
          </div>
        })}
        </div>,
      },
    ];
    const onChange = (key) => {
    };
  return (
    <div>
        <Modal
        title="Select section"
        centered
        open={Is_Modal}
        footer={false}
        onOk={CloseModal_Handler}
        onCancel={CloseModal_Handler}
        width={1000}
      >

        <Tabs defaultActiveKey="1" items={items} onChange={onChange} className='min-h-[550px]'/>
    
      </Modal>
    </div>
  )
}

export default Addsection