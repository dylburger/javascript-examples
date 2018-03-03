import React from 'react';
import sortByAge from './utils/sortByAge';

export default ({data}) => (
  <div>
    <h1>Names and Ages</h1>
    {data.sort(sortByAge).map(obj => (
      <p key={obj.name}>
        {obj.name} : {obj.age}
      </p>
    ))}
  </div>
);
