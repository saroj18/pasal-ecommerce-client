import TypoGraphy from "../common/HeadingTypo";
import Timmer from "../Timmer";

type productSectionProps = {
  heading: string;
  option?: boolean;
};

const ProductSectionBar = ({ heading, option = true }: productSectionProps) => {

  return (
    <div className="my-5">
      <p className="font-semibold text-red-500 text-xl text-center lg:text-left">
        Today's
      </p>
      <div className="flex items-center justify-between mt-2">
        <div className="flex items-center w-full lg:w-[50%]  justify-between">
          <TypoGraphy className="text-2xl sm:text-3xl lg:text-3xl lg:m-0 text-center w-fit mx-auto  ">
            {heading}
          </TypoGraphy>
          {option && <Timmer />}
        </div>
        
      </div>
    </div>
  );
};

export default ProductSectionBar;
