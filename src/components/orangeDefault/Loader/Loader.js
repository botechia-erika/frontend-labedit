import { RotatingTriangles } from "react-loader-spinner";

export function Loader() {
  return (
    <div className="banner">
      <RotatingTriangles
        visible={true}
        height="280"
        width="280"
        ariaLabel="rotating-triangels-loading"
        wrapperStyle={{}}
        wrapperClass="rotating-triangels-wrapper"
        colors={["#ffaf40", "#f96908", "#f96908"]}
      />
    </div>
  );
}
