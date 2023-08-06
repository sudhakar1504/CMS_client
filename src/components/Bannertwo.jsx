import React from 'react'

const Bannertwo = ({config}) => {
  return (
<div className="container my-24 mx-auto md:px-6">
  <section className="background-radial-gradient mb-32 text-center lg:text-left">
    <div className={`relative overflow-hidden bg-cover bg-no-repeat bg-[50%] bg-[url(${config[4]?.value[0]?.preview})] h-[500px]`}>
      <div
        className="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-[hsla(0,0%,0%,0.75)] bg-fixed">
        <div className="flex h-full items-center justify-center">
          <div className="max-w-[800px] px-6 py-6 text-center text-white md:py-0 md:px-12">
            <h2 className={`mb-12 text-5xl font-bold leading-tight text-[${config[1].value}] tracking-tight md:text-6xl xl:text-7xl`}>
             {config[0]?.value}
            </h2>
            <p className={`text-lg text-[${config[3].value}]`}>
            {config[2].value}
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</div>
  )
}

export default Bannertwo