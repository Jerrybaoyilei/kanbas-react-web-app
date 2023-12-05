import { Link, useLocation } from "react-router-dom";
import { BiUserCircle, BiBook, BiCalendar } from "react-icons/bi";
import { TfiDashboard } from "react-icons/tfi";
import { SlEnvolopeLetter, SlClock } from "react-icons/sl";
import { TbPresentationAnalytics } from "react-icons/tb";
import { IoArrowForwardCircleOutline } from "react-icons/io5";
import { AiOutlineQuestionCircle } from "react-icons/ai";
import "./index.css";

function KanbasNavigation() {

    const links = ["Account", "Dashboard", "Courses", "Calendar", "Inbox", "History", "Studio", "Commons", "Help"];
    const linkToIconMap = {
        "Account": <BiUserCircle className="wd-icon" />,
        "Dashboard": <TfiDashboard className="wd-icon" />,
        "Courses": <BiBook className="wd-icon" />,
        "Calendar": <BiCalendar className="wd-icon" />,
        "Inbox": <SlEnvolopeLetter className="wd-icon" />,
        "History": <SlClock className="wd-icon" />,
        "Studio": <TbPresentationAnalytics className="wd-icon" />,
        "Commons": <IoArrowForwardCircleOutline className="wd-icon" />,
        "Help": <AiOutlineQuestionCircle className="wd-icon" />
    }

    const { pathname } = useLocation();

    return (
        <div className="wd-kanbas-navbar">
            <div className="list-group wd-kanbas-navigation" style={{ width: 150 }}>
                {/* Clicking on the NEU logo */}
                <Link key={9} to='/Kanbas/Dashboard' className='list-group-item d-flex flex-column neu-icon'>
                    <img className="img-fluid" src={require("./NU_RGB_Notched-N_motto_RW.png")} alt="NU Logo" />
                </Link>
                {/* Kanbas navigation items (i.e., icon + item name) */}
                {links.map((link, index) => (
                    <Link
                        key={index}
                        to={`/Kanbas/${link}`}
                        className={`list-group-item ${pathname.includes(link) && "active"} d-flex flex-column`}>
                        {linkToIconMap[link]}
                        {link}
                    </Link>
                ))}
                <Link key={10} to='/Kanbas/signin' className={`list-group-item ${pathname.includes("signin") && "active"} d-flex flex-column`}>
                    <BiUserCircle className="wd-icon" />
                    Signin
                </Link>
                <Link key={10} to='/Kanbas/signup' className={`list-group-item ${pathname.includes("signin") && "active"} d-flex flex-column`}>
                    <BiUserCircle className="wd-icon" />
                    Signup
                </Link>
            </div>
        </div>
    );
}
export default KanbasNavigation;