# Case Based Reaoner For Recommending Covid-19 Policies

This is a client for a case based reasoner that provides policy recommendation in the context of Covid-19 such as lockdown, mask, and vaccine policies. This client allows decision makers to create cases, view them, and submit a query to the reasoner which will return a policy recommendation as well as the top 3 most similar cases. The client is built using React and is deployed on Netlify.com. The client is connected to the case based reasoner API which is built using FastAPI. The case based reasoner API is connected to a Postgres database that stores the cases. The database and the API are hosted and deployed on Render.com.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

You will need to have Node.js 18 installed on your machine.

### Installing

To install the project, clone the repository and run the following command in the project directory:

```
npm install
```

### Running the project

To run the project, run the following command in the project directory:

```
npm run dev
```

Test the project by going to http://localhost:3000/ in your browser.

## Built With

- [React](https://reactjs.org/) - The library used
- [Material UI](https://mui.com/) - React UI framework
- [React Query](https://react-query.tanstack.com/) - React library for fetching, caching, and updating data
- [Formik](https://formik.org/) - React library for building forms

## Author

- **Shehab Shalan** - [shehabshalan](https://github.com/shehabshalan)

## License

This project is licensed under the MIT License.
