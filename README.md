# Geotastic Hack
Gets Geoguessr Cords

# Usage
Here is an example of how to use the code:

```
const linkElement = document.querySelector('a[href*="https://maps.google.com/maps/"]');

const href = linkElement.getAttribute('href');

const regex = /@(-?\d+\.\d+),(-?\d+\.\d+)/;
const match = href.match(regex);
const latitude = match[1];
const longitude = match[2];

console.log(`${latitude},${longitude}`);
console.log(`${href}`);

// Made by Hurricane, if you share this on YouTube or anything PLEASE CREDIT ME!!!!!!!!
```
