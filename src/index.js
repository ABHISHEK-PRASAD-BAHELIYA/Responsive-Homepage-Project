// index.js
import { renderHeader } from './header.js';
import { renderMainSection } from './mainSection.js';
import { renderFooter } from './footer.js';
import './style.css';

// Get the root element where the content will be injected
const root = document.getElementById('root');

// Inject the HTML content
root.innerHTML = `
  ${renderHeader()}
  ${renderMainSection()}
  ${renderFooter()}
`;
