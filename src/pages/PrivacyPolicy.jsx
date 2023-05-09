import "../styles/privacyPolicy.css";
import Navbar from "../components/navbar/Navbar";
import Sitemap from "../components/sitemapFooter/Sitemap";
import MobileSitemap from "../components/sitemapFooter/MobileSitemap";
import Accordion from "../components/services/Accordion";
import { windowResize } from "../utils/windowResize";
import { useState, useEffect } from "react";
import { Helmet } from "react-helmet";

export default function PrivacyPolicy() {
  const [isOpenBlur, setIsOpenBlur] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    return windowResize(setWindowWidth);
  }, []);

  return (
    <div className="privacyContainer">
      <Helmet>
        <title>Privacy Policy - Cloudburst Lawn Sprinkler Systems</title>
        <link rel="canonical" href="https://cloudburstsprinkler.com/privacy-policy" />
      </Helmet>
      <Navbar color="black" setIsOpenBlur={setIsOpenBlur} />
      <div className={isOpenBlur ? "privacyBlur" : null}>
        <div className="privacyNav"></div>
        <div className="privacyViewContainer">
          <span className="privacyHeading">
            Privacy Policy and Terms of Use
          </span>
          <span className="privacyTitle">Privacy Policy</span>
          <span className="privacyBody">
            Our Privacy Policy outlines what information we collect from you,
            how we use your information and the choices that you have regarding
            our use of your information. Please take a few minutes to review our
            Privacy Statement for this site.
          </span>
          <span className="privacyBody">
            This Statement of Privacy applies only to the website of Cloudburst
            Lawn Sprinkler Systems, located on the internet at&nbsp;
            <a
              href="https://www.cloudburstsprinkler.com"
              style={{ color: "inherit" }}
            >
              https://www.cloudburstsprinkler.com
            </a>
            &nbsp;and governs data collection and usage. By using the Cloudburst
            website, you consent to the data practices described in this
            statement.
          </span>
          <span className="privacyBody">
            This Privacy Policy may be updated from time to time. Please check
            back periodically for further updates and changes. The most updated
            version will be the one that is available on this website.
          </span>
          <span className="privacyBody">
            This is the website of Cloudburst Lawn Sprinkler Systems.
          </span>
          <span className="privacyBody">
            Our postal address is: <br /> Cloudburst Lawn Sprinkler
            Systems&nbsp;
            <br />
            6603 Governor Printz Blvd., <br /> Suite A Wilmington, DE 19809
          </span>
          <span className="privacyBody">
            Email address:&nbsp;
            <a href="mailto:service@cloudburstsprinkler.com">
              service@cloudburstsprinkler.com
            </a>
            <br />
            Telephone:&nbsp;
            <a href="tel:302-798-5999" style={{ color: "inherit" }}>
              (302) 798-5999
            </a>
          </span>
          <Accordion data={policy} />
          <span className="privacyTitle" id="terms">
            Terms of Use
          </span>
          <span className="privacyBody">
            Welcome to&nbsp;
            <a
              href="https://www.cloudburstsprinkler.com/"
              style={{ color: "inherit" }}
            >
              https://www.cloudburstsprinkler.com
            </a>
            . Please take a few minutes to review the following Terms of Use of
            our site. Your use of our site constitutes your agreement to follow
            these Terms of Use and to be bound by them.
          </span>
          <Accordion data={terms} />
        </div>
        {windowWidth >= 700 ? <Sitemap /> : <MobileSitemap />}
      </div>
    </div>
  );
}

