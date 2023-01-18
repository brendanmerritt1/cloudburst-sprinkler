import "../styles/privacyPolicy.css";
import Navbar from "../components/navbar/Navbar";
import Sitemap from "../components/sitemapFooter/Sitemap";

export default function PrivacyPolicy() {
  return (
    <div className="privacyContainer">
      <Navbar color="black" />
      <div className="privacyNav"></div>
      <div className="privacyViewContainer">
        <span className="privacyHeading">Privacy Policy and Terms of Use</span>
        <span className="privacyTitle">Privacy Policy</span>
        <span className="privacyBody">
          Our Privacy Policy outlines what information we collect from you, how
          we use your information and the choices that you have regarding our
          use of your information. &nbsp;Please take a few minutes to review our
          Privacy Statement for this site.
        </span>
        <span className="privacyBody">
          This Statement of Privacy applies only to the website of Cloudburst
          Lawn Sprinkler Systems, located on the internet at
          www.cloudburstsprinkler.com and governs data collection and usage.
          &nbsp;By using the Cloudburst website, you consent to the data
          practices described in this statement.
        </span>
        <span className="privacyBody">
          This Privacy Policy may be updated from time to time. &nbsp;Please
          check back periodically for further updates and changes. &nbsp;The
          most updated version will be the one that is available on this
          website.
        </span>
        <span className="privacyBody">
          This is the website of Cloudburst Lawn Sprinkler Systems:
        </span>
      </div>
      <Sitemap />
    </div>
  );
}
