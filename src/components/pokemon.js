import React from 'react';
import { useFetch } from './hooks';

function Pokemon() {
  const [data, loading] = useFetch(
    'https://pokeapi.co/api/v2/pokemon?limit=30',
    // 'https://pokeapi.co/api/v2/pokemon/1',
  );
  console.log(data);

  return (
    <>
      <h1>Photos</h1>
      {loading ? (
        'Loading...'
      ) : (
        <ul>
          <img src={data.sprites.front_default} alt='pokeimg' />
          {/* {data.map((img) => (
            <li>
              <img alt='pomkemon' src={img.sprites.front_default} />
            </li>
          ))} */}
        </ul>
      )}
    </>
  );
}

export default Pokemon;
