import React, { useState } from 'react';


function Darkmode() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const handleDarkModeToggle = () => {
    setIsDarkMode(!isDarkMode);
    // Implement logic to toggle dark mode here
  };

  return (

      <div className="dark-mode-toggle">
        <label htmlFor="darkModeToggle">
          Dark Mode
          <input
            id="darkModeToggle"
            type="checkbox"
            checked={isDarkMode}
            onChange={handleDarkModeToggle}
          />
        </label>
      </div>
    
  );
}

export default Darkmode;
