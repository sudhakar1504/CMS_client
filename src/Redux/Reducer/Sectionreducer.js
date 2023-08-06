import Banner from "../../components/Banner";
import Header from "../../components/Header";
import Slider from "../../components/Slider";

let initialState=[
    {
    component_id:1,
    component_element: Header ,
},
{
    component_id:2,
    component_name:'Banner',
    component_element:Banner ,
    component_config:[
      {
        type:'color',
        label:'Background',
        value:'#ff79'
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
          "thumbUrl": "https://mdbcdn.b-cdn.net/img/new/ecommerce/vertical/097.jpg"
        }]
      }
    ]
},{
    component_id:3,
    component_name:'Slider',
    component_element:Slider,
    component_config:[
      {
        type:'Array',
        each_array:1,
        array_length:6,
        duplicate_structrue:'slider_1',
        label:'Slide',
        value:[
          [{type:'input',label:'Slide details',value:'',maxlength:200,placeholder:'Enter slide name'},{type:'input',label:'',value:'',maxlength:300,placeholder:'Enter slide description'},{type:'upload',maxlength:1,value:[{
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
          }]}],
          [{type:'input',label:'Slide details',value:'',maxlength:200,placeholder:'Enter slide name'},{type:'input',label:'',value:'',maxlength:300,placeholder:'Enter slide description'},{type:'upload',maxlength:1,value:[{
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
          "thumbUrl": "https://tecdn.b-cdn.net/img/Photos/Slides/img%20(15).jpg"
          }]}]
     
        ]
      },
    ]
}
]
export default (state = initialState, action) =>{
    switch (action.type) {
       default:
          return state;
    }
 }