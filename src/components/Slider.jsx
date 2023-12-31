import React, { useEffect } from "react";
import { Carousel, initTE } from "tw-elements";


const Slider = ({config}) => {
  useEffect(() => {
    initTE({ Carousel });
  }, [])
  
  const SliderBtnopt = [{
    "aria-current":true,
    "data-te-carousel-active":true
  },{}]
  const SliderSlideopt =[{"data-te-carousel-active":true},{}]
  return (
    <div
      id="carouselExampleCaptions"
      className="relative "
      data-te-carousel-init
      data-te-carousel-slide
    >
      <div
        className="absolute bottom-0 left-0 right-0 z-[2] mx-[15%] mb-4 flex list-none justify-center p-0"
        data-te-carousel-indicators
      >
         {config[0].value?.map((item,index)=>{
          return  <button key={index}
          type="button"
          data-te-target="#carouselExampleCaptions"
          data-te-slide-to={index}
          className="mx-[3px] box-content h-[3px] w-[30px] flex-initial cursor-pointer border-0 border-y-[10px] border-solid border-transparent bg-white bg-clip-padding p-0 -indent-[999px] opacity-50 transition-opacity duration-[600ms] ease-[cubic-bezier(0.25,0.1,0.25,1.0)] motion-reduce:transition-none"
         {...SliderBtnopt[index == 0 ? 0 : 1]}
          aria-label={`Slide ${index+1}`}
        ></button>
         })}
      </div>

<div className="relative w-full overflow-hidden after:clear-both after:block after:content-['']">
{config[0].value?.map((item,index)=>{
  return <div key={index}
  class={`relative float-left -mr-[100%] w-full ${index ==0 ?'':'hidden'} transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none`}
 {...SliderSlideopt[index == 0?0:1]}
  data-te-carousel-item
  style={{backfaceVisibility: 'hidden'}}>
  <img
    src={item[2]?.value[0]?.preview}
    class="block w-full"
    alt="..." />
  <div
    class="absolute inset-x-[15%] bottom-5 hidden py-5 text-center text-white md:block">
    <h5 class="text-xl">{item[0]?.value}</h5>
    <p>{item[1]?.value}</p>
  </div>
</div>
})}
</div>


      <button
        className="absolute bottom-0 left-0 top-0 z-[1] flex w-[15%] items-center justify-center border-0 bg-none p-0 text-center text-white opacity-50 transition-opacity duration-150 ease-[cubic-bezier(0.25,0.1,0.25,1.0)] hover:text-white hover:no-underline hover:opacity-90 hover:outline-none focus:text-white focus:no-underline focus:opacity-90 focus:outline-none motion-reduce:transition-none"
        type="button"
        data-te-target="#carouselExampleCaptions"
        data-te-slide="prev"
      >
        <span className="inline-block h-8 w-8">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            className="h-6 w-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M15.75 19.5L8.25 12l7.5-7.5"
            />
          </svg>
        </span>
        <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
          Previous
        </span>
      </button>
      <button
        className="absolute bottom-0 right-0 top-0 z-[1] flex w-[15%] items-center justify-center border-0 bg-none p-0 text-center text-white opacity-50 transition-opacity duration-150 ease-[cubic-bezier(0.25,0.1,0.25,1.0)] hover:text-white hover:no-underline hover:opacity-90 hover:outline-none focus:text-white focus:no-underline focus:opacity-90 focus:outline-none motion-reduce:transition-none"
        type="button"
        data-te-target="#carouselExampleCaptions"
        data-te-slide="next"
      >
        <span className="inline-block h-8 w-8">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            className="h-6 w-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M8.25 4.5l7.5 7.5-7.5 7.5"
            />
          </svg>
        </span>
        <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
          Next
        </span>
      </button>
    </div>
  );
};

export default Slider;
