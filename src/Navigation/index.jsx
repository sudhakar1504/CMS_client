import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../Screens/Home'
import Workspace from '../Screens/Workspace'
import Editor from '../Editor'
import Addsection from '../Tools/Addsection'
import Editorpanel from '../Tools/Sectioneditor'
import Pageaddmodal from '../UIcomponents/Pageaddmodal'

const Navigation = () => {
  return (
    <div>
        <Routes>
            <Route path='/'>
                <Route index element={<Home />}/>
                <Route path='workspace/:id' element={<div><Workspace /> <Pageaddmodal /></div> }/>
                <Route path='editor/:workspace/:screen_index' element={<div> <Addsection />
        <Editorpanel /> <Editor />  </div>}/>

            </Route>
       
        </Routes>
       
    </div>
  )
}

export default Navigation