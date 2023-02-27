# Plexxis Interview Exercise

## My Solution

I created a simple Plexxis Employee CRUD application using React for the front end, and Express for the back end. I also used morgan for logging the server activities and body-parser for parsing requests. My focus was on making the app incredibly intuitive and functional. I completed all of the basic requirements and numbers 2 and 3 of the bonus objectives as well. I will briefly outline how I completed the requirements underneath the requirements themselves.

## Requirements

Create a simple but impressive (looks good, works well, has intuitive design, etc.) CRUD application that can do the following:

1. &#x2713; Retrieve employees from a REST API

- GET request using a useEffect hook with an empty dependency array.

2. &#x2713; Display the employees in a React application

- Displayed the employees using a table which includes edit and delete buttons for individual rows.

3. &#x2713; Has UI mechanisms for creating and deleting employees

- Add new employee form at the bottom of the page and individual delete buttons for employees already in the table. POST and DELETE requests as necessary (on form submission or delete button click respectively). Form requires all fields to be completed before submitting.

4. &#x2713; Has API endpoints for creating and deleting employees

- API endpoints at /api/employees and /api/employees/:id respectively. POST validates the request before creating the employee to ensure correct usage. DELETE ensures the employee exists prior to removal.

5. &#x2713; Edit your version of the `README.md` file to explain to us what things you did, where you focussed your effort, etc.

_Read over the `Bonus` objectives and consider tackling those items as well_

## Bonus (Highly Encouraged)

1. Use a relational database to store the data (SQLite, MariaDB, Postgres)
2. &#x2713; UI mechanisms to edit/update employee data

- Similar to the delete button, there is an edit button with each employee entry. When clicked it opens a dialog box with a form auto-filled with the employee's current information to be edited/updated as desired. PUT request on form submission, dialog box can be canceled as well with no request.

3. &#x2713; Add API endpoint to update employee data

- API endpoint at /api/employees/:id to update employee data. It checks for existence of the employee and ensures the id matches before updating the data and returning the updated employee.

4. Use [React Table](https://react-table.js.org)

## Other Technologies

You are permitted to use the following if you prefer ...

1. TypeScript, Front-end or backend.
2. NestJS, back end.

## Getting Started

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app). The front-end app runs off localhost:3000. The REST API is located in the /server folder and runs off localhost:8080. The data is being served from a JSON file located in the /server/data folder. Run `npm start` to start both servers.

## Getting it Done

- You are free to use whatever libraries that you want. Be prepared to speak to your decisions.
- There is no time limit. Use as little or as much time as is necessary, but aim to get it done within a week. If you need more time it's no problem, but you must let us know. Sometimes life happens. That's ok.
- Fork or clone our repository into your own repository.
  - Send us the link when you are done the exercise (pglinker at plexxis dot com).

When you are done, we'll schedule a zoom call with you where you will share your screen, demo the application for us, and walk us through the code while we ask questions about it.
