import React, { useState, useEffect, FunctionComponent } from "react";
import { Song } from "../../models";
import { Storage } from 'aws-amplify';
import { SongsList } from "../../componenets/Song/SongsList";

export const RecentlyAdded: FunctionComponent<{}> = () => {
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

  if(recentlyAdded.length < 2){
    return <></>;
  }

  return (
    <>
      <div><h2>Останні додані переклади</h2></div>
      <SongsList songs={recentlyAdded}/>
    </>
  )

}