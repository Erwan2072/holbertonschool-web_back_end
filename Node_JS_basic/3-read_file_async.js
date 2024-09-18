const fs = require('fs').promises;
const path = require('path');

async function countStudents(filePath) {
    const absolutePath = path.resolve(filePath);

    try {
        // Check if the file is accessible
        await fs.access(absolutePath);

        // Read the file asynchronously
        const data = await fs.readFile(absolutePath, 'utf8');

        // Split the file into lines
        const lines = data.trim().split('\n');

        // Check if the file has at least one line (the header)
        if (lines.length <= 1) {
            throw new Error('Cannot load the database');
        }

        // Process student data (remove the header)
        const students = lines.slice(1).map(line => line.split(',')).filter(line => line.length === 4);

        console.log(`Number of students: ${students.length}`);

        // Organize students by field (4th column)
        const fields = {};

        students.forEach(student => {
            const field = student[3]; // Column 4 = field
            const firstName = student[0]; // Column 1 = first name

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
        // If the file is not available or another error occurs
        throw new Error('Cannot load the database');
    }
}

module.exports = countStudents;
