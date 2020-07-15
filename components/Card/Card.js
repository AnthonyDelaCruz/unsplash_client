import { useRouter } from "next/router";
import { FaHeart } from "react-icons/fa";
import Img from "react-cool-img";
import _isEmpty from "lodash/isEmpty";
import UserLink from "../UserLink";

import { Card, Button } from "reactstrap";
import LazyImage from "../LazyImage";

export default function CardComponent({
  toggleLightBox,
  photo,
  customClassName,
}) {
  const imageRef = React.useRef(null);
  const router = useRouter();

  return (
    <div className="container-card">
      <Card className={`${customClassName} mb-2`}>
        <div className="card__image">
          <div
            onClick={() => {
              router.push("/photo/[id]", `/photo/${photo.id}`);
            }}
          >
            <LazyImage reference={imageRef} src={photo.urls.small} />
            <div className="card__user-info d-flex align-items-center justify-content-between p-2">
              <div className="d-flex align-items-center">
                <Img
                  style={{
                    background: "#333333",
                    height: "30px",
                    width: "30px",
                  }}
                  className="user-info__avatar mr-2"
                  src={photo.user.profile_image.small}
                  alt={photo.user.username}
                  debounce={1000}
                />
                <UserLink
                  customClassName="user-info__user-link"
                  name={photo.user.name}
                  username={photo.user.username}
                />
              </div>
              {!!photo.likes && (
                <div className="user-info__container-likes d-flex align-items-center">
                  <FaHeart style={{ color: "#ff0015" }} />{" "}
                  <p className="likes__like-count mb-0 ml-2">{photo.likes}</p>
                </div>
              )}
            </div>
          </div>
          <div className="image__gallery-btn-wrapper d-none d-md-block actions p-2 text-center mt-2">
            <Button
              onClick={toggleLightBox}
              outline
              className="gallery-btn-wrapper__button"
            >
              Gallery View
            </Button>
          </div>
        </div>
        <div className="d-block d-md-none">
          <div className="d-flex align-items-center justify-content-between p-2">
            <div className="d-flex align-items-center">
              <Img
                style={{ background: "#333333", height: "30px", width: "30px" }}
                className="avatar mr-2"
                src={photo.user.profile_image.small}
                alt={photo.user.username}
                debounce={1000}
              />
              <UserLink name={photo.user.name} username={photo.user.username} />
            </div>
            {!!photo.likes && (
              <div className="d-flex align-items-center">
                <FaHeart style={{ color: "#ff0015" }} />{" "}
                <p className="user-info__likes-mobile mb-0 ml-2">
                  {photo.likes}
                </p>
              </div>
            )}
          </div>
          <div className="d-none d-md-block actions p-2 text-center mt-2">
            <Button onClick={toggleLightBox} outline className="galleryBtn">
              Gallery View
            </Button>
          </div>
        </div>
      </Card>
    </div>
  );
}

export const CardSkeleton = () => {
  return (
    <Card className="w-100 d-flex flex-column justify-content-between">
      <div className="imageSkeleton"></div>
      <div className="p-2 d-flex justify-content-between">
        <div className="d-flex align-items-center">
          <div className="avatarSkeleton"></div>
          <div className="mx-2 usernameSkeleton"></div>
        </div>
        <div className="d-flex align-items-center">
          <div className="likeSkeleton"></div>
        </div>
      </div>
    </Card>
  );
};
