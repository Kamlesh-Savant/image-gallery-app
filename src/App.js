import axios from "axios";
import React, { useEffect, useState } from "react";

function App() {
  const [data, setData] = useState([]);

  const fecthImages = async () => {
    const response = await axios.get("https://picsum.photos/v2/list");
    setData(response.data);
    // console.log(response.data);
  };

  useEffect(() => {
    fecthImages();
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Image Gallery</h1>
      </header>
      <div className="gallery">
        {data.map((image) => {
          return <img src={image.download_url} height={400} alt="" />;
        })}
      </div>
    </div>
  );
}

export default App;
