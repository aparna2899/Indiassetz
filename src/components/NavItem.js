import classnames from 'classnames';
import { Link } from 'react-router-dom';

export default function NavItem(item) {
  return (
    <Link to={item.name} replace className="bg-white ">
      <div
        className={classnames(
          item.current ? 'text-blue' : 'text-gray',
          'group flex items-center px-2 py-2 my-3 text-center text-sm font-normal rounded-md hover:bg-slate-200'
        )}>
        <div className="w-5 text-left">
          <img src={item.icon} className="w-full" />
        </div>
        <span className="ml-4">{item.name}</span>
      </div>
    </Link>
  );
}
