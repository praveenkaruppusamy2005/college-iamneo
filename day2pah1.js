import React, { useState } from 'react';

const Day2pah1 = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })

  const handleChange = (e) => {
    const { id, value } = e.target
    setFormData({
      ...formData,
      [id]: value
    });
  }

  const handleSubmit = (e) => {
    e.preventDefault() 
    console.log(formData)
  };

  return (
    <>
      <section>
        <form onSubmit={handleSubmit}>
          <label>Name:</label>
          <input
            type="text"
            placeholder="Name"
            value={formData.name}
            onChange={handleChange}
          />
          <label>Email:</label>
          <input
            type="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
          />
          <label>Message:</label>
          <textarea
            value={formData.message}
            onChange={handleChange}
          ></textarea>
          <button type="submit">Submit</button>
        </form>
      </section>
    </>
  );
};

export default Day2pah1;
