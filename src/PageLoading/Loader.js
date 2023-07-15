
import React from 'react';
import './Loader.css';
function Loader() {
  const Loading = 'Loading';
  return (
    <div className='PreLoader'>
      <div className='Loadercontainer'>
        <div className='LoaderRing'></div>
        <div className='LoaderRing'></div>
        <div className='LoaderRing'></div>
        <div className='loeading'>{Loading}
          <div className='Dot'>
          <div class="dot-pulse"></div>
          </div>
      
        </div>
      </div>
    </div>
  )
}
export default Loader;
