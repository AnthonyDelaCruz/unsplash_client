import Img from "react-cool-img";
import _get from "lodash/get";
import { useRouter } from "next/router";
import Layout from "../../components/MainLayout";
import HomeLink from "../../components/HomeLink";
import { axiosInstance } from "../../config";
import styles from "./userPage.css";

export default function UserProfile() {
  const [userInfo, setUserInfo] = React.useState({});
  const router = useRouter();
  const {
    query: { username }
  } = router;

  React.useEffect(() => {
    if (username) {
      axiosInstance(`/users/${username}`).then(response => {
        setUserInfo(response.data);
      });
    }
  }, [router]);

  const profileImage = _get(userInfo, "profile_image.large", "");
  const name = _get(userInfo, "name", "");
  const bio = _get(userInfo, "bio", "");
  const totalCollections = _get(userInfo, "total_collections", 0);
  const totalPhotos = _get(userInfo, "total_photos", 0);
  const followers = _get(userInfo, "followers_count", 0);
  const following = _get(userInfo, "following_count", 0);
  const downloads = _get(userInfo, "downloads", 0);
  const portfolio = _get(userInfo, "portfolio_url", "Not specified.");
  const location = _get(userInfo, "location", "Not specified.");

  return (
    <Layout withOutSidebar>
      <HomeLink />
      <div className={styles.userPageContainer}>
        <div className="container">
          <div className="my-5 text-center">
            <Img
              style={{ background: "#333333", height: "140px", width: "" }}
              src={profileImage}
              alt={username}
            />
            <h2 className="mt-4">{name}</h2>
            <h4 className="text-muted">{username}</h4>
            <div
              className={`d-flex flex-wrap justify-content-center justify-content-md-around mt-3 my-md-3 ${styles.infoContainer}`}
            >
              <div className="my-1 mr-3 mr-md-0 my-md-0">
                <strong>Collections: </strong>
                {totalCollections}
              </div>
              <div className="d-none d-md-block">|</div>
              <div className="my-1 mr-3 mr-md-0 my-md-0">
                <strong>Photos: </strong>
                {totalPhotos}
              </div>
              <div className="d-none d-md-block">|</div>
              <div className="my-1 mr-3 mr-md-0 my-md-0">
                <strong>Followers: </strong>
                {followers}
              </div>
              <div className="d-none d-md-block">|</div>
              <div className="my-1 mr-3 mr-md-0 my-md-0">
                <strong>Following: </strong>
                {following}
              </div>
              <div className="d-none d-md-block">|</div>
              <div className="my-1 my-md-0">
                <strong>Downloads: </strong>
                {downloads}
              </div>
            </div>
            <div
              className={`d-flex flex-wrap justify-content-center my-md-3 ${styles.infoContainerLower}`}
            >
              <div className="mr-3 my-1 my-md-0">
                <strong>Location: </strong>
                {location || "Not specified."}
              </div>
              <div className="d-none d-md-block">|</div>
              <div className="mx-md-3">
                <strong>Portfolio URL: </strong>
                <a href={portfolio} target="_blank" rel="noreferrer">
                  {portfolio || "Not specified."}
                </a>
              </div>
            </div>
            <div className="my-3 my-md-5 px-3 text-muted">{bio}</div>
            <div className="my-5">
              <h3>
                <strong>Collections.</strong>
              </h3>
              Coming soon.
            </div>
            <div className="my-5">
              <h3>
                <strong>Photos.</strong>
              </h3>
              Coming soon.
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
