type ShimmerShapType = {
  shape: "circle" | "rectange";
  height?: string;
  width?: string;
  count?: number;
};

const Shimmer = ({ shape, height, width, count = 1 }: ShimmerShapType) => {
  const array = Array(count).fill(null);
  return (
    <>
      {shape == "rectange" &&
        array.map((_, index) => {
          return (
            <div
              key={index}
              style={{ height, width }}
              className="shimmer-effect h-48 w-full rounded-lg my-4 mx-2 "
            ></div>
          );
        })}
      {shape == "circle" &&
        array.map((_, index) => {
          return (
            <div
              key={index}
              style={{ height, width }}
              className="shimmer-effect h-48 w-48 rounded-full mb-4"
            ></div>
          );
        })}
    </>
  );
};
//   <div className="space-y-3">
//     <div className="shimmer-effect h-6 w-3/4 rounded"></div>
//     <div className="shimmer-effect h-6 w-1/2 rounded"></div>
//     <div className="shimmer-effect h-6 w-full rounded"></div>
//   </div>

export default Shimmer;
