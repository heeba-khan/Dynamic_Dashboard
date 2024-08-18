// src/components/Category.jsx
import React from 'react';
import { useDispatch } from 'react-redux';
import Widget from './Widget';
import AddWidgetForm from './AddWidget';
import { removeCategory } from '../../redux/actions';

const Category = ({ category }) => {
  const dispatch = useDispatch();

  const handleRemoveCategory = () => {
    dispatch(removeCategory(category.id));
  };

  return (
    <div className='cat-container'>
      <h2 className='cat-heading'>{category.name}</h2>
        <div className='category'>
          {/* <button onClick={handleRemoveCategory}>Remove Category</button> */}
          {category.widgets.map((widget) => (
            <Widget key={widget.id} widget={widget} categoryId={category.id} />
          ))}
          <AddWidgetForm categoryId={category.id} />
        </div>
    </div>
  );
};

export default Category;