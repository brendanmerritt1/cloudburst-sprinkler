import "../styles/areasServiced.css";
import Navbar from "../components/navbar/Navbar";
import Sitemap from "../components/sitemapFooter/Sitemap";
import MobileSitemap from "../components/sitemapFooter/MobileSitemap";
import NavigateButton from "../components/services/NavigateButton";
import { Helmet } from "react-helmet";
import { useState, useEffect } from "react";
import { loadImage } from "../utils/imageLoader";
import { columns, rows } from "../utils/cities";
import { windowResize } from "../utils/windowResize";
import MUIDataTable from "mui-datatables";
import { createTheme, ThemeProvider } from "@mui/material/styles";

export default function AreasServiced() {
  const [isOpenBlur, setIsOpenBlur] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const options = {
    download: false,
    print: false,
    viewColumns: false,
    selectableRows: "none",
    searchPlaceholder: "City or State",
    rowsPerPageOptions: [10, 20],
    responsive: "standard",
    filterType: "checkbox"
  };

  const dynamicWidth = () => {
    if (windowWidth >= 1920) {
      return "30%";
    } else if (windowWidth >= 1280 && windowWidth <= 1500) {
      return "35%";
    } else if (windowWidth >= 1024 && windowWidth <= 1279) {
      return "43%";
    } else if (windowWidth >= 700 && windowWidth <= 1023) {
      return "70%";
    } else if (windowWidth >= 415 && windowWidth <= 699) {
      return "100%";
    } else if (windowWidth >= 350 && windowWidth <= 414) {
      return "105%";
    } else if (windowWidth >= 320 && windowWidth <= 349) {
      return "110%";
    }
  };

  const dynamicFontSize = () => {
    if (windowWidth >= 1920) {
      return "1vw";
    } else if (windowWidth >= 1280 && windowWidth <= 1500) {
      return "1vw";
    } else if (windowWidth >= 1024 && windowWidth <= 1279) {
      return "1.5vw";
    } else if (windowWidth >= 700 && windowWidth <= 1023) {
      return "2vw";
    } else if (windowWidth >= 415 && windowWidth <= 699) {
      return "3.5vw";
    } else if (windowWidth >= 350 && windowWidth <= 414) {
      return "3.5vw";
    } else if (windowWidth >= 320 && windowWidth <= 349) {
      return "4vw";
    }
  };

  const dynamicFontSizeSvg = () => {
    if (windowWidth >= 1280) {
      return "1.5vw";
    } else if (windowWidth >= 1024 && windowWidth <= 1279) {
      return "2vw";
    } else if (windowWidth >= 700 && windowWidth <= 1023) {
      return "3vw";
    } else if (windowWidth >= 415 && windowWidth <= 699) {
      return "5vw";
    } else if (windowWidth >= 350 && windowWidth <= 414) {
      return "5vw";
    } else if (windowWidth >= 320 && windowWidth <= 349) {
      return "6vw";
    }
  };

  const getMuiTheme = () =>
    createTheme({
      components: {
        MUIDataTable: {
          styleOverrides: {
            root: {
              width: dynamicWidth(),
            },
          },
        },
        MUIDataTableBodyCell: {
          styleOverrides: {
            root: {
              fontSize: dynamicFontSize(),
              fontWeight: "300",
            },
          },
        },
        MUIDataTableHeadCell: {
          styleOverrides: {
            data: {
              fontSize: dynamicFontSize(),
              fontWeight: "bold",
            },
          },
        },
        MuiSvgIcon: {
          styleOverrides: {
            root: {
              fontSize: dynamicFontSizeSvg(),
            },
          },
        },
        MuiInputBase: {
          styleOverrides: {
            root: {
              fontSize: dynamicFontSize(),
            },
          },
        },
        MuiToolbar: {
          styleOverrides: {
            root: {
              fontSize: dynamicFontSize(),
              fontWeight: "300",
            },
          },
        },
        MUIDataTableToolbar: {
          styleOverrides: {
            actions: {
              textAlign: "right",
            },
          },
        },
        MuiTablePagination: {
          styleOverrides: {
            selectLabel: {
              fontSize: dynamicFontSize(),
              fontWeight: "300",
            },
            displayedRows: {
              fontSize: dynamicFontSize(),
              fontWeight: "300",
            },
          },
        },
      },
    });

  useEffect(() => {
    return windowResize(setWindowWidth);
  }, []);

  return (
    <div className="areasContainer">
      <Helmet>
        <title>Areas Serviced - Cloudburst Lawn Sprinkler Systems</title>
        <link rel="canonical" href="https://cloudburstsprinkler.com/areas-serviced" />
      </Helmet>
      <Navbar color="white" setIsOpenBlur={setIsOpenBlur} />
      <div className={isOpenBlur ? "areasBlur" : null}>
        <div className="areasPicContainer">
          <img
            src={loadImage("areas_serviced")}
            alt=""
            className="heroImg"
            id="areas"
          />
          <div className={isOpenBlur ? "areasCaptions blur" : "areasCaptions"}>
            <p className="areasCaptionTitle">Areas We Service</p>
            <p className="areasSubCaption">
              in Delaware, Maryland, New Jersey, and Pennsylvania
            </p>
          </div>
        </div>
        <div className="areasViewContainer">
          <p className="areasParagraph">
            Cloudburst serves all of the areas listed in the table below. The
            search icon is provided for an easy lookup of the area you would like
            serviced.
          </p>
          <div className="areasContactUs">
            <p className="areasParagraphCaption">
              Can't find your area? Call us today.
            </p>
            <p className="areasParagraph">
              Delaware:&nbsp;
              <a href="tel:302-798-5999" style={{ color: "#222222" }}>
                (302) 798-5999
              </a>
            </p>
            <p className="areasParagraph">
              Pennsylvania:&nbsp;
              <a href="tel:610-640-4067" style={{ color: "#222222" }}>
                (610) 640-4067
              </a>
            </p>
            <p className="areasParagraphCaption">Or use our contact page.</p>
            <div className="areasButton">
              <NavigateButton
                color="lightgray"
                text=""
                desc="CONTACT US"
                nav="/contact"
              />
            </div>
          </div>
          <ThemeProvider theme={getMuiTheme()}>
            <MUIDataTable data={rows} columns={columns} options={options} />
          </ThemeProvider>
        </div>
        {windowWidth >= 700 ? <Sitemap /> : <MobileSitemap />}
      </div>
    </div>
  );
}
