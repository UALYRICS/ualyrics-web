import React, {FunctionComponent} from "react";
import { Translation } from "../../models";
import useAuth from "../../componenets/Auth/UseAuth";
import { deleteTranslation, removeTranslationFromLatestFile } from "../../service/translations-service";
import { useNavigate } from "react-router-dom";


export const TranslationToolbar: FunctionComponent<{translation: Translation}> = ({translation}) => {
  const { currentUser } = useAuth();
  let navigate = useNavigate();

  const onDeleteTranslation = () => {
    deleteTranslation({id: translation.id});
    removeTranslationFromLatestFile(translation);
    navigate(`/songs/${translation.song?.id}`);
  }

  if(currentUser?.username === translation.owner){
    return (
      <div className="d-none">
        <button className="btn btn-outline-dark btn-light btn-md my-3 float-right" data-test="delete-translation" onClick={onDeleteTranslation}>Видалити переклад</button>
        <div style={{clear: "both"}} ></div>
      </div>
    );
  }
  return <></>;
}