import svgImage from "../assets/completionreal.svg";

const SideContent = () => {
  return (
    <div className="flex h-screen w-1/3 items-center justify-center bg-green_dark">
      <img src={svgImage} />
    </div>
  );
};

export default SideContent;