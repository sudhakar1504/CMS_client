import Banner from "../Banner";
import Bannerone from "../Bannerone";
import Bannerthree from "../Bannerthree";
import Bannertwo from "../Bannertwo";
import Header from "../Header";
import Slider from "../Slider";

export const ComponentsList = [
    {
    component_id:1,
    component_name:'Navbar',
    category:'Navbar',
    component_element: Header ,
    component_config:[
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
    ]
},
{
    component_id:2,
    component_name:'Banner',
    category:'Banner',
    component_element:Banner ,
    component_config:[
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
    ]
},
{
    component_id:3,
    component_name:'Slider',
    category:'Slider',
    component_element:Slider,
    component_config:[
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
    ]
},
{
  component_id:4,
    component_name:'Banner one',
    category:'Banner',
    component_element:Bannerone,
    component_config:[
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
    ]
},
{    component_id:5,
  component_name:'Banner two',
  category:'Banner',
  component_element:Bannertwo,
  component_config:[
    
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
  ]
},
{
  component_id:6,
  component_name:'Banner Three',
  category:'Banner',
  component_element:Bannerthree,
  component_config:[
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
  ]
}
]