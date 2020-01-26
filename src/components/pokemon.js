import React from 'react';
import { useFetch } from './hooks';
import Api from './api';

function Pokemon() {
  const [data, loading] = useFetch(
    'https://pokeapi.co/api/v2/pokemon?limit=30',
    //'https://pokeapi.co/api/v2/pokemon/1',
  );
  console.log(data.results);

  return (
    <>
      <div>
        {loading ? (
          'Loading...'
        ) : (
          <ul>
            {/* <img src={data.sprites.front_default} alt='pokeimg' /> */}
            {data.results.map((img) => (
              <li>
                <p>{img.url}</p>
              </li>
            ))}
          </ul>
        )}
        <Api datos={data.results} />
      </div>
    </>
  );
}

export default Pokemon;
