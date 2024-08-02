import express from "express";
import bodyParser from "body-parser";
import pg from "pg";
import { render } from "ejs";

const app = express();
const port = 3000;

const db = new pg.Client({
    user: "postgres",
    host: "localhost",
    database: "world",
    password: "elcot",
    port: "5432",
});

db.connect();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

async function fetchVisited() {
    var result = await db.query("SELECT country_code FROM visited_countries");
    let countries = [];
    result.rows.forEach((country) => {
        countries.push(country.country_code);
    });
    return countries;
}

app.get("/", async (req, res) => {
    var countries = await fetchVisited();
    res.render("index.ejs", { countries: countries, total: countries.length });
});

app.post("/add", async (req, res) => {
    const newCountry = req.body["country"];

    try {
        const result = await db.query(
            "SELECT country_code FROM countries where LOWER(country_name) LIKE '%' || $1 || '%'",
            [newCountry.toLowerCase()]
        );
        const data = result.rows[0];
        const countryCode = data.country_code;
        try {
            await db.query(
                "INSERT INTO visited_countries (country_code) VALUES($1)",
                [countryCode]
            );
            res.redirect("/");
        } catch (err) {
            console.log(err);
            var visited_countries = await fetchVisited();
            res.render("index.ejs", {
                countries: visited_countries,
                total: visited_countries.length,
                error: "Country has already been added, try again.",
            });
        }
    } catch (err) {
        console.log(err);
        var visited_countries = await fetchVisited();
        res.render("index.ejs", {
            countries: visited_countries,
            total: visited_countries.length,
            error: "Country name does not exist, try again.",
        });
    } 
});

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
