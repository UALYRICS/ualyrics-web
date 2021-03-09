import React, { FunctionComponent } from "react"
import { LyricsLine } from "../../models"

interface Props {
  lyrics: Array<LyricsLine>;
  handleChange: (index: number, value: string) => void;
}

export const SongLyricsForm: FunctionComponent<Props> = ({lyrics, handleChange}) => {
  return (
    <>
      {lyrics?.map((line, index) => {
        const translationEl = line.original.length === 0 ?
        (<br/>) :
        (<input type="text" value={lyrics[index].translation} onChange={(e) => handleChange(index, e.target.value)} />)
          return (
            <div key={index}>
              <div>{line.original}</div>
              <div>{translationEl}</div>
            </div>
          )
        }
      )}
    </>
  )
}