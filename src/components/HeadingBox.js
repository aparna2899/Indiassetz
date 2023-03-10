import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

const HeadingBox = ({ heading, children, description, className = '' }) => {
  return (
    <div
      className={classnames('bg-white p-4 flex flex-col md:flex-row rounded-lg mb-8', [className])}>
      <div className="md:w-1/2">
        {heading && <h2 className="text-lg text-blue font-medium mb-2">{heading}</h2>}
        {description && <p className=" text-blue font-light">{description}</p>}
      </div>
      {children && <div className="md:w-1/2 md:flex justify-end">{children}</div>}
    </div>
  );
};

HeadingBox.propTypes = {
  heading: PropTypes.string,
  children: PropTypes.node,
  description: PropTypes.string
};

HeadingBox.defaultProps = {
  heading: '',
  children: null,
  description: ''
};

export default HeadingBox;
