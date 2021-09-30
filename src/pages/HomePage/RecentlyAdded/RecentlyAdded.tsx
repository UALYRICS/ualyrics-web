import React, { useState, useEffect, FunctionComponent } from "react";
import { Translation } from "../../../models";
import { Storage } from 'aws-amplify';
import {Link} from "react-router-dom";
import { RightTitleSection } from "../../../componenets/Decor/RightTitleSection";
import "./RecentlyAdded.css";

export const RecentlyAdded: FunctionComponent<{}> = () => {
  const ITEMS_PER_PAGE = 10;

  const [recentlyAdded, setRecentlyAdded] = useState(new Array<Translation>());
  const [page, setPage] = useState<number>(1);

  useEffect(() => {
    async function getData() {
      const data = await Storage.get(`recentlyadded.json`, { download: true }) as {Body: {text(): Promise<string>}};
      data.Body.text().then(recentAddadData => { 
        setRecentlyAdded(JSON.parse(recentAddadData));
      })
    }
    getData();
  }, []);

  let loadMoreButton;
  if(recentlyAdded.length > page * ITEMS_PER_PAGE)
  {
    loadMoreButton = (<button className="btn btn-outline-dark btn-light my-3" onClick={() => setPage(page + 1)} data-test="show-more-button">Показати більше</button>);
  }

  if(recentlyAdded.length === 0){
    return <></>;
  }

  return (
    <>
      <RightTitleSection title="Останні додані переклади"/>
      {recentlyAdded.slice(0, page * ITEMS_PER_PAGE).map((translation, idx) => (
        <div key={idx} className="recent-translation my-2 mr-2">
          <div>
            <img src={translation?.song?.imageUrl} className='icon' alt="Song thumbnail" />
          </div>	
          <div className="left-margin">
            <h6><Link to={`/translations/${translation?.id}`} data-test="recently-added-title">{translation?.song?.title}</Link></h6>
            <h6>{translation?.song?.artistName}</h6>
            <h6>Перекладено: <b>{translation?.ownerName}</b></h6>
          </div>
        </div>
      ))}
      <div className="text-center">
        {loadMoreButton}
      </div>
    </>
  )

}