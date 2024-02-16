import PropTypes from "prop-types";
import React from "react";
import { useReducer } from "react";

export const Button = ({ button, hover, text = "View All Products" ,add }) => {
  const [state, dispatch] = useReducer(reducer, {
    button: button || "primary",
    hover: hover || false,
  });

  return (
    <div
    
    onClick={()=>{
      add()
    }}
    
    
    
    
      className={`inline-flex items-center gap-[10px] rounded-[4px] justify-center relative ${
        state.button === "secondary" ? "border border-solid" : ""
      } ${state.button === "secondary" ? "border-[#00000080]" : ""} ${
        state.button === "small" ? "px-[48px] py-[10px]" : "px-[48px] py-[16px]"
      } ${state.hover && ["primary", "small"].includes(state.button) ? "bg-hover-button" : "bg-button-2"}`}
      onMouseEnter={() => {
        dispatch("mouse_enter");
      }}
      onMouseLeave={() => {
        dispatch("mouse_leave");
      }}
    >
      <div
        className={`font-title-16px-medium w-fit mt-[-1.00px] tracking-[var(--title-16px-medium-letter-spacing)] text-[length:var(--title-16px-medium-font-size)] [font-style:var(--title-16px-medium-font-style)] font-[number:var(--title-16px-medium-font-weight)] leading-[var(--title-16px-medium-line-height)] whitespace-nowrap relative ${
          state.button === "secondary" && !state.hover
            ? "text-text-2"
            : state.button === "secondary" && state.hover
            ? "text-text-1"
            : "text-text"
        }`}
      >
        {["primary", "secondary"].includes(state.button) && <>{text}</>}

        {state.button === "small" && <>Add To Cart</>}
      </div>
      <div>
      </div>
    </div>
  );
};


function reducer(state, action) {
  switch (action) {
    case "mouse_enter":
      return {
        ...state,
        hover: true,
      };

    case "mouse_leave":
      return {
        ...state,
        hover: false,
      };

    default:
      return state;
  }
}

Button.propTypes = {
  button: PropTypes.oneOf(["primary", "secondary", "small"]),
  hover: PropTypes.bool,
  text: PropTypes.string,
};


