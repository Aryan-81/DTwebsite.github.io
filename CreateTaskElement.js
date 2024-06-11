
function CreateTaskElement(tasks) {
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
  function createTaskContent(task, assets, i) {
    if (!task) {
      return '';
    }

    const task_title = task.task_title;
    const task_description = task.task_description;

    let assetCards = '';
    if (assets) {
      assetCards = assets.map((asset, index) => {
        let additionalContent = '';
        if (asset.asset_content_type === 'video') {
          additionalContent = `
            <div class="card-ctr1-1">
              <iframe width="100%" height="315" src="${asset.asset_content}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            </div>`;
        } else if (asset.asset_content_type === 'threadbuilder') {
          additionalContent = `
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
            </div>`;
        } else if (asset.asset_content_type === 'article' && asset.asset_type === 'input_asset') {
          additionalContent = `
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
            </div>`;
        } else if (asset.asset_content_type === 'article' && asset.asset_type === 'display_asset') {
          additionalContent = `
            <div class="card-ctr4-1">
              <div class="datapoint-container datapoint1 dropdown-container drop-open">
                <button class="datapoint-heading dropdown-container-button">
                  <div class="arrow"><span id="arrow-icon" >&#x25BC;</span></div>
                  <h4>Thread A</h4>
                </button>
                <div class="datapoint-data wrap-word-container dropdown-container-element">
                  <p class="wrap-word">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Optio saepe illum voluptate consectetur nemo doloribus praesentium aperiam, facilis excepturi earum quasi quas vitae quam quidem repellendus distinctio suscipit cupiditate alias est sunt? Magni expedita rerum obcaecati eius quis perferendis dolor amet necessitatibus. Inventore deserunt culpa obcaecati iusto. Quo libero eveniet sed enim iste amet quos aperiam neque, error atque voluptatibus possimus voluptatem officia sapiente eligendi placeat in eius explicabo cumque esse magnam aliquid. Tempora, modi minima? Impedit sint, ad eos at perferendis odio quas. Voluptate ad nihil velit. Quibusdam consequuntur ducimus consequatur quia est velit veritatis! Illo ipsam facere ab.</p>
                  <button class="read-more">Read More</button>
                </div>
              </div>
              <div class="datapoint-container datapoint2 dropdown-container drop-open">
                <button class="datapoint-heading dropdown-container-button">
                  <div class="arrow"><span>&#x25BC;</span></div>
                  <h4>Thread B</h4>
                </button>
                <div class="datapoint-data wrap-word-container dropdown-container-element">
                  <p class="wrap-word">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Optio saepe illum voluptate consectetur nemo doloribus praesentium aperiam, facilis excepturi earum quasi quas vitae quam quidem repellendus distinctio suscipit cupiditate alias est sunt? Magni expedita rerum obcaecati eius quis perferendis dolor amet necessitatibus. Inventore deserunt culpa obcaecati iusto. Quo libero eveniet sed enim iste amet quos aperiam neque, error atque voluptatibus possimus voluptatem officia sapiente eligendi placeat in eius explicabo cumque esse magnam aliquid. Tempora, modi minima? Impedit sint, ad eos at perferendis odio quas. Voluptate ad nihil velit. Quibusdam consequuntur ducimus consequatur quia est velit veritatis! Illo ipsam facere ab.</p>
                  <button class="read-more">Read More</button>
                </div>
              </div>
              <div class="datapoint-container datapoint3 dropdown-container drop-open">
                <button class="datapoint-heading dropdown-container-button">
                  <div class="arrow"><span>&#x25BC;</span></div>
                  <h4>Thread C</h4>
                </button>
                <div class="datapoint-data wrap-word-container dropdown-container-element">
                  <p class="wrap-word">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Optio saepe illum voluptate consectetur nemo doloribus praesentium aperiam, facilis excepturi earum quasi quas vitae quam quidem repellendus distinctio suscipit cupiditate alias est sunt? Magni expedita rerum obcaecati eius quis perferendis dolor amet necessitatibus. Inventore deserunt culpa obcaecati iusto. Quo libero eveniet sed enim iste amet quos aperiam neque, error atque voluptatibus possimus voluptatem officia sapiente eligendi placeat in eius explicabo cumque esse magnam aliquid. Tempora, modi minima? Impedit sint, ad eos at perferendis odio quas. Voluptate ad nihil velit. Quibusdam consequuntur ducimus consequatur quia est velit veritatis! Illo ipsam facere ab.</p>
                  <button class="read-more">Read More</button>
                </div>
              </div>
            </div>`;
        }
        return createCard(`card-${index + 1}`, asset.asset_title, asset.asset_description, additionalContent);
      }).join('');
    }

    const taskContent = `
      <div class="task-${i}">
        <div class="ctr2 task-info">
          <h3>${task_title}</h3>
          <p>${task_description}</p>
        </div>
        <div class="card-wrapper">
          ${assetCards}
        </div>
      </div>
    `;

    return taskContent;
  }

  function createTask(tasks) {
    const createTaskElements = tasks.map((task, index) => {
      return createTaskContent(task, task.assets, index);
    }).join('');
    return createTaskElements;
  }

  return createTask(tasks);
}

export {CreateTaskElement};
