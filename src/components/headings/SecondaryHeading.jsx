function SecondaryHeading({
  textColor = "white",
  bgColor = "orange",
  uppercase = true,
  children,
}) {
  return (
    <h2
      className={`mb-6 inline-block whitespace-nowrap bg-[length:250px_auto] bg-center bg-orange rounded-tl-3xl rounded-br-3xl bg-no-repeat py-2.5 ${uppercase ? "uppercase" : "capitalize"
        } ${textColor === "black"
          ? "px-8 text-lg font-medium text-gray-600  xl:bg-left"
          : "text-md px-20 font-bold text-white"
        }
    ${bgColor === "white"
          ? "bg-[url('./images/heading/bg-white-title.svg')]"
          : bgColor === "black"
            ? "bg-[url('./images/heading/bg-black-title.svg')]"
            : ""
        }`}
    >
      {children}
    </h2>
  );
}

export default SecondaryHeading;
