# Barclay & Trimarchi's Clothing Emporium

![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)
![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)
![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB)
![Jest](https://img.shields.io/badge/-jest-%23C21325?style=for-the-badge&logo=jest&logoColor=white)
![Webpack](https://img.shields.io/badge/webpack-%238DD6F9.svg?style=for-the-badge&logo=webpack&logoColor=black)
![GitHub Actions](https://img.shields.io/badge/githubactions-%232671E5.svg?style=for-the-badge&logo=githubactions&logoColor=white)
![ESLint](https://img.shields.io/badge/ESLint-4B3263?style=for-the-badge&logo=eslint&logoColor=white)

![Visual Studio Code](https://img.shields.io/badge/Visual%20Studio%20Code-0078d7.svg?style=for-the-badge&logo=visual-studio-code&logoColor=white)
![GitHub](https://img.shields.io/badge/github-%23121011.svg?style=for-the-badge&logo=github&logoColor=white)
![NPM](https://img.shields.io/badge/NPM-%23000000.svg?style=for-the-badge&logo=npm&logoColor=white)
![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)
![Babel](https://img.shields.io/badge/Babel-F9DC3e?style=for-the-badge&logo=babel&logoColor=black)
![Slack](https://img.shields.io/badge/Slack-4A154B?style=for-the-badge&logo=slack&logoColor=white)

## About

The modern outfitters' solution. The front-end of a clothing merchant website. All styling is vanilla CSS3! [Click here to visit our demo and deployment!](https://adb-barclay-trimarchi-emporium.herokuapp.com/)

## Demo

![image](https://user-images.githubusercontent.com/42557448/135187679-9c08fded-da3e-47aa-9446-886fc23992e3.png)

![image](https://user-images.githubusercontent.com/42557448/135187720-a86ba913-5cdf-4f5a-b3f5-73049d5f2285.png)

![image](https://user-images.githubusercontent.com/42557448/135187753-44de3ec3-1674-461c-aea5-1a0cdfe91ca5.png)

![image](https://user-images.githubusercontent.com/42557448/135187783-6a104026-22cc-424b-8a64-bf39a72580fc.png)

## Requirements

* A `config.js` file in the `server` directory which exports a GitHub API key with Hack Reactor Permissions

## Installation & Setup

1. `git clone` this repository, or download its zip file.
2. Run `npm run build` to bundle the client code with Webpack.
3. Run `npm start` to start the proxy server.
3. Open a browser and navigate to `localhost:3000` to view the results.

## Usage

* In order to view other products, append `/4641*` where `*` is greater than or equal to zero and less than or equal to four.
*  `e.g. https://adb-barclay-trimarchi-emporium.herokuapp.com/46412`
*  In the upper portion, clicking on an image will cause a zoomed, modal window to pop-over the window. Clicking again will engage the panning zoom.
*  Clicking the thumbnails on the left-side of the main image will cause that thumbnail to become the main image. Clicking the arrows on either side of the main image will scroll through the images.
*  Clicking one of the circular nodes to the right will cause the product style to change. This affects the images/thumbnails available, as well as the sizes and quantity, listed below.
*  Size and quantity can be selected from the dropdown menus to the right.
*  The reviews can be filtered by the number of stars. Clicking `4 Stars` on the left side of the Reviews component will filter all but four-star reviews. Clicking other stars numbers will add those to the listing. Clicking any selected numbers will cause those to be removed.
*  Reviews can be sorted by `Newest`, `Helpfulness`, or `Relevance`, via the dropdown menu on the right side.
*  Reviews can be rated as helpful or reported via the buttons below each review.
*  Reviews can be added via a bottom button.
*  More reviews can be retrieved via the other bottom button.

## ChangeLog & Roadmap

August 2021 - Version 1.0 Released

Future Plans
* Improve performance via Lighthouse recommendations
* Add keyboard listeners for image navigation

