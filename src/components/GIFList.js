import React from 'react';
import { Card } from 'antd';

export default function GIFList({ list }) {
  console.log(`GIFLIST LIST: ${list}`);
  function switchGif(e) {
    // console.log('switchGif:', e.target);
    let newSrc = e.target.alt;
    let newAlt = e.target.src;
    e.target.src = newSrc;
    e.target.alt = newAlt;
  }

  let gifInfo;
  if (list.length > 1) {
    const gifInfo = list.map((gif, index) => {
      return (
        <Card
          key={index}
          title={gif.title}
          style={{
            flex: '0 0 25%',
            boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.5)',
            transition: ' 0.3s',
            padding: '.5rem 1rem',
            height: 'auto',
            backgroundColor: '#00000012',
            textAlign: 'center'
          }}
        >
          <img
            onMouseOver={switchGif}
            onMouseLeave={switchGif}
            className="still"
            style={{ width: '300px' }}
            alt={gif.images.downsized.url}
            src={gif.images.downsized_still.url}
          />
          <div
            className="container"
            style={{ position: 'relative', bottom: '0' }}
          >
            <a href={gif.bitly_gif_url}>View on Giphy</a>
          </div>
        </Card>
      );
    });
    return <div className="GIFList">{gifInfo}</div>;
  }
  return (
    <div className="GIFList">
      <h2 style={{ textAlign: 'center' }}> No Gifs Yet </h2>
    </div>
  );
}
