# Tutoring Prep Form

I've deployed my site using Render's cloud infrastructure. [Deployed here]

![Render](https://img.shields.io/badge/Render-%46E3B7.svg?style=for-the-badge&logo=render&logoColor=white)

---

This is a personalized form exclusively for my learners, tailored to streamline our one-on-one tutoring sessions. This form serves as a valuable tool for me to gather essential information in advance. It facilitates communication by emailing me the responses while also providing learners with the convenience of receiving a copy of their submitted responses directly to their email inbox. This integrated approach ensures optimal preparation, efficient coordination, and a smooth tutoring experience for all involved.

# Why Formik?

I have built many forms in React before from scratch. Forms and validation can become complex, I wanted to work with Formik. With Formik, I am able to simplify form management, streamline validation logic, and enhance the overall user experience, ultimately saving time and effort in the development cycle.

To enhance the validation capabilities of Formik, I chose to integrate Yup, a powerful schema validation library, as recommended by the Formik Documentation. By combining the strengths of Formik and Yup, I can effortlessly define and enforce validation rules, handle error messages, and ensure data integrity, all while maintaining a seamless and intuitive form experience for users.

# Email sending capabilities

I took the opportunity to enhance my backend development skills by integrating Nodemailer, a reliable and versatile email-sending solution, with SMTP Gmail. This experience allows me to proficiently handle email communication on the backend, leveraging Nodemailer's capabilities to ensure secure transmission of information and seamless delivery of messages through the trusted SMTP protocol provided by Gmail.

# I wanted to get experience with Sass

I wanted experience with Sass, an incredibly versatile CSS preprocessor. Immersing myself in Sass allowed me to gain hands-on experience with its remarkable features, including variables, nesting, mixins, and more making writing CSS fun.

# Development

This project requires [Node.js](https://nodejs.org/) v10+ to run. Tested on version `16.14.2`

This App uses [NPM](https://www.npmjs.com/) Node Package Manager to manage it's dependencies and packages.

from the root directory

```
npm install
```

Create a `.env` file in the server directory and add your secret environment values.

For example:

```
NODE_ENV=development
PORT=3001
DB_URI=YOUR_MONGO_CONNECTION_STRING
EMAIL=YOUR_EMAIL@gmail.com
HASHED_PASS=YOUR_SECRET
```

<span style="text-decoration: underline;">If you do not have a MongoDB Atlast connection string, you can [sign up here].</span>

Double check your MongoDB connection URI. For example:

```
DB_URI=mongodb+srv://<username>:<password>@cluster0.qkyacex.mongodb.net/?retryWrites=true&w=majority
```

This App uses `concurrently` to start both the client and server. I have configured the root `package.json` to define workspaces with the client and server. So in the ROOT directory:

```
npm start
```

## Tech Stack

### **Front-End**

---

- [Vite] - Build tool that aims to provide a faster and leaner development experience for modern web projects.

- [React] - JavaScript front end library.

- [Formik] - Formik is a popular form library for React that simplifies the process of building and managing complex forms. It provides a set of utilities and components that handle form state, validation, and submission, making it easier to create interactive and robust forms in React applications.

- [Yup] - Yup is a schema builder for runtime value parsing and validation. Define a schema, transform a value to match, assert the shape of an existing value, or both. Yup schema are extremely expressive and allow modeling complex, interdependent validations, or value transformation.

- [Sass] - Sass (Syntactically Awesome Style Sheets) is a CSS preprocessor that extends the capabilities of CSS, providing features like variables, nesting, mixins, and more to make stylesheets more efficient and maintainable.

### **Back-End**

---

- [Mongoose] - Mongoose is an object modeling tool for MongoDB and Node.js.

- [Node.js] - cross-platform, open-source server environment that can run on Windows, Linux, Unix, macOS, and more. Node.js is a back-end JavaScript runtime environment, runs on the V8 JavaScript Engine, and executes JavaScript code outside a web browser.

- [Express] - Express.js, or simply Express, is a back end web application framework for building RESTful APIs with Node.js

- [MongoDB] - MongoDB Atlas is a fully managed cloud database service that allows you to easily deploy, scale, and operate MongoDB databases in the cloud.

- [Nodemailer] -
  Nodemailer is a widely used module for Node.js that allows you to send emails easily. It provides a simple and straightforward API for creating and sending emails from your Node.js applications. Nodemailer supports various email providers, including SMTP and sendmail, and offers features like attachments, HTML content, and inline images. With Nodemailer, you can efficiently integrate email sending functionality into your Node.js projects.

## Contributing

---

Find a bug?
I welcome contributions. Simply open a pull request with your changes and I will review them.

[Sass]: https://sass-lang.com/
[vite]: https://vitejs.dev/
[mongodb]: https://www.mongodb.com/atlas/database
[mongoose]: https://mongoosejs.com/docs/
[Deployed here]: https://tutoringform-client.onrender.com/
[node.js]: http://nodejs.org
[Formik]: https://formik.org/
[express]: http://expressjs.com
[react]: https://react.dev/
[Nodemailer]: https://nodemailer.com/about/
[Yup]: https://www.npmjs.com/package/yup
[Sign up here]: https://www.mongodb.com/cloud/atlas/register
