import React from 'react'

const Bannerthree = ({config}) => {
  return (
    <div className={`bg-[${config[0].value}] py-24 px-6 text-center `}>
    <h1 className={`text-[${config[1].value}] mt-2 mb-16 text-5xl font-bold tracking-tight md:text-6xl xl:text-7xl`}>
     {config[2].value}
    </h1>
    <a className={`mb-2 inline-block rounded bg-[${config[5].value}] px-12 pt-4 pb-3.5 text-sm font-medium uppercase leading-normal text-[${config[6].value}] shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-[${config[5].value}]-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-[${config[5].value}]-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-[${config[5].value}]-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] md:mr-2 md:mb-0`}
      data-te-ripple-init data-te-ripple-color="light" href={config[4].value} role="button">{config[3].value}</a>
    <a className={`inline-block rounded px-12 pt-4 pb-3.5 text-sm font-medium uppercase leading-normal text-[${config[9].value}] transition duration-150 ease-in-out hover:bg-neutral-500 hover:bg-opacity-10 hover:text-primary-600 focus:text-primary-600 focus:outline-none focus:ring-0 active:text-primary-700 `}
      data-te-ripple-init data-te-ripple-color="light" href={config[8].value} role="button">{config[7].value}</a>
  </div>
  )
}

export default Bannerthree