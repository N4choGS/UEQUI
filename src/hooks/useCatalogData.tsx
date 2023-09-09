import React from 'react';
import { endpoint } from '../constants/globals';
import type { Catalog } from '../types/Catalog';

export default function useCatalogData (catalogName : string) {
    const [data, setData] = React.useState<Catalog[]>([]);
    const [hasError, setHasError] = React.useState<boolean>(false);
    const [isLoading, setIsLoading] = React.useState<boolean>(false);
    React.useEffect(() => {
      const fetchData = async () => { 
        setIsLoading(true)
        try {
          const response = await fetch(endpoint+catalogName, {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json',
              // You can add more headers if needed
            },
            // You can add more options like credentials, mode, etc.
          });

          if (!response.ok) {
            setHasError(true)
            throw new Error('Error getting modules');
          }

          const jsonData = await response.json();
          setData(jsonData)
          setIsLoading(false)

        } catch (err) {
          setIsLoading(false)
          setHasError(true)
          throw new Error('Error getting modules');
        }
      };

      fetchData();
    }, [catalogName]); // The empty array [] ensures this effect runs once, like componentDidMount

    console.log(data)
    return {data,isLoading,hasError}

}

