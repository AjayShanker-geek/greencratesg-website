// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "GreenCrateSG",
  tagline: "🌱 Hydroponic System made by NUS students",
  favicon: "img/icon_main.png",

  // Set the production url of your site here
  url: "https://greencratesg.github.io",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/greencratesg.github.io",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "greencratesg", // Usually your GitHub org/user name.
  projectName: "greencratesg.github.io", // Usually your repo name.
  deploymentBranch: "main", // The branch of your docs repo that you are publishing to GitHub pages

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            "https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/",
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            "https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: "img/docusaurus-social-card.jpg",
      navbar: {
        title: "GreenCrateSG",
        logo: {
          alt: "GreenCrateSG Logo",
          src: "img/icon_main.png",
          style: {

          }
        },
        items: [
          {
            type: "docSidebar",
            sidebarId: "docsSidebar",
            position: "left",
            label: "Docs",
          },
          { to: "/blog", label: "Blog", position: "left" },
          {
            href: "https://github.com/GreenCrateSG",
            label: "GitHub",
            position: "right",
          },
        ],
      },
      footer: {
        style: "dark",
        links: [
          {
            title: "Docs",
            items: [
              // {
              //   label: "System Overview",
              //   to: "/docs/system_overview",
              // },
              // {
              //   label: "Bootup and Shutdown",
              //   to: "/docs/intro",
              // },
              // {
              //   label: "Automation",
              //   to: "/docs/intro",
              // },
              // {
              //   label: "Junction Box",
              //   to: "/docs/intro",
              // },
              // {
              //   label: "Application",
              //   to: '/docs/intro',
              // },
            ],
          },
          {
            title: "Community",
            items: [],
          },
          {
            title: "More",
            items: [
              {
                label: "GitHub",
                href: "https://github.com/GreenCrateSG",
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} GreenCrateSG, Inc. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
    plugins: [
      // tailwindcss plugin
      async function myPlugin(context, options) {
      return {
        name: "docusaurus-tailwindcss",
        configurePostCss(postcssOptions) {
          // Appends TailwindCSS and AutoPrefixer.
          postcssOptions.plugins.push(require("tailwindcss"));
          postcssOptions.plugins.push(require("autoprefixer"));
          return postcssOptions;
        },
      };
    },],
};

module.exports = config;
