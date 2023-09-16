import { useState } from "react";
import ProgressBar from "@ramonak/react-progress-bar";

export default function Progressbar({ width, color, text }) {
  const [projload, setProjload] = useState(false);

  window.addEventListener("scroll", myfun1);

  function myfun1() {
    if (window.scrollY > 800) {
      setProjload(true);
    } else {
      setProjload(false);
    }
  }

  return (
    <>
      <div className="mt-3 ">
        <div className="d-flex justify-content-between">
          <p>{text} </p>
        </div>

        <ProgressBar
          completed={projload ? width : 0}
          transitionDuration="3s"
          bgColor={color}
          borderRadius="4px"
          height="15px"
        />
      </div>
    </>
  );
}
