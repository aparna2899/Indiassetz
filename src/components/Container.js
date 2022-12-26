import classnames from 'classnames';
import Header from './Header';
import Navbar from './Navbar';

import PropTypes from 'prop-types';

const Container = ({ children, className = '', pathToImg, buttonText }) => {
  return (
    <div className={classnames('w-screen h-screen bg-skyblue', [className])}>
      <Navbar />
      <div className="fixed h-screen overflow-y-scroll  right-0 my-5 lg:w-5/6 md:w-full sm:w-full px-2 sm:px-6 md:px-8">
        <div className="w-full">
          <Header pathToImg={pathToImg} buttonText={buttonText} />
          <main className="my-6 flex-1 overflow-auto">{children}</main>
        </div>
      </div>
    </div>
  );
};

Container.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  pathToImg: PropTypes.string,
  buttonText: PropTypes.string
};

export default Container;
