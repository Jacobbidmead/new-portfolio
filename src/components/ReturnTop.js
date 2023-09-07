import UpIconComponent from "./Up";

const goToTop = () => {
  console.log("working");
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};

const ReturnTop = () => {
  return (
    <>
      {" "}
      <div className="return-top" onClick={goToTop}>
        <UpIconComponent />
      </div>
    </>
  );
};

export default ReturnTop;
