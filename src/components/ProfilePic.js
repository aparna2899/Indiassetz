import PropTypes from 'prop-types';

export default function ProfilePic({ pathToImg }) {
  return (
    <div className="w-12 h-12 rounded-full mx-5">
      <img src={pathToImg} className="w-full" />
    </div>
  );
}

ProfilePic.propTypes = {
  pathToImg: PropTypes.string
};
