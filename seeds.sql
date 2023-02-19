USE employees_tracker;

INSERT INTO department (name)
VALUES
    ("Finance"),
    ("Marketing"),
    ("Sales"),
    ("Human Resources");

INSERT INTO role (title, salary, department_id)
VALUES
    ("Accountant", 50000, 1),
    ("Creative Director", 100000, 2),
    ("Sales Consultant", 80000, 3),
    ("HR", 40000, 4);
    

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES
    ("John", "Doe", 4, null),
    ("Barry", "Allen", 1, 1),
    ("Bruce", "Wayne", 1, 1),
    ("Peter", "Parker", 1, 1),
    ("Clark", "Kent", 3, null),
    ("Tony", "Stark", 3, null),
    ("Wesley", "Adams", 1, 1),
    ("Mike", "Rose", 2, 1);