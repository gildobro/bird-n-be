import React, { useState, useEffect } from 'react';
import AddToCartForm from './AddToCartForm';
import axios from 'axios';

function Products() {
  //set Total state
  const [total, setTotal] = useState(0);

  //Data state
  const [product, setProduct] = useState([]);

  //Fetch Data
  useEffect(() => {
    axios
      .get('https://web-ge8buw2ff-bird-and-be.vercel.app/api/interview')
      .then((res) => {
        setProduct(res.data.products);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div>
      {product.map((item, idx) => (
        <div key={idx}>
          <h2>{item.name}</h2>
          <img
            src={item.primary_image.url_standard}
            alt={item.primary_image.description}
          />
          <div dangerouslySetInnerHTML={{ __html: item.description }} />
          <p>${item.price}.00</p>
          <AddToCartForm
            price={item.price}
            total={total}
            setTotal={setTotal}
            name={item.name}
          />
        </div>
      ))}
      <h2 className='total'>Total: ${total}.00 USD</h2>
    </div>
  );
}

export default Products;
