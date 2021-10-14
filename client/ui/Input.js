import React from 'react';
import { fadeIn } from '@animation/animation';
import { motion } from 'framer-motion';

function Input({
  label,
  type = 'text',
  className,
  inputClassName,
  error,
  setValue,
  value,
  ...props
}) {
  return (
    <div className={`mb-2 ${className}`}>
      <label className="text-gray-300 text-base mb-px block">{label}</label>
      <input
        {...props}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        type={type}
        autoComplete="false"
        className={`text-gray-100 border-2 border-all rounded-md bg-transparent w-full outline-none p-2  ${inputClassName}`}
      />
      {error !== '' && (
        <motion.span
          variants={fadeIn}
          initial="hidden"
          animate="visible"
          className="text-sm text-yellow-500"
        >
          {error}
        </motion.span>
      )}
    </div>
  );
}

export default Input;
