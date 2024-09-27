import React, { useEffect, useState } from 'react';

function Home() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch("https://strapi-store-server.onrender.com/api/products", {
      method: "GET"
    })
      .then((response) => response.json())
      .then((data) => {
        setProducts(data.data);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return (
    <div className="flex flex-wrap justify-center gap-6 p-6">
      {loading ? (
        <div>Loading...</div>
      ) : (
        products.length > 0 && products.map((value, index) => (
          <div key={index} className="w-60 bg-white rounded-lg shadow-lg overflow-hidden">
            <img src={value.attributes.image} alt={value.attributes.title} className="w-full h-40 object-cover" />
            <div className="p-4 text-center">
              <h3 className="text-lg font-semibold text-gray-800">{value.attributes.title}</h3>
              <h3 className="text-blue-500 font-bold mt-2">${value.attributes.price}</h3>
            </div>
          </div>
        ))
      )}
    </div>
  );
}

export default Home;
