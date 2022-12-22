import React, { useRef, useEffect } from "react";
import PropTypes from "prop-types";

    function useOutsideAlert(ref:any) {
      useEffect(() => {
        function handleClickOutside(e: MouseEvent | TouchEvent): void {
          if (ref.current && !ref.current.constains(e.target)) {
            alert("you clicked outside the area!")
          }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
          document.removeEventListener("mousedown", handleClickOutside)
        }
      },[ref])
    }
  
  /**
   * Component that alerts if you click outside of it
   */
  function OutsideAlert(props:any) {
    const wrapperRef = useRef(null);
    useOutsideAlert(wrapperRef);
  
    return (
      <div ref={wrapperRef}>{props.children}
    </div>
  
    )
  }
  
  OutsideAlert.propTypes = {
    children: PropTypes.element.isRequired
  };

  export default useOutsideAlert;