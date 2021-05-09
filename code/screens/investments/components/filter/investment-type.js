import React from "react";
import {
  filterProperties,
  filterPropertyValues,
} from "../../../../../assets/js/consts";
import CheckBox from "./parts/check-box";

const CheckBoxSection = ({ text1, text2, text3, title, _relativeURL, _ID }) => {
  const generateUrl = (url) => {
    return `${_relativeURL(url, _ID)}`;
  };
  return (
    <div className="check-box-section filter-section">
      <h5 className="filter-section-title">{title}</h5>
      <CheckBox
        generateUrl={generateUrl}
        dataType={filterProperties.investment}
        text={text1}
        dataValue={filterPropertyValues.investment.option_1}
      />
      <CheckBox
        generateUrl={generateUrl}
        dataType={filterProperties.investment}
        text={text2}
        dataValue={filterPropertyValues.investment.option_2}
      />
      <CheckBox
        generateUrl={generateUrl}
        dataType={filterProperties.investment}
        text={text3}
        dataValue={filterPropertyValues.investment.option_3}
      />
    </div>
  );
};

export default CheckBoxSection;
