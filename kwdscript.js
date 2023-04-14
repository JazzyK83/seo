const form = document.querySelector('form');
const results = document.querySelector('#results');

form.addEventListener('submit', async (event) => {
  event.preventDefault();
  const url = form.elements['page-url'].value;
  const data = await fetchKeywordData(url);
  displayKeywordData(data);
});

async function fetchKeywordData(url) {
  const response = await fetch(`https://api.urlmeta.org/?url=${encodeURIComponent(url)}`);
  const meta = await response.json();
  const text = meta.content.text;
  const keywords = extractKeywords(text);
  const density = calculateKeywordDensity(text, keywords);
  return {
    totalKeywords: keywords.length,
    tagCloud: keywords,
    topKeywords: calculateTopKeywords(density),
    keywordDensity: density,
  };
}

function extractKeywords(text) {
  // Extract all words from the text and remove common stopwords
  const words = text.toLowerCase().split(/[^\w]+/).filter(word => !stopwords.includes(word));
  // Count the frequency of each word and sort by descending frequency
  const frequency = {};
  words.forEach(word => frequency[word] = (frequency[word] || 0) + 1);
  return Object.entries(frequency).sort((a, b) => b[1] - a[1]);
}

function calculateKeywordDensity(text, keywords) {
  // Calculate the frequency and percentage of each keyword within the text
  const wordCount = text.toLowerCase().split(/[^\w]+/).length;
  const density = {};
  keywords.forEach(([word, count]) => {
    const frequency = count / wordCount;
    const percentage = (frequency * 100).toFixed(2);
    density[word] = { frequency, percentage };
  });
  // Separate the keywords into different categories based on word count
  const categorized = { 'one-word': [], 'two-word': [], 'three-word': [], 'four-word': [] };
  keywords.forEach(([word]) => {
    const wordCount = word.split(' ').length;
    categorized[`${wordCount}-word`].push(word);
  });
  // Calculate the frequency and percentage for each category
  Object.entries(categorized).forEach(([category, words]) => {
    const count = words.reduce((total, word) => total + density[word].frequency, 0);
    const percentage = (count * 100).toFixed(2);
    categorized[category] = { frequency: count, percentage };
  });
  return categorized;
}

function calculateTopKeywords(density) {
  // Get the top 10 keywords by frequency and add indicators for title, description, and H* tags
  const topKeywords = density['one-word'].slice(0, 10).map(word => {
    const title = document.title.toLowerCase().includes(word);
    const description = document.querySelector('meta[name="description"]')?.content?.toLowerCase().includes(word) || false;
    const headings = Array.from(document.querySelectorAll('h1, h2, h3, h4, h5, h6')).some(heading => heading.textContent.toLowerCase().includes(word));
    return { word, count: density[word].frequency, title, description, headings };
  });
  return topKeywords;
}

function displayKeywordData(data) {
  // Clear any previous results and create new HTML elements for the results
  results.innerHTML = '';
  const title = document.createElement('h2');
  title.textContent = `Keyword Density Results for ${document.title}`;
  const totalKeywords = document.createElement('p');
  totalKeywords.textContent = `Total number of keywords: ${data.totalKeywords}`;
  const tagCloud = document.createElement('div');
    tagCloud.classList.add('tag-cloud');
  data.tagCloud.slice(0, 20).forEach(([word, count]) => {
    const tag = document.createElement('span');
    tag.textContent = `${word} (${count})`;
    tag.style.fontSize = `${10 + count}px`;
    tagCloud.appendChild(tag);
  });
  const topKeywords = document.createElement('div');
  topKeywords.classList.add('top-keywords');
  const headings = ['Word', 'Frequency', 'Title', 'Description', 'Headings'];
  const headingRow = document.createElement('div');
  headingRow.classList.add('heading-row');
  headings.forEach(heading => {
    const cell = document.createElement('div');
    cell.textContent = heading;
    headingRow.appendChild(cell);
  });
  topKeywords.appendChild(headingRow);
  data.topKeywords.forEach(({ word, count, title, description, headings }) => {
    const row = document.createElement('div');
    row.classList.add('data-row');
    const wordCell = document.createElement('div');
    wordCell.textContent = word;
    row.appendChild(wordCell);
    const countCell = document.createElement('div');
    countCell.textContent = count.toFixed(2);
    row.appendChild(countCell);
    const titleCell = document.createElement('div');
    titleCell.textContent = title ? '✓' : '✗';
    row.appendChild(titleCell);
    const descriptionCell = document.createElement('div');
    descriptionCell.textContent = description ? '✓' : '✗';
    row.appendChild(descriptionCell);
    const headingsCell = document.createElement('div');
    headingsCell.textContent = headings ? '✓' : '✗';
    row.appendChild(headingsCell);
    topKeywords.appendChild(row);
  });
  const keywordDensity = document.createElement('div');
  keywordDensity.classList.add('keyword-density');
  const categoryHeadings = ['Keyword Category', 'Frequency', 'Percentage'];
  const categoryHeadingRow = document.createElement('div');
  categoryHeadingRow.classList.add('heading-row');
  categoryHeadings.forEach(heading => {
    const cell = document.createElement('div');
    cell.textContent = heading;
    categoryHeadingRow.appendChild(cell);
  });
  keywordDensity.appendChild(categoryHeadingRow);
  Object.entries(data.keywordDensity).forEach(([category, { frequency, percentage }]) => {
    const row = document.createElement('div');
    row.classList.add('data-row');
    const categoryCell = document.createElement('div');
    categoryCell.textContent = category.replace('-', ' ');
    row.appendChild(categoryCell);
    const frequencyCell = document.createElement('div');
    frequencyCell.textContent = frequency.toFixed(2);
    row.appendChild(frequencyCell);
    const percentageCell = document.createElement('div');
    percentageCell.textContent = `${percentage}%`;
    row.appendChild(percentageCell);
    keywordDensity.appendChild(row);
  });
  results.appendChild(title);
  results.appendChild(totalKeywords);
  results.appendChild(tagCloud);
  results.appendChild(topKeywords);
  results.appendChild(keywordDensity);
}
