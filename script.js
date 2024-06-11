import { ProjectData } from './ProjectData.js'
import { CreateTaskElement } from './CreateTaskElement.js'

document.addEventListener('DOMContentLoaded', () => {
  // set project title
  document.querySelector('#projectTitle').textContent = ProjectData.title;

  // creating the task elements
  const tasksContainer = document.querySelector('#tasksContainer');
  tasksContainer.innerHTML = CreateTaskElement(ProjectData.tasks);

  // Script for dropdown containers
  const dropdownContainers = document.querySelectorAll('.dropdown-container');
  if (dropdownContainers) {
    dropdownContainers.forEach(dropdownContainer => {
      const dropdownButton = dropdownContainer.querySelector('.dropdown-container-button');
      const arrow = dropdownButton.querySelector('.arrow');

      dropdownButton.addEventListener('click', function () {
        if (dropdownContainer.classList.contains('drop-open')) {
          dropdownContainer.classList.remove('drop-open');
          arrow.style.transform = 'none';
        } else {
          dropdownContainer.classList.add('drop-open');
          arrow.style.transform = 'rotate(180deg)';
        }
      });
    });
  }

  // Script for wrap word containers
  const wrapTextContainers = document.querySelectorAll('.wrap-word-container');
  if (wrapTextContainers) {
    wrapTextContainers.forEach(wrapTextContent => {
      const wrapTextElement = wrapTextContent.querySelector('.wrap-word');
      const wrapTextButton = wrapTextContent.querySelector('.read-more');

      if (wrapTextElement.scrollHeight <= wrapTextElement.clientHeight) {
        wrapTextButton.style.display = 'none';
      }
      wrapTextButton.addEventListener('click', function () {
        if (wrapTextElement.classList.contains('expanded')) {
          wrapTextElement.classList.remove('expanded');
          this.textContent = 'Read More';
        } else {
          wrapTextElement.classList.add('expanded');
          this.textContent = 'Read Less';
        }
      });
    });
  }

});
