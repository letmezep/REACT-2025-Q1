import React from 'react';

const Loader: React.FC = () => {
  return (
    <>
      <div className='loader-container'>
        <div className='loader'></div>
        <p>
          <span className='logo-name'>STARWARS</span> is now loading...
        </p>
      </div>
    </>
  );
};

export default Loader;
