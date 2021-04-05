import React from 'react';
import PropTypes from 'prop-types';
import Input from './style';

export default function TextField({
  name, value, placeholder, onChange,
}) {
  return (
    <Input
      name={name}
      value={value}
      placeholder={placeholder}
      onChange={onChange}
    />
  );
}

TextField.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
