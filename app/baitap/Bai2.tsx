"use client";

import React, { useState, useCallback } from 'react';

interface Option {
  label: string;
  checked: boolean;
}

interface Bai2Props {
  label: string;
  options: Option[];
  onApply: (selectedOptions: Option[]) => void;
  onClear: () => void;
}

const Bai2: React.FC<Bai2Props> = ({ label, options, onApply, onClear }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOptions, setSelectedOptions] = useState<Option[]>(options);

  const handleToggle = useCallback(() => {
    setIsOpen(prevIsOpen => !prevIsOpen);
  }, []);

  const handleCheckboxChange = useCallback((index: number) => {
    setSelectedOptions(prevOptions => {
      const newOptions = [...prevOptions];
      newOptions[index].checked = !newOptions[index].checked;
      return newOptions;
    });
  }, []);

  const handleApply = useCallback(() => {
    onApply(selectedOptions);
    setIsOpen(false);
  }, [selectedOptions, onApply]);

  const handleClear = useCallback(() => {
    setSelectedOptions(options.map(option => ({ ...option, checked: false })));
    onClear();
  }, [options, onClear]);

  return (
    <div className="relative inline-block w-64">
      <div
        className="flex items-center border border-gray-300 rounded-md px-2 py-1 cursor-pointer"
        onClick={handleToggle}
        aria-expanded={isOpen}
        aria-haspopup="true"
      >
        <img src="/baitap/clock-icon.png" alt="icon" className="h-5 w-5 mr-2" />
        <input
          type="text"
          className="flex-grow focus:outline-none"
          placeholder={label}
          readOnly
        />
        <span className="ml-2">&#9660;</span>
      </div>
      {isOpen && (
        <div className="absolute mt-1 bg-white border border-gray-300 rounded-md shadow-lg w-full">
          <ul className="max-h-40 overflow-y-auto">
            {selectedOptions.map((option, index) => (
              <li key={index} className="flex items-center p-2 border-b border-gray-200 last:border-none">
                <input
                  type="checkbox"
                  checked={option.checked}
                  onChange={() => handleCheckboxChange(index)}
                  className="mr-2"
                />
                <span>{option.label}</span>
              </li>
            ))}
          </ul>
          <div className="flex justify-between p-2">
            <button
              onClick={handleClear}
              className="bg-white text-gray-700 border border-gray-300 rounded-md px-3 py-1 hover:bg-gray-100"
            >
              Xóa
            </button>
            <button
              onClick={handleApply}
              className="bg-blue-600 text-white rounded-md px-3 py-1 hover:bg-blue-700"
            >
              Áp dụng
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Bai2;
