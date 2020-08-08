// STEP 1: Create a Header component.
// -----------------------
// Write a function that takes no arguments and returns the markup you see below:
//
//  <div class="header">
//    <span class="date">MARCH 28, 2020</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div>
//
// Use your function to create a header
// and append it to the DOM inside the div.header-container

const headerContainer = document.querySelector('.header-container');

function Header() {
  const header = document.createElement('div');
  const date = document.createElement('span');
  const title = document.createElement('h1');
  const temperature = document.createElement('span');

  date.textContent = 'MARCH 28, 2020';
  title.textContent = 'Lambda Times';
  temperature.textContent = '90\u00b0';

  header.classList.add('header');
  date.classList.add('date');
  temperature.classList.add('temp');

  header.appendChild(date);
  header.appendChild(title);
  header.appendChild(temperature);

  return header;
}

headerContainer.appendChild(Header());
