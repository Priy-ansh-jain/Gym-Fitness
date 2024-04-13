import { Link } from "react-router-dom";
import logoWhite from "../../images/logo/logo.png";
import logoBlack from "../../images/logo/logo-footer.png";

function Logo({ size = "w-full", type = "white" }) {
  return (
    <Link to="/" className="focus inline-block w-[100px] ">
      <img
        src={`${type === "black" ? logoBlack : logoWhite} `}
        alt="gymBox logo"
        className={`h-auto ${size} text-black rounded-3xl`}
      />
    </Link>
  );
}

export default Logo;
