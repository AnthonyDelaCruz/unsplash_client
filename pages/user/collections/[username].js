import { useRouter } from "next/router";
import _isEmpty from "lodash/isEmpty";
import _get from "lodash/get";

import Layout from "components/MainLayout";
import CollectionCards from "components/CollectionCards";
import HomeLink from "components/HomeLink";
import UserLink from "components/UserLink";
import { axiosInstance } from "config";

export default function UserCollections() {
  const [user, setUser] = React.useState(null);
  const [userCollections, setUserCollections] = React.useState([]);
  const router = useRouter();
  const {
    query: { username },
  } = router;

  React.useEffect(() => {
    if (router) {
      Promise.all([
        axiosInstance(`/users/${username}`),
        axiosInstance(`/users/${username}/collections`),
      ]).then(([responseUser, responseCollections]) => {
        setUser(responseUser.data);
        setUserCollections(responseCollections.data);
      });
    }
  }, [router]);

  const name = _get(user, "name", "");

  return (
    <Layout withOutSidebar>
      <HomeLink />
      <div className="d-flex flex-column align-items-center my-5">
        <div className="text-center">
          <h1 className="font-weight-bold">Collections.</h1>
          <div className="my-3">
            <UserLink name={name} username={username} />
          </div>
        </div>
        {!_isEmpty(userCollections) && (
          <div className="container row">
            {userCollections.map((collection, i) => (
              <CollectionCards collection={collection} key={i} />
            ))}
          </div>
        )}
      </div>
    </Layout>
  );
}
