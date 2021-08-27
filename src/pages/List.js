import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { GiphyList, Navbar, Skeleton } from '../components'
import { variable } from '../static'

const List = () => {
  const [isLoading, setIsLoading] = useState(true)
  const [list, setList] = useState([])
  
  useEffect(() => {
    const source = axios.CancelToken.source();
    (async() => {
      try  {
        const response = await axios.get("https://api.giphy.com/v1/gifs/trending", {
          cancelToken: source.token,
          params: {
            api_key: variable.giphy_api_key,
            limit: 9
          }
        })
        setList(response.data.data)
        setIsLoading(false)
      } catch (e){
        alert(`Terjadi error ${JSON.stringify(e)}`)
      }
    })()

    return () => source.cancel("Cancelling in cleanup")
  }
  , [])

  return (
    <div>
      <Navbar active='list' />
      <div className="max-w-2xl mx-auto py-8 px-4 sm:py-10 sm:px-6 lg:max-w-7xl lg:px-8">
        <h2 className="text-3xl font-bold text-blue-500 mb-5">
          List Giphy
        </h2>             
        { isLoading ?
          <div className="grid grid-cols-1 gap-y-10 sm:grid-cols-2 gap-x-6 lg:grid-cols-3 xl:grid-cols-3 xl:gap-x-8">
            <Skeleton />
            <Skeleton />
            <Skeleton />
          </div>
        :
          list.length > 0 ?
            <div className="grid grid-cols-1 gap-y-10 sm:grid-cols-2 gap-x-6 lg:grid-cols-3 xl:grid-cols-3 xl:gap-x-8">
              { list.map((item, index) => (
                <GiphyList key={index} item={item} />
              ))}
            </div>
          :
          <h4 className="text-center mt-5 pt-5">Tidak ada data</h4>
        }
      </div>
    </div>
  )
}

export default List