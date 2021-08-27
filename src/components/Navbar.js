import { Popover, Transition } from '@headlessui/react'
import {
  MenuIcon,
} from '@heroicons/react/outline'
import { SearchIcon, ViewListIcon, XIcon } from '@heroicons/react/solid'
import { Fragment } from 'react'
import { Link } from 'react-router-dom'

const Navbar = ({active}) => {
  return (
    <Popover className="relative bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex justify-between items-center border-b-2 border-gray-200 py-6 md:justify-start md:space-x-10">
          <div className="flex justify-start lg:w-0 lg:flex-1">
            <h1 className="text-lg font-bold">Skilvul Technical Test</h1>
          </div>
          <div className="-mr-2 -my-2 md:hidden">
            <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
              <span className="sr-only">Open menu</span>
              <MenuIcon className="h-6 w-6" aria-hidden="true" />
            </Popover.Button>
          </div>
          <Popover.Group as="nav" className="hidden md:flex space-x-10">
            <Link to="/list" className={`text-base font-medium ${active === 'list' ? 'text-blue-600 hover:text-blue-900 font-bold': 'text-gray-500 hover:text-gray-900' }`}>
              <p>List</p>
            </Link>
            <Link to="/search" className={`text-base font-medium ${active === 'search' ? 'text-blue-600 hover:text-blue-900 font-bold': 'text-gray-500 hover:text-gray-900' }`}>
              <p>Search</p>
            </Link>
          </Popover.Group>
        </div>
      </div>
      <Transition
        as={Fragment}
        enter="duration-200 ease-out"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="duration-100 ease-in"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        <Popover.Panel focus className="absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden">
          <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50">
            <div className="pt-5 pb-6 px-5">
              <div className="flex items-center justify-end">
                <div className="-mr-2">
                  <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                    <span className="sr-only">Close menu</span>
                    <XIcon className="h-6 w-6" aria-hidden="true" />
                  </Popover.Button>
                </div>
              </div>
              <div className="mt-6">
                <nav className="grid gap-y-8">
                  <Link to="/list" className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50">
                    <ViewListIcon className={`flex-shrink-0 h-6 w-6 ${active === 'list' ? 'text-blue-600' : 'text-gray-900'}`} aria-hidden="true" />
                    <span className={`ml-3 text-base font-medium ${active === 'list' ? 'text-blue-600 font-bold' : 'text-gray-900'}`}>List</span>
                  </Link>
                  <Link to="/search" className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50">
                    <SearchIcon className={`flex-shrink-0 h-6 w-6 ${active === 'search' ? 'text-blue-600' : 'text-gray-900'}`} aria-hidden="true" />
                    <span className={`ml-3 text-base font-medium ${active === 'search' ? 'text-blue-600 font-bold' : 'text-gray-900'}`}>Search</span>
                  </Link>
                </nav>
              </div>
            </div>
          </div>
        </Popover.Panel>
      </Transition>
    </Popover>
  )
}

export default Navbar