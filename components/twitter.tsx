import React, { useState } from 'react';

const TwitterLinkChecker: React.FC = () => {
  const [link, setLink] = useState('');
  const [isTwitterLink, setIsTwitterLink] = useState(false);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setLink(event.target.value);
  };

  const handleFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Check if the link is from Twitter
    const isTwitter = link.includes('twitter.com');
    setIsTwitterLink(isTwitter);
  };

  return (
    <div>
      <form onSubmit={handleFormSubmit}>
        <input
          type="text"
          placeholder="Enter a Twitter link"
          value={link}
          onChange={handleInputChange}
          style={{
            padding: '8px',
            marginRight: '10px',
            borderRadius: '4px',
            border: '1px solid #ccc',
          }}
        />
        <button
          type="submit"
          style={{
            padding: '8px 16px',
            borderRadius: '4px',
            backgroundColor: '#1DA1F2',
            color: '#fff',
            border: 'none',
            cursor: 'pointer',
          }}
        >
          Check
        </button>
      </form>
      {isTwitterLink && <p style={{ color: 'green' }}>This is a Twitter link!</p>}
      {!isTwitterLink && isTwitterLink !== null && (
        <p style={{ color: 'red' }}>This is not a Twitter link!</p>
      )}
    </div>
  );
};

export default TwitterLinkChecker;
