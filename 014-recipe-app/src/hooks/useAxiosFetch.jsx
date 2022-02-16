import {useState, useEffect} from 'react'
import axios from 'axios';

export default function useAxiosFetch(url) {
  const [data, setData] = useState(null);
  const [fetchError, setFetchError] = useState(null);
  const [isFetching, setIsFetching] = useState(true);

  useEffect(() => {
    axios.get(url)
      .then(response => {
        setData(response.data);
      })
      .catch(err => {
        setFetchError(err)
      }).finally(() => {
        setIsFetching(false)
      })
  }, [url])

  return {data, fetchError, isFetching}
}
