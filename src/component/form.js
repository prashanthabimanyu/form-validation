import React, { useState } from 'react';
import '../component/form.css'

const FormValidation = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!name || !email || !password) {
      setError('Please fill in all fields');
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      setError('Please enter a valid email address');
    } else {
      setError('');
      console.log('Form submitted!');
    }
  };

  return (
    <>
      <h1>SING IN FORM</h1>
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name">Name  :</label>
        <input type="text" id="name" value={name} onChange={handleNameChange} />
      </div>

      <div>
        <label htmlFor="email">Email  :</label>
        <input type="email" id="email" value={email} onChange={handleEmailChange} />
      </div>

      <div>
        <label htmlFor="password">Password  :</label>
        <input type="password" id="password" value={password} onChange={handlePasswordChange} />
      </div>

      {error && <p>{error}</p>}

      <button type="submit">Submit</button>
    </form>
    </>
  );
};

export default FormValidation;
