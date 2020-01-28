import React, { useEffect } from 'react';
import { useFetch } from './hooks';
import Api from './api';

function Pokemon() {
  const [result, setResult] = React.useState([]);
  // const [data, loading] = useFetch(
  //   'https://pokeapi.co/api/v2/pokemon?limit=10',
  //   //'https://pokeapi.co/api/v2/pokemon/1',
  // );
  useEffect(() => {
    fetch('https://pokeapi.co/api/v2/pokemon?limit=10')
      .then((response) => response.json())
      .then((data) => setResult(data));
  }, []);
  //console.log(result.results);
  //console.log(result);
  const arr = [];
  async function allPoke() {
    result.results.map((img) => (
      fetch(img.url)
        .then((response) => response.json())
        .then((allpokemon) => arr.push(allpokemon))
    ));
    //console.log(arr);
    return arr;
  }
  allPoke();
  console.log(arr);
  return (
    <>
      <div>
        <ul>
          {/* <img src={data.sprites.front_default} alt='pokeimg' /> */}
          {/* {
            arr.map((img) => (
              <li>{img.name}</li>
            ))
          } */}
         hola
        </ul>
      </div>
    </>
  );
}

export default Pokemon;
