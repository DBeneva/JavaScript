import { useState } from 'react';
import useFetch from '../hooks/useFetch';

const CharacterList = () => {
    const [url, setUrl] = useState('https://swapi.dev/api/people');
    const { state: characters, isLoading, error } = useFetch(url);

    return (
        <>
            <ul>
                {characters.map(x => <li key={x.name}>{x.name}</li>)}
            </ul>
            <button onClick={() => setUrl('https://swapi.dev/api/planets')}>Load planets</button>
        </>
    );
};

export default CharacterList;