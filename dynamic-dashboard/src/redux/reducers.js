// src/redux/reducers.js
import {
    ADD_WIDGET,
    REMOVE_WIDGET,
    ADD_CATEGORY,
    REMOVE_CATEGORY,
    SET_SEARCH_TERM,
  } from './actions';
  import initialWidget from '../data/widgets.json'
  
  const initialState = {
    categories:initialWidget.categories,
    searchTerm: '',
  };
  
  const rootReducer = (state = initialState, action) => {
    switch (action.type) {
      case ADD_WIDGET: {
        const { categoryId, widget } = action.payload;
        return {
          ...state,
          categories: state.categories.map((category) =>
            category.id === categoryId
              ? { ...category, widgets: [...category.widgets, widget] }
              : category
          ),
        };
      }
  
      case REMOVE_WIDGET: {
        const { categoryId, widgetId } = action.payload;
        return {
          ...state,
          categories: state.categories.map((category) =>
            category.id === categoryId
              ? {
                  ...category,
                  widgets: category.widgets.filter(
                    (widget) => widget.id !== widgetId
                  ),
                }
              : category
          ),
        };
      }
  
      case ADD_CATEGORY: {
        return {
          ...state,
          categories: [...state.categories, action.payload],
        };
      }
  
      case REMOVE_CATEGORY: {
        return {
          ...state,
          categories: state.categories.filter(
            (category) => category.id !== action.payload
          ),
        };
      }
  
      case SET_SEARCH_TERM: {
        return {
          ...state,
          searchTerm: action.payload,
        };
      }
  
      default:
        return state;
    }
  };
  
  export default rootReducer;