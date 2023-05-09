const { SitemapStream } = require("sitemap");
const { createWriteStream } = require("fs");

const sitemap = new SitemapStream({ hostname: "http://cloudburstsprinkler.com/" });

const writeStream = createWriteStream("public/sitemap.xml");
sitemap.pipe(writeStream);

sitemap.write({ url: "/", changefreq: "yearly", priority: 1 });
sitemap.write({ url: "/commercial", changefreq: "yearly", priority: 0.8 });
sitemap.write({ url: "/residential", changefreq: "yearly", priority: 0.8 });
sitemap.write({ url: "/gallery", changefreq: "yearly", priority: 0.8 });
sitemap.write({ url: "/about", changefreq: "yearly", priority: 0.8 });
sitemap.write({ url: "/contact", changefreq: "yearly", priority: 0.8 });
sitemap.write({ url: "/join-us", changefreq: "yearly", priority: 0.8 });
sitemap.write({ url: "/privacy-policy", changefreq: "yearly", priority: 0.8 });
sitemap.write({ url: "/areas-serviced", changefreq: "yearly", priority: 0.8 });
sitemap.end();
