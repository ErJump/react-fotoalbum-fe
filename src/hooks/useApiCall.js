import axios from 'axios';
import { useCallback, useState, useEffect } from 'react';

export function useApiCall( url, method ) {
    const [data, setData] = useState(null);
    const [error, setError] = useState( null );
    const [isLoading, setIsLoading] = useState( false );

    
    

    const fetchData = useCallback( () => {
        setIsLoading( true ); 
        axios({url, method})
            .then( ( response ) => {
                setData( response.data );
            } )
            .catch( ( error ) => {
                setError( error );
            } )
            .finally( () => {
                setIsLoading( false );
            } );
    }, [url, method] );

    useEffect(() => {
        fetchData();
    }, [fetchData] );
    
    return { data, error, isLoading, fetchData };
}