
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addWidget } from '../../redux/actions';

const AddWidgetForm = ({ categoryId }) => {
  const [widgetName, setWidgetName] = useState('');
  const [widgetText, setWidgetText] = useState('');
  const [isFormVisible, setIsFormVisible] = useState(false);
  const dispatch = useDispatch();

  const handleAddWidget = (e) => {
    e.preventDefault();
    if (widgetName && widgetText) {
      const newWidget = {
        id: Date.now().toString(), 
        name: widgetName,
        text: widgetText,
      };
      dispatch(addWidget(categoryId, newWidget));
      setWidgetName('');
      setWidgetText('');
      setIsFormVisible(false); 
    }
  };

  return (
    <div className='addwidget'>
      <button onClick={() => setIsFormVisible(!isFormVisible)}>
        {isFormVisible ? 'Cancel' : '+ Widget'}
      </button>
      {isFormVisible && (
        <form onSubmit={handleAddWidget}>
          <input
            type="text"
            value={widgetName}
            onChange={(e) => setWidgetName(e.target.value)}
            placeholder="Widget Name"
          />
          <input
            type="text"
            value={widgetText}
            onChange={(e) => setWidgetText(e.target.value)}
            placeholder="Widget Text"
          />
          <button type="submit">+ Widget</button>
        </form>
      )}
    </div>
  );
};

export default AddWidgetForm;