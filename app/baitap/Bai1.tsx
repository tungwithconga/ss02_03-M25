import React from 'react';

interface InputProps {
  label: string;
  placeholder: string;
  helperText: string;
  icon?: string;
}

const Bai1: React.FC<InputProps> = ({ label, placeholder, helperText, icon }) => {
  return (
    <div className="mb-4">
      <label className="block text-sm font-medium text-gray-700 mb-1">
        {label}
      </label>
      <div className="relative">
        <input
          type="text"
          className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          placeholder={placeholder}
        />
        {icon && (
          <span className="absolute inset-y-0 right-0 pr-3 flex items-center">
            <img src={icon} alt="icon" className="h-5 w-5 text-gray-400" />
          </span>
        )}
      </div>
      <p className="mt-1 text-sm text-gray-500">{helperText}</p>
    </div>
  );
};

export default Bai1;
