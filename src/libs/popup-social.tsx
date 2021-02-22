import Swal from "sweetalert2";
import Social from "@components/social";
import withReactContent from "sweetalert2-react-content";

const MySwal = withReactContent(Swal);

const Popup = () => {
  MySwal.fire({
    title: <p className="no-select">Social Media</p>,
    html: <Social />,
    showConfirmButton: false,
    showCloseButton: true,
  });
};

export default Popup;
