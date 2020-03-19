import Layout from "../components/MainLayout";
import ComingSoon from "../components/ComingSoon";

export default function Contact() {
  return (
    <Layout withOutSidebarComingSoon withOutFooter>
      <ComingSoon type="page" />
    </Layout>
  );
}
