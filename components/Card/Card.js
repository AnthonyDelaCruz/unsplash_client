import Link from "next/link";
import { useRouter } from "next/router";
import { FaHeart } from "react-icons/fa";
import Img from "react-cool-img";

import { Card, Button } from "reactstrap";
import styles from "./Card.css";

export default function CardComponent({
  toggleLightBox,
  photo,
  customClassName
}) {
  const router = useRouter();
  return (
    <Card className={`${customClassName} mb-2 mb-md-1`}>
      <div className={styles.cardImageContainer}>
        <div className={styles.cardImage}>
          <div
            onClick={() => {
              router.push("/photo/[id]", `/photo/${photo.id}`);
            }}
            className="position-relative"
          >
            <div className={styles.cardInfo} />
            <Img
              className={`${styles.cardPhoto} h-auto w-100 img-fluid`}
              src={photo.urls.small}
              alt={photo.alt_description}
              debounce={1000}
            />
          </div>
        </div>
        <div>
          <div className="d-flex align-items-center justify-content-between p-2">
            <div className="d-flex align-items-center">
              <Img
                className={`${styles.avatar} mr-2`}
                src={photo.user.profile_image.small}
                alt={photo.user.username}
                debounce={1000}
              />
              <p className={`${styles.photoUsername} m-0`}>{photo.user.name}</p>
            </div>
            <div className="d-flex align-items-center">
              <FaHeart />{" "}
              <p className={`${styles.likes} mb-0 ml-2`}>{photo.likes}</p>
            </div>
          </div>
          <div className="d-none d-md-block actions p-2 text-center mt-2">
            <Button
              onClick={toggleLightBox}
              outline
              className={`${styles.galleryBtn}`}
            >
              Gallery View
            </Button>
          </div>
        </div>
      </div>
    </Card>
  );
}

export const CardSkeleton = () => {
  return (
    <Card className={`w-100 d-flex flex-column justify-content-between`}>
      <div className={styles.imageSkeleton}></div>
      <div className="p-2 d-flex justify-content-between">
        <div className="d-flex align-items-center">
          <div className={styles.avatarSkeleton}></div>
          <div className={`mx-2 ${styles.usernameSkeleton}`}></div>
        </div>
        <div className="d-flex align-items-center">
          <div className={styles.likeSkeleton}></div>
        </div>
      </div>
    </Card>
  );
};
