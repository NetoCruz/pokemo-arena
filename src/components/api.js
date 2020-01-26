import React from 'react';

function Api(props) {

  //function all(data) {
  //data.map((element) => {
  //console.log(element.name);
  // url = element.url;
  // fetch(url)
  //   .then((response) => response.json())
  //   .then((pokeData) => {
  //     console.log(pokeData);
  //   });
  //return element;
  //});
  //};
  // eslint-disable-next-line react/destructuring-assignment
  //all(props.datos);
  // eslint-disable-next-line react/destructuring-assignment
  console.log(props.datos);

  return (
    <div>
      <ul>
        {/* <img src={data.sprites.front_default} alt='pokeimg' /> */}
        {/* eslint-disable-next-line react/destructuring-assignment */}
      </ul>
    </div>
  );
}

export default Api;
