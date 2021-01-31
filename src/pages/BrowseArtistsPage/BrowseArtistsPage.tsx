import React, { useState, useEffect } from "react";
import { Artist } from "../../models";
import { fetchArtistsByFirstLetter } from "../../service/artists-service";
import { Char } from "../../models/char";
import { useParams, Link } from "react-router-dom";
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

  return (
    <div>
      {artists?.map((artist) => (
        <div key={artist.id}>
          <div className="row">
              <div>
                <img src={artist.thumbnailUrl} className='icon' alt="Song thumbnail" />
              </div>	
              <div className="left-margin">
                <h4><Link to={`/artist/${artist.id}`}>{artist.title}</Link></h4>
              </div>
          </div>
          <div className="clear"></div>
        </div>
      ))}
    </div>
  );
};