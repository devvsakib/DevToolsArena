import React from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

/**
 * The Layout function is a React component that returns a div with a Header component and the children
 * prop
 * @returns A div with a header and children.
 */
const Layout = ({children}) => {
    return (
        <div className='flex flex-col justify-between min-h-screen'>
          <Header 
              notice={"Under Construction"}
          />
          <div className='relative'>
              {children}
          </div>
          <Footer />
        </div>
    );
};

export default Layout;