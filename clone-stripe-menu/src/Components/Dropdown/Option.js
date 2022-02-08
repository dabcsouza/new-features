import React from 'react';

export function DropdownOption({ name, content: Content}) {
  return (
    <button
      type="button"
      className="dropdown-option"
    >
      { name }
    </button>
  );
};