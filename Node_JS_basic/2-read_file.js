const fs = require('fs');
const path = require('path');

function countStudents(filePath) {
    // Build the absolute path of the file
    const absolutePath = path.resolve(filePath);

    try {
        // Read the file synchronously
        const data = fs.readFileSync(absolutePath, 'utf8');

        // Split the file lines
        const lines = data.trim().split('\n');

        if (lines.length <= 1) {
            throw new Error('Cannot load the database');
        }

        // Remove the CSV header and retrieve the student data
        const students = lines.slice(1).map(line => line.split(',')).filter(line => line.length === 4);

        console.log(`Number of students: ${students.length}`);

        // Organize students by field (the 4th element in each line)
        const fields = {};

        students.forEach(student => {
            const field = student[3]; // Column 4 contains the field
            const firstName = student[0]; // Column 1 contains the first name

            if (!fields[field]) {
                fields[field] = [];
            }
            fields[field].push(firstName);
        });

        // Display the number of students per field
        for (const [field, studentsList] of Object.entries(fields)) {
            console.log(`Number of students in ${field}: ${studentsList.length}. List: ${studentsList.join(', ')}`);
        }
    } catch (err) {
        throw new Error('Cannot load the database');
    }
}

module.exports = countStudents;
