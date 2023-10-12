import React from "react";
import style from "./nave.module.css";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { clogo, ctype } from "../../redux/elementSlice";
const Nave = () => {
  const { img, logoWidth } = useSelector((state) => state.element.logo);
  const menIitems = useSelector((state) => state.element.menu.lnk);
  const navegate = useNavigate();
  return (
    <div className={style.nave}>
      <div className="container d-flex align-items-center justify-content-center">
        <div
          onClick={() => {
            navegate("editlogo", { replace: true });
          }}
          className={"logo w-25"}
        >
          <img className="d-block m-auto" width={logoWidth + "%"} src={img} />
        </div>
        <div
          onClick={() => {
            navegate("editmenu", { replace: true });
          }}
          className={"menu w-50"}
        >
          <div
          onClick={() => {
            navegate("editmenu", { replace: true });
          }}
        ></div>
          <ul>
            {menIitems?.map((item, index) => {
              return (<div key={index}>
                {item?.active?
                <li key={index}>
                  <Link to={item.url}>{item.text}</Link>
                </li>:""}</div>
              );
            })}
          </ul>
        </div>
        <div
          onClick={() => {
            navegate("editbtns", { replace: true });
          }}
          className={"btns w-25"}
        >
          <div>
            <Link to="/connect">connect</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nave;
