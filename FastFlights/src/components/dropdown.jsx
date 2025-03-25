import React, { useState } from 'react';

function Dropdown({ title, data }) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState('');

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
  };

  return (
    <div className="relative">
      <div
        onClick={toggleDropdown}
        className="cursor-pointer p-2 border border-gray-300 rounded-lg"
      >
        {selectedOption || title}
      </div>
      {isOpen && (
        <ul className="absolute z-10 mt-1 border border-gray-300 rounded-lg bg-white shadow-lg max-h-40 overflow-y-auto">
          {data.map((option, index) => (
            <li
              key={index}
              onClick={() => handleOptionClick(option)}
              className="p-2 cursor-pointer hover:bg-gray-200"
            >
              {option}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Dropdown;
