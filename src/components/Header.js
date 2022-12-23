import { ArrowLeftIcon, BellAlertIcon, MagnifyingGlassIcon } from '@heroicons/react/20/solid';
import { PlusIcon } from '@heroicons/react/20/solid';
import Button from './Button';

export default function Header() {
  return (
    <div className="w-3/4 mx-auto flex items-center justify-between">
      <div className="w-1/2 flex items-center">
        <Button type="button" className="text-white hover:bg-neutral-200">
          <div className="className= h-5 w-5 bg-blue rounded-full ">
            <ArrowLeftIcon />
          </div>
        </Button>
        <div className="w-2/3 relative mt-1 mx-5 rounded-md shadow-sm">
          <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
            <MagnifyingGlassIcon className="h-5 w-5 text-blue" aria-hidden="true" />
          </div>
          <input
            type="text"
            name="seach"
            id="search"
            className="block w-full rounded-md pl-10 sm:text-sm border-none placeholder:italic placeholder-gray"
            placeholder="Search Clients, Properties, Services"
          />
        </div>
      </div>
      <div className="flex">
        <Button
          type="button"
          className="text-white bg-blue w-44 mx-5 justify-center hover:bg-sky-900"
          buttonText="Add client">
          <div className="bg-white rounded-full mr-3">
            <PlusIcon className="h-5 w-5 text-blue" aria-hidden="true" />
          </div>
        </Button>
        <Button type="button" className="hover:bg-neutral-200">
          <BellAlertIcon className="h-5 w-5 text-blue" aria-hidden="true" />
        </Button>
        <div className="w-14 h-14 rounded-full mx-5">
          <img src="profilepic.png" className="w-full" />
        </div>
      </div>
    </div>
  );
}
