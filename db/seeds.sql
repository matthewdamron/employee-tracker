-- Fill values into the departments table --
INSERT INTO departments (department_name) values ('Sales');
INSERT INTO departments (department_name) values ('Engineering');
INSERT INTO departments (department_name) values ('Finance');
INSERT INTO departments (department_name) values ('Legal');

-- Fill values into the roles table --
INSERT INTO roles (title, salary, department_id) values ('Sales Lead', 100000, 1);
INSERT INTO roles (title, salary, department_id) values ('Salesperson', 110000, 1);
INSERT INTO roles (title, salary, department_id) values ('Lead Engineer', 120000, 2);
INSERT INTO roles (title, salary, department_id) values ('Software Engineer', 130000, 2);
INSERT INTO roles (title, salary, department_id) values ('Accountant', 140000, 3);
INSERT INTO roles (title, salary, department_id) values ('Legal Team Lead', 150000, 4);
INSERT INTO roles (title, salary, department_id) values ('Software Engineer', 160000, 2);

-- Fill values into the roles table --
INSERT INTO employees (first_name, last_name, manager_id, role_id) values ('Mark', 'Twain', NULL, 7);
INSERT INTO employees (first_name, last_name, manager_id, role_id) values ('John', 'Doe', NULL, 6);
INSERT INTO employees (first_name, last_name, manager_id, role_id) values ('Kevin', 'Brown', 2, 5);
INSERT INTO employees (first_name, last_name, manager_id, role_id) values ('Tim', 'Allen', 2, 4);
INSERT INTO employees (first_name, last_name, manager_id, role_id) values ('Tammer', 'Galal', 2, 3);
INSERT INTO employees (first_name, last_name, manager_id, role_id) values ('Jan', 'Lourd', 2, 2);
INSERT INTO employees (first_name, last_name, manager_id, role_id) values ('Chris', 'Lam', 2, 1);

-- Show tables that are created --
SELECT * FROM departments;
SELECT * FROM roles;
SELECT * FROM employees;