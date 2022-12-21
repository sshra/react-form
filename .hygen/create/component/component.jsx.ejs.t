---
to: <%= absPath %>/<%= component_name %>.jsx
---
import PropTypes from 'prop-types';
// import style from './<%= component_name %>.module.css';

export const <%= component_name %> = () => {
  console.log('<%= component_name %>');
  return (
    <div></div>
  );
};

<%= component_name %>.propTypes = {

};
