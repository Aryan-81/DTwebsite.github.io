// scripts.js
document.addEventListener('DOMContentLoaded', () => {
  const projectData = {
    "title": "Technical Project Management",
    "tasks": [
      {
        "task_id": 18882,
        "task_title": "Explore the world of management",
        "task_description": "As a project manager, you play an important role in leading a project through initiation, planning, execution, monitoring, controlling and completion. How? Do you want to manage each and every step of your life?",
        "assets": [
          {
            "asset_id": 18883,
            "asset_title": "Technical Project Management",
            "asset_description": "Story of Alignment\r\nScope of Agility\r\nSpecific Accountable \r\nStaggering Approach\r\n\r\n",
            "asset_content": "https://www.youtube.com/embed/TiMRwri1xJ8",
            "asset_type": "display_asset",
            "asset_content_type": "video"
          },
          {
            "asset_id": 18884,
            "asset_title": "Threadbuild",
            "asset_description": "Watch the video and thread build, and jot out key threads while watching that video.",
            "asset_content": "",
            "asset_type": "input_asset",
            "asset_content_type": "threadbuilder"
          },
          {
            "asset_id": 18885,
            "asset_title": "Structure your pointers",
            "asset_description": "Write a 400-500 word article, from your thread. Publish your understanding, and showcase your learning to the entire world.",
            "asset_content": "",
            "asset_type": "input_asset",
            "asset_content_type": "article"
          },
          {
            "asset_id": 18886,
            "asset_title": "4SA Method",
            "asset_description": "To explore more read more",
            "asset_content": "https://dtthon.deepthought.education/sharer?id=01aa3cff-db8e-8d9d-afc0-1671715937878",
            "asset_type": "display_asset",
            "asset_content_type": "article"
          }
        ]
      }
    ]
  };

  const projectTitleElement = document.getElementById('projectTitle');
  const tasksContainer = document.getElementById('tasksContainer');

  projectTitleElement.textContent = projectData.title;

  projectData.tasks.forEach(task => {
    const taskElement = createTaskContainer(task);
    tasksContainer.appendChild(taskElement);
  });

  function createTaskContainer(task) {
    const taskDiv = document.createElement('div');
    taskDiv.classList.add('task');
    taskDiv.innerHTML = `<h2>${task.task_title}</h2>
                         <p>${task.task_description}</p>`;

    task.assets.forEach(asset => {
      const assetContainer = createAssetContainer(asset);
      taskDiv.appendChild(assetContainer);
    });

    return taskDiv;
  }

  function createAssetContainer(asset) {
    const assetDiv = document.createElement('div');
    assetDiv.classList.add('asset');
    assetDiv.innerHTML = `<h3>${asset.asset_title} <span>&#x25BC;</span></h3>
                          <div class="asset-description">${asset.asset_description}</div>`;

    assetDiv.querySelector('h3').addEventListener('click', () => {
      const description = assetDiv.querySelector('.asset-description');
      description.classList.toggle('expanded');
    });

    return assetDiv;
  }
});
//<iframe width="560" height="315" src="https://www.youtube.com/embed/TiMRwri1xJ8?si=zjhShOI9lKOFIhOu" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>