import React, { useState } from 'react';
import { FileAddOutlined,EditOutlined,FileZipOutlined} from '@ant-design/icons';
import { Button, Layout, Menu, theme } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { SetModal } from '../../Redux/Action/Modalaction';
import { useNavigate, useParams } from 'react-router-dom';
import { Set_Edit_List } from '../../Redux/Action/Editorlistaction';
import FileSaver from 'file-saver';
const { Header, Content, Footer, Sider } = Layout;
const Workspacebody = () => {
    const {
        token: { colorBgContainer },
    } = theme.useToken();
    const {id} = useParams();
    const Dispatch = useDispatch()
    const Navigate = useNavigate();
  const WorkspaceState = useSelector((store)=>store.Workspace);
  const [Activenave, setActivenave] = useState(0);
const NavChange = (e)=>{
    setActivenave(e.key)
}
const EditPage = ()=>{
    Dispatch(Set_Edit_List({value:WorkspaceState?.workspace_list[Activenave]?.congig_list}))
    Navigate(`/editor/${id}/${Activenave}`);
}
const AddPage_Handler= ()=>{
    Dispatch(SetModal({
        name:'addpage_modal',
        value:true
    }))
}

async function postJSON(data,index) {
    try {
      const response = await fetch("http://localhost:7777/", {
        method: "POST", // or 'PUT'
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();
      if(index < WorkspaceState?.workspace_list?.length-1){
        Export_Handler(index+1)
      }else{
          Download_Zip()
      }
    } catch (error) {
      console.error("Error:", error);
    }
  }
const Download_Zip = async()=>{
  try {
    const response = await fetch("http://localhost:7777/zip", {
      method: "GET", // or 'PUT'
      headers: {
        "Content-Type": "application/json",
      },
    });

    const result = await response.blob();
    FileSaver.saveAs(result,'Build.zip')
  } catch (error) {
    console.error("Error:", error);
  }
}
const Export_Handler=(index)=>{
const data = { codes: WorkspaceState?.workspace_list[index]?.html_code,file_name:WorkspaceState?.workspace_list[index]?.file_url };
postJSON(data,index);
}
  return (
    <Layout className='h-[100vh] w-full'>
      <Sider theme='light'
        breakpoint="lg"
        collapsedWidth="0"
        onBreakpoint={(broken) => {
          console.log(broken);
        }}
        onCollapse={(collapsed, type) => {
          console.log(collapsed, type);
        }}
      >
        <div className="demo-logo-vertical" />
        <Menu
          theme="light"
          mode="inline"
          selectedKeys={[String(Activenave)]}
        //   onChange={NavChange}
        onClick={NavChange}
          items={WorkspaceState?.workspace_list.map(
            (item, index) => ({
              key: String(index),
              icon: '',
              label: item?.file_name,
            }),
          )}
        />
       <Button onClick={AddPage_Handler} type="primary" className='ant-btn-css bg-[#2c64e3] my-2 w-[90%] mx-auto'  icon={<FileAddOutlined />} size={'middle'}>
            Add page
          </Button>
       {WorkspaceState?.workspace_list?.length ? <Button onClick={()=>Export_Handler(0)} type="primary" className='ant-btn-css bg-[#000000] my-2 w-[90%] mx-auto'  icon={<FileZipOutlined />} size={'middle'}>
           Export as ZIP
          </Button> : ''} 
      </Sider>
      <Layout className='h-[100vh] overflow-y-auto'>
            <div className='w-full'>
             {WorkspaceState?.workspace_list?.length ?   <div className='flex p-3 sticky top-0 bg-[white] justify-end'>
                    <Button onClick={EditPage} type='primary' className='ant-btn-css bg-[#2c64e3]' icon={<EditOutlined />}> Edit</Button>
                </div> : ''}

                <div dangerouslySetInnerHTML={{__html: WorkspaceState?.workspace_list[Activenave]?.html_code}}>
                   
                </div>
            </div>
      </Layout>
    </Layout>
  );
};
export default Workspacebody;