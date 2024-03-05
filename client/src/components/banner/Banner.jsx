import Image from "next/image";
import banner1 from "../../../public/banner/under_construction.png";

const Banner = () => {
  return (
    <div className="max-h-screen flex justify-center bg-gray-400">
      <Image className="max-h-screen w-auto" src={banner1} alt="" />
    </div>
  );
};

export default Banner;
