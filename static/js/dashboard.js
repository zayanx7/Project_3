document.addEventListener('DOMContentLoaded', function() {
    // Get data from Flask template variables
    var ratingsDistributionData = ratingsData;
    var ratingsVsRevenueData = RevenueData;
    var votesVsGenreData = votes;

    // IMDb Ratings Distribution Chart (Chart.js)
    var ratingsDistributionCtx = document.getElementById('ratingsDistributionChart').getContext('2d');
    new Chart(ratingsDistributionCtx, {
        type: 'bar',
        data: {
            labels: ratingsDistributionData.map(entry => entry.IMDB_Rating),
            datasets: [{
                label: 'Number of Movies',
                data: ratingsDistributionData.map(entry => entry.Count),
                backgroundColor: 'rgba(75, 192, 192, 0.2)',
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });

    // IMDb Ratings vs. Gross Revenue Chart (Plotly)
    var ratingsVsRevenueDiv = document.getElementById('imdb-ratings-vs-gross-revenue-chart');
    var ratingsVsRevenueTrace = {
        x: ratingsVsRevenueData.map(entry => entry.IMDB_Rating),
        y: ratingsVsRevenueData.map(entry => entry.Gross),
        mode: 'markers',
        type: 'scatter',
        marker: {color: 'rgba(255, 99, 132, 0.5)'},
        text: 'IMDb Ratings vs. Gross Revenue'
    };
    var ratingsVsRevenueLayout = {
        xaxis: {title: 'IMDb Rating'},
        yaxis: {title: 'Gross Revenue'}
    };
    Plotly.newPlot(ratingsVsRevenueDiv, [ratingsVsRevenueTrace], ratingsVsRevenueLayout);
    
    
    
    // Create a map to group data by genre
    var groupedData = {};
    votesVsGenreData.forEach(function (d) {
        if (!groupedData[d.Genre]) {
            groupedData[d.Genre] = [];
        }
        groupedData[d.Genre].push(d);
    });

    // Extract unique genres
    var genres = Object.keys(groupedData);

    // Calculate maximum number of votes for scaling
    var maxVotes = d3.max(votesVsGenreData, function (d) { return d.No_of_Votes; });

    // Set up SVG dimensions
    var margin = { top: 20, right: 20, bottom: 30, left: 70 };
    var width = 800 - margin.left - margin.right;
    var height = 300 - margin.top - margin.bottom;

    // Create SVG element
    var svg = d3.select('#votes-vs-genre-chart')  // Updated chart ID
        .append('svg')
        .attr('width', width + margin.left + margin.right)
        .attr('height', height + margin.top + margin.bottom)
        .append('g')
        .attr('transform', 'translate(' + margin.left + ',' + margin.top + ')');

    // Create scales
    var x0 = d3.scaleBand().rangeRound([0, width]).paddingInner(0.1);
    var x1 = d3.scaleBand().padding(0.05);
    var y = d3.scaleLinear().rangeRound([height, 0]);

    x0.domain(genres);
    x1.domain(Object.keys(votesVsGenreData[0])).rangeRound([0, x0.bandwidth()]);
    y.domain([0, maxVotes]);

    // Create color scale
    var color = d3.scaleOrdinal().range(d3.schemeCategory10);

    // Create grouped bars
    svg.append('g')
        .selectAll('g')
        .data(genres)
        .enter().append('g')
        .attr('transform', function (d) { return 'translate(' + x0(d) + ',0)'; })
        .selectAll('rect')
        .data(function (d) { return groupedData[d]; })
        .enter().append('rect')
        .attr('x', function (d) { return x1(d.Genre); })
        .attr('y', function (d) { return y(d.No_of_Votes); })
        .attr('width', x1.bandwidth())
        .attr('height', function (d) { return height - y(d.No_of_Votes); })
        .attr('fill', function (d) { return color(d.Genre); });

    // Add axes
    svg.append('g')
        .attr('class', 'x-axis')
        .attr('transform', 'translate(0,' + height + ')')
        .call(d3.axisBottom(x0));

    svg.append('g')
        .attr('class', 'y-axis')
        .call(d3.axisLeft(y));

    // Add legend
    var legend = svg.append('g')
        .attr('font-family', 'sans-serif')
        .attr('font-size', 10)
        .attr('text-anchor', 'end')
        .selectAll('g')
        .data(genres)
        .enter().append('g')
        .attr('transform', function (d, i) { return 'translate(0,' + i * 20 + ')'; });

    legend.append('rect')
        .attr('x', width - 19)
        .attr('width', 19)
        .attr('height', 19)
        .attr('fill', color);

    legend.append('text')
        .attr('x', width - 24)
        .attr('y', 9.5)
        .attr('dy', '0.32em')
        .attr('fill', 'white')
        .text(function (d) { return d; });
});
