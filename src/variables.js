const { HEROKU_URL } = process.env;
const heroku_domain_port = HEROKU_URL.substr(0, HEROKU_URL.lenght - 1);

export default heroku_domain_port;
