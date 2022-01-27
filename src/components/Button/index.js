import { Button } from "antd";
import React from "react";


function Button1({ onClick }) {
    return (
      <Button type ='dashed' className="addButton" onClick={onClick}>
        Add to the List!
      </Button>
    );
  }
  export default Button1;