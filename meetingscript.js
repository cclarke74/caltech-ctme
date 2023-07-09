window.addEventListener('DOMContentLoaded', (event) => {
    const schedule = document.getElementById('schedule');
    const cells = schedule.getElementsByClassName('open');
  
    for (let i = 0; i < cells.length; i++) {
      const cell = cells[i];
      cell.addEventListener('click', (event) => {
        if (cell.classList.contains('requested')) {
          alert('This time is not available!');
        } 
        else {
          const confirmed = confirm('Confirm appointment request for ' + cell.parentNode.children[0].textContent + ' on ' + cell.parentNode.parentNode.children[0].children[i + 1].textContent + '?');
          if (confirmed) {
            cell.classList.remove('open');
            cell.classList.add('requested');
            cell.innerHTML = 'requested';
        }}
