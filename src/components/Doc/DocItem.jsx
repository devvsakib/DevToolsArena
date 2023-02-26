import React from 'react';


const DocItem = ({ title, content }) => {
  const changeColor = () => {
    const colorArray = ["4024e0", "1a5ba5", "118d7c", "8d54e1", "40E4F0", "7e1aa5"]
    let element;

    return element = colorArray[Math.floor(Math.random() * 6)];
  }
  
  return (
    <div className={`p-4 rounded shadow-lg shadow-[#118d7c22] bg-white/5 backdrop-blur-[10px]`}>
      <h6 className='font-semibold text-white text-opacity-80 mb-2'>{title}</h6>
      <p className='text-sm text-white leading-tight'>{content}</p>
    </div>
  );
};

export default DocItem;