import React, { useState } from 'react';

function AddToCartForm(props) {
  const { total, setTotal, price, name } = props;
  //Use States for button and total
  const [buttonState, setButtonState] = useState(true);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (buttonState) {
      if (event.target[3].checked) {
        setTotal(total + price * 0.9);
      } else {
        setTotal(total + price);
      }
      alert(`Hooray! ${name} were added to your cart!`);
    } else {
      if (event.target[3].checked) {
        setTotal(total - price * 0.9);
      } else {
        setTotal(total - price);
      }
      alert(
        `You removed ${name} from your cart! Feel free to add them when you're ready!`
      );
    }
    setButtonState(!buttonState);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className='form-label'>
          <label htmlFor='customerName'>
            Who's it's for:
            <input
              type='text'
              className='form-control'
              id='customerName'
              required={true}
              placeholder={`Recipiten's name`}
              name='name'
            />
          </label>
          <label htmlFor='allergies'>
            List any allergies:
            <input
              type='text'
              className='form-control'
              id='allergies'
              placeholder={`Allergies`}
            />
          </label>
        </div>
        <div className='form-check'>
          <input
            className='form-check-input'
            type='radio'
            name='PurchaseType'
            value='OneTime'
          />
          <label className='form-check-label' htmlFor='OntTimePurchase'>
            One-Time Purchase
          </label>
        </div>
        <div className='form-check'>
          <input
            className='form-check-input'
            type='radio'
            name='PurchaseType'
            value='Subscription'
          />
          <label className='form-check-label' htmlFor='Subscription'>
            Subscribe and Save 10%
          </label>
        </div>
        <button type='submit' className='btn btn-primary'>
          {buttonState ? `Add to Cart - $${price}` : `Remove from Cart`}
        </button>
      </form>
    </div>
  );
}

export default AddToCartForm;
