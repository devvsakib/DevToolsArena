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
          {children}
        </>
    );
};

export default Layout;