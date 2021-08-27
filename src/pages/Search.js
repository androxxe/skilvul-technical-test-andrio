import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { GiphyList, Navbar, Skeleton } from '../components'
import { variable } from '../static'

const List = () => {
  const [isLoading, setIsLoading] = useState(false)
  const [list, setList] = useState([])
  const [query, setQuery] = useState('')
  
  useEffect(() => {
    const source = axios.CancelToken.source();
    const timer = setTimeout(async () => {
      (async() => {
        try  {
          if(query !== ''){
            setIsLoading(true)
            const response = await axios.get("https://api.giphy.com/v1/gifs/search", {
              cancelToken: source.token,
              params: {
                api_key: variable.giphy_api_key,
                limit: 9,
                q: query
              }
            })
            setList(response.data.data)
            setIsLoading(false)
          }
        } catch (e){
          alert(`Terjadi error ${JSON.stringify(e)}`)
        }
      })()
    }, 1500);

    return () => {
      clearTimeout(timer)
      source.cancel("Cancelling in cleanup")
    }
  }, [query])

  return (
    <div>
      <Navbar active='search'/>
      <div className="max-w-2xl mx-auto py-8 px-4 sm:py-10 sm:px-6 lg:max-w-7xl lg:px-8">
        <h2 className="text-3xl font-bold text-blue-500 mb-5">
          Search Giphy
        </h2>             
        <div className="flex flex-1 items-center justify-center mb-5">
          <input value={query} onChange={e => setQuery(e.target.value)} type="text" className="form-input px-4 py-3 rounded-full w-full md:w-80 border-blue-400" placeholder="Cari disini" />
        </div>
        { isLoading ?
          <div className="grid grid-cols-1 gap-y-10 sm:grid-cols-2 gap-x-6 lg:grid-cols-3 xl:grid-cols-3 xl:gap-x-8">
            <Skeleton />
            <Skeleton />
            <Skeleton />
          </div>
        :
          query ? 
            list.length > 0 ?
              <>
                <h4 className="text-lg text-gray-800 mb-4">Hasil Pencarian untuk <b>{ query }</b></h4>
                <div className="grid grid-cols-1 gap-y-10 sm:grid-cols-2 gap-x-6 lg:grid-cols-3 xl:grid-cols-3 xl:gap-x-8">
                  { list.map((item, index) => (
                    <GiphyList key={index} item={item} />
                  ))}
                </div>
              </>
            :
            <h4 className="text-center mt-5 pt-5">Tidak ada data</h4>
          : <h4 className="text-center mt-5 pt-5">Isi form pencarian</h4> 
        }
      </div>
    </div>
  )
}

export default List