import React from "react";

const styles = {
  default: {
    backgroundColor: "#737373",
    color: "#eae8e8",
    padding: "10px"
  },
  disable: {
    backgroundColor: "#9c9c9c",
    color: "#c7c6c6"
  }
};

const ButtonOne = props => {
  if (props.disable) {
  }
  return (
    <button style={props.disable ? styles.disable : styles.default}>
      Button 1
    </button>
  );
};

export default ButtonOne;
