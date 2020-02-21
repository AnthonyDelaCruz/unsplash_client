import { FaHeart } from "react-icons/fa";
import Img from "react-cool-img";

import { Card, Button } from "reactstrap";

export default function CardComponent({ photo, customClassName }) {
  return (
    <Card className={customClassName}>
      <div className="card-image">
        <Img
          style={{
            backgroundColor: "#EAEAEA",
            height: "400px"
          }}
          className="h-auto w-100 img img-fluid"
          src={photo.urls.small}
          alt={photo.alt_description}
          debounce={1000}
        />
        <div className="card-info p-2 d-flex flex-column justify-content-between">
          <div className="d-flex align-items-center justify-content-between">
            <div className="d-flex align-items-center">
              <Img
                className="avatar mr-2"
                src={photo.user.profile_image.small}
                alt={photo.user.username}
                debounce={1000}
              />
              <p className="m-0">{photo.user.name}</p>
            </div>
            <div className="d-flex align-items-center">
              <FaHeart /> <p className="mb-0 ml-2 likes">{photo.likes}</p>
            </div>
          </div>
          <div className="actions">
            <Button outline className="gallery-btn">
              View in Gallery
            </Button>
          </div>
        </div>
      </div>
      <style jsx>{`
        .card-image {
          position: relative;
          cursor: pointer;
        }
        .avatar {
          border-radius: 7px;
        }
        .likes {
          margin-top: 0.2rem;
        }
        .img {
          background-color: #f1f1f1;
        }
        .card-image:hover .card-info {
          opacity: 1;
        }
        .card-info {
          height: 100%;
          width: 100%;
          opacity: 0;
          background: rgba(0, 0, 0, 0.5);
          -moz-transition: all 0.5s;
          -webkit-transition: all 0.5s;
          transition: all 0.5s;
          top: 0;
          left: 0;
          position: absolute;
          color: #ffffff;
        }
      `}</style>
    </Card>
  );
}

export const CardSkeleton = () => {
  return (
    <div
      className="p-2 w-100 d-flex flex-column justify-content-between"
      style={{
        backgroundColor: "#EAEAEA",
        height: "400px"
      }}
    >
      <div className="d-flex justify-content-between align-items-center">
        <div className="d-flex align-items-center">
          <div
            className="mr-2"
            style={{ background: "#CDCDCD", width: "35px", height: "35px" }}
          ></div>
          <div
            style={{ background: "#CDCDCD", width: "150px", height: "25px" }}
          ></div>
        </div>
        <div
          style={{ background: "#CDCDCD", width: "25px", height: "25px" }}
        ></div>
      </div>
      <div
        style={{
          background: "#CDCDCD",
          width: "150px",
          height: "45px",
          borderRadius: "5px"
        }}
      ></div>
    </div>
  );
};
