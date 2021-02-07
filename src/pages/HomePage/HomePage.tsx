import React, { useState, useEffect } from "react";
import { Song } from "../../models";
import { Storage } from 'aws-amplify';
import { SongsList } from "../../componenets/Song/SongsList";


function Home() {

  const [recentlyAdded, setRecentlyAdded] = useState(new Array<Song>());

  useEffect(() => {
    async function getData() {
      const data = await Storage.get(`recentlyadded.json`, { download: true }) as {Body: {text(): Promise<string>}};
      data.Body.text().then(recentAddadData => { 
        setRecentlyAdded(JSON.parse(recentAddadData));
      })
    }
    getData();
  }, []);

  return (
    <>
      <div><h2>Останні додані переклади</h2></div>
      <SongsList songs={recentlyAdded}/>
    </>
  )
}

export default Home;