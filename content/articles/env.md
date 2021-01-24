---
layout: post
author: GrahamSH
title: Env
categories: nodejs test
date: 2021-01-13T22:11:12.333Z
---

The other day, I decided to make a setup script for wasteof.money. If you don't know what wasteof.money is, check it out at dev.wasteof.money!
To start, I wanted to write to .env. The script I wrote for that simply wrote to .env using fs.

```js
const fs = require("fs");
fs.writeFile(".env", `DB_URL=`, "utf8", function () {
  console.log("Got it!");
});
```

Then, I wanted to have the user be able to put in inputs. For that, I used the prompts package from NPM. My code now looked like this:

```js
const prompts = require("prompts");
const fs = require("fs");
(async () => {
  const response = await prompts([
    {
      type: "text",
      name: "url",
      message:
        "What is your MongoDB URL? (If you are using MongoDB Atlas, you can keep the <> values)",
    },
    {
      type: "text",
      name: "port",
      message: "What port should the site run on?",
      initial: 8080,
    }
  ]);

  fs.writeFile(
    ".env",
    `DB_URL=${response.url
      \nLISTEN_PORT=${response.port}`,
    "utf8",
    function () {
      console.log("Your settings have been written to .env!");
      console.log("Run npm run serve to start the server or npm run dev to start it with nodemon.");
    }
  );
})();
```

At this point, the code was working, but it still didn't satisfy me. I wanted the user to be able to input a password and have that switched out with the <password> value from MongoDB Atlas.

I decided that it should also ask the user if they are using local, or Atlas. My final version looked like this.

```js
const prompts = require("prompts");
const fs = require("fs");
require("dotenv").config();
const port = process.env.LISTEN_PORT || 8080;
const url = process.env.DB_URL || "localhost/social";

(async () => {
  const response = await prompts([
    {
      type: "text",
      name: "url",
      message: "What is your MongoDB URL? (If you are using MongoDB Atlas, you can keep the <> values)",
      initial: url,
    },
    {
      type: "select",
      name: "value",
      message: "Pick a hosting type",
      choices: [
        {
          title: "MongoDB Atlas",
          description: "MongoDB Atlas cloud hosting",
          value: "atlas",
        },
        {
          title: "Local MongoDB",
          value: "local",
          description: "A local MongoDB instance",
        },
      ],
    },
    {
      type: (prev) => (prev == "atlas" ? "password" : null),
      name: "password",
      message: "What is your MongoDB Password?",
    },
    {
      type: "text",
      name: "port",
      message: "What port should the site run on?",
      initial: port,
    },
  ]);

  fs.writeFile(
    ".env",
    `DB_URL=${response.url.replace("<password>", response.password).replace("<dbname>", "social")}\nLISTEN_PORT=${
      response.port
    }`,
    "utf8",
    function () {
      console.log("Your settings have been written to .env!");
      console.log("Run npm run serve to start the server or npm run dev to start it with nodemon.");
    }
  );
})();
```

