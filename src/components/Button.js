import classnames from 'classnames';
import PropTypes from 'prop-types';

const noop = () => {};

const Button = ({ type = 'button', buttonText, onClick = noop, className = '', children }) => {
  const handleClick = (e) => {
    return onClick(e);
  };
  return (
    <button
      type={type}
      onClick={handleClick}
      className={classnames(
        'inline-flex items-center rounded-lg border border-transparent  px-3 py-3 text-base font-medium shadow-sm',
        [className]
      )}>
      {children}
      {buttonText}
    </button>
  );
};

Button.propTypes = {
  type: PropTypes.string,
  buttonText: PropTypes.string,
  onClick: PropTypes.func,
  children: PropTypes.element,
  className: PropTypes.string
};

export default Button;
