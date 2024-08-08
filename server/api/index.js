const express = require("express");
const app = express();

require("dotenv").config({ path: "./.env" });

const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);
const DOMAIN = process.env.DOMAIN;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.post("/create-checkout-session", async (req, res) => {
    const items = JSON.parse(req.body.items);
    const itemsToCount = {};
    items.forEach((item) => {
        itemsToCount[item.id] != null
            ? itemsToCount[item.id]++
            : (itemsToCount[item.id] = 1);
    });
    const lineItems = [];
    for (const [key, value] of Object.entries(itemsToCount)) {
        lineItems.push({
            price: key,
            quantity: value,
        });
    }

    const session = await stripe.checkout.sessions.create({
        line_items: lineItems,
        mode: "payment",
        success_url: `${DOMAIN}/success`,
        cancel_url: `${DOMAIN}/cancelled`,
    });

    res.redirect(303, session.url);
});

app.listen(4242, () => console.log("Running on port 4242"));
module.exports = app;
