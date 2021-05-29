import { FunctionComponent } from "react";
import "./Section.css";
import "./RightTitleSection.css";

interface Props {
  title: string,
}

export const RightTitleSection: FunctionComponent<Props> = ({title}) => {
  return (
    <>
      <div className="section-title float-right">
        <hr className="horizontal-line fat-line" />
        <h5 className="section-title-text right">{title}</h5>
      </div>
      <div className="clearfix"></div>
    </>
  );
}