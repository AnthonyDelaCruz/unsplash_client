import Link from "next/link";
import { FaHeart } from "react-icons/fa";
import Img from "react-cool-img";

import { Card, Button } from "reactstrap";
import styles from "./Card.module.css";

export default function CardComponent({
  toggleLightBox,
  photo,
  customClassName
}) {
  return (
    <Card className={`${customClassName} mb-2 mb-md-1`}>
      <div className={styles.cardImageContainer}>
        <div className={styles.cardImage}>
          <Link href={`/photo/${photo.id}`}>
            <div className="position-relative">
              <div className={styles.cardInfo} />
              <Img
                className={`${styles.cardPhoto} h-auto w-100 img-fluid`}
                src={photo.urls.small}
                alt={photo.alt_description}
                debounce={1000}
              />
            </div>
          </Link>
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
    <div
      className={`${styles.cardPhoto} p-2 w-100 d-flex flex-column justify-content-between`}
    ></div>
  );
};
