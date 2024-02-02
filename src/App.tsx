// src/App.tsx
import React from 'react';
import BluetoothComponent from './components/BluetoothComponent';

const App: React.FC = () => {
  return (
    <div>
      <h1>Web Bluetooth Example</h1>
      <BluetoothComponent />
    </div>
  );
};

export default App;
