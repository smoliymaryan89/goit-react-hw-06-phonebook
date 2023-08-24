import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from 'redux/contactsSlice';

const Filter = () => {
  const filter = useSelector(({ filter }) => filter);
  const dispatch = useDispatch();

  const handleFilter = ({ target: { value } }) => {
    dispatch(setFilter(value));
  };

  return (
    <label>
      <p>Find contacts by name</p>
      <input type="text" value={filter} onChange={handleFilter} />
    </label>
  );
};

export default Filter;
