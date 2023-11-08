import { FaEnvelope, FaPhoneAlt } from "react-icons/fa";

const HeaderTop = () => {
  return (
    <div className="flex px-[5%] items-center justify-between">
      <div>
        <p className="flex">
          <FaPhoneAlt />
          +8801710142370
        </p>
        <p>
          <FaEnvelope /> contact@gmail.com
        </p>
      </div>
    </div>
  );
};

export default HeaderTop;
