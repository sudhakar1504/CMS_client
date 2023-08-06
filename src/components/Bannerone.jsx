import React from 'react'

const Bannerone = ({config}) => {
  return (
    <div className={`w-full py-24 mx-auto bg-[${config[0]?.value}] md:px-6`}>
    <section className="mb-32 text-center">
      <div className="flex justify-center">
        <div className="max-w-[800px]">
          <h2 className={`mb-12 text-5xl font-bold tracking-tight text-[${config[1]?.value}] md:text-6xl xl:text-7xl`}>
          {config[2]?.value}
          </h2>
          <p className={`text-lg text-[${config[3]?.value}]`}>
{config[4]?.value}
          </p>
        </div>
      </div>
    </section>
  </div>
  )
}

export default Bannerone