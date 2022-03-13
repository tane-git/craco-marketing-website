import React from 'react';

import {
  Background,
  // Footer,
  Header,
  Content,
} from './components';
import './styles/index.less';

function App() {
  return (
    <Background>
      <Header />
      <Content />
      {/* <Welcome /> */}
      {/* <Footer /> */}
    </Background>
  );
}

export default App;
