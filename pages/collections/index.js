import Layout from "../../components/MainLayout";
import ComingSoon from "../../components/ComingSoon";

export default function Gallery() {
  return (
    <Layout withOutSidebarComingSoon withOutFooter>
      <ComingSoon type="page" />
    </Layout>
  );
}
