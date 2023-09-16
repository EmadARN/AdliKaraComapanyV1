// Login Label
const Obj = {
  position: "absolute",
  top: "0px",
  left: "65px",
  letterSpacing: "1px",
  padding: "10px 0px",
  fontSize: "16px",
  color: "#fff",
  pointerEvents: "none",
  transition: "0.6s",
};

const Obj1 = {
  position: "absolute",
  top: "-20px",
  left: "65px",
  color: "rgba(240, 164, 0, 1)",
  fontSize: "13px",
  transition: "1s",
};

//submit Label
const Obj2 = {
  position: "absolute",
  top: "0px",
  left: "65px",
  letterSpacing: "1px",
  padding: "10px 0px",
  fontSize: "16px",
  color: "#fff",
  pointerEvents: "none",
  transition: "0.6s",
};

const Obj3 = {
  position: "absolute",
  top: "-20px",
  left: "65px",
  color: "#2f2f2f",
  fontSize: "13px",
  transition: "1s",
};

// Rotate inner-flip-card to Login
const frontFace = {
  transform: "rotateY(180deg)",
  margin: "auto",
  height: "450px",
  width: "450px",
  padding: "40px",
  paddingTop: "50px",
  direction: "ltr",
  background: "rgba(240, 164, 0, 1)",
  boxSizing: "border-box",
  boxShadow: "0px 2px 15px rgba(0, 0, 0, 0.8)",
  borderRadius: "0px 150px 0px 150px",
};

//main inner-flip-card
const box = {
  margin: "auto",
  height: "450px",
  width: "450px",
  padding: "50px",
  background: "#2f2f2f",
  boxSizing: "border-box",
  boxShadow: "0px 2px 15px rgba(0, 0, 0, 0.8)",
  borderRadius: "0px 150px 0px 150px",
  perspective: "1000px",
};

export { Obj, Obj1, frontFace, box, Obj2, Obj3 };
