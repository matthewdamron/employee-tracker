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
        LEFT JOIN employees e ON employees.manager_id = e.id;`;

    let promise = connection.promise().query(sql);
    return (promise);
};

module.exports = { viewAllEmployees };