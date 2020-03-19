import styles from "./skeleton.css";

export default function PhotoPageSkeleton() {
  return (
    <div className="d-flex flex-column-reverse flex-md-row justify-content-md-center">
      <div className="px-3 px-md-5">
        <div className="d-flex align-items-center">
          <div className={styles.avatarSkeleton}></div>
          <div className={`mx-2 ${styles.usernameSkeleton}`}></div>
        </div>
        <div className="d-flex justify-content-between my-3">
          <div className={styles.photoData} />
          <div className={styles.photoData} />
          <div className={styles.photoData} />
        </div>
        <div className={`my-3 ${styles.dateSkeleton}`} />
        <div className="d-flex">
          <div className={`mr-1 ${styles.photoData}`} />
          <div className={`mr-1 ${styles.photoData}`} />
          <div className={`mr-1 ${styles.photoData}`} />
          <div className={`mr-1 ${styles.photoData}`} />
        </div>
      </div>
      <div
        className={`align-self-center mb-4 mb-md-0 ${styles.featuredPhotoSkeleton}`}
      ></div>
    </div>
  );
}
