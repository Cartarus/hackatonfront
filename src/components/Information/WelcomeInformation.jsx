import React from 'react';
import PropTypes from 'prop-types';

export const WelcomeInformation = ({ title, description }) => {
  return (
    <div className="text-center py-10 bg-blue-950 text-white">
      <h1 className="text-3xl mb-3">
        {title || 'Validador de documentos'}
      </h1>

      <p>
        {description || 'Descubre si la fotografia de un documento es verdadera!'}
      </p>
    </div>
  );
};

WelcomeInformation.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
};

export default WelcomeInformation;
