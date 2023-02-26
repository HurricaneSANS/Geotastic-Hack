// get the link element from the site
const linkElement = document.querySelector('a[href*="https://maps.google.com/maps/"]');

// get the href attribute of the link
const href = linkElement.getAttribute('href');

// extract the latitude and longitude from the URL
const regex = /@(-?\d+\.\d+),(-?\d+\.\d+)/;
const match = href.match(regex);
const latitude = match[1];
const longitude = match[2];

// log the latitude, longitude, and link to the console
console.log(`${latitude},${longitude}`);
console.log(`${href}`);

// Made by Hurricane, if you share this on YouTube or anything PLEASE CREDIT ME!!!!!!!!
