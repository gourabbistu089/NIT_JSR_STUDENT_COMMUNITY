import React from 'react'
import { Helmet } from 'react-helmet'

const NotFound = () => {
  return (
    <div className="w-full flex overflow-auto min-h-screen items-center flex-col justify-center">
      <Helmet>
        <title>404 - Not Found</title>
      </Helmet>
      <h3>OOPS! PAGE NOT FOUND</h3>
      <div className="flex relative items-center flex-col justify-center">
        <h1 className="text-gray-900 text-[252px] mt-[-20px] mb-[-20px] font-black tracking-[-20px]">
          404
        </h1>
      </div>
      <div className="w-[421px] flex items-center flex-col justify-center">
        <h2 className="text-center font-normal">
          WE ARE SORRY, BUT THE PAGE YOU REQUESTED WAS NOT FOUND
        </h2>
      </div>
    </div>
  )
}

export default NotFound
