import React, { useEffect } from "react";
import "./Sidebar.css";
import { useSelector, useDispatch } from "react-redux";
import { setActiveMenu } from "../Redux/Action/sideBarMenuAction";
import { fetchCompetitonsMatch } from "../Redux/Action/competitionsActions";

const Sidebar = () => {
  const dispatch = useDispatch();
  const competitions = useSelector((state) => state.competitions)
  const sidebarMenu = useSelector((state) => state.sidebarMenu);

  useEffect(() => {
    dispatch(fetchCompetitonsMatch());
  }, []);

  const competition = competitions.data

  return (
    <div className="col-12 sidebar">
      <div className="list-group rounded-0 ">
        <li className="p-4 list-head" aria-current="true">
          ALL TOURNAMENTS
        </li>
        {competition?.map((item, index) => (
          <li
            key={item.id}
            className={`p-4 bold ${
              item.id == sidebarMenu.activeMenuId && "sidebar-active-menu"
            }`}
            onClick={() => dispatch(setActiveMenu(item.id))}
          >
            <span>{item.attributes.title}</span>
          </li>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
