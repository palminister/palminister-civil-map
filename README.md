# Civil Movement Map 2020 πΊοΈ

Developed with `Next.js` + `Mapbox GL JS` + `Tailwind CSS` + `D3.js`

## Background π€

This is a fun little interactive `Data Visualization` project where I attempted to answer:

- **Where** had Thais been protesting in 2020? πΊοΈ

- **Which** groups had been quite active? π§βπ¦°
  - Young Adultsπ§βπ€ Adults π¦Έ Political Parties π§βπΌ?
  - Major Protest Groups π₯ Groups related to certain event π΄?

## My Work Process

- π₯ Get the [Dataset](https://docs.google.com/spreadsheets/d/1bzp2_7CoqzQS1R6qP0-02Ped83cutEHHlp05eVjhU88/edit#gid=2069977106). All credits to [ELECT.in.th](https://elect.in.th/) team and their contributors π (P.S. Check out their original data visualization work "[CIVIL MOVEMENT 2020](https://elect.in.th/civil-movement-2020/)" it's truly outstanding!)
- β‘οΈ Data Manipulation
  - Perform data cleansing on the location name, and other columns necessary.
  - Retrieve and append the Geocoding information via [Mapbox Geocoding API](https://docs.mapbox.com/api/search/geocoding/).
  - Reformat the data into a structured JSON format.
- π Do a Scatter Plot on a Map using with [Mapbox GL JS](https://docs.mapbox.com/help/tutorials/use-mapbox-gl-js-with-react/).
- π Implement interactive filters [`Next.js`+ `D3.js`]

## Note

I am aware that my take on this project is very far from perfect. Several geographic coordinates retrieved were incorrect, and some were never even returned π. However, I would regret it if I hadn't share this imperfectly beautiful image with those people who strive to see positive changes in Thailand. `Let's keep fighting for our future! π`

> [Read This Project's Articles](https://palminister-blog.vercel.app/?search=civil)

π [civil-map](https://palminister-civil-map.vercel.app/)
