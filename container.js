document.addEventListener('DOMContentLoaded', function () {
    // Function to create a card
    function createCard(cardClass, headingText, descriptionText, additionalContent) {
        return `
        <div class="card ${cardClass}">
          <div class="card-heading">
            <h3>${headingText}</h3>
            <div class="i">i</div>
          </div>
          <div class="description wrap-word-container">
            <p class="wrap-word">
              <b>Description:</b> ${descriptionText}
            </p>
            <button class="read-more">Read More</button>
          </div>
          ${additionalContent}
        </div>
      `;
    }

    // Function to create task content
    function createTaskContent(i=1,task_title='title',task_description='description',assets) {
        if(!assets){
            assets = [
                {
                  "asset_title": "Technical Project Management",
                  "asset_description": "Story of Alignment\r\nScope of Agility\r\nSpecific Accountable \r\nStaggering Approach\r\n\r\n",
                  "asset_content": "https://www.youtube.com/embed/TiMRwri1xJ8",
                  "asset_type": "display_asset",
                  "asset_content_type": "video"
                },
                {
                  "asset_title": "Threadbuild",
                  "asset_description": "Watch the video and thread build, and jot out key threads while watching that video.",
                  "asset_content": "",
                  "asset_type": "input_asset",
                  "asset_content_type": "threadbuilder"
                },
                {
                  "asset_title": "Structure your pointers",
                  "asset_description": "Write a 400-500 word article, from your thread. Publish your understanding, and showcase your learning to the entire world.",
                  "asset_content": "",
                  "asset_type": "input_asset",
                  "asset_content_type": "article"
                },
                {
                  "asset_title": "4SA Method",
                  "asset_description": "To explore more read more",
                  "asset_content": "https://dtthon.deepthought.education/sharer?id=01aa3cff-db8e-8d9d-afc0-1671715937878",
                  "asset_type": "display_asset",
                  "asset_content_type": "article"
                }
              ];
        }
        const taskContent = `
        <div class="task-${i}">
          <div class="ctr2 task-info">
            <h3>${task_title}</h3>
            <p>${task_description}</p>
          </div>
          <div class="card-wrapper">
            ${createCard('technical-project-management', 'Technical Project Management', 'L Rerum tempore esse quia minus ducimus sequi!', `
              <div class="card-ctr1-1">
                <iframe width="100%" height="315" src="https://www.youtube.com/embed/TiMRwri1xJ8"
                  title="YouTube video player" frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
              </div>`)}
            ${createCard('threadbuild', 'Threadbuild', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum tempore esse quia minus ducimus sequi! Exercitationem, aliquam fugit! Ad delectus quia optio exercitationem.', `
              <div class="card-ctr2-1">
                <div class="thread-container">
                  <div class="thread-header" onclick="toggleThreadContent(this)">
                    <div class="toggle-arrow">^</div>
                    <div class="thread-title">Thread A</div>
                  </div>
                  <div class="sub-container">
                    <div class="flex-box">
                      <div class="sub-thread">
                        <div class="sub-thread-heading">Sub Thread 1</div>
                        <textarea placeholder="Enter Text Here"></textarea>
                      </div>
                      <div class="sub-thread">
                        <div class="sub-thread-heading">Sub Interpretation 1</div>
                        <textarea placeholder="Enter Text Here"></textarea>
                      </div>
                    </div>
                    <div class="controls">
                      <button>💡</button>
                      <button>💬</button>
                      <button>📝</button>
                      <button>⬇️</button>
                      <select>
                        <option>Select Categ</option>
                      </select>
                      <select>
                        <option>Select Proces</option>
                      </select>
                    </div>
                  </div>
                  <button class="sub-thread-button">+ Sub thread</button>
                  <div class="summary">
                    <div class="summary-heading">Summary for Thread A</div>
                    <textarea placeholder="Enter Text Here"></textarea>
                  </div>
                </div>
              </div>`)}
            ${createCard('structure-your-pointer', 'Structuer Your Pointer', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum tempore esse quia minus ducimus sequi! Exercitationem, aliquam fugit! Ad delectus quia optio exercitationem.', `
              <div class="card-ctr3-1">
                <div class="card-ctr3-1-title">
                  <h3>Title</h3>
                  <form method="get"><textarea></textarea></form>
                </div>
                <div class="card-ctr3-1-container">
                  <h3>Content</h3>
                  <form method="post">
                    <textarea id="textcontent" cols="30" rows="10"></textarea>
                  </form>
                </div>
              </div>`)}
            ${createCard('methode-4sa', '4SA Method', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit possimus maxime, voluptatem cum dolor quis quo obcaecati? Sed quis natus tempore ipsam perspiciatis nobis, dolorum voluptatibus laborum accusantium est maxime.', `
              <div class="card-ctr4-1">
                <div class="datapoint-container datapoint1 dropdown-container drop-open">
                  <button class="datapoint-heading dropdown-container-button">
                    <div class="arrow">v</div>
                    <h4>Thread A</h4>
                  </button>
                  <div class="datapoint-data wrap-word-container dropdown-container-element">
                    <p class="wrap-word">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Optio saepe illum voluptate consectetur nemo doloribus praesentium aperiam, facilis excepturi earum quasi quas vitae quam quidem repellendus distinctio suscipit cupiditate alias est sunt? Magni expedita rerum obcaecati eius quis perferendis dolor amet necessitatibus. Inventore deserunt culpa obcaecati iusto. Quo libero eveniet sed enim iste amet quos aperiam neque, error atque voluptatibus possimus voluptatem officia sapiente eligendi placeat in eius explicabo cumque esse magnam aliquid. Tempora, modi minima? Impedit sint, ad eos at perferendis odio quas. Voluptate ad nihil velit. Quibusdam consequuntur ducimus consequatur quia est velit veritatis! Illo ipsam facere ab.</p>
                    <button class="read-more">Read More</button>
                  </div>
                </div>
                <div class="datapoint-container datapoint2 dropdown-container drop-open">
                  <button class="datapoint-heading dropdown-container-button">
                    <div class="arrow">v</div>
                    <h4>Thread B</h4>
                  </button>
                  <div class="datapoint-data wrap-word-container dropdown-container-element">
                    <p class="wrap-word">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Optio saepe illum voluptate consectetur nemo doloribus praesentium aperiam, facilis excepturi earum quasi quas vitae quam quidem repellendus distinctio suscipit cupiditate alias est sunt? Magni expedita rerum obcaecati eius quis perferendis dolor amet necessitatibus. Inventore deserunt culpa obcaecati iusto. Quo libero eveniet sed enim iste amet quos aperiam neque, error atque voluptatibus possimus voluptatem officia sapiente eligendi placeat in eius explicabo cumque esse magnam aliquid. Tempora, modi minima? Impedit sint, ad eos at perferendis odio quas. Voluptate ad nihil velit. Quibusdam consequuntur ducimus consequatur quia est velit veritatis! Illo ipsam facere ab.</p>
                    <button class="read-more">Read More</button>
                  </div>
                </div>
                <div class="datapoint-container datapoint3 dropdown-container drop-open">
                  <button class="datapoint-heading dropdown-container-button">
                    <div class="arrow">v</div>
                    <h4>Thread C</h4>
                  </button>
                  <div class="datapoint-data wrap-word-container dropdown-container-element">
                    <p class="wrap-word">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Optio saepe illum voluptate consectetur nemo doloribus praesentium aperiam, facilis excepturi earum quasi quas vitae quam quidem repellendus distinctio suscipit cupiditate alias est sunt? Magni expedita rerum obcaecati eius quis perferendis dolor amet necessitatibus. Inventore deserunt culpa obcaecati iusto. Quo libero eveniet sed enim iste amet quos aperiam neque, error atque voluptatibus possimus voluptatem officia sapiente eligendi placeat in eius explicabo cumque esse magnam aliquid. Tempora, modi minima? Impedit sint, ad eos at perferendis odio quas. Voluptate ad nihil velit. Quibusdam consequuntur ducimus consequatur quia est velit veritatis! Illo ipsam facere ab.</p>
                    <button class="read-more">Read More</button>
                  </div>
                </div>
              </div>`)}
          </div>
        </div>
      `;
        return taskContent;
    }

    // Set the project title
    document.querySelector('#projectTitle').textContent = 'Project Title';

    // Set the task container content
    const tasksContainer = document.querySelector('#tasksContainer');
    tasksContainer.innerHTML = createTaskContent();


    // Script for dropdown containers
    const dropdownContainers = document.querySelectorAll('.dropdown-container');
    dropdownContainers.forEach(dropdownContainer => {
        const dropdownButton = dropdownContainer.querySelector('.dropdown-container-button');
        dropdownButton.addEventListener('click', function () {
            if (dropdownContainer.classList.contains('drop-open')) {
                dropdownContainer.classList.remove('drop-open');
            } else {
                dropdownContainer.classList.add('drop-open');
            }
        });
    });

    // Script for wrap word containers
    const wrapTextContainers = document.querySelectorAll('.wrap-word-container');
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
});
