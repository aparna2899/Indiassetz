import PropTypes from 'prop-types';
import classnames from 'classnames';

export default function ProfilePic({ pathToImg, className = '' }) {
  return (
    <div className={classnames('w-12 h-12 rounded-full mx-5', [className])}>
      <img src={pathToImg} className="w-full" />
    </div>
  );
}

ProfilePic.propTypes = {
  pathToImg: PropTypes.string
};
