import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';

function Github() {
  const data=useLoaderData()


    //const [data, setData] = useState({});  // Initialize as an empty object, not an array

    //useEffect(() => {
      //  fetch('https://api.github.com/users/joy30-joy')  // Correct GitHub API URL
        //    .then(res => res.json())
          //  .then(data => {
            //    console.log(data);
              //  setData(data);
            //});

    //}, []);

  return (
    <div className="text-center m-4 bg-gray-600 text-white p-4 text-3xl">
      Github followers: {data.followers}
      {data.avatar_url && <img src={data.avatar_url} alt="Git picture" width={300} />}
    </div>
  );
}

export default Github;

export const githubInfoLoader = async() => {
 const response = await fetch('https://api.github.com/users/joy30-joy')
 return  response.json()
}
