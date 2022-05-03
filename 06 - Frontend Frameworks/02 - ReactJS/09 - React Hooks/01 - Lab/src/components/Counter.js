import { useEffect } from 'react';

function Counter({count}) {
    useEffect(() => {
        console.log(count);

        return () => {
            console.log('Unmount');
        };
    }, []);

    return (
      <h3>{count}</h3>
    );
}

export default Counter;