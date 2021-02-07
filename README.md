<h1 align="center">
Employee Tracker
</h1>

## Table of Contents
- [Description](#description)
- [User Story](#user-story)
- [Acceptance Criteria](#Acceptance-criteria)
- [Screencast](#screencast)
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Language](#language)
- [Contributors](#contributors)
- [Questions](#questions)

## Description
A Inquirer app using node.js and MYSQL to track Employess.<br />
You will be able to add, delete, view and manage the departments, roles, and employees!!

## User Story
```
AS A business owner
I WANT to be able to view and manage the departments, roles, and employees in my company
SO THAT I can organize and plan my business
```

## Acceptance Criteria
```
GIVEN a command-line application that accepts user input
WHEN I start the application
THEN I am presented with the following options: view all departments, view all roles, view all employees, add a department, add a role, add an employee, and update an employee role
WHEN I choose to view all departments
THEN I am presented with a formatted table showing department names and department ids
WHEN I choose to view all roles
THEN I am presented with the job title, role id, the department that role belongs to, and the salary for that role
WHEN I choose to view all employees
THEN I am presented with a formatted table showing employee data, including employee ids, first names, last names, job titles, departments, salaries, and managers that the employees report to
WHEN I choose to add a department
THEN I am prompted to enter the name of the department and that department is added to the database
WHEN I choose to add a role
THEN I am prompted to enter the name, salary, and department for the role and that role is added to the database
WHEN I choose to add an employee
THEN I am prompted to enter the employee’s first name, last name, role, and manager and that employee is added to the database
WHEN I choose to update an employee role
THEN I am prompted to select an employee to update and their new role and this information is updated in the database 
```

## Screencast
[![Watch the video](./images/employee-tracker.png)](https://drive.google.com/file/d/12EFXnycS3AHPvkPC710YXGKQar-fu4Ny/view?usp=sharing)

## Installation
[node.js](https://nodejs.org)<br />
[mysql](https://www.mysql.com/)<br />
`npm install`

## Usage
After you install Node.js and MySQLon your computer browse to the application location in your terminal.<br />
Run the command 'node app.js' and folow the propmts to manage your compnay employess.

## License
![GitHub](https://img.shields.io/github/license/matthewdamron/employee-tracker)<br />
This application is covered by the MIT license. 

## Language
<img alt="NodeJS" src="https://img.shields.io/badge/node.js%20-%2343853D.svg?&style=for-the-badge&logo=node.js&logoColor=white"/>
<img alt="Express.js" src="https://img.shields.io/badge/express.js%20-%23404d59.svg?&style=for-the-badge"/>
<img alt="MySQL" src="https://img.shields.io/badge/mysql-%2300f.svg?&style=for-the-badge&logo=mysql&logoColor=white"/>

## Contributors
Matt Damron

## Questions
- Find me on GitHub: [Matt Damron](https://github.com/matthewdamron)<br />
- Email me [Matt Damron](mailto:mattdamron@msn.com)
