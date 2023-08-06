import React from "react";

const Banner = ({config}) => {
   async function fileListToBase64(fileList) {
    // create function which return resolved promise
    // with data:base64 string
    function getBase64(file) {
      const reader = new FileReader()
      return new Promise(resolve => {
        reader.onload = ev => {
          resolve(ev.target.result)
        }
        reader.readAsDataURL(file)
      })
    }
    // here will be array of promisified functions
    const promises = []
  
    // loop through fileList with for loop
    // for (let i = 0; i < fileList.length; i++) {
      promises.push(getBase64(fileList))
    // }
  let url = ''
  Promise.all(promises)?.then((data)=>url= data[0])
    // array with base64 strings
    return await url
  }

  return (
    <div class=" my-24 mx-auto md:px-6">
      <section class="mb-32 text-center md:text-left">
        <div class={`block rounded-lg  shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] bg-[${config[0].value}]`}>
          <div class="flex flex-wrap items-center">
            {config[8].value?.map((item,index)=>{
              return <div key={index} class="block w-full shrink-0 grow-0 basis-auto md:w-4/12 lg:flex">
              <img
                src={item?.preview}
                alt="Trendy Pants and Shoes"
                class="w-full rounded-t-lg md:rounded-tr-none md:rounded-bl-lg"
              />
            </div>
            }) }
            <div class="w-full shrink-0 grow-0 basis-auto md:w-8/12">
              <div class="px-6 py-12 md:px-12">
                <h2 class={`mb-6 text-3xl font-bold text-[${config[1].value}]`}>
                 
                {config[3].value}
                </h2>
                <p class={`mb-6 pb-2  text-[${config[2].value}]`}>
                {config[4].value}
                </p>
                <button
                  type="button"
                  class={`inline-block rounded-full bg-[${config[5].value}] px-7 pb-2.5 pt-3 text-sm font-medium uppercase leading-normal  shadow-[0_4px_9px_-4px_${config[0].value}] transition duration-150 ease-in-out hover:bg-danger-600 hover:shadow-[0_8px_9px_-4px_${config[5].value},0_4px_10px_0_#89898977] text-[${config[6].value}]`}
                  data-te-ripple-init
                  data-te-ripple-color="light"
                >
               {config[7].value}
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Banner;
