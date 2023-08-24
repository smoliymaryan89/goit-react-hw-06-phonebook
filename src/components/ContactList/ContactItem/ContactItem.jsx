import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contactsSlice';

const ContactItem = ({ id, name, number }) => {
  const dispatch = useDispatch();

  return (
    <li>
      <span>
        {name}: {number}
        <button onClick={() => dispatch(deleteContact(id))} type="button">
          Delete
        </button>
      </span>
    </li>
  );
};

export default ContactItem;
