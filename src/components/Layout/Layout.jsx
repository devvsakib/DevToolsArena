import React from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import { ThemeProvider } from '../../context/ThemeContext';

/**
 * The Layout function is a React component that returns a div with a Header component and the children
 * prop
 * @returns A div with a header and children.
 */
const Layout = ({ stars, children }) => {
    return (
        <div className='flex flex-col justify-between min-h-screen'>
            <ThemeProvider>
                <Header
                    notice={"Under Construction"}
                />
                <div className='relative'>
                    {children}
                </div>
                <Footer />
            </ThemeProvider>
        </div>
    );
};

export default Layout;