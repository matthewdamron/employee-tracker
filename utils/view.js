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

    let value = connection.promise().query(sql)
    .then( ([rows,fields]) => {
        // let test = rows;
        return rows;
        console.table(rows);
      });
        return (value);
    // });
    // value.then(function(results) {
    //     return results;
    // })
    // return value;
};

module.exports = { viewAllEmployees };


// con.promise().query("SELECT 1")
//   .then( ([rows,fields]) => {
//     console.log(rows);
//   })
//   .catch(console.log)
//   .then( () => con.end());