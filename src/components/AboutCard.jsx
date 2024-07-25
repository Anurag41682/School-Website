const AboutCard = ({ title, content, image, index }) => {
  return (
    <div>
      <h1
        className="text-3xl text-center mt-10 underline underline-offset-8
max-md:text-2xl max-sm:text-xl"
      >
        {title}
      </h1>
      <div
        className={`flex img-content items-center mt-5 gap-10 max-md:gap-5 max-sm:flex-col-reverse max-sm:mb-20  ${
          index % 2 ? "flex-row-reverse" : "flex-row"
        } `}
      >
        <p
          style={{ wordSpacing: "5px" }}
          className="leading-7  tracking-wider max-md:leading-5 max-md:text-sm max-md:tracking-wide"
        >
          {content}
        </p>
        <img className="w-36 h-36 rounded-md" src={image}></img>
      </div>
    </div>
  );
};
export default AboutCard;
