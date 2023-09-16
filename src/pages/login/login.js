import { Obj, Obj1, frontFace, box, Obj2, Obj3 } from "./object";
import "./login.css";
import { useState } from "react";
import NavBar from "../../component/NavBar/NavBar";
import Footer from "../Footer/Footer";
import { Form } from "react-bootstrap";
import HeaderPa from "../Header/headerPa";

export default function Login() {
  const [transfer1, setTransfer1] = useState(Obj);
  const [transfer, setTransfer] = useState(Obj);
  const [transfer2, setTransfer2] = useState(Obj2);
  const [transfer3, setTransfer3] = useState(Obj2);
  const [frontFace1, setFrontFace1] = useState(frontFace);
  const [box1, setBox1] = useState(box);

  // Login Label
  const transfering = (e) => {
    if (e.target.value.length > 0) {
      setTransfer(Obj1);
    } else {
      setTransfer(Obj);
    }
  };
  const transfering1 = (e) => {
    if (e.target.value.length > 0) {
      setTransfer1(Obj1);
    } else {
      setTransfer1(Obj);
    }
  };
  //submit Label
  const transfering2 = (e) => {
    if (e.target.value.length > 0) {
      setTransfer2(Obj3);
    } else {
      setTransfer2(Obj2);
    }
  };
  const transfering3 = (e) => {
    if (e.target.value.length > 0) {
      setTransfer3(Obj3);
    } else {
      setTransfer3(Obj2);
    }
  };

  //Rotate inner-flip-card to submit
  const rotateSub = () => {
    setBox1(frontFace);
  };
  //Rotate inner-flip-card to Login
  const rotateLogin = () => {
    setBox1(box);
  };
  return (
    <>
      <NavBar />
      <HeaderPa title="ورود / ثبت نام" linkText="ورود / ثبت نام" />

      <div className="box wow anmiate-animated animate-zoomIn">
        <div style={box1} className="inner-flip-card">
          <section className="front-face ">
            <h2 className="me-5">ورود </h2>
            <Form>
              <div className="inputbox">
                <input onChange={transfering} type="text" name="" required="" />
                <label style={transfer}>نام کاربری</label>
              </div>
              <div className="inputbox">
                <input
                  type="password"
                  name=""
                  required=""
                  onChange={transfering1}
                />
                <label style={transfer1}>کلمه عبور</label>
              </div>
              <input
                type="button"
                name=""
                value="ورود"
                className="rpsuColor1Btn1 me-5 text su"
              />

              <p onClick={rotateSub} className="me-5 rpsu rpsuColor1">
                ثبت نام
              </p>
              <p className="me-5 rps rpsuColor1">
                <a className="rpsuColor1" href="">
                  فراموشی رمز ؟
                </a>
              </p>
            </Form>
          </section>

          <section className="back-face ">
            <h2 className="rpsuColor2 me-5">ثبت نام</h2>
            <Form>
              <div className="inputbox   ">
                <input
                  onChange={transfering2}
                  type="text"
                  name=""
                  required=""
                  dir="rtl"
                />
                <label style={transfer2}>ایمیل یا شماره تماس</label>
              </div>

              <div className="inputbox">
                <input
                  type="password"
                  name=""
                  required=""
                  onChange={transfering3}
                  dir="rtl"
                />
                <label style={transfer3}>کلمه عبور</label>
              </div>

              <input
                type="button"
                name=""
                value="ثبت نام"
                className="rpsuColor1 rpsuColor1Btn2 su"
              />

              <p onClick={rotateLogin} className="me-5 rpsu rpsuColor2">
                ورود
              </p>
            </Form>
          </section>
        </div>
      </div>

      <Footer />
    </>
  );
}
