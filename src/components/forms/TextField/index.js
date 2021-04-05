import React from 'react';
import PropTypes from 'prop-types';
import Input from './style';

export default function TextField({
  tag, name, value, placeholder, onChange,
}) {
  return (
    <Input
      type={tag}
      name={name}
      value={value}
      placeholder={placeholder}
      onChange={onChange}
    />
  );
}

TextField.propTypes = {
  tag: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
