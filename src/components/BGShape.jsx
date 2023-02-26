import React from 'react'

const BGShape = () => {
  return (
    <div className='-z-[99999] fixed top-0 left-0 w-full h-full'>
      {/* <div className='-z-[999] absolute top-0 left-0 w-full h-full bg-[#44ff15]/20 backdrop-blur-[5px] rounded-lg'></div>*/}
      <div className='-z-[99999999999999] absolute -top-[70%] md:-top-[90%] -left-[50%] md:left-0 w-[800px] md:w-full h-[500px] rounded-full bg-[#16f8d2f3]/30 blur-[100px]'></div>
      
      <div className=' absolute right-[10%] md:right-[40%] top-[10%] rotate-45 w-[200px] h-[500px] bg-[#1aabff]/20 blur-[150px] rounded-lg'></div>
      <div className=' absolute right-[20%] md:right-[40%] top-[30%] md:top-[10%] rotate-45 w-[200px] h-[500px] bg-[#ff22ed]/10 blur-[150px]  rounded-lg'></div>
      
      <div className='absolute  right-[70%] top-[30%] md:top-[10%] -rotate-90 w-[300px] h-[500px] bg-[#1aabff]/20 blur-[90px] rounded-lg'></div>
      
      <div className='absolute right-[40%] top-[30%] md:top-[10%] rotate-45 w-[200px] h-[500px] bg-[#ff22ed]/20 blur-[100px]  rounded-lg'></div>
      
      <div className='absolute  right-[0%] top-[70%] md:top-[20%] rotate-45 transform-gpu w-[200px] h-[500px] bg-[#44ff15]/10 blur-[90px] rounded-lg'></div>
      <div className='absolute  right-[0%] top-[70%] md:top-[20%] rotate-45 transform-gpu w-[400px] h-[500px] bg-[#44ff15]/5 blur-[90px] rounded-lg'></div>
    </div>
  )
}

export default BGShape