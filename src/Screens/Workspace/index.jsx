import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom'
import { SetWorkspace } from '../../Redux/Action/Workspaceaction';
import Workspacebody from '../../UIcomponents/workspacebody';

const Workspace = () => {
    const {id} = useParams();
    const Dispatch=useDispatch();
    const Navigate = useNavigate()
    const [Values, setValues] = useState({
      title:'',
      file_name:''
    })
    const WorkspaceState = useSelector((store)=>store.Workspace);

    useEffect(() => {
      // Dispatch(SetWorkspace({
      //   id,
      //   list:{
      //     screen_id:1,
      //     file_name:'index.html',
      //     title:'Home',
      //     html_code:'',
      //     assest:[]
      //   }
      // }))
    }, [])
    
  return (
    <div className='w-full h-full'>        <Workspacebody />
    </div>
  )
}

export default Workspace