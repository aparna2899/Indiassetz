import NavItem from './NavItem';

const navigation = [
  { name: 'Dashboard', href: '#', icon: 'dashboard.png', current: false },
  { name: 'Leads', href: '#', icon: 'leads.png', current: false },
  { name: 'Clients', href: '#', icon: 'clients.png', current: true },
  { name: 'Properties', href: '#', icon: 'properties.png', current: false },
  { name: 'Orders', href: '#', icon: 'orders.png', current: false },
  { name: 'Callback', href: '#', icon: 'callback.png', current: false },
  { name: 'Payments', href: '#', icon: 'payments.png', current: false },
  { name: 'IA- AI', href: '#', icon: 'ia-ai.png', current: false },
  { name: 'Red Box', href: '#', icon: 'red-box.png', current: false }
];

function Navbar() {
  return (
    <div className="md:fixed md:inset-y-0 md:flex md:w-56 md:flex-col h-5/6">
      <div className="flex flex-grow flex-col overflow-y-auto border-gray-200 bg-white pt-5 shadow-2xl rounded-r-[40px]">
        <div className="flex flex-shrink-0 items-center justify-center px-4">
          <img className="w-2/3" src="logo.png" alt="Indiassetz" />
        </div>
        <div className="mt-5 mx-6 px-2 pb-4 space-y-1 flex flex-grow flex-col">
          <nav className="flex-1 border-t border-t-lightgray">
            {navigation.map((item) => (
              <NavItem key={item.name} {...item} />
            ))}
          </nav>
          <div className="pb-12 px-2 flex items-center">
            <div className="w-4">
              <img src="logout.png" className="w-full" />
            </div>
            <a className="ml-4 text-red">Log out</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
