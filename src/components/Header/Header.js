import { Link } from "react-router-dom";
import AppsIcon from '@mui/icons-material/Apps';
import { Avatar } from "@mui/material";

const Header = () =>{

    return <div style={{fontSize:"20px", flex:1}} className="d-flex fw-bolder justify-content-between px-5 py-2">

        <div style={{ flex:1}} className="d-flex ">
          <Link className="m-2" to ="/about">About</Link>
          <Link className="m-2" to = "/store"> Store </Link>
        </div>

        <div style={{ flex:1}} className="d-flex justify-content-end">
          <Link className="m-2" to ="/gmail"> Gmail </Link>
          <Link className="m-2" to = "/image"> Image  </Link>
          <AppsIcon className="m-2"/>
          <Avatar
               sx={{ width: 50, height: 50 }}
                alt="Remy Sharp"
                src="/broken-image.jpg"
                >
                B
            </Avatar>
        </div>
    </div>

    }
export default Header;