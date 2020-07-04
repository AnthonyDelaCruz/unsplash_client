import Img from "react-cool-img";

import _get from "lodash/get";
import _isEmpty from "lodash/isEmpty";
import _map from "lodash/map";

import { useRouter } from "next/router";
import dynamic from "next/dynamic";
import Link from "next/link";

import Layout from "components/MainLayout";
import HomeLink from "components/HomeLink";
import CardComponent from "components/Card";
import CollectionCards from "components/CollectionCards";

import { axiosInstance } from "config";
import { useImageToggleHook } from "hooks";

const LightBox = dynamic(() => import("fslightbox-react"), { ssr: false });

/**
 * @TODO
 * make links for view all photos and view all collections
 */

export default function UserProfile() {
  const [userInfo, setUserInfo] = React.useState({});
  const [loading, setIsLoading] = React.useState(true);
  const { toggleLightBox, imgIndex, isVisible } = useImageToggleHook();
  const router = useRouter();
  const {
    query: { username },
  } = router;

  React.useEffect(() => {
    if (username) {
      Promise.all([
        axiosInstance(`/users/${username}`),
        axiosInstance(`/users/${username}/collections`, {
          params: { per_page: 3 },
        }),
        axiosInstance(`/users/${username}/photos`, {
          params: {
            per_page: 3,
          },
        }),
      ])
        .then(([user, userCollections, userPhotos]) => {
          setUserInfo({
            ...userInfo,
            ...user.data,
            userPhotos: userPhotos.data,
            userCollections: userCollections.data,
          });
        })
        .finally(() => {
          setIsLoading(false);
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
  const userPhotos = _get(userInfo, "userPhotos", []);
  const userCollections = _get(userInfo, "userCollections", []);

  const photoSourceUrls = _map(userPhotos, (photo) =>
    _get(photo, "urls.small", "")
  );
  return (
    <Layout withOutSidebar>
      <>
        <LightBox
          slide={imgIndex}
          toggler={isVisible}
          sources={photoSourceUrls}
          key={photoSourceUrls}
        />
      </>
      <HomeLink />
      <div className="container_user-page">
        <div className="container">
          <div className="my-5 text-center">
            <Img
              style={{ background: "#333333", height: "140px", width: "" }}
              src={profileImage}
              alt={username}
            />
            <h2 className="mt-4">{name}</h2>
            <h4 className="text-muted">{username}</h4>
            <div className="d-flex flex-wrap justify-content-center justify-content-md-around mt-3 my-md-3 user-page__info-container">
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
            <div className="d-flex flex-wrap justify-content-center my-md-3 user-page__info-container--lower">
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
              {!loading && !_isEmpty(userCollections) && (
                <div className="my-2">
                  <Link href={`/user/collections/${username}`}>
                    <a>See all collections.</a>
                  </Link>
                </div>
              )}
              {loading && (
                <div className="text-center w-100">
                  <h4>
                    Fetching <strong>Collections</strong>...
                  </h4>
                </div>
              )}
              {!loading && !_isEmpty(userCollections) && (
                <div className="row">
                  {userCollections.map((collection, i) => (
                    <CollectionCards collection={collection} key={i} />
                  ))}
                </div>
              )}
              {!loading && _isEmpty(userCollections) && (
                <div className="text-center my-4">
                  <h4>
                    User has no <strong>Collections</strong>...
                  </h4>
                </div>
              )}
            </div>
            <div className="my-5">
              <h3>
                <strong>Photos.</strong>
              </h3>
              {!loading && !_isEmpty(userPhotos) && (
                <div className="my-2">
                  <Link href="/">
                    <a>See all photos.</a>
                  </Link>
                </div>
              )}
              <div className="row user-page__card-columns">
                {/* {loading && (
                  <div className="text-center w-100">
                    <h4>
                      Fetching <strong>Photos</strong>...
                    </h4>
                  </div>
                )} */}
                {!loading &&
                  !_isEmpty(userPhotos) &&
                  userPhotos.map((photo, i) => {
                    return (
                      <div className="col-sm-1 col-md-4">
                        <CardComponent
                          photo={photo}
                          toggleLightBox={() => toggleLightBox(i)}
                          key={i}
                        />
                      </div>
                    );
                  })}
                {!loading && _isEmpty(userPhotos) && (
                  <div className="text-center w-100">
                    <h4>
                      User has no <strong>Photos</strong>...
                    </h4>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
