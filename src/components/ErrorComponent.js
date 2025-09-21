import {useRouteError} from 'react-router';

const ErrorComponent = () => {
    const err = useRouteError();
    console.log(err)
    return (
        <div>
            <h1>oops!!!</h1>
            <h2>page not found</h2>
            <h2>{err.error.message}</h2>
        </div>
    )
}

export default ErrorComponent;