import { useState } from 'react';


const DocItem = ({ title, content }) => {
  const [readMore, setReadMore] = useState(false);

  // const value = content.match(/{(.*?)}/g);
  // var regex = new RegExp(value, "gi");
  // const b = "<b>"
  return (
    <div className={`p-4 rounded shadow-lg shadow-[#118d7c22] bg-white/5 backdrop-blur-[10px]`}>
      <h6 className='font-semibold text-white text-opacity-80 mb-2'>{title}</h6>
      <p className={`text-sm text-gray line-clamp-11 leading-relaxed ${!readMore ? "none" : "hidden"}`}>
        {
          content.length > 100 ? content.substring(0, 100).replace(/`/g, '') : content.replace(/`/g, '')
        }
      </p>
      <p className="text-sm text-gray line-clamp-11 leading-relaxed"
        style={{ display: readMore ? 'block' : 'none' }}
      >
        {content.split("`").map((content, index) => (
          <p key={index}>{content}</p>
        ))}
      </p>
      {content.length > 100 ? <button onClick={() => { setReadMore(!readMore) }}>{readMore ? 'Hide' : 'Read'} </button> : ''}
    </div>
  );
};

export default DocItem;