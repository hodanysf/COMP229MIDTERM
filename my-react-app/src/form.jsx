import React, { useState } from 'react';

export const MyForm = () => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('');
  const [quantity, setQuantity] = useState(0);
  const [price, setPrice] = useState(0);

  const handleSubmit = event => {
    event.preventDefault();
    console.log({ name, description, category, quantity, price });
  };
  const handleCancel = () => {
    setName('');
    setDescription('');
    setCategory('');
    setQuantity(0);
    setPrice(0);
  };
  // onClick for handleCancel to delete content/ reset
  // onSubmit to submit information into the console
  return (
    <div className="wrapper">
    <h2><b>New Product</b></h2>
    <form onSubmit={handleSubmit}>
      <fieldset>
        <label>
          <p>Name</p>
          <input
            name="name"
            value={name}
            onChange={e => setName(e.target.value)}
          />
        </label>
        <label>
          <p>Description</p>
          <input
            name="description"
            value={description}
            onChange={e => setDescription(e.target.value)}
          />
        </label>
        <label>
          <p>Category</p>
          <select
            name="category"
            value={category}
            onChange={e => setCategory(e.target.value)}
          >
            <option value="">Select a category</option>
            <option value="Tech">Technology</option>
            <option value="clothing">Clothing</option>
            <option value="books">Books</option>
            <option value="makeup">Makeup</option>
          </select>
        </label>
        <label>
          <p>Quantity</p>
          <input
            name="quantity"
            type="number"
            value={quantity}
            onChange={e => setQuantity(e.target.value)}
          />
        </label>
        <label>
          <p>Price</p>
          <input
            name="price"
            type="number"
            value={price}
            onChange={e => setPrice(e.target.value)}
          />
        </label>
      </fieldset>
      <button type="submit">Submit</button>
      <button type="reset"onClick={handleCancel}>Cancel</button>
    </form>
  </div>
  );
}