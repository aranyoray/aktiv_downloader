// DOM Elements
const searchInput = document.getElementById('county-search');
const resultsContainer = document.getElementById('results-container');
const emptyState = document.getElementById('empty-state');
const resultCount = document.getElementById('result-count');

// Label color mapping
const labelColors = {
    'Youth': 'bg-blue-100 text-blue-800',
    'Elderly': 'bg-purple-100 text-purple-800',
    'LGBTQ+': 'bg-pink-100 text-pink-800',
    'Disabled': 'bg-green-100 text-green-800',
    'Veterans': 'bg-red-100 text-red-800',
    'Immigrant': 'bg-yellow-100 text-yellow-800',
    'Rural Low-Income': 'bg-orange-100 text-orange-800'
};

// Impact tier color mapping
const impactColors = {
    '50–100': 'text-gray-600',
    '100–1,000': 'text-blue-600',
    '1,000–10,000': 'text-purple-600',
    '10,000–20,000': 'text-orange-600',
    '20,000+': 'text-red-600'
};

// Render a single issue card
function renderIssueCard(issue) {
    const labelColor = labelColors[issue.label] || 'bg-gray-100 text-gray-800';
    const impactColor = impactColors[issue.impact] || 'text-gray-600';

    const ideasArray = issue.ideas.split(', ').map(idea =>
        `<li class="text-xs text-gray-600">${idea}</li>`
    ).join('');

    return `
        <div class="issue-card bg-white border border-gray-200 rounded-lg p-5 mb-4">
            <div class="flex items-start justify-between mb-3">
                <span class="inline-block px-3 py-1 rounded-full text-xs font-medium ${labelColor}">
                    ${issue.label}
                </span>
                <span class="text-xs font-semibold ${impactColor}">
                    ${issue.impact} people
                </span>
            </div>

            <p class="text-gray-900 font-medium mb-3">${issue.description}</p>

            <div class="border-t border-gray-100 pt-3">
                <p class="text-xs font-medium text-gray-500 mb-2">Micro-intervention ideas:</p>
                <ul class="space-y-1">
                    ${ideasArray}
                </ul>
            </div>
        </div>
    `;
}

// Render a single county
function renderCounty(countyData) {
    const issuesHTML = countyData.issues.map(issue => renderIssueCard(issue)).join('');

    return `
        <div class="mb-8">
            <h2 class="text-2xl font-bold text-gray-900 mb-4 pb-2 border-b-2 border-gray-200">
                ${countyData.county}
            </h2>
            <div class="space-y-4">
                ${issuesHTML}
            </div>
        </div>
    `;
}

// Filter and render counties
function filterAndRender(searchTerm) {
    const normalizedSearch = searchTerm.toLowerCase().trim();

    if (normalizedSearch === '') {
        resultsContainer.innerHTML = '';
        emptyState.style.display = 'block';
        resultCount.textContent = 'Search to discover county issues';
        return;
    }

    const filtered = COUNTY_DATA.filter(county =>
        county.county.toLowerCase().includes(normalizedSearch)
    );

    emptyState.style.display = 'none';

    if (filtered.length === 0) {
        resultsContainer.innerHTML = `
            <div class="text-center py-12">
                <svg class="mx-auto h-12 w-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
                <p class="mt-4 text-gray-600">No counties found matching "${searchTerm}"</p>
                <p class="text-sm text-gray-500 mt-2">Try a different search term</p>
            </div>
        `;
        resultCount.textContent = 'No results found';
        return;
    }

    const html = filtered.map(county => renderCounty(county)).join('');
    resultsContainer.innerHTML = html;

    const issueCount = filtered.reduce((sum, county) => sum + county.issues.length, 0);
    resultCount.textContent = `Found ${filtered.length} ${filtered.length === 1 ? 'county' : 'counties'} with ${issueCount} ${issueCount === 1 ? 'issue' : 'issues'}`;
}

// Event listener
searchInput.addEventListener('input', (e) => {
    filterAndRender(e.target.value);
});

// Initialize
filterAndRender('');
