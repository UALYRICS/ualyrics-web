import React, { useState, useEffect } from "react";
import { Artist } from "../../model/artist";
import { fetchArtistsByFirstLetter } from "../../service/artists-service";
import { Char } from "../../model/char";
import { useParams } from "react-router-dom";

function BrowseArtists() {
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
          <h2>{a.name}</h2>
          <p>{a.geniusId}</p>
          <img src={a.imageUrl} alt='Artist' />
        </div>
      ))}
    </div>
  );
}

export default BrowseArtists;