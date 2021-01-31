import React, { useState, useEffect } from "react";
import { Artist } from "../../models";
import { fetchArtistsByFirstLetter } from "../../service/artists-service";
import { Char } from "../../models/char";
import { useParams } from "react-router-dom";
import "./BrowseArtistsPage.css";

export const BrowseArtists = () => {
  let { firstLetter } = useParams();
  const [artists, setArtists] = useState<Artist[]>();

  useEffect(() => {
    async function getData() {
      try {
        const artistsData = await fetchArtistsByFirstLetter(new Char(firstLetter));
        setArtists(artistsData);
      } catch (error) {
        console.error("Error fetching artists", error);
      }
    }
    getData();
  }, [firstLetter]);

  console.log('I am here. artists are: ', artists);

  return (
    <div>
      {artists?.map((a) => (
        <div key={a.id}>
          <div className="row">
              <div>
                <img src={a.thumbnailUrl} className='icon' alt="Song thumbnail" />
              </div>	
              <div className="left-margin">
                <h4>{a.title}</h4>
              </div>
          </div>
          <div className="clear"></div>
        </div>
      ))}
    </div>
  );
};