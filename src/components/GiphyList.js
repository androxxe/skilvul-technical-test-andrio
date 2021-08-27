import { UserIcon } from '@heroicons/react/outline'
import React from 'react'

const GiphyList = ({ item }) => {
  return (
    <div className="group border border-gray-300 rounded-2xl shadow-md">
      <div className="w-full aspect-w-1 aspect-h-1 bg-gray-200 rounded-lg overflow-hidden xl:aspect-w-7 xl:aspect-h-8">
        <div
          className="w-full bg-black"
          style={{ 
            backgroundImage: `url(${item.images.downsized_large.url})`,
            height: 320,
            width: '100%',
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat'
          }} />
      </div>
      <div className="p-3 space-y-2">
        <h3 className="pt-1 text-gray-700 text-lg font-bold">{item.title}</h3>
        <div className="flex flex-1 flex-row items-center">
          <UserIcon className="h-4 w-4 text-blue-400 mr-1" aria-hidden="true" />
          <p className="text-sm font-medium text-gray-500">
            @{ item.username ? item.username : 'no name' }  
          </p>
        </div>
      </div>
    </div>
  )
}

export default GiphyList
