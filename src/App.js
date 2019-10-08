import React from 'react';
import './App.css';
import Tabbar from './component/tabbar/tabbar'
import {Button} from 'antd'
function App() {
  return (
    <div className="App">
      <Tabbar />
      <Button type="primary">默认</Button>
    </div>
  );
}


export default App;
