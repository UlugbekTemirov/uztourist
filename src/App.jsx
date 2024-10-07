import { useState, useEffect } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  // Effect to initialize the Telegram WebApp
  useEffect(() => {
    if (window.Telegram?.WebApp) {
      const tgWebApp = window.Telegram.WebApp;
      // Expand the WebApp to full screen
      tgWebApp.expand();
      
      // Set the background color based on Telegram's theme
      tgWebApp.setBackgroundColor(tgWebApp.themeParams.bg_color || '#ffffff');
      
      // Log some info about the current user and theme
      console.log('Telegram Web App initialized', tgWebApp.initDataUnsafe);
      console.log('Theme', tgWebApp.themeParams);

      // You can close the WebApp programmatically if needed
      // tgWebApp.close();

      // Clean-up function if needed
      return () => {
        // Optional: Perform any cleanup actions when the component unmounts
      };
    }
  }, []);

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank" rel="noopener noreferrer">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank" rel="noopener noreferrer">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>Edit <code>src/App.jsx</code> and save to test HMR</p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
