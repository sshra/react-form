---
to: <%= absPath %>/action.js
---
import axios from 'axios';

export const <%= store_name_upper %>_REQUEST = '<%= store_name_upper %>_REQUEST';
export const <%= store_name_upper %>_REQUEST_SUCCESS = '<%= store_name_upper %>_REQUEST_SUCCESS';
export const <%= store_name_upper %>_REQUEST_ERROR = '<%= store_name_upper %>_REQUEST_ERROR';

export const <%= store_name %>Request = () => ({
  type: <%= store_name_upper %>_REQUEST,
});

export const <%= store_name %>RequestSuccess = (data) => ({
  type: <%= store_name_upper %>_REQUEST_SUCCESS,
  data,
});

export const <%= store_name %>RequestError = (error) => ({
  type: <%= store_name_upper %>_REQUEST_ERROR,
  error
});

export const <%= store_name %>RequestAsync =
  // Interpreted by the thunk middleware:
  () => (dispatch, getState) => {

    dispatch(<%= store_name %>Request());

    axios(`${REQUEST_API_URL}/request-endpoint`, {
      headers: {
        Authorization: `bearer ${token}`,
      },
    })
      .then(({ responseData }) => {
        const data = {
          responseData.field1,
          responseData.field2,
        };
        dispatch(<%= store_name %>RequestSuccess(data));
      })
      .catch((err) => {
        console.error(err);
        dispatch(<%= store_name %>RequestError(err.toString()));
      });
  };
