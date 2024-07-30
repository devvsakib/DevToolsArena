const MainTitle = ({
    title,
    highlight
}) => {
    return <h1 className="text-2xl sm:text-3xl font-bold mb-16 mt-5 text-center w-10/12 sm:w-full mx-auto">{title} <span className='text-transparent bg-gradient-to-tr from-primary to-white bg-clip-text'>{highlight}</span></h1>;
};

export default MainTitle;
