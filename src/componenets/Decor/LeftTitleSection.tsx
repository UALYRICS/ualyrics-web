import { FunctionComponent } from "react";
import "./Section.css";
import "./LeftTitleSection.css";

interface Props {
  title: string,
}

export const LeftTitleSection: FunctionComponent<Props> = ({title}) => {
  return (
    <div className={"section-title"}>
      <h5 className="section-title-text">{title}</h5>
      <hr className="horizontal-line fat-line left" />
    </div>
  );
}