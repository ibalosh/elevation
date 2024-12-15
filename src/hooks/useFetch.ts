import {useEffect, useState} from "react";

type FetchFunction<T> = () => Promise<T>;

export function useFetch<T>(fetchFn: FetchFunction<T>) {
  const [isFetching, setIsFetching] = useState(false);
  const [error, setError] = useState<{message: string} | null>(null);
  const [fetchedData, setFetchedData] = useState<T>();

  useEffect(() => {
    async function fetchData() {
      setIsFetching(true);
      try {
        const data = await fetchFn();
        setFetchedData(data);
      } catch (error) {
        if (error instanceof Error) {
          setError({ message: error.message || 'Failed to fetch data.' });
        } else {
          setError({ message: 'Failed to fetch data.' });
        }
      }
      setIsFetching(false);
    }

    fetchData();
  }, [fetchFn]);

  return {
    isFetching,
    fetchedData,
    setFetchedData,
    error
  }
}