const policy = [
  {
    heading: "Information We Collect",
    body: [
      {
        paragraph:
          "For each visitor to our website, our web server automatically recognizes a visitor's domain name, IP address, browser type, access times and referring website addresses. We also collect and store any information provided to us via forms or emails.",
      },
      {
        title: "Types of Information Collected",
      },
      {
        list: [
          "Contact Information: your first and last name, postal address, email address, and phone number",
          "Other identifying information: IP address and cookie identifiers",
          "Geolocation data: country, region, state, city and postal code",
        ],
      },
      { title: "How Collected Information Is Used" },
      {
        list: [
          "Maintenance and Improvement of Services and Website - We use your contact information, commercial information, and internet activity and browsing history to:",
        ],
        sublist: [
          "Communicate with you about your inquiry",
          "Provide and maintain functionality on our website",
          "Handle customer requests",
        ],
      },
    ],
  },
  {
    heading: "With Respect to Personal Information",
    body: [
      {
        paragraph:
          "If you supply us with your postal address on-line you may receive periodic mailings from us with information on new products and services or upcoming events. If you do not want to receive emails from us in the future, please let us know by sending us email at service@cloudburstsprinkler.com.",
      },
      {
        paragraph:
          "Customers may prevent their information from being used for purposes other than those for which it was originally collected by emailing us at the above address.",
      },
    ],
  },
  {
    heading: "Security of Information",
    body: [
      {
        paragraph:
          "We secure all personal information from unauthorized access, use or disclosure. Cloudburst Lawn Sprinkler Systems secures the personally identifiable information you provide in a controlled, secure environment, protected from unauthorized access, use or disclosure.",
      },
      { title: "Protecting Children" },
      {
        paragraph:
          "We do not knowingly collect personal information from children under 13. If you are a parent or guardian and you are aware that any of your children has provided us with personal information without your consent, please contact us and we will take steps to remove that information.",
      },
    ],
  },
];

const terms = [
  {
    heading: "Inaccuracy Disclaimer",
    body: [
      {
        paragraph:
          "From time to time there may be information on our website that contains typographical errors, inaccuracies, or omissions that may relate to product descriptions, pricing, and availability. Cloudburst Lawn Sprinkler Systems reserves the right to correct any errors, inaccuracies, or omissions and to update information at any time without prior notice.",
      },
    ],
  },
  {
    heading: "These Terms and Conditions May Change",
    body: [
      {
        paragraph:
          "Cloudburst Lawn Sprinkler Systems reserves the right to update or modify these terms and conditions at any time without prior notice. Your use of our website following any such change constitutes your agreement to follow and be bound by the terms and conditions as changed.",
      },
    ],
  },
  {
    heading: "Disclaimer",
    body: [
      {
        paragraph:
          'This website (https://www.cloudburstsprinklersystems.com) and all content available on this website are provided on an "as is" basis without warranties of any kind, either express or implied, including without limitation warranties of title or implied warranties of merchantability or fitness for a particular purpose. You acknowledge, by your use of this website, that your use of this website is at your sole risk, that you assume full responsibility for all costs associated with all necessary servicing or repairs of any equipment you use in connection with your use of this website, and that Cloudburst Lawn Sprinkler Systems shall not be liable for any damages of any kind related to your use of this website.',
      },
    ],
  },
  {
    heading: "Copyright Notice",
    body: [
      {
        paragraph:
          "All of the content you see on this website, including, for example, all of the page headers, images, illustrations, graphics, audio clips, video clips, and text, are subject to trademark, service mark, trade dress, copyright and/or other intellectual property rights or licenses held by Cloudburst Lawn Sprinkler Systems, one of our affiliates or by third parties who have licensed their materials to Cloudburst Lawn Sprinkler Systems. The entire content of this site is copyrighted as a collective work under U.S. copyright laws. The site is intended solely for personal, noncommercial use by the users of our site.",
      },
      {
        paragraph:
          "You may download, print and store selected portions of the content, provided you (1) only use these copies of the content for your own personal, non-commercial use, (2) do not copy or post the content on any network computer or broadcast the content in any media, and (3) do not modify or alter the content in any way, or delete or change any copyright or trademark notice. No right, title or interest in any downloaded materials is transferred to you as a result of any such downloading. Cloudburst Lawn Sprinkler Systems reserves complete title and full intellectual property rights in any content you download from this website.",
      },
    ],
  },
  {
    heading: "Indemnification",
    body: [
      {
        paragraph:
          "You agree to defend, indemnify and hold Cloudburst Lawn Sprinkler Systems harmless from and against any and all claims, damages, costs and expenses, including attorneys' fees, arising from or related to your use of this website (https://www.cloudburstsprinklersystems.com).",
      },
    ],
  },
];
