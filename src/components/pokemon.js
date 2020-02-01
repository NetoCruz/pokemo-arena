/* eslint-disable react/button-has-type */
import React, { useEffect } from 'react';
import '../assets/styles/pokemon.scss';
import { useFetch } from './hooks';
import Api from './api';

function Pokemon() {

  const [result, setResult] = React.useState([]);
  const [poke, setPoke] = React.useState([]);
  const [loading, setLoading] = React.useState('false');
  const [load, setLoad] = React.useState('true');
  // const [data, loading] = useFetch(
  //   'https://pokeapi.co/api/v2/pokemon?limit=10',
  //   //'https://pokeapi.co/api/v2/pokemon/1',
  // );
  const arr = [];
  useEffect(() => {
    //setLoading('true');
    fetch('https:pokeapi.co/api/v2/pokemon?limit=32')
      .then((response) => response.json())
      .then((data) => setResult(
        data.results.map((item) => {
          //console.log(item.url);
          fetch(item.url)
            .then((response) => response.json())
            .then((allpokemon) => arr.push(allpokemon));
          setPoke(arr);
          //setLoad('false');
          return item.url;
        }),
      ));
  }, []);

  setTimeout(() => {
    setLoad(false);
  }, 2000);

  //const handleClick = (event) => { setLoad(!load); };

  // const fetchUsers = async () => {
  //   await fetch('https://pokeapi.co/api/v2/pokemon?limit=10')
  //     .then((response) => response.json())
  //     .then((data) => setResult(
  //       data.results.map((item) => {
  //         //console.log(item.url);
  //         fetch(item.url)
  //           .then((response) => response.json())
  //           .then((allpokemon) => arr.push(allpokemon));
  //         setPoke(arr);
  //         return item.url;
  //       }),
  //     ));
  // };
  //useEffect(() => { fetchUsers(arr); }, [arr]);

  //console.log(result.results);
  //console.log(result);
  // const arr = [];
  // async function allPoke() {
  //   result.results.map((img) => (
  //     fetch(img.url)
  //       .then((response) => response.json())
  //       .then((allpokemon) => arr.push(allpokemon))
  //   ));
  //   //console.log(arr);
  //   return arr;
  // }
  // allPoke();
  console.log(poke);
  return (
    <>
      <div className='pokegallery'>

        {/* <img src={data.sprites.front_default} alt='pokeimg' /> */}
        { load ? (
          <p>Loading</p>
        ) : (
          poke.map((img) => (
            <div>
              {/* <li>{img.name}</li>
                <img src={img.sprites.front_default} alt='pokeimg' /> */}
              <div className='card' style={{ width: '10rem', height: '15rem' }}>
                <img className='card-img-top' src={img.sprites.front_default} alt='pokemon' />
                <div className='card-body'>
                  <h5 className='card-title'>{img.name}</h5>
                  <h6>{img.types[0].type.name}</h6>
                </div>
              </div>
            </div>
          ))
        )}

        {/* <button
          onClick={handleClick}
        >
          { load ? 'Close Additional Info' : 'More Info' }
        </button> */}
      </div>
    </>
  );
}

export default Pokemon;
