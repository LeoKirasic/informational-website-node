const http = require('http');
const fs = require('fs');

const port = process.env.PORT || 3000;
let index;
let about;
let contact;
let pageNotFound;

fs.readFile('./index.html', (err, html) => {
  if (err) {
    throw err;
  } else {
    index = html;
  }
});
fs.readFile('./about.html', (err, html) => {
  if (err) {
    throw err;
  } else {
    about = html;
  }
});

fs.readFile('./contact-me.html', (err, html) => {
  if (err) {
    throw err;
  } else {
    contact = html;
  }
});
fs.readFile('./404.html', (err, html) => {
  if (err) {
    throw err;
  } else {
    pageNotFound = html;
  }
});
const server = http.createServer(function (request, response) {
  response.writeHeader(200, { 'Content-Type': 'text/html' });

  switch (request.url) {
    case '/':
      response.write(index);
      break;
    case '/about':
      response.write(about);
      break;
    case '/contact':
      response.write(contact);
      break;
    default:
      response.write(pageNotFound);
  }

  response.end();
});
server.listen(port, () => {
  console.log(`Server running at port ${port}`);
});
