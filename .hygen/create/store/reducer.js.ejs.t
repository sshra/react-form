---
to: <%= absPath %>/reducer<%= store_name_upperFirst %>.js
---

import {
  <%= store_name_upper %>_REQUEST,
  <%= store_name_upper %>_REQUEST_ERROR,
  <%= store_name_upper %>_REQUEST_SUCCESS } from './action';

const initialState = {
  loading: false,
  data: {},
  error: '',
};

const <%= store_name %>Reducer = (state = initialState, action) => {
  switch (action.type) {
    case <%= store_name_upper %>_REQUEST:
      return {
        ...state,
        loading: true,
        error: '',
      };
    case <%= store_name_upper %>_REQUEST_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.data,
        error: '',
      };
    case <%= store_name_upper %>_REQUEST_ERROR:
      return {
        ...state,
        loading: false,
        error: action.error,
      };
    default:
      return state;
  }
};

export default <%= store_name %>Reducer;
