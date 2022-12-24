import classnames from 'classnames';
import Header from './Header';
import Navbar from './Navbar';

import PropTypes from 'prop-types';

const Container = ({ children, className = '' }) => {
  return (
    <div className="w-screen h-screen bg-skyblue">
      <Navbar />
      <div
        className={classnames(
          'fixed h-screen overflow-y-scroll right-0 my-5 w-5/6 px-2 sm:px-6 md:px-8 ',
          [className]
        )}>
        <div className="w-full">
          <Header />
          <main className="my-6 flex-1 overflow-auto">{children}</main>
        </div>
      </div>
    </div>
  );
};

Container.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string
};

export default Container;
