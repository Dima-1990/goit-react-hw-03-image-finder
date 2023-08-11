import React from 'react';
import PropTypes from 'prop-types';
import { LoadButton } from '../Button/Button.styled';

export const Button = ({ onClick }) => {
  return (
    <div>
      <LoadButton type="button" onClick={onClick}>
        Load more
      </LoadButton>
    </div>
  );
};

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
};
