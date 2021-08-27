import React from 'react'

const Skeleton = () => {
  return (
    <div className="border border-gray-300 shadow rounded-2xl max-w-sm w-full mx-auto h-500">
      <div className="animate-pulse">
        <div className="space-y-4">
          <div className="h-96 bg-gray-300 rounded"></div>
          <div className="p-3 space-y-2">
            <div className="h-8 bg-gray-300 rounded-2xl w-5/6"></div>
            <div className="h-4 bg-gray-300 rounded-2xl w-3/6"></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Skeleton
