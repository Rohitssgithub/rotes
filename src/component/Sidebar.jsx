import { useState } from "react";
import "./Sidebar.css";
import styles from "../../src/pages/MainLayout.module.scss"
import { sideBarNavigation } from "./SideBarNavigation";
import { NavLink } from "react-router-dom";

const MainSidebar = ({isOpen,setIsOpen}) => {
    // const [isOpen, setIsOpen] = useState(false);
    return (
        <nav className={`sidebar ${isOpen ? "open" : ""}`}>
            <div className="sidebar-inner">
                <header className="sidebar-header">
                    <button
                        type="button"
                        className="sidebar-burger"
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        <span className="material-symbols-outlined">
                            {
                                isOpen ?
                                    <i class="fa-solid fa-x" style={{ color: "#eaecf0" }}></i>
                                    :
                                    <i class="fa-solid fa-bars" style={{ color: "#eaecf0" }}></i>

                            }
                        </span>
                    </button>
                </header>
                <nav className="sidebar-menu">
                    {/* {navItems.map((item) => (
                        <button key={item} type="button" className="sidebar-button">
                            <p>{item}</p>
                        </button>
                    ))} */}
                    {sideBarNavigation
                        .map((data) => {
                            return (
                                <>
                                    <NavLink
                                        key={data.id}
                                        className={({ isActive }) =>
                                            `${styles.navLink} ${isActive && styles.activeLink}`
                                        }
                                        to={data.path}
                                        state={{ previousPath: location.pathname }}
                                    >
                                        <div className={styles.linksNames}>
                                            <p className={styles.linkPageName}>{data.pageName}</p>
                                            {/* <i
                                                className="fa-solid fa-arrow-right"
                                            ></i> */}
                                        </div>
                                    </NavLink>
                                </>
                            )
                        })
                    }
                </nav>
            </div>
        </nav>
    );
};

export default MainSidebar
