
document.getElementById('appointmentForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting and refreshing the page
  
    // Get the selected time and day from the form
    var selectedTime = document.getElementById('time').value;
    console.log({selectedTime});
    var selectedDay = document.getElementById('day').value;
  
    // Find the table cell corresponding to the selected time and day
    var table = document.getElementById('schedule');
    var rows = table.getElementsByTagName('tr');
    console.log({rows})
    var rowIndex = -1;
    var columnIndex = -1;
  
    // Find the row index
    for (var i = 1; i < rows.length; i++) {
      var cells = rows[i].getElementsByTagName('td');
      if (cells[0].innerHTML === selectedTime) {
        rowIndex = i;
        break;
      }
    }
  
    // Find the column index
    var headerRow = rows[0];
    var headers = headerRow.getElementsByTagName('th');
    for (var j = 1; j < headers.length; j++) {
      if (headers[j].innerHTML === selectedDay) {
        columnIndex = j;
        break;
      }
    }
  
    // If the selected time and day are valid, and the table cell is not already booked, update the cell
    if (rowIndex !== -1 && columnIndex !== -1) {
      var cell = rows[rowIndex].getElementsByTagName('td')[columnIndex];
      if (cell.classList.contains('open')) {
        cell.classList.remove('open');
        cell.classList.add('booked');
        cell.innerHTML = 'Booked';
        alert('Appointment booked successfully!');
      } else {
        alert('The selected time slot is already booked. Please choose another slot.');
      }
    } else {
      alert('Invalid time or day selected. Please try again.');
    }
  });
  

