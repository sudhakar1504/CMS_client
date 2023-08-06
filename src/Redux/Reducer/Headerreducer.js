import { Header_Set } from "../Actiontype";
let initialState={
   1:{
    bg: "#ccc",
    nav_list: [
      {
        title: "Home",
        url: "Home.html",
      },
      {
        title: "About",
        url: "About.html",
      },
      {
        title: "Blog",
        url: "Blog.html",
      },
      {
        title: "Contact",
        url: "Contact.html",
      },
      {
        title: "Social",
        url: "Social.html",
      },
    ],
    nav_text_color: "white",
  }
}
export default (state = initialState, action) =>{
    switch (action.type) {
       case Header_Set:
          return state[1]=action.payload;
       default:
          return state;
    }
 }