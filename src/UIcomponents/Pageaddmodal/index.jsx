import { Button, Input, Modal, message } from 'antd'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { SetModal } from '../../Redux/Action/Modalaction';
import { SetWorkspace } from '../../Redux/Action/Workspaceaction';
import { useParams } from 'react-router-dom';

const Pageaddmodal = () => {
    const Modal_data = useSelector((store)=>store.Modal_box);
    const WorkspaceState = useSelector((store)=>store.Workspace);
    const {id} = useParams();
    const Dispatch = useDispatch();
    const [Values, setValues] = useState({
        page_name:'',
        page_url:''
      })
    const SubmitHandler=()=>{
        if(Values?.page_name == ''){
            message.open({
                type:'warning',
                content:'Kindly enter page name',
            })
            return
        }
        if(Values?.page_url == ''){
            message.open({
                type:'warning',
                content:'Kindly enter page url',
            })
            return
        }
        Dispatch(SetWorkspace({
            id,
            list:{
              screen_id:WorkspaceState?.workspace_list?.length+1,
              file_name:Values?.page_name,
              file_url:Values?.page_url,
              html_code:'',
              assest:[],
              congig_list:[],
            }
          }))
          CloseModal_Handler()
    }
    const CloseModal_Handler=()=>{
        setValues((prev)=>({...prev,page_name:"",page_url:''}))
        Dispatch(SetModal({
            name:'addpage_modal',
            value:false
        }))

    }
  return (
    <div>
         <Modal
        title="Page details"
        centered
        open={Modal_data?.addpage_modal}
        onCancel={CloseModal_Handler}
        width={500}
        footer={[ <Button onClick={SubmitHandler} type='primary' className='bg-[green]'>Save</Button> ]}
      >
        <Input placeholder='Enter page name' value={Values?.page_name} className='my-2' maxLength={100} showCount onInput={(e)=>setValues((prev)=>({...prev,page_name:e.target.value}))}/>
        <Input placeholder='Enter page url' maxLength={100} showCount value={Values?.page_url} onInput={(e)=>setValues((prev)=>({...prev,page_url:e.target.value}))}/>
      </Modal>
    </div>
  )
}

export default Pageaddmodal