// View All Employees
const viewAllEmployees = (connection) => {
    let sql =
        `SELECT
          employees.id AS 'ID',
          employees.first_name AS 'First Name',
          employees.last_name AS 'Last Name',
          roles.title AS 'Title',
          roles.salary AS 'Salary',
          departments.department_name AS 'Department',
          CONCAT(e.first_name, ' ', e.last_name) AS 'Manager'
        FROM employees
        INNER JOIN roles ON roles.id = employees.role_id
        INNER JOIN departments ON departments.id = roles.department_id
        LEFT JOIN employees e ON employees.manager_id = e.id
        ORDER BY employees.last_name;`;

    let promise = connection.promise().query(sql);
    return (promise);
};

// View All Employees by Departments
const viewByDeparments = (connection) => {
    let sql =
        `SELECT
          employees.id AS 'ID',
          employees.first_name AS 'First Name',
          employees.last_name AS 'Last Name',
          departments.department_name AS 'Department'
        FROM employees
        INNER JOIN roles ON roles.id = employees.role_id
        INNER JOIN departments ON departments.id = roles.department_id
        ORDER BY departments.department_name;`;

    let promise = connection.promise().query(sql);
    return (promise);
};

// View All Employees By Managers
const viewByManagers = (connection) => {
    let sql =
        `SELECT
          employees.id AS 'ID',
          employees.first_name AS 'First Name',
          employees.last_name AS 'Last Name',
          CONCAT(e.first_name, ' ', e.last_name) AS 'Manager'
        FROM employees
        LEFT JOIN employees e ON employees.manager_id = e.id
        ORDER BY e.last_name;`;

    let promise = connection.promise().query(sql);
    return (promise);
};

// View All Employees By Roles
const viewByRoles = (connection) => {
    let sql =
        `SELECT
          employees.id AS 'ID',
          employees.first_name AS 'First Name',
          employees.last_name AS 'Last Name',
          roles.title AS 'Title'
        FROM employees
        INNER JOIN roles ON roles.id = employees.role_id
        ORDER BY roles.title;`;

    let promise = connection.promise().query(sql);
    return (promise);
};

// View All Departments
const viewAllDeparments = (connection) => {
    let sql =
        `SELECT
          departments.id AS 'ID',
          departments.department_name AS 'Department'
        FROM departments;`;

    let promise = connection.promise().query(sql);
    return (promise);
};

// View All Roles
const viewAllRoles = (connection) => {
    let sql =
        `SELECT
          roles.id AS 'ID',
          roles.title AS 'Title',
          roles.salary AS 'Salary',
          departments.department_name AS 'Department'
        FROM roles
        INNER JOIN departments ON departments.id = roles.department_id;`;

    let promise = connection.promise().query(sql);
    return (promise);
};

module.exports = {
    viewAllEmployees,
    viewByDeparments,
    viewByManagers,
    viewByRoles,
    viewAllDeparments,
    viewAllRoles
};