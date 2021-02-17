import React from "react";

import "./SymptomOptions.css";

const SymptomOptions = (props) => {
  const options = [
    { 
        text: "Depression", 
        handler: props.actionProvider.handleDepressionList, 
        id: 1 
    },
    { 
        text: "Trouble Sleeping", 
        handler: props.actionProvider.handleSleepList,
        id: 2 
    },
    { 
        text: "Anxiety", 
        handler: props.actionProvider.handleAnxietyList,
        id: 3 
    },
    { 
        text: "Disordered Eating", 
        handler: props.actionProvider.handleEatingList, 
        id: 4 
    },
    { 
        text: "Loneliness", 
        handler: props.actionProvider.handleLonelinessList,
        id: 5 
    },
    { 
        text: "Crisis", 
        handler:  props.actionProvider.handleCrisisList,
        id: 6 
    },
  ];

  const optionsMarkup = options.map((option) => (
    <button
      className="symptom-option-button"
      key={option.id}
      onClick={option.handler}
    >
      {option.text}
    </button>
  ));

  return <div className="symptom-options-container">{optionsMarkup}</div>;
};

export default SymptomOptions;