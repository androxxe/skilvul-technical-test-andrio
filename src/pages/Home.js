import { ViewListIcon, SearchIcon } from '@heroicons/react/solid'
import { Link } from 'react-router-dom'
import GiphyLogo from '../assets/giphy-logo.png';

const Home = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div>
          <img
            className="mx-auto h-12 w-auto"
            src={GiphyLogo}
            alt="Workflow"
          />
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900 mt-5">
            Pilih menu List atau Search
          </h2>
        </div>

        <div className="space-y-4">
          <Link to="/list"
            type="submit"
            className="group relative w-full flex justify-center py-3 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-yellow-400 hover:bg-yellow-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            <span className="absolute left-0 inset-y-0 flex items-center pl-3">
              <ViewListIcon className="h-5 w-5 text-yellow-500 group-hover:text-yellow-400" aria-hidden="true" />
            </span>
            Halaman List
          </Link>

          <Link to="/search"
            type="submit"
            className="group relative w-full flex justify-center py-3 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            <span className="absolute left-0 inset-y-0 flex items-center pl-3">
              <SearchIcon className="h-5 w-5 text-blue-500 group-hover:text-blue-400" aria-hidden="true" />
            </span>
            Halaman Search
          </Link>
        </div>
      </div>
      <div className="fixed bottom-1.5">
          <footer className="h-10 text-gray-400">by Andrio Pratama</footer>
      </div>
    </div>
  )
}

export default Home