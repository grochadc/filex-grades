const heroku_domain_port = "https://filex-grades.herokuapp.com";
const db_fetch_url =
  process.env.NODE_ENV === "production"
    ? heroku_domain_port
    : "http://localhost:3001";
export { heroku_domain_port, db_fetch_url };
