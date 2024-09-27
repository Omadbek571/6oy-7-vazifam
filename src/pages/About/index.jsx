import React, { useState, useEffect } from 'react';
import img from "../../assets/img.png";
import LazyImage from '../../components/LaizyLoadingImge';

function About() {
  const [albums, setAlbums] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch("https://jsonplaceholder.typicode.com/photos", {
      method: "GET"
    })
      .then(function (response) {
        return response.json();
      })
      .then(data => {
        setAlbums(data);
      })
      .catch(err => {
        console.log(err);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return (
    <div className='flex flex-wrap gap-5'>
      {loading ? (
        <div className='flex mx-auto'>Loading...</div>
      ) : (
        albums.length > 0 && albums.map(function (value, index) {
          return (
            <div key={index} className='w-60 bg-white rounded-lg shadow-lg overflow-hidden mx-auto'>
              <LazyImage
                src={value.url}
                alt={value.title}
                placeholder={img}
              />
              <h3>{value.title}</h3>
              <h4>{value.id}</h4>
            </div>
          )
        })
      )}
    </div>
  );
}

export default About;
