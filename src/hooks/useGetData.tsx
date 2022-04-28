import { useState, useEffect } from 'react'
import API from '../utilities/api'

export default function useGetData(url: string) {
  const [data, setData] = useState(null)

  const longPolling = async (ruta: string) => {
    let finish: any = await new Promise((resolve) => {
      API.callGET(ruta, (response:any) => {
        resolve(response)
      }, (error: any) => {
        console.log(`Error al cargar los ${ruta}: `, error)
        setTimeout(()=>{
          longPolling(url)
        }, 10000)
      })
    })
    setData(finish)
  }

  useEffect(() => {
    longPolling(url)
  }, [url])

  return [data]
}