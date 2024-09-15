import React, { useState } from 'react';

const FilterOptions = ({ onFilterChange }) => {
  const [filters, setFilters] = useState({
    owner: '',
    lawFirm: '',
    attorney: '',
    status: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFilters(prevState => ({ ...prevState, [name]: value }));
    onFilterChange({ ...filters, [name]: value });
  };

  return (
    <div>
      <input 
        type="text" 
        placeholder="Owner" 
        name="owner" 
        value={filters.owner} 
        onChange={handleChange} 
      />
      <input 
        type="text" 
        placeholder="Law Firm" 
        name="lawFirm" 
        value={filters.lawFirm} 
        onChange={handleChange} 
      />
      <input 
        type="text" 
        placeholder="Attorney" 
        name="attorney" 
        value={filters.attorney} 
        onChange={handleChange} 
      />
      <input 
        type="text" 
        placeholder="Status" 
        name="status" 
        value={filters.status} 
        onChange={handleChange} 
      />
    </div>
  );
};

export default FilterOptions;
