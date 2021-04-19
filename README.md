# CIVIL MOVEMENT 2020 MAP 🗺️

Developed with `Next.js` + `Mapbox GL JS` + `Tailwind CSS`

## Background 🤔

This is a fun little `Data Visualization` project where I attempted to answer:

- **Where** had Thais been protesting in 2020? 🗺️

- **Which** groups had been quite active? 🧑‍🦰
  - Young Adults🧑‍🎤/ Adults 🦸/ Political Parties 🧑‍💼?
  - Major Protest Groups 🐥/ Groups related to certain event 🌴?

## My Work Process

- 💥 Get the [Dataset](https://docs.google.com/spreadsheets/d/1bzp2_7CoqzQS1R6qP0-02Ped83cutEHHlp05eVjhU88/edit#gid=2069977106). All credits to [ELECT.in.th](https://elect.in.th/) team and their contributors 🙏 (P.S. Check out their original data visualization work "[CIVIL MOVEMENT 2020](https://elect.in.th/civil-movement-2020/)" it's truly outstanding!)
- ⚡️ Data Manipulation
  - Perform data cleansing on the location name, and other columns necessary.
  - Retrieve and append the Geocoding information via [Mapbox Geocoding API](https://docs.mapbox.com/api/search/geocoding/).
  - Reformat the data into a structured JSON format.
- 🌎 Do a Scatter Plot on a Map using with [Mapbox GL JS](https://docs.mapbox.com/help/tutorials/use-mapbox-gl-js-with-react/).

## Note

I am aware that my take on this project is very far from perfect. Several geographic coordinates retrieved were incorrect, and some were never even returned 💀. However, I would regret if I hadn't share this imperfectly beautiful image with my fellow protestors. `Let's keep fighting for our future! 🚀`

> [Read this Project's Articles](https://palminister-blog.vercel.app/?search=civil)

> 🚀 [civil-map](https://palminister-civil-map.vercel.app/)
