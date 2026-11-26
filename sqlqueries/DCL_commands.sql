## TASK 1
CREATE USER 'teacher1'@'localhost'
IDENTIFIED BY 'Teacher@123';
GRANT SELECT, INSERT, UPDATE
ON school_db.marks
TO 'teacher1'@'localhost';
SHOW GRANTS FOR 'teacher1'@'localhost';
GRANT SELECT, INSERT, UPDATE
ON `school_db`.`marks`
TO `teacher1`@`localhost`;
## TASK 2
REVOKE UPDATE
ON school_db.marks
FROM 'teacher1'@'localhost';
SHOW GRANTS FOR 'teacher1'@'localhost';

CREATE ROLE 'viewer';
GRANT SELECT
ON school_db.*
TO 'viewer';
CREATE USER 'guest1'@'localhost'
IDENTIFIED BY 'Guest@123';
GRANT 'viewer'
TO 'guest1'@'localhost';
SHOW GRANTS FOR 'viewer';
DROP USER 'teacher1'@'localhost';

DROP USER 'guest1'@'localhost';