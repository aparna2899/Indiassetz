import { ArrowLeftIcon, BellAlertIcon, MagnifyingGlassIcon } from '@heroicons/react/20/solid';
import { PlusIcon } from '@heroicons/react/20/solid';
import Button from './Button';

export default function Header() {
  return (
    <div className="mx-auto flex items-center justify-between">
      <div className="w-3/5 flex items-center">
        <Button type="button" className="text-white bg-white hover:bg-neutral-200">
          <div className="h-5 w-5 bg-blue rounded-full ">
            <ArrowLeftIcon />
          </div>
        </Button>
        <div className="w-full relative mx-5 rounded-md shadow-sm">
          <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
            <MagnifyingGlassIcon className="h-5 w-5 text-blue" aria-hidden="true" />
          </div>
          <input
            type="text"
            name="seach"
            id="search"
            className="block w-full rounded-md pl-10 py-3 sm:text-sm border-none placeholder:italic placeholder-gray"
            placeholder="Search Clients, Properties, Services"
          />
        </div>
      </div>
      <div className="flex">
        <Button
          type="button"
          className="text-white bg-blue w-40 mx-5 justify-center hover:bg-sky-900"
          buttonText="Add client">
          <div className="bg-white rounded-full mr-3">
            <PlusIcon className="h-5 w-5 text-blue" aria-hidden="true" />
          </div>
        </Button>
        <Button type="button" className="bg-white hover:bg-neutral-200">
          <BellAlertIcon className="h-5 w-5 text-blue" />
        </Button>
        <div className="w-12 h-12 rounded-full mx-5">
          <img src="profilepic.png" className="w-full" />
        </div>
      </div>
    </div>
  );
}
