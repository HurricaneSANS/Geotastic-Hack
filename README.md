# Geotastic Hack
This JavaScript code extracts the latitude, longitude, and link to Google Maps from a link element on a webpage.

# Installation
There is no installation required for this code. Simply copy and paste it into a JavaScript console or a script on a webpage.

# Usage
To use this code, you need to have a webpage with a link element that contains a URL to Google Maps. The code will extract the latitude, longitude, and link from this element.

Here is an example of how to use the code:

```// get the link element from the site
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
console.log(`${href}`);```

The code first uses the querySelector method to find the link element that contains the Google Maps URL. It then gets the value of the href attribute of this element and uses a regular expression to extract the latitude and longitude from the URL. Finally, it logs the latitude, longitude, and link to Google Maps to the console.

# Contributing
If you would like to contribute to this code, feel free to fork the repository and submit a pull request. Please ensure that your code is well-documented and adheres to any relevant coding standards.

# License
This code is licensed under the MIT License. See the LICENSE file for more information.
