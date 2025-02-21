<!-- Improved compatibility of back to top link: See: https://github.com/othneildrew/Best-README-Template/pull/73 -->

<a id="readme-top"></a>

<!--
*** Thanks for checking out the Best-README-Template. If you have a suggestion
*** that would make this better, please fork the repo and create a pull request
*** or simply open an issue with the tag "enhancement".
*** Don't forget to give the project a star!
*** Thanks again! Now go create something AMAZING! :D
-->

<!-- PROJECT SHIELDS -->
<!--
*** I'm using markdown "reference style" links for readability.
*** Reference links are enclosed in brackets [ ] instead of parentheses ( ).
*** See the bottom of this document for the declaration of the reference variables
*** for contributors-url, forks-url, etc. This is an optional, concise syntax you may use.
*** https://www.markdownguide.org/basic-syntax/#reference-style-links
-->

<!-- PROJECT LOGO -->
<br />
<div align="center">

<h3 align="center">Personal Site</h3>

  <p align="center">
    NextJS app for my personal website.
    <br />
    <br />
    <a href="https://isaiahsmith.dev">Production</a>
    &middot;
    <a href="https://isaiahsmith.dev/api/healthcheck">Healthcheck</a>
    &middot;
    <a href="https://isaiahsmith.dev/admin">Admin Panel</a>
  </p>
</div>

<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
        <li><a href="#local-dev">Local Development</a></li>
      </ul>
    </li>
  </ol>
</details>

<!-- ABOUT THE PROJECT -->

## About The Project

NextJS site powered by PayloadCMS to act as my personal and professional hub. Allows me to share professional projects I've worked on, personal thoughts and posts, educational tutorials, and informational links I think worth sharing with the world.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

### Built With

- [![Next][Next.js]][Next-url]
- [![React][React.js]][React-url]
- [![TailwindCSS][TailwindCSS]][TailwindCSS-url]
- [![PayloadCMS][PayloadCMS]][PayloadCMS-url]

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- GETTING STARTED -->

## Getting Started

To get a local copy up and running follow these simple example steps.

### Prerequisites

This is an example of how to list things you need to use the software and how to install them.

- node ([nvm](https://github.com/nvm-sh/nvm) or similar recommended)
  - Currently using `v22.13.1`

### Installation

1. Clone the repo

```sh
git clone https://github.com/IsaiahByDayah/personal-site
```

2. Activate working node version (if applicable)

```sh
nvm use # will check included .nvmrc file, install specified node version (if necessary), and activate it to be the node version used
```

2. Install packages

```sh
pnpm install
```

3. Create local `.env` file

```sh
cp .env.example .env
```

> ask a teammate for actually ENV values to use

### Local Development

Run the app locally with the following:

```sh
pnpm dev
```

Visit [localhost:3000](http://localhost:3000/) in a browser to see the app

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->

[Next.js]: https://img.shields.io/badge/next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white
[Next-url]: https://nextjs.org/
[React.js]: https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB
[React-url]: https://reactjs.org/
[TailwindCSS]: https://img.shields.io/badge/TailwindCSS-0F172A?style=for-the-badge&logo=tailwindcss&logoColor=38B2AC
[TailwindCSS-url]: https://tailwindcss.com/
[PayloadCMS]: https://img.shields.io/badge/PayloadCMS-000000?style=for-the-badge&logo=payloadcms&logoColor=white
[PayloadCMS-url]: https://payloadcms.com/
