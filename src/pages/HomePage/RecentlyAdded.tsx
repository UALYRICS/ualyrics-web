import React, { useState, useEffect, FunctionComponent } from "react";
import { Translation } from "../../models";
import { Storage } from 'aws-amplify';
import {Link} from "react-router-dom";

export const RecentlyAdded: FunctionComponent<{}> = () => {
  const [recentlyAdded, setRecentlyAdded] = useState(new Array<Translation>());

  useEffect(() => {
    async function getData() {
      const data = await Storage.get(`recentlyadded.json`, { download: true }) as {Body: {text(): Promise<string>}};
      data.Body.text().then(recentAddadData => { 
        setRecentlyAdded(JSON.parse(recentAddadData));
      })
    }
    getData();
  }, []);

  if(recentlyAdded.length === 0){
    return <></>;
  }

  return (
    <>
      <div><h2>Останні додані переклади</h2></div>
      {recentlyAdded.map((translation, idx) => (
        <div key={idx} className="row mt-3 ">
          <div className="col-sm-5 bg-light">
            <div>
              <img src={translation?.song?.imageUrl} className='icon' alt="Song thumbnail" />
            </div>	
            <div className="left-margin">
              <h6><Link to={`/translations/${translation?.id}`}>{translation?.song?.title}</Link></h6>
              <h6>{translation?.song?.artistName}</h6>
              <h6>Перекладено: <b>{translation?.owner}</b></h6>
            </div>
          </div>
        </div>
      ))}
    </>
  )

}