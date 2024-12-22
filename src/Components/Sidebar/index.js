import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import * as s from "./styles";
import avatar from "./../../assets/logo_boutique.png";
import {
  RxDoubleArrowLeft as ArrowLeft,
  RxDoubleArrowRight as ArrowRight,
} from "react-icons/rx";
import {
  MdOutlineKeyboardArrowUp as ArrowTop,
  MdOutlineKeyboardArrowDown as ArrowButton,
} from "react-icons/md";
import { SidebarData } from "./SidebarData";
import { colors } from "./../../Styles";

function Sidebar({ children }) {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  const [selectMenu, setSelectMenu] = useState(1);
  const [activeMenu, setActiveMenu] = useState(true);
  const menu = () => setActiveMenu(!activeMenu);

  return (
    <s.Container toggle={isOpen}>
      <s.AreUser toggle={isOpen}>
        {isOpen && <img src={avatar} alt="" />}
      </s.AreUser>
      <s.Box toggle={isOpen}>
        {/* <s.TitleSidebar>Cadastro</s.TitleSidebar> */}
        {SidebarData.map((i, index) => {
          return (
            <NavLink
              to={i.path}
              key={index}
              className="link"
              // activeclassName="active"
            >
              <s.AreaMenu
                onClick={() => {
                  setSelectMenu(i.id);
                }}
              >
                <s.Icon>{i.icon}</s.Icon>
                <s.Area>
                  <s.Title toggle={isOpen}>{isOpen ? i.name : ""}</s.Title>

                  {/* {i.item.map(
                    (menu, inde) =>
                      menu.idRef === selectMenu && (
                        <NavLink
                          to={menu.path}
                          key={index}
                          className="link"
                          activeclassName="active"
                        >
                         
                          <s.TitleMenu>{menu.name}</s.TitleMenu>
                          
                        </NavLink>
                      )
                  )} */}
                </s.Area>
              </s.AreaMenu>
            </NavLink>
          );
        })}
      </s.Box>
      {isOpen ? (
        <s.AreaRodape toggle={isOpen}>
          <s.Title toggle={isOpen}>Fechar</s.Title>
          <ArrowLeft
            color={colors.white}
            size={30}
            onClick={() => {
              toggle();
            }}
          />
        </s.AreaRodape>
      ) : (
        <s.AreaRodape toggle={isOpen}>
          <ArrowRight
            color={colors.white}
            size={30}
            onClick={() => {
              toggle();
            }}
          />
        </s.AreaRodape>
      )}
    </s.Container>
  );
}

export default Sidebar;
