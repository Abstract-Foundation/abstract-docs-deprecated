import React from "react";
import { useConfig, DocsThemeConfig } from "nextra-theme-docs";
import { AskCookbook } from "./components/ask_cookbook";
const config: DocsThemeConfig = {
  logo: (
    <svg height="20" viewBox="0 0 600 86" xmlns="http://www.w3.org/2000/svg">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M189.176 0.21698V27.4684H193.426C194.254 22.4137 198.973 16.1915 209.708 16.1915C226.114 16.1915 236.367 29.46 236.367 46.2587V48.0168C236.367 64.9253 226.101 78.2076 209.708 78.2076C198.973 78.2076 194.364 71.9854 193.426 66.9307H189.176V76.5594H179.738V0.21698H189.176ZM207.818 70.1037C219.381 70.1037 226.694 61.5326 226.694 48.0306V46.2724C226.694 32.7703 219.381 24.4328 207.818 24.4328C196.255 24.4328 189.176 32.7703 189.176 46.2724V48.0306C189.176 61.5326 196.02 70.1037 207.818 70.1037Z"
        fill="#00DE73"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M140.15 16.1915C150.886 16.1915 155.605 22.4137 156.433 27.4684H160.682V17.8398H170.121V76.5594H160.682V66.9307H156.433C155.494 71.9854 150.886 78.2076 140.15 78.2076C123.744 78.2076 113.492 64.9391 113.492 48.0168V46.2587C113.492 29.46 123.758 16.1915 140.15 16.1915ZM142.041 70.1037C153.838 70.1037 160.682 61.5326 160.682 48.0306V46.2724C160.682 32.7703 153.838 24.4328 142.041 24.4328C130.243 24.4328 123.165 32.7703 123.165 46.2724V48.0306C123.165 61.5326 130.478 70.1037 142.041 70.1037Z"
        fill="#00DE73"
      />
      <path
        d="M284.344 60.4613C284.344 66.9152 276.8 70.445 269.131 70.447C261.102 70.4451 252.731 67.2712 250.137 57.5219H240.699C242.948 69.9663 253.449 78.1939 267.841 78.1939C282.233 78.1939 293.796 72.1915 293.796 60.8047C293.796 48.4701 283.778 45.1873 274.216 43.539C272.215 43.1956 266.433 42.138 264.778 41.7809C256.167 39.8991 253.214 37.7975 253.214 33.2099C253.214 27.0975 260.058 23.8147 266.075 23.8147C271.732 23.8147 279.045 25.3394 281.17 35.5587H290.608C288.359 22.4 278.328 16.1777 266.061 16.1777C253.794 16.1777 244.232 24.6388 244.232 33.8005C244.232 42.9621 251.779 48.3602 263.342 50.242L271.718 51.6568C279.983 53.0578 284.344 55.1731 284.344 60.4613Z"
        fill="#00DE73"
      />
      <path
        d="M310.174 17.8397C313.127 17.8397 313.955 17.0156 313.955 14.0762V0.21698H323.393V17.8397H352.66V26.0674H323.393V67.4115H352.66V76.5731H322.331C317.736 76.5731 313.955 72.8096 313.955 68.2356V26.0674H296.017V17.8397H310.174Z"
        fill="#00DE73"
      />
      <path
        d="M377.193 26.0536V67.2879H359.269V76.5594H413.538V67.2879H386.631V47.6597C386.631 32.3995 399.492 23.0043 413.773 27.3448V16.7684C401.741 14.4196 392.648 23.4713 390.881 29.9271H386.631V17.826H363.505V26.0536H377.193Z"
        fill="#00DE73"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M443.743 16.1915C454.478 16.1915 459.197 22.4137 460.025 27.4684H464.275V17.8398H473.713V76.5594H464.275V66.9307H460.025C459.087 71.9854 454.478 78.2076 443.743 78.2076C427.337 78.2076 417.085 64.9391 417.085 48.0168V46.2587C417.085 29.46 427.351 16.1915 443.743 16.1915ZM445.633 70.1037C457.431 70.1037 464.275 61.5326 464.275 48.0306V46.2724C464.275 32.7703 457.431 24.4328 445.633 24.4328C433.836 24.4328 426.757 32.7703 426.757 46.2724V48.0306C426.757 61.5326 434.07 70.1037 445.633 70.1037Z"
        fill="#00DE73"
      />
      <path
        d="M538.607 37.5641C535.654 25.1196 526.326 16.1915 510.637 16.1915L510.651 16.1777C491.885 16.1777 481.978 29.3364 481.978 46.2449V48.0031C481.978 64.9254 491.885 78.1939 510.651 78.1939C525.995 78.1939 535.309 69.7328 538.497 57.5219H528.7C525.747 65.6259 519.386 70.1998 510.651 70.1998C499.088 70.1998 491.416 61.5052 491.416 48.0031V46.2449C491.416 32.633 499.088 24.1718 510.651 24.1718C519.606 24.1718 526.105 29.2266 528.934 37.5641H538.607Z"
        fill="#00DE73"
      />
      <path
        d="M556.779 17.8397C559.732 17.8397 560.56 17.0156 560.56 14.0762V0.21698H569.998V17.8397H599.265V26.0674H569.998V67.4115H599.265V76.5731H568.936C564.341 76.5731 560.56 72.8096 560.56 68.2356V26.0674H542.622V17.8397H556.779Z"
        fill="#00DE73"
      />
      <path
        d="M75.8084 76.8341L58.1051 59.2113H30.1495L12.4462 76.8341L20.7528 85.1029L38.4562 67.4802C39.974 65.9693 41.9747 65.1451 44.1273 65.1451C46.2799 65.1451 48.2806 65.9693 49.7984 67.4802L67.5018 85.1029L75.8084 76.8341Z"
        fill="#00DE73"
      />
      <path
        d="M61.0579 54.1292L85.2327 60.5712L88.2684 49.2668L64.0936 42.8248C62.0238 42.2754 60.299 40.9568 59.2227 39.1024C58.1465 37.2619 57.8705 35.1054 58.4224 33.0451L64.8939 8.98028L53.5378 5.95846L47.0663 30.0232L61.0441 54.1155L61.0579 54.1292Z"
        fill="#00DE73"
      />
      <path
        d="M3.03565 60.5712L27.2105 54.1292L27.2243 54.1155L41.202 30.0232L34.7306 5.95846L23.3745 8.98028L29.846 33.0451C30.3979 35.1054 30.1219 37.2619 29.0456 39.1024C27.9694 40.9568 26.2446 42.2754 24.1748 42.8248L0 49.2668L3.03565 60.5712Z"
        fill="#00DE73"
      />
    </svg>
  ),
  project: {
    link: "https://github.com/Abstract-Foundation/abstract-docs",
  },
  head: (
    <>
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />

      <title>Abstract</title>
      <meta name="description" content="Abstract Documentation" />
      <meta name="author" content="Abstract" />
      <meta
        name="keywords"
        content="Abstract, Documentation, Crypto, Ethereum, Blockchain"
      />

      <meta property="og:title" content="Abstract" />
      <meta property="og:description" content="Abstract Documentation" />
      <meta property="og:image" content="https://docs.abs.xyz/share.jpg" />
      <meta property="og:url" content="https://docs.abs.xyz" />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="Abstract" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Abstract" />
      <meta name="twitter:description" content="Abstract Documentation" />
      <meta name="twitter:image" content="https://docs.abs.xyz/share.jpg?v=0" />
      <meta name="twitter:site" content="@AbstractChain" />
      <meta name="twitter:creator" content="@AbstractChain" />

      <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
      <link rel="icon" href="/favicon.png" type="image/png" />
    </>
  ),
  useNextSeoProps() {
    return {
      titleTemplate: "%s - Abstract Docs",
      description: "Documentation for Abstract",
      openGraph: {
        type: "website",
        locale: "en_IE",
        siteName: "Abstract Docs",
        description: "Documentation for Abstract",
      },
      additionalLinkTags: [
        {
          rel: "icon",
          href: "/favicon.ico",
        },
        {
          rel: "icon",
          href: "/favicon.png",
          type: "image/png",
        },
        {
          rel: "apple-touch-icon",
          href: "/favicon.png",
          type: "image/png",
        },
      ],
    };
  },
  footer: {
    text: "Abstract Docs © 2024",
  },
  navbar: {
    extraContent() {
      return (
        <AskCookbook />
      )
    }
  },
  primaryHue: {
    // light green
    light: (0, 22, 115),
    dark: (0, 22, 115),
  },
};

export default config;
