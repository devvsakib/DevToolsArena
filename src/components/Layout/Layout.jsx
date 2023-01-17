import React from 'react';
import Header from '../Header/Header';

/**
 * The Layout function is a React component that returns a div with a Header component and the children
 * prop
 * @returns A div with a header and children.
 */
const Layout = ({children}) => {
    return (
        <>
          <Header 
              notice={"Under Construction"}
          />
<<<<<<< HEAD
          {children}
=======
          <div className='relative'>
              {children}
          </div>
>>>>>>> ab6ff739206088a7a085920c9ef786c354271d4d
        </>
    );
};

export default Layout;