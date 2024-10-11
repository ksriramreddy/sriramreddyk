import React, { useRef, useState } from "react";
import '../App.css'



function Text() {
    const SAMPLE_DATA = [
    { id: "01", color: "#014f5e" },
    { id: "02", color: "#015a6b" },
    { id: "03", color: "#016679" },
    { id: "04", color: "#017186" },
    { id: "05", color: "#1a7f92" },
    { id: "06", color: "#348d9e" },
    { id: "07", color: "#4d9caa" },
    { id: "08", color: "#67aab6" },
    { id: "09", color: "#80b8c3" },
  ];
  const [scrollPosition, setScrollPosition] = useState(0);

  const containerRef = useRef();

  // Function to handle scrolling when the button is clicked
  const handleScroll = (scrollAmount) => {
    // Calculate the new scroll position
    const newScrollPosition = scrollPosition + scrollAmount;
  
    // Update the state with the new scroll position
    setScrollPosition(newScrollPosition);
  
    // Access the container element and set its scrollLeft property
    containerRef.current.scrollLeft = newScrollPosition;
  };

  return (
    <div className="container">
      <div
        ref={containerRef}
        style={{
          width: "900px",
          overflowX: "scroll",
          scrollBehavior: "smooth",
        }}
      >
        <div className="content-box">
          {SAMPLE_DATA.map((item) => (
            <div className="card" style={{ backgroundColor: item.color }}>
              <p>{item.id}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="action-btns">
        <button onClick={() => handleScroll(-200)}>Scroll Left</button>
        <button onClick={() => handleScroll(200)}>Scroll Right</button>
      </div>
    </div>
  );
}

export default Text;