import React from 'react';

const DocItem = ({title, content}) => {
    return (
      <div className='px-2'>
          <h6 className='text-base text-blue-400'>{title}</h6>
          <p className='text-sm text-gray leading-tight'>{content}</p>
      </div>
    );
};

export default DocItem;