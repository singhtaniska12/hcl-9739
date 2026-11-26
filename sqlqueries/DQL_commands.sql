USE school_db;
#TASK 1
SELECT * FROM students;
SELECT
    student_name AS `Student Name`,
    hometown
FROM students;
SELECT * FROM students
WHERE age BETWEEN 10 AND 15;
SELECT * FROM students
WHERE student_name LIKE 'A%';
SELECT * FROM students
ORDER BY age DESC
LIMIT 3;
SELECT DISTINCT hometown
FROM students;
#TASK 2
SELECT hometown, COUNT(*) AS total_students
FROM students
GROUP BY hometown;
SELECT
    subject,
    AVG(score) AS average_score,
    MAX(score) AS highest_score,
    MIN(score) AS lowest_score
FROM marks
GROUP BY subject;
SELECT
    subject,
    AVG(score) AS average_score
FROM marks
GROUP BY subject
HAVING AVG(score) > 60;
SELECT
    s.student_name,
    m.subject,
    m.score
FROM students s
INNER JOIN marks m
ON s.student_id = m.student_id;SELECT
    s.student_id,
    s.student_name,
    m.subject,
    m.score
FROM students s
LEFT JOIN marks m
ON s.student_id = m.student_id;

SELECT
    student_id,
    student_name,
    total_marks,
    RANK() OVER (ORDER BY total_marks DESC) AS student_rank
FROM (
    SELECT
        s.student_id,
        s.student_name,
        COALESCE(SUM(m.score), 0) AS total_marks
    FROM students s
    LEFT JOIN marks m
    ON s.student_id = m.student_id
    GROUP BY s.student_id, s.student_name
) AS student_totals;