import React from 'react';
import './App.css';
import InputForm from './components/InputForm';
import CustomButton from './components/CustomButton';

function App() {
  const handleButtonClick = () => {
    console.log('Nút đã được nhấn!');
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Nhập Tên</h1>
        <InputForm />
        <div style={{ marginTop: '20px' }}>
          <CustomButton 
            text="Xác Nhận" 
            onClick={handleButtonClick}
            variant="primary"
          />
        </div>
      </header>
    </div>
  );
}

export default App;
