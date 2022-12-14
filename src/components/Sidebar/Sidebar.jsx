import React from "react";
import "./Sidebar.scss";
import Skills from "../../Assets/icons/Skills.svg";
import { IoCloseSharp } from "react-icons/io5";
import { useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { signOutStart } from "../../store/user/user.action";
import { selectCurrentUser } from "../../store/user/user.selector";
const Sidebar = ({ handleSidebar }) => {
  const currentUser = useSelector(selectCurrentUser);
  const nav = useNavigate();
  const dispatch = useDispatch();
  const location = useLocation();
  const userSignOut = async () => {
    dispatch(signOutStart());
  };
  return (
    <div className="sidebar">
      <div className="sidebar-top">
        <div>
          <img src={Skills} alt="Skills logo" />
        </div>
        <div className="sidebar-icon">
          <IoCloseSharp size={30} onClick={handleSidebar} />
        </div>
      </div>
      <ul className="sidebar-list">
        {location.pathname == "/" && (
          <>
            <li>
              <a className="w-full text-center" href="#domain" onClick={handleSidebar}>
                Domains
              </a>
            </li>
            <li>
              <a className="w-full text-center" href="#why" onClick={handleSidebar}>
                Why skill++
              </a>
            </li>
            <li>
              <a className="w-full text-center" href="#faq" onClick={handleSidebar}>
                Contact us
              </a>
            </li>
          </>
        )}

        {currentUser?.isRegisteredComplete && (
          <li>
            {currentUser.role == "member" ? (
              <button
                onClick={() => {
                  handleSidebar();
                  nav("/dashboard");
                }}
              >
                Dashboard
              </button>
            ) : (
              <button
                onClick={() => {
                  handleSidebar();
                  nav("/mentor/dashboard");
                }}
              >
                Mentor Dashboard
              </button>
            )}
          </li>
        )}
        {currentUser?.isRegisteredComplete && (
          <li>
            {currentUser.role == "member" ? (
              <button
                onClick={() => {
                  handleSidebar();
                  nav("/me");
                }}
              >
                Profile
              </button>
            ) : <button
            onClick={() => {
              handleSidebar();
              nav("/mentor/me");
            }}
          >
            Profile
          </button>}
          </li>
        )}
        <li>
          {currentUser ? (
            <button
              onClick={() => {
                handleSidebar();
                userSignOut();
              }}
            >
              Logout
            </button>
          ) : (
            <button
              onClick={() => {
                handleSidebar();
                nav("/login");
              }}
            >
              Login
            </button>
          )}
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
