const analyzeBtn = document.getElementById('analyze-btn');
const urlInput = document.getElementById('url-input');
const loadingSpinner = document.getElementById('loading-spinner');
const resultsContainer = document.getElementById('results-container');

analyzeBtn.addEventListener('click', () => {
  const url = urlInput.value.trim();

  if (!url) {
    alert('Please enter a URL to analyze.');
    return;
  }

  showLoadingSpinner();

  fetch(`https://api.example.com/analyze?url=${url}`)
    .then(response => response.json())
    .then(data => showResults(data))
    .catch(error => {
      console.error(error);
      alert('An error occurred while analyzing the URL. Please try again later.');
      hideLoadingSpinner();
    });
});

function showLoadingSpinner() {
  loadingSpinner.style.display = 'block';
  resultsContainer.style.display = 'none';
}

function hideLoadingSpinner() {
  loadingSpinner.style.display = 'none';
  resultsContainer.style.display = 'none';
}

function showResults(data) {
  const totalKeywords = data.totalKeywords;
  const pageLoadTime = data.pageLoadTime;
  const tagCloud = data.tagCloud;
  const topKeywords = data.topKeywords;
  const keywordDensity = data.keywordDensity;

  const resultsTable = document.createElement('table');
  resultsTable.innerHTML = `
    <thead>
      <tr>
        <th>Feature</th>
        <th>Value</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Total Keywords</td>
        <td>${totalKeywords}</td>
      </tr>
      <tr>
        <td>Page Load Time</td>
        <td>${pageLoadTime} seconds</td>
      </tr>
      <tr>
        <td>Tag Cloud</td>
        <td>${tagCloud.join(', ')}</td>
      </tr>
      <tr>
        <td>Top Keywords</td>
        <td>
          ${topKeywords.map(keyword => `
            <div>
              ${keyword.keyword} (${keyword.count})
              ${keyword.hasTitle ? '<span title="Has Title">T</span>' : ''}
              ${keyword.hasDescription ? '<span title="Has Description">D</span>' : ''}
              ${keyword.hasH ? '<span title="Has Heading">H</span>' : ''}
            </div>
          `).join('')}
        </td>
      </tr>
      <tr>
        <td>Keyword Density</td>
        <td>
          <table>
            <thead>
              <tr>
                <th>Keyword</th>
                <th>Frequency</th>
                <th>Percentage</th>
              </tr>
            </thead>
            <tbody>
              ${keywordDensity.map(keyword => `
                <tr>
                  <td>${keyword.keyword}</td>
                  <td>${keyword.count}</td>
                  <td>${keyword.percentage.toFixed(2)}%</td>
                </tr>
              `).join('')}
            </tbody>
          </table>
        </td>
      </tr>
    </tbody>
  `;

  hideLoadingSpinner();
  resultsContainer.innerHTML = '';
  resultsContainer.appendChild(resultsTable);
  resultsContainer.style.display = 'block';
}
