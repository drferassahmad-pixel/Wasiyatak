import React from 'react';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  id: string;
}

const Input: React.FC<InputProps> = ({ label, id, onFocus, ...props }) => {

  const handleFocus = (e: React.FocusEvent<HTMLInputElement>) => {
    // If the input is a number type, select its content on focus.
    if (props.type === 'number') {
      e.target.select();
    }
    // Chain to any onFocus prop that was passed.
    if (onFocus) {
      onFocus(e);
    }
  };

  return (
    <div className="w-full">
      <label htmlFor={id} className="block text-sm font-medium text-slate-600 mb-1">{label}</label>
      <input
        id={id}
        className="block w-full px-4 py-2 bg-white border border-slate-300 rounded-md shadow-sm placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
        onFocus={handleFocus}
        {...props}
      />
    </div>
  );
};

export default Input;
