import React from "react";
import { Link } from "react-router-dom";
import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  "https://zwcwryojtrkygrslhndl.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inp3Y3dyeW9qdHJreWdyc2xobmRsIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTQyOTE1MzIsImV4cCI6MjAwOTg2NzUzMn0.6rfOo0VhEbNh6MN5gjEtmHOFo1jEg0C3-D_o34JfZjU"
);

// Function to create a body part section
function createBodyPartSection(partName, content) {
  const section = document.createElement('div');
  section.id = partName.toLowerCase();
  section.className = 'body-part';

  const header = document.createElement('h2');
  header.textContent = partName;

  const paragraph = document.createElement('p');
  paragraph.textContent = content;

  section.appendChild(header);
  section.appendChild(paragraph);

  return section;
}

// Function to toggle the visibility of content
function toggleContentVisibility(event) {
  const content = event.currentTarget.nextElementSibling;
  content.style.display = content.style.display === 'none' ? 'block' : 'none';
}

// Create body part sections and add them to the document
document.addEventListener('DOMContentLoaded', function () {
  const bodyParts = [
      { name: 'Chest', content: 'Content for the Chest section goes here.' },
      { name: 'Back', content: 'Content for the Back section goes here.' },
      { name: 'Bicep', content: 'Content for the Bicep section goes here.' },
      { name: 'Legs', content: 'Content for the Legs section goes here.' },
      { name: 'Tricep', content: 'Content for the Tricep section goes here.' }
  ];

  const bodyPartsContainer = document.createElement('div');
  bodyPartsContainer.id = 'body-parts-container';

  bodyParts.forEach((part) => {
      const section = createBodyPartSection(part.name, part.content);
      section.querySelector('h2').addEventListener('click', toggleContentVisibility);
      bodyPartsContainer.appendChild(section);
  });

  document.body.appendChild(bodyPartsContainer);
});

function Activity() {}

export default Activity;
