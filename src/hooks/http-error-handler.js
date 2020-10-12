import {useState, useEffect} from 'react';


export default httClient => {
    const [error, setError] = useState(null);


    const reqInterceptor = httClient.interceptors.request.use( req => {
                setError(null);
                return req;
            } );
            const resInterceptor = httClient.interceptors.response.use( res => res, err => {
            setError(err);
            } );

        useEffect(() =>  {
            return () => {
                httClient.interceptors.request.eject(reqInterceptor);
                httClient.interceptors.response.eject(resInterceptor);
            }
        }, [reqInterceptor,resInterceptor]);

        const errorConfirmedHandler = () => {
        setError(null);
        }

        return [error, errorConfirmedHandler];
}
