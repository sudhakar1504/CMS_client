import React, { useEffect, useState } from "react";
import Editor from "./Editor";
import "./App.css";
import Editorpanel from "./Tools/Sectioneditor";
import Addsection from "./Tools/Addsection";
import Navigation from "./Navigation";
import { message } from "antd";
const App = () => {
 useEffect(() => {
  message.config({
    maxCount:1
  })
 }, [])
 
  return (
    <div>
      <Navigation />
      {/* <div className="editor">
        <Editor />
      </div>
      <Editorpanel />
      <Addsection /> */}
    </div>
  );
};

export default App;
