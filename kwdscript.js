document.querySelector('form').addEventListener('submit', e => {
	e.preventDefault();
	const url = document.querySelector('#url').value.trim();
	if (url) {
		// Show loading spinner
		showSpinner();
		// Fetch page content
		fetch(url)
			.then(res => res.text())
			.then(html => {
				// Parse HTML
				const doc = new DOMParser().parseFromString(html, 'text/html');
				// Calculate total number of keywords
				const totalKeywords = getTotalKeywords(doc);
				// Calculate page load time
				const pageLoadTime = performance.timing.loadEventEnd - performance.timing.navigationStart;
function showSpinner() {
	const spinner = document.createElement('div');
	spinner.classList.add('spinner-border');
	spinner.setAttribute('role', 'status');
	spinner.innerHTML = '<span class="sr-only">Loading...</span>';
	document.body.appendChild(spinner);
}
function getTotalKeywords(doc) {
	return doc.body.innerText.split(/\s+/).length;
}
const pageLoadTime = performance.timing.loadEventEnd - performance.timing.navigationStart;
document.querySelector('#total-keywords').textContent = totalKeywords;
document.querySelector('#page-load-time').textContent = `${pageLoadTime} ms`;
function generateTagCloud(doc) {
	const tagCloud = document.querySelector('#tag-cloud');
	const wordCounts = {};
	doc.body.innerText.split(/\s+/).forEach(word => {
		if (!stopWords.includes(word.toLowerCase())) {
			wordCounts[word] = (wordCounts[word] || 0) + 1;
		}
	});
	const sortedWords = Object.keys(wordCounts).sort((a, b) => wordCounts[b] - wordCounts[a]).slice(0, 50);
	const minCount = Math.min(...Object.values(wordCounts));
	const maxCount = Math.max(...Object.values(wordCounts));
	sortedWords.forEach(word => {
		const span = document.createElement('span');
		span.textContent = word;
		span.style.fontSize = `${normalizeSize(wordCounts[word], minCount, maxCount, 0.7, 2.2)}rem`;
		span.style.color = `hsl(${Math.floor(Math.random() * 360)}, 100%, 50%)`;
		tagCloud.appendChild(span);
	});
}
function generateTopKeywordsTable(doc) {
	const topKeywordsTable = document.querySelector('#top-keywords');
	const wordCounts = {};
	doc.body.innerText.split(/\s+/).forEach(word => {
		if (!stopWords.includes(word.toLowerCase())) {
			wordCounts[word] = (wordCounts[word] || 0) + 1;
		}
	});
	const sortedWords = Object.keys(wordCounts).sort((a, b) => wordCounts[b] - wordCounts[a]).slice(0, 10);
	sortedWords.forEach(word => {
		const row = document.createElement('tr');
		const wordCell = document.createElement('td');
		wordCell.textContent = word;
		const countCell = document.createElement('td');
		countCell.textContent = wordCounts[word];
		const titleCell = document.createElement('td');
		titleCell.textContent = doc.title.toLowerCase().includes(word.toLowerCase()) ? 'Yes' : 'No';
		const descriptionCell = document.createElement('td');
		descriptionCell.textContent = Array.from(doc.querySelectorAll('meta[name="description"]')).some(meta => meta.content.toLowerCase().includes(word.toLowerCase())) ? 'Yes' : 'No';
		const h1Cell = document.createElement('td');
		h1Cell.textContent = doc.querySelectorAll('h1').length && Array.from(doc.querySelectorAll('h1')).some(h1 => h1.innerText.toLowerCase().includes(word.toLowerCase())) ? 'Yes' : 'No';
		row.appendChild(wordCell);
		row.appendChild(countCell);
		row.appendChild(titleCell);
		row.appendChild(descriptionCell);
		row.appendChild(h1Cell);
		topKeywordsTable.appendChild(row);
	});
}
function calculateKeywordDensity(doc) {
	const densities = {};
	doc.body.innerText.split(/\s+/).forEach(word => {
		if (!stopWords.includes(word.toLowerCase())) {
			densities[word] = (densities[word] || 0) + 1;
		}
	});
	const totalWords = Object.values(densities).reduce((acc, val) => acc + val, 0);
	Object.keys(densities).forEach(word => {
		densities[word] = {
			count: densities[word],
			percentage: ((densities[word] / totalWords) * 100).toFixed(2)
		};
	});
	return densities;
}
function displayKeywordDensityTable(densities) {
	const keywordDensityTable = document.querySelector('#keyword-density');
	Object.keys(densities).sort((a, b) => densities[b].count - densities[a].count).forEach(word => {
		const row = document.createElement('tr');
		const wordCell = document.createElement('td');
		wordCell.textContent = word;
		const countCell = document.createElement('td');
		countCell.textContent = densities[word].count;
		const percentageCell = document.createElement('td');
		percentageCell.textContent = densities[word].percentage + '%';
		row.appendChild(wordCell);
		row.appendChild(countCell);
		row.appendChild(percentageCell);
		keywordDensityTable.appendChild(row);
	});
}
	document.querySelector('form').addEventListener('submit', e => {
		e.preventDefault();
		const url = document.querySelector('#url').value.trim();
		if (url) {
			showSpinner();
			fetch(url)
				.then(res => res.text())
				.then(html => {
					const doc = new DOMParser().parseFromString(html, 'text/html');
					const totalKeywords = getTotalKeywords(doc);
					const pageLoadTime = performance.timing.loadEventEnd - performance.timing.navigationStart;
					document.querySelector('#total-keywords').textContent = totalKeywords;
					document.querySelector('#page-load-time').textContent = `${pageLoadTime} ms`;
					generateTagCloud(doc);
					generateTopKeywordsTable(doc);
					const densities = calculateKeywordDensity(doc);
					displayKeywordDensityTable(densities);
				})
				.catch(err => console.error(err))
				.finally(() => {
					document.querySelector('.spinner-border').remove();
				});
		}
	});

