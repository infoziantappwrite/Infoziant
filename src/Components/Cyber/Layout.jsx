import HomeBanner from "./HomeBanner";
import { Helmet } from "react-helmet";

export default function Layout() {
  return (
    <>
      <Helmet>
        <title>Infoziant: Expert VAPT & SIEM for Your Cybersecurity Needs</title>
        <meta name="description" content="Infoziant provides expert VAPT and SIEM solutions to safeguard your digital assets. Trust us for comprehensive cybersecurity and protection. " />
      </Helmet>
      <HomeBanner />
    </>
  );
}
