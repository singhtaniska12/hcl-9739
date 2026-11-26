USE school_db;
## TASK 1
SET autocommit = 0;
START TRANSACTION;

UPDATE marks
SET score = 100
WHERE student_id = 1
AND subject = 'Maths';

SELECT *
FROM marks
WHERE student_id = 1
AND subject = 'Maths';
ROLLBACK;
SELECT *
FROM marks
WHERE student_id = 1
AND subject = 'Maths';
START TRANSACTION;

UPDATE marks
SET score = 100
WHERE student_id = 1
AND subject = 'Maths';

SELECT *
FROM marks
WHERE student_id = 1
AND subject = 'Maths';
COMMIT;
## TASK 2
START TRANSACTION;
INSERT INTO students
(student_name, email, age, hometown, admission_date, phone)
VALUES
('Savepoint Student One',
 'savepoint_one_2026@gmail.com',
 20,
 'Delhi',
 '2026-11-26',
 '9876501111');

SAVEPOINT s1;
INSERT INTO students
(student_name, email, age, hometown, admission_date, phone)
VALUES
('Savepoint Student Two',
 'savepoint_two_2026@gmail.com',
 21,
 'Noida',
 '2026-11-26',
 '9876502222');

SAVEPOINT s2;
SELECT * FROM marks
LIMIT 1;
DELETE FROM marks
WHERE mark_id = 1;
SELECT * FROM students
WHERE email IN (
    'savepoint_one_2026@gmail.com',
    'savepoint_two_2026@gmail.com'
);
ROLLBACK TO SAVEPOINT s1;
COMMIT;