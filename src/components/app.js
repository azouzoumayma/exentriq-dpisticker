import React, { Component } from 'react';
import ImageDropZone from './ImageDropZone';

import { Layout, Header, Footer, Content } from 'antd';

class App extends Component {
    render() {
        return (
          <Layout style={{ minHeight: '100vh' }}>
            <ImageDropZone />
          </Layout>
        )
    }
}

export default App;
