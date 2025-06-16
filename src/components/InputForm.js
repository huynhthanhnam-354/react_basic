import React, { useState } from 'react';
import './InputForm.css';

function InputForm() {
  const [name, setName] = useState('');
  const [error, setError] = useState('');
  const [isValid, setIsValid] = useState(false);
  const [isFocused, setIsFocused] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [suggestions, setSuggestions] = useState([]);

  // Danh sách gợi ý tên
  const nameSuggestions = [
    'Nguyễn Văn A',
    'Trần Thị B',
    'Lê Văn C',
    'Phạm Thị D'
  ];

  const validateName = (value) => {
    if (value.length < 2) {
      setError('Tên phải có ít nhất 2 ký tự');
      setIsValid(false);
    } else if (value.length > 50) {
      setError('Tên không được vượt quá 50 ký tự');
      setIsValid(false);
    } else if (!/^[a-zA-ZÀ-ỹ\s]+$/.test(value)) {
      setError('Tên chỉ được chứa chữ cái và khoảng trắng');
      setIsValid(false);
    } else {
      setError('');
      setIsValid(true);
    }
  };

  const handleChange = (e) => {
    const value = e.target.value;
    setName(value);
    validateName(value);

    // Hiển thị gợi ý khi người dùng nhập
    if (value.length > 0) {
      const filteredSuggestions = nameSuggestions.filter(suggestion =>
        suggestion.toLowerCase().includes(value.toLowerCase())
      );
      setSuggestions(filteredSuggestions);
    } else {
      setSuggestions([]);
    }
  };

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
    // Đợi một chút để người dùng có thể click vào suggestion
    setTimeout(() => {
      setSuggestions([]);
    }, 200);
  };

  const handleSuggestionClick = (suggestion) => {
    setName(suggestion);
    validateName(suggestion);
    setSuggestions([]);
  };

  const handleClear = () => {
    setName('');
    setError('');
    setIsValid(false);
    setSuggestions([]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isValid) {
      console.log('Tên hợp lệ:', name);
      // Reset form sau khi submit thành công
      setName('');
      setError('');
      setIsValid(false);
      setSuggestions([]);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="input-form">
      <div className="form-group">
        <label htmlFor="name">Tên của bạn:</label>
        <div className="input-container">
          <input
            type="text"
            id="name"
            name="name"
            value={name}
            onChange={handleChange}
            onFocus={handleFocus}
            onBlur={handleBlur}
            placeholder="Nhập tên của bạn"
            className={`${error ? 'error' : isValid ? 'valid' : ''} ${isFocused ? 'focused' : ''}`}
          />
          {name && (
            <button
              type="button"
              className="clear-button"
              onClick={handleClear}
              title="Xóa"
            >
              ✕
            </button>
          )}
        </div>
        {error && <div className="error-message">{error}</div>}
        {isValid && <div className="success-message">Tên hợp lệ!</div>}
        
        {/* Hiển thị gợi ý */}
        {suggestions.length > 0 && (
          <div className="suggestions-container">
            {suggestions.map((suggestion, index) => (
              <div
                key={index}
                className="suggestion-item"
                onClick={() => handleSuggestionClick(suggestion)}
              >
                {suggestion}
              </div>
            ))}
          </div>
        )}
      </div>
    </form>
  );
}

export default InputForm; 