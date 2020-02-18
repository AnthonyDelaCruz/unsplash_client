import { FaHeart } from "react-icons/fa";
import Img from "react-cool-img";

import { Card, CardImg, Button } from "reactstrap";

export default function CardComponent({ photo, customClassName }) {
  return (
    <Card className={customClassName}>
      <div className="card-image">
        <Img
          style={{
            backgroundColor: "grey",
            width: "100%",
            height: "auto"
          }}
          className="img img-fluid"
          src={photo.urls.small}
          alt={photo.alt_description}
        />
        <div className="card-info p-2 d-flex flex-column justify-content-between">
          <div className="d-flex align-items-center justify-content-between">
            <div className="d-flex align-items-center">
              <Img
                className="avatar mr-2"
                src={photo.user.profile_image.small}
                alt={photo.user.username}
              />
              <p className="m-0">{photo.user.name}</p>
            </div>
            <div className="d-flex align-items-center">
              <FaHeart /> <p className="mb-0 ml-2 likes">{photo.likes}</p>
            </div>
          </div>
          <div className="actions">
            <Button className="gallery-btn" outline>
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
      `}</style>
    </Card>
  );
}
