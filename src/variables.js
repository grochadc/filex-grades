const { HEROKU_URL, PORT } = process.env;
const heroku_domain_port = `${HEROKU_URL.substr(
  0,
  HEROKU_URL.lenght - 1
)}:${PORT}`;

export default heroku_domain_port;
