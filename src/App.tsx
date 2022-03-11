import { Layout, Tag } from 'antd';
import React from 'react';
import { Background } from './components/Background';
import './styles/index.less';

function App() {
  return (
    <>
      {/* <Layout className='background'> */}
        {/* <img src='/background/set1.svg' alt='background' /> */}
        {/* <Header /> */}
        {/* <Content /> */}
        {/* <Footer /> */}
        {/* <div className='background'> */}
          {/* <Background /> */}
        {/* </div> */}
      {/* </Layout> */}

      {/* APPLYING SVG'S WITH WHITE BACKGROUND */}
      {/* <div className='background'>
        <div className='background1'></div>
        <div className='background2'></div>
      </div> */}

      {/* TRYING TRANSPARENT BACKGROUND */}
      {/* <div className='transparentBackground'></div> */}

      {/* TRYING TO IMPLEMENT BACKGROUND WITH CSS */}
      {/* OR Individual SVGS */}
      <Background />

      {/* TRYING TO IMPLEMENT BACKGROUND WITH DIFFERENT SVG EXPORTS FROM FIGMA */}
      {/* <div className='background'></div> */}
    </>
  );
}

export default App;
