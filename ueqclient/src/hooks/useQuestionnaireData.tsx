import React from 'react';
import { endpoint } from '../constants/globals';
import type { Questionnaire } from '../types/Questionnaire';

export default function useQuestionnaireData (projectIds:string[], startDate: Date| null, moduleIds? : string[], endDate?: Date| null) {
    const [data, setData] = React.useState<Questionnaire[]>([]);
    const [hasError, setHasError] = React.useState<boolean>(false);
    const [isLoading, setIsLoading] = React.useState<boolean>(false);

    const queryString = generateQueryString(projectIds, startDate, moduleIds, endDate)

    React.useEffect(() => {
      const fetchData = async () => { 
        setIsLoading(true)
        try {
          if(projectIds.length > 0 && startDate !== null) {
            const response = await fetch(endpoint+"Questionnaire?"+ queryString, {
              method: 'GET',
              headers: {
                'Content-Type': 'application/json',
                // You can add more headers if needed
              },
              // You can add more options like credentials, mode, etc.
            });
  
            if (!response.ok) {
              setHasError(true)
              throw new Error('Error getting Questionnaires');
            }
  
            const jsonData = await response.json();
            setData(jsonData)
          }
          setIsLoading(false)

        } catch (err) {
          setIsLoading(false)
          setHasError(true)
          throw new Error('Error getting Questionnaires');
        }
      };

      fetchData();
    }, [queryString, projectIds.length, startDate]); // The empty array [] ensures this effect runs once, like componentDidMount

    return {data,isLoading,hasError}

}

function generateQueryString (projectIds:string[], startDate: Date|null, moduleIds? : string[], endDate?: Date| null){
  const queryString = [];

  // Add projectIds to the query string
  if (projectIds && projectIds.length > 0) {
    queryString.push(`projectIds=${projectIds.join(',')}`);
  }

  // Add startDate to the query string
  if (startDate) {
    queryString.push(`startDate=${startDate.toISOString().split('T')[0]}`);
  }

  // Add moduleIds to the query string if provided
  if (moduleIds && moduleIds.length > 0) {
    queryString.push(`moduleIds=${moduleIds.join(',')}`);
  }

  // Add endDate to the query string if provided
  if (endDate) {
    queryString.push(`endDate=${endDate.toISOString().split('T')[0]}`);
  }

  // Combine the query string parts with '&' separator
  return queryString.join('&');
}

