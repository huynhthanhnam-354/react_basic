import React, { useState } from 'react';
import './InputForm.css';

function InputForm() {
  const [name, setName] = useState('');

  const handleChange = (e) => {
    setName(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Tên của bạn:', name);
  };

  return (
    <form onSubmit={handleSubmit} className="input-form">
      <div className="form-group">
        <label htmlFor="name">Tên của bạn:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={name}
          onChange={handleChange}
          placeholder="Nhập tên của bạn"
        />
      </div>
    </form>
  );
}

export default InputForm; 