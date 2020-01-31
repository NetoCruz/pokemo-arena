import React from 'react';

function Api({ datos }) {
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
 console.log(datos);
  return (
    <div>
      <ul>
        {/* <img src={data.sprites.front_default} alt='pokeimg' /> */}
        {
          datos.map((item)=>(
          <li>{item.order}</li>
          ))

        }
      </ul>
    </div>
  );
}

export default Api;
