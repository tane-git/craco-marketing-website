import { Layout } from 'antd';
import React from 'react';

import {
  Background,
  Header
} from './components';
import './styles/index.less';

function App() {
  return (
    <>
      <Background />
      <Layout>
        <Header />
      </Layout>
    </>
  );
}

export default App;
