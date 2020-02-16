import Img from "react-cool-img";

export default function CardComponent({ photo, customClassName }) {
  return (
    <Img
      className={customClassName}
      style={{ backgroundColor: "#333333", width: "33.33%" }}
      src={photo.urls.regular}
      alt={photo.alt_description}
    />
  );
}
