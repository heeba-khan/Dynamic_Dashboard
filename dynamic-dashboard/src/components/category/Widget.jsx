// src/components/Widget.jsx
import React from 'react';
import { useDispatch } from 'react-redux';
import { removeWidget } from '../../redux/actions';

const Widget = ({ widget, categoryId }) => {
  const dispatch = useDispatch();

  const handleRemoveWidget = () => {
    dispatch(removeWidget(categoryId, widget.id));
  };

  return (
    <div className='widget'>
      <h3>{widget.name}</h3>
      <p>{widget.text}</p>
      <button onClick={handleRemoveWidget}>X</button>
    </div>
  );
};

export default Widget;