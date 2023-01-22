import React from "react";
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleUp } from "@fortawesome/free-solid-svg-icons";


function ScrollToTopButton() {
  const [backToTopButton, setBackToTopButton] = useState(false);

  const scrollToUP = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 650) {
        setBackToTopButton(true);
      } else {
        setBackToTopButton(false);
      }
    });
  }, []);


  return (
    <div>
      {backToTopButton && (
        <button
          style={{
            position: "fixed",
            bottom: "20px",
            right: "20px",
            fontSize: '50px'
          }}
          onClick={scrollToUP}
        >
         <FontAwesomeIcon icon={faCircleUp} />
        </button>
      )}
    </div>
  );
}

export default ScrollToTopButton;
