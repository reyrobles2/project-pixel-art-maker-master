// Select color input
const pxlColor = document.querySelector('#colorPicker');

// Select size input - Height and Width
const pxlTableHeight = document.querySelector('#inputHeight');
const pxlTableWidth = document.querySelector('#inputWidth');

// Select the <table> element
const pxlTable = document.querySelector('table');

// When size is submitted by the user, call makeGrid()
document
  .getElementById('sizePicker')
  .addEventListener('submit', function makeGrid(evt) {
    // Get the Height value as string
    const height = pxlTableHeight.value;
    // Get the Width value as string
    const width = pxlTableWidth.value;

    pxlTable.innerHTML = ''; // Refresh the HTML Table
    evt.preventDefault(); // Prevent Page Reload

    // Create the <tbody> element
    const pxlTBody = document.createElement('tbody');

    // Loop through the rows given by the user input Height
    // type cast height as Number
    for (let row = 1; row <= Number(height); row++) {
      // Create a <tr> row element
      const newRow = document.createElement('tr');

      // Loop through the columns given by the user input Width
      // type cast width as Number
      for (let col = 1; col <= Number(width); col++) {
        // Create a <td> element and
        // add at the end of the table row below
        const newCol = document.createElement('td');

        // Add Event Listener, click to change background color of table cell
        newCol.addEventListener('click', function respondToTheClick() {
          // Set the background color of the cell based on the Color chosen by the user
          newCol.style.background = pxlColor.value;
        });
        // Add <td> at the end of the table row
        newRow.appendChild(newCol);
      }
      // Add <tr> row to the end of the table body <tbody>
      pxlTBody.appendChild(newRow);
    }
    // Add the <tbody> to table <table>
    pxlTable.appendChild(pxlTBody);
    // Finally, add Table <table> to Body <body> element
    document.body.appendChild(pxlTable);
  });
