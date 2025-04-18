// import React, { useState } from 'react';
// import './App.css';

// function App() {
//   const [form, setForm] = useState({ username: '', password: '' });
//   const [message, setMessage] = useState('');

//   const handleChange = (e) => {
//     setForm({ ...form, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     // Simulate a response
//     // if (form.username === 'admin' && form.password === '1234') {
//       if (form.username.trim() !== '' && !isNaN(form.password)){

//       setMessage('✅ Login successful!');
//     } else {
//       setMessage('❌ Invalid credentials');
//     }
//   };

// //   return (
// //     <div className="login-container">
// //       <form className="login-form" onSubmit={handleSubmit}>
// //         <h2>Login</h2>
// //         <input
// //           type="text"
// //           name="username"
// //           placeholder="Username"
// //           value={form.username}
// //           onChange={handleChange}
// //           required
// //         />
// //         <input
// //           type="password"
// //           name="password"
// //           placeholder="Password"
// //           value={form.password}
// //           onChange={handleChange}
// //           required
// //         />
// //         <button type="submit">Login</button>
// //         <p className="message">{message}</p>
// //       </form>
// //     </div>
// //   );
// // }
// return (
//   <div className="login-container">
//     <form className="login-form" onSubmit={handleSubmit}>
//       <h2>Login</h2>
//       <input
//         type="text"
//         name="username"
//         placeholder="Username"
//         value={form.username}
//         onChange={handleChange}
//         required
//       />

//       <div style={{ position: 'relative' }}>
//         <input
//           type={showPassword ? 'text' : 'password'}
//           name="password"
//           placeholder="Password (numbers only)"
//           value={form.password}
//           onChange={handleChange}
//           required
//           style={{ width: '100%' }}
//         />
//         <button
//           type="button"
//           onClick={() => setShowPassword(!showPassword)}
//           style={{
//             position: 'absolute',
//             right: '10px',
//             top: '50%',
//             transform: 'translateY(-50%)',
//             background: 'none',
//             border: 'none',
//             cursor: 'pointer',
//             fontSize: '14px',
//             color: '#007bff',
//           }}
//         >
//           {showPassword ? 'Hide' : 'Show'}
//         </button>
//       </div>

//       <button type="submit" style={{ marginTop: '15px' }}>Login</button>
//       <p className="message">{message}</p>
//     </form>
//   </div>
// );
// }

// export default App;


import React, { useState } from 'react';
import './App.css';

function App() {
  const [form, setForm] = useState({ username: '', password: '' });
  const [message, setMessage] = useState('');
  const [showPassword, setShowPassword] = useState(false); // Add this line

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (form.username.trim() !== '' && !isNaN(form.password)) {
      setMessage('✅ Login successful!');
    } else {
      setMessage('❌ Invalid credentials');
    }
  };

  return (
    <div className="login-container">
      <form className="login-form" onSubmit={handleSubmit}>
        <h2>Login</h2>
        <input
          type="text"
          name="username"
          placeholder="Username"
          value={form.username}
          onChange={handleChange}
          required
        />

        <div style={{ position: 'relative' }}>
          <input
            type={showPassword ? 'text' : 'password'}
            name="password"
            placeholder="Password (numbers only)"
            value={form.password}
            onChange={handleChange}
            required
            style={{ width: '93.5%' }}
          />
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            style={{
              position: 'absolute',
              right: '10px',
              top: '35%',
              transform: 'translateY(-50%)',
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              fontSize: '14px',
              color: '#007bff',
            }}
          >
            {showPassword ? 'Hide' : 'Show'}
          </button>
        </div>

        <button type="submit" style={{ marginTop: '15px' }}>Login</button>
        <p className="message">{message}</p>
      </form>
    </div>
  );
}

export default App;