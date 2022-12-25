import PropTypes from 'prop-types';

const InputGroup = ({ children }) => {
  return (
    <div className="flex lg:flex-row  xl:flex-row 2xl:flex-row flex-col flex-wrap items-stretch">
      {children}
    </div>
  );
};

InputGroup.prototype = {
  children: PropTypes.element
};

export default InputGroup;

// sm:flex-col md:flex-col max-[640]:flex-col

//
