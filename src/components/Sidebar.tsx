import { Outlet, Link, useLocation } from "react-router-dom";
import { useCallback } from "react";

type Paths = "" | "correct"

function Sidebar() {
    const href = useLocation()

    //TODO: use clean code
    const getClass = useCallback((cls: Paths) => (href.pathname == `/${cls}`) ? "active" : "", [href.pathname])

    return (
        <div className="main">
            <div className="sidebar">
                <Link to="/" className={getClass("")}>Bad</Link>
                <Link to="/correct" className={getClass("correct")}>Good</Link>
            </div>
            <div className="cards">
                <Outlet />
            </div>
        </div>
    )
}

export default Sidebar