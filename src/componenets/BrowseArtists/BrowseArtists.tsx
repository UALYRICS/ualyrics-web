import React, { useState, useEffect } from "react";
import { Artist } from "../../model/artist";
import { fetchArtistsByFirstLetter } from "../../service/artists-service";
import { Char } from "../../model/char";
import { useParams } from "react-router-dom";
import "./BrowseArtists.css";

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

  return (
    <div>
      {artists?.map((a) => (
        <div key={a.geniusId}>
          <div className="row">
              <div>
                <img src={a.imageUrl} className='icon' alt="Song thumbnail" />
              </div>	
              <div className="left-margin">
                <h4>{a.name}</h4>
              </div>
          </div>
          <div className="clear"></div>
        </div>
      ))}
    </div>
  );
};