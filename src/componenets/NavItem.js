function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export default function NavItem(item) {
  return (
    <a href={item.href}>
      <div
        className={classNames(
          item.current ? 'text-blue' : 'text-gray',
          'group flex items-center px-2 py-2 my-3 text-center text-sm font-normal rounded-md'
        )}>
        <div className="w-5 text-left">
          <img src={item.icon} className="w-full" />
        </div>
        <span className="ml-4">{item.name}</span>
      </div>
    </a>
  );
}
