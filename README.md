# Tech Blog

![License](https://img.shields.io/badge/license-MIT-blue.svg)

## Description

The purpose in creating this application was to allow users to publish articles, blog posts, and their thoughts/opinions about certain tech topics.
Using this platform, users will be able to create/edit/delete blog posts as well as comment on other people's posts once they are registered and logged in.
The user will also be automatically logged out after his/her session expires.

If you would like to see my tech blog, please use the link [here](https://lunirs-techblog.herokuapp.com/).

Future improvements would be the efficiency of the website. Currently, the website malfunctions sometimes due to some issue with cookies.

If the dashboard does not show up for you, please go into inpector -> application -> delete cookie.

## Table of Contents

1. [Installation](#installation)
2. [Usage](#usage)
3. [Questions](#questions)
4. [License](#license)

## Installation

In order to use this application after cloning it down, you would need to run the following code block,

```
npm i
```

By doing so, you will be installing the following npm packages.

1. bcrypt
2. express
3. express-handlebars
4. express-sessions
5. connect-session-sequelize
6. sequelize
7. mysql2
8. handlebars
9. dotenv

In order to fully get this working on your local machine, please take the .env.EXAMPLE file and rename the file to .env and fill out the file with your user and password for your machine.

```
DB_USER="input your user here"
DB_PW="input your password here"
DB_NAME='ecommerce_db'
SESSION_SECRET="input something here"

```

You would have to create the db by running the schema.sql file in mysql through:

```
source schema.sql
```

Then run your seeds through the script:

```
npm run seed
```

With this you are ready to run this application.

## Usage

Once you have fully set up the repository, you will be able to view the tech blog and use it!

Please see the link below to see a video demonstrating the live site currently deployed on heroku.

### [Click here](https://www.youtube.com/watch?v=H9Tw0sXjw8Y) to see the video.

## Contributing

If you would like to contribute to this project, please follow the guide lines set in the eslintrc.json

Thank you.

## Questions

If you have any questions, please feel free to reach out to me via:

1. Email: dhong0925@gmail.com
2. GitHub: Lunirs

## License

Licensed under the MIT license.

## Credits

Copyright © Daniel Hong All rights reserved.
