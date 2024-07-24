const AboutCard = ({ title, content, image, index }) => {
  return (
    <div>
      <h1
        className="text-3xl text-center mt-10 underline underline-offset-8
"
      >
        {title}
      </h1>
      <div
        className={`flex img-content mt-5 gap-10  ${
          index % 2 ? "flex-row-reverse" : "flex-row"
        } `}
      >
        <p
          style={{ wordSpacing: "8px" }}
          className="leading-7  tracking-wider w-3/4"
        >
          {content}
        </p>
        <img className="w-1/4 rounded-md" src={image}></img>
      </div>
    </div>
  );
};
export default AboutCard;
