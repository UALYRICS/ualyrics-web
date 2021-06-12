import React, {FunctionComponent} from "react";
import { LyricsLine } from "../../models";
import "./TranslatedLyrics.css";

interface Props 
{
  lyrics: Array<LyricsLine>;
}

export const TranslatedLyrics: FunctionComponent<Props> = ({lyrics}) => {
  if(!lyrics){
    return (<></>);
  }
  return (
  <>
    {lyrics.map((line, idx) => (
      <div className="row mt-md-0 mt-1" key={idx} >
        <span className="col-md-6 bg-light">{line?.original}</span>
        <span className="col-md-6 bg-light font-weight-bold">{line?.translation}</span>
      </div>
    ))}
  </>);
}