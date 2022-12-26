import classnames from 'classnames';

export default function RedBox({ className = '' }) {
  return <div className={classnames('flex-grow w-16 pt-1 rounded-md mx-1', [className])}></div>;
}
