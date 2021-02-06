-- View All Employees
SELECT
  employees.id AS 'ID',
  employees.first_name AS 'First Name',
  employees.last_name AS 'Last Name',
  roles.title AS 'Title',
  roles.salary AS 'Salary',
  departments.department_name AS 'Department',
  CONCAT(e.first_name, ' ', e.last_name) AS 'Manager'
  FROM employees
  -- INNER JOIN on roles table to display correct title and salary
  INNER JOIN roles ON roles.id = employees.role_id
  -- INNER JOIN on departments table to display correct department
  INNER JOIN departments ON departments.id = roles.department_id
  -- LEFT JOIN on employees table to display correct manager
  LEFT JOIN employees e ON employees.manager_id = e.id
  ORDER BY employees.last_name;

-- View All Employees by Departments
SELECT
  employees.id AS 'ID',
  employees.first_name AS 'First Name',
  employees.last_name AS 'Last Name',
  departments.department_name AS 'Department'
  FROM employees
  JOIN roles ON employees.role_id = roles.id
  JOIN departments ON roles.department_id = departments.id
  ORDER BY departments.department_name;

-- View All Employees By Roles
SELECT
  employees.id AS 'ID',
  employees.first_name AS 'First Name',
  employees.last_name AS 'Last Name',
  roles.title AS 'Title'
  FROM employees
  JOIN roles ON employees.role_id = roles.id
  ORDER BY roles.title;

-- View All Employees By Managers
SELECT
  employees.id AS 'ID',
  employees.first_name AS 'First Name',
  employees.last_name AS 'Last Name',
  CONCAT(e.first_name, ' ', e.last_name) AS 'Manager'
  FROM employees
  LEFT JOIN employees e ON employees.manager_id = e.id
  ORDER BY e.last_name;

-- View All Departments
SELECT * FROM departments;

-- View All Roles
SELECT * FROM roles;