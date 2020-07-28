<!--
*** Thanks for checking out this README Template. If you have a suggestion that would
*** make this better, please fork the repo and create a pull request or simply open
*** an issue with the tag "enhancement".
*** Thanks again! Now go create something AMAZING! :D
***
***
***
*** To avoid retyping too much info. Do a search and replace for the following:
*** github_username, repo, twitter_handle, email
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
<p align="center">

  <h3 align="center">The HiveStack</h3>

  <p align="center">
    Web application allowing you to search for places that may have free wifi available. Users can then leave reviews about things like noise level, environment, and internet speeds.
    <br />
    <br />
    <a href="https://thehivestack.netlify.app/">View Demo</a>
    ·
    <a href="https://github.com/wheretocode/WhereToCode/issues">Report Bug</a>
    ·
    <a href="https://github.com/wheretocode/WhereToCode/issues">Request Feature</a>
  </p>
</p>



<!-- TABLE OF CONTENTS -->
## Table of Contents

* [About the Project](#about-the-project)
  * [Built With](#built-with)
* [Getting Started](#getting-started)
  * [Prerequisites](#prerequisites)
  * [Installation](#installation)
* [License](#license)



<!-- ABOUT THE PROJECT -->
## About The Project

[![HiveStack Screen Shot][product-screenshot]](https://thehivestack.netlify.app/)


### Built With

* [React](https://reactjs.org/)
* [Node](https://nodejs.org/en/)
* [Express](https://expressjs.com/)
* [Firebase](https://firebase.google.com/)
* [Google Places API](https://developers.google.com/places/web-service/overview)



<!-- GETTING STARTED -->
## Getting Started

To get a local copy up and running follow these simple steps.

### Prerequisites

* npm
```sh
npm install npm@latest -g
```

Environmental Variables

For front end (inside client folder):

```
REACT_APP_API_KEY - from Firebase Authentication
```

For back end (inside root folder):

```
DATABASE_URL - for PostgreSQL database
ENVIRONMENT - production or development
JWT_SECRET 
```

### Installation
 
1. Clone the repo
```sh
git clone https://github.com/hivestackv2/WhereToCode.git
```
2. Install NPM packages for the backend
```sh
npm install
```
3. Run
```sh
npm start
```

4. Get the front end running
```sh
cd client
```

5. Repeat steps 2 and 3 inside of the client folder


<!-- LICENSE -->
## License

Distributed under the MIT License. See `LICENSE` for more information.





<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->

[license-url]: https://github.com/hivestackv2/WhereToCode/blob/master/LICENSE
[product-screenshot]: https://www.amiscott.com/assets/img/portfolio/hivestack1.png
