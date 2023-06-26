# Cloudburst Lawn Sprinkler Systems
A website made from scratch using React, Node.js, and CSS for Cloudburst Lawn Sprinkler Systems, who serve the Delaware, Pennsylvania and Maryland areas. It is hosted on an Nginx server with a secure (HTTPS) certificate.

## Viewing the Website
The Cloudburst Lawn Sprinkler Systems website is live on the domain [https://cloudburstsprinkler.com/](https://cloudburstsprinkler.com/). It has been optimized for all screen sizes 320px-2560px+, and views correctly on any mobile or desktop screen.

<br />

---

<br />

# Development Process

## Developers
Brendan Merritt - Main developer for the implementation, compatibility, deployment, and SEO of the website
<br />
Deanna Forrest - Design lead for the layouts of each individual page across all screen sizes

<br />

## Planning Stage
**React** was chosen as the front-end framework to be used due to its flexibility, fast rendering through the virtual DOM, support with front-end libraries like Material UI, and the ability to use reusable components. For the back-end, **NodeJS** was the chosen web server to not only maintain JavaScript across the entire codebase, but to create a simple RESTful API for sending reCAPTCHA token authentication requests as well as emails over SMTP from a custom contact form. **Express** was the chosen framework to facilitate the creation of the simple back-end RESTful API.
<br />
<br />
Mockup designs were created with **Adobe XD** across all planned breakpoints, accommodating as many screen sizes as possible. Mockups were created for each page that the client specified, and were tweaked slightly throughout the development process.
<br />
<br />
A rough outline of the **Agile** development process was used amongst the developers and the client to ensure valuable progress was being made throughout the entire process. The methodology was specifically used for developing the front-end specifications, the back-end specifications, and the custom contact forms used for customers and job applicants.

<br />

## Front-End Development Stage
The planning and design for the front-end stage of development was ultimately already planned from the beginning with the Adobe XD mockups. CSS (without a preprocessor) was used to style the pages according to the design mockups, and Material UI was occasionally used to create a starter template for common components. Images on the website were stored locally on the server after being compressed and optimized instead of using cloud storage served from a CDN. This decision was ultimately made due to the geographical location of the target customer base, since the Nginx server would be hosted on the East Coast.
<br />
<br />
After all of the pages were completed and styled according to the design specifications, they were battletested amongst various screen sizes and physical devices to ensure compatibility. Common bugs resulting from the responsive nature of the site were fixed and documented.
<br />
<br />
Near the completion of this stage, the progress of the website was shared with the design lead and the client to verify it was going in the correct direction. Multiple meetings were scheduled to discuss what content should be added, how components could be styled differently, and the expectations for the next stage.
<br />

### Common React Techniques used
<ul>
  <li>
    Reusable components - The majority of the pages had reusable components for their layouts, as well as common features shared amongst them such as buttons, dropdown menus, and carousels.
  </li>
  <li>
    Functional components with hooks - Functional components were chosen over class components for their performance benefits, and common hooks such as useEffect(), useState(), and useRef() were used.
  </li>
  <li>
    Lazy loading images - Images that were not necessary to render immediately were lazy loaded in order to improve performance and increase SEO.
  </li>
  <li>
    Arrow functions and rest operators were used frequently.
  </li>
  <li>
    Conditional rendering - Used often to ensure responsiveness between desktop and mobile versions of the website, as well as to display confirmation popups.
  </li>
  <li>
    Promises - Used within API calls to the back-end API.
  </li>
</ul>

### Libraries Used to Aid Development Stage
<ul>
  <li>
    Material UI, MUI Datatables
  </li>
  <li>
    animate.css
  </li>
  <li>
    axios
  </li>
  <li>
    react-google-recaptcha
  </li>
  <li>
    react-helmet
  </li>
  <li>
    react-medium-image-zoom
  </li>
  <li>
    slick-carousel
  </li>
  <li>
    sweetalert2
  </li>
</ul>

<br />

## Back-End Development Stage
The goal of the back-end stage was to plan and develop a simple RESTful API that could have endpoints to verify incoming reCAPTCHA authentication tokens and send emails over SMTP to the client's business email inbox containing customer contact inquiries. The API was planned to have 3 separate endpoints: one to verify reCAPTCHA tokens, and one for each custom contact form (general customer inquiries, and job application requests). The job application form requires a PDF or DOCX resume to be attached before submission, which was achieved with multer's memory storage. Both contact forms additionally use a rate limiter to limit the number of POST requests each IP address can make in a specific time period.
<br />
<br />
The end product of the development resulted in a simple RESTful API that contained endpoints to satsify the above goal. The API was put into testing after being connected to the front-end, and another meeting with the design lead and client was held to modify certain parts of the end result (mostly the layout of emails being sent, and the avoidance of said emails going to the spam inbox).
<br />

### Public APIs Used
<ul>
  <li>
    Google's reCAPTCHA API
  </li>
  <li>
    Nodemailer
  </li>
  <li>
    SendGrid Email API
  </li>
</ul>

### Libraries used to Aid Development Stage
<ul>
  <li>
    Dotenv
  </li>
  <li>
    express-rate-limit
  </li>
  <li>
    multer
  </li>
  <li>
    cors
  </li>
</ul>

<br />

## Search Engine Optimization (SEO) Stage
The plan for this stage was to optimize the finished website for search engines in order to drive more traffic to the client's business. Since the old outdated website was reaching an average of 3,000 impressions in a month, the goal was to increase this metric above 5,000 per month. Google Search Console was used to track the metrics of both the old and new website over time.
<br />
<br />
![Cloudburst impressions](https://github.com/brendanmerritt1/cloudburst-sprinkler/assets/69825805/1d656810-213a-448b-8ed8-e3f29d556f09)

### Non-inclusive List of Changes for SEO
<ul>
  <li>
    Sitemap - The old website had a sitemap with dozens of uncrawled links flagged for duplicate pages. A simple and accurate XML sitemap was supplied to Google Search Console to crawl the correct pages.
  </li>
  <li>
    Meta title and description - React Helmet was used to change the meta title and description for each individual page.
  </li>
  <li>
    Lazy loading images - Images were lazy loaded to improve SEO performance.
  </li>
  <li>
    Compressed and optimized images - Since a CDN and cloud storage was not used in this project, the images were individually compressed and optimized to improve page load times.
  </li>
  <li>
    Mobile-first indexing - Google Search Console used mobile-first indexing to crawl each page, and the results indicated that the pages were usable by mobile devices. The old website was not responsive, and did not pass these same checks.
  </li>
  <li>
    HTTPS - The old website did not have a secure certificate, which may have detered customers from clicking the client's business in search results. The updated website includes a secure certificate.
  </li>
  <li>
    Lighthouse - Lighthouse was used to track how the website was scoring in terms of SEO after changes had been made.
  </li>
</ul>

<br />

## Deployment Stage
The website kept its existing domain name and was hosted on an Nginx server running Ubuntu. The Nginx server was set up with a firewall and a yearly renewing secure certificate (HTTPS), as well as logic to enforce the rate limiting for back-end API endpoints as discussed earlier. The back-end NodeJS server is running 24/7 on Nginx using PM2, which is a process manager for NodeJS applications.
