// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-home",
    title: "home",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "news-we-will-be-presenting-grace-at-fse-2023",
          title: 'We will be presenting GrACE at FSE 2023!',
          description: "",
          section: "News",},{id: "news-we-will-be-presenting-logicbreaks-at-three-neurips-2024-workshops-advml-frontiers-scifordl-and-sata",
          title: 'We will be presenting Logicbreaks at three NeurIPS 2024 workshops: AdvML-Frontiers, SciForDL and...',
          description: "",
          section: "News",},{id: "news-understanding-the-effectiveness-of-llms-in-detecting-security-vulnerabilities-has-been-accepted-to-icst-2025",
          title: 'Understanding the Effectiveness of LLMs in Detecting Security Vulnerabilities has been accepted to...',
          description: "",
          section: "News",},{id: "news-logicbreaks-has-been-accepted-to-iclr-2025-check-out-the-paper-and-blogpost",
          title: 'Logicbreaks has been accepted to ICLR 2025! Check out the paper and blogpost!...',
          description: "",
          section: "News",},{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
