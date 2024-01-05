function createTable() {
    // Prompt for the number of rows
    const rowCount = parseInt(prompt("Input number of rows"));

    // Prompt for the number of columns
    const colCount = parseInt(prompt("Input number of columns"));

    // Get the table element by id
    const myTable = document.getElementById("myTable");

    // Clear existing content in the table
    myTable.innerHTML = '';

    // Create rows and columns in the table
    for (let i = 0; i < rowCount; i++) {
        // Create a new row
        const row = myTable.insertRow(i);

        for (let j = 0; j < colCount; j++) {
            // Create a new cell in the current row
            const cell = row.insertCell(j);

            // Set the text content of the cell
            cell.textContent = `Row-${i} Column-${j}`;
        }
    }
}

