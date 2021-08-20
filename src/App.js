import React, { useState, useEffect } from 'react';
import GIFList from './components/GIFList';
import { Input, Divider } from 'antd';
import './style.css';

export default function App() {
  const onSearch = value => console.log(value);
  const { Search } = Input;
  const [query, setQuery] = useState('');
  const [list, setList] = useState([{}]);
  const API_KEY = 'Z75Pk9xpLMHbzq06TxoLgA0sidUBphTg';
  const BASE_URL = `https://api.giphy.com/v1/gifs/search?api_key=${API_KEY}&q=`;

  const handleInput = event => {
    setQuery(event.target.value);
  };
  const success = () => {};

  const handleSearch = async () => {
    let searchURL = `${BASE_URL}${query}&limit=25&offset=0&rating=g&lang=en`;
    console.log(`SEARCH QUERY: ${query}`);
    try {
      const response = await fetch(searchURL)
        .then(res => res.json())
        .then(data => {
          const gifList = data.data;
          console.info(`GIFLIST: ${gifList}`);
          return gifList;
        });
      const fetchedGifs = await response;
      setList(fetchedGifs);
      if (fetchedGifs[0].hasOwnProperty('id')) {
        console.log(`Fetched GIF: ${fetchedGifs.id}`);
      }
    } catch (err) {
      console.error(err.message);
    }
  };

  return (
    <div className="main">
      <img
        className="giphyIcon"
        src="https://is3-ssl.mzstatic.com/image/thumb/Purple115/v4/80/46/ab/8046abb1-4cbb-bd0b-d96d-5014e3f9a75f/AppIcon-0-0-1x_U007emarketing-0-0-0-7-0-0-sRGB-0-0-0-GLES2_U002c0-512MB-85-220-0-0.png/230x0w.webp"
      />
      <h1>Giphy Image Finder</h1>
      <Search
        placeholder="input search text"
        onChange={handleInput}
        onSearch={handleSearch}
        enterButton
      />
      <hr />
      <div className="displayGifs">
        <GIFList list={list} />
      </div>
    </div>
  );
}
