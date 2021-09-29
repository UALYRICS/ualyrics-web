import React, { FunctionComponent } from "react";
import { LyricsLine, Song } from "../../models";
import "./SongLyricsForm.css";

interface Props {
  lyrics: Array<LyricsLine>;
  handleChange: (index: number, value: string) => void;
  song: Song;
  titleTranslation: string;
  handleTitleChange: (value: string) => void;
}

export const SongTranslationForm: FunctionComponent<Props> = ({lyrics, handleChange, song, titleTranslation, handleTitleChange}) => {
  return (
    <>
      <div className="row mt-md-0 mt-1" >
        <span className="col-md-6 bg-light font-weight-bold">{song.title}</span>
        <span className="col-md-6 bg-light"><input type="text" data-test="line-translation-input" className="line-translation-input" value={titleTranslation} onChange={(e) => handleTitleChange(e.target.value)} /></span>
      </div>
      {lyrics?.map((line, index) => {
        const translationEl = line.original.length === 0 ?
        (<br/>) :
        (<input type="text" className="line-translation-input" data-test="line-translation-input" value={lyrics[index].translation} onChange={(e) => handleChange(index, e.target.value)} />)
          return (
            <div className="row mt-md-0 mt-1" key={index} >
              <span className="col-md-6 bg-light">{line.original}</span>
              <span className="col-md-6 bg-light">{translationEl}</span>
            </div>
          )
        }
      )}
    </>
  )
}