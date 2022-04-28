import { useState, useEffect } from 'react'
import API from '../utilities/api'

export default function useGetData(url: string) {
  const [data, setData] = useState(null)

  useEffect(() => {
    const loadData = async () => {
      API.callGET(url, (response:any) => {
        setData(response)
      }, (error: any) => {
        console.log(`Error al cargar los ${url}: `, error)
      })
    }
    loadData()
    return () => {
      console.log("Limpiando useGetDatos")
    }
  }, [url])

  return [data, setData]
}