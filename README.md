# Project_3 - An interactive IMDB dashboard
<img width="1200" alt="edit" src="https://github.com/zayanx7/Project_3/assets/140313204/3adb9c62-2d96-4308-9d30-6601dfcc2eef">

Team : Kaj Kabilan , Zayan Mohammed , Temitope Ajose-adeogun , Shavez Hussain

* [Dataset](#Dataset)
* [Project Outline](#Project-outline)
* [Tools used](#Tools-used)
* [Process Overview](#Process-overview)
* [HTML](#html)
* [Home Page](#Homepage)
* [Challenges](#Challenges)
* [Conclusion](#Conclusion)

## Dataset 
Utilising Kaggle’s IMDB top 1000 movies dataset, we analysed movie information for meaningful insights, potentially influencing the movie development landscape.

link: https://www.kaggle.com/datasets/harshitshankhdhar/imdb-dataset-of-top-1000-movies-and-tv-shows
<img width="700" alt="kaggle" src="https://github.com/zayanx7/Project_3/assets/140313204/a9237488-5269-4a0c-b6a0-b1141542ef78">

## Project Outline

<img width="700" alt="strucutre" src="https://github.com/zayanx7/Project_3/assets/140313204/fca65982-b2a4-471a-876c-bd58b9746983">

This project showcases our skills in HTML, Flask, Javascript, Python & SQl. The team chose to explore movie success factors using the IMDb Top 1000 dataset due to the topic's broad appeal, real-world application in the film industry, and the dataset's richness. The intersection of data science, film studies, and business strategy, along with the opportunity for interdisciplinary learning and the practical application of technical skills using Flask and HTML, further motivated the selection of this engaging and multifaceted project.

### Key Observations
We wanted to explore certain factors that could influence movie success such as:
 * Movie ratings and revenue: Understanding the financial impact of critical acclaim
 * Price and rating distribution: Exploring how pricing influences audience perception
 * Movie genre and rating distribution: Investigating the emotional engagement of different genres
 * Release date and revenue: Examining the temporal dynamics of box office success

## Tools used

* HTML/CSS
* Jupyter Notebook
* Javascript (d3, leaflet)
* Flask-powered API
* SQLite

## Process Overview
 ### 1
First we pulled data from csv file and made it into dataframe using jupyter notebook and pandas.
<img width="600" alt="CSV" src="https://github.com/zayanx7/Project_3/assets/140313204/7a40b92d-ec4d-4431-8460-23d0bb78e385">

 ### 2
We extracted information from our base dataset and structure the data into a coherent DataFrame for efficient analysis. A Flask was implemented to create a robust API for seamless interaction with the IMDb Top 1000 dataset. The cleaned, updated file was then exported to SQLite and tested the database in Jupyter Notebook

<img width="700" alt="clean" src="https://github.com/zayanx7/Project_3/assets/140313204/930211de-d60a-429e-8002-369aca3f672e">

### 3
We chose Flask, a powerful web framework for Python, to not only host our cleaned dataset but also to create a seamless connection with a database. This integration allows for efficient data retrieval and manipulation. Using Javascript we could work on the interactivity of the page

<img width="700" alt="flask" src="https://github.com/zayanx7/Project_3/assets/140313204/5806db2a-f104-41a0-813c-1b104af4a53f">

## HTML 

### Designing the HTML

As shown in our [templates folder](https://github.com/zayanx7/Project_3/tree/main/templates) we have 5 HTML files: Dashboard.html, index.html, map.html , movie_details.html and search_results.html

<img width="500" alt="ht" src="https://github.com/zayanx7/Project_3/assets/140313204/04343c45-f615-4b9b-a85b-2c1d072f7974">

We added the Javascript files and HTML pages we created to tie this all in together. We then provided links in the top bar to link to the other HTML files we created

<img width="800" alt="dash" src="https://github.com/zayanx7/Project_3/assets/140313204/491ed6ce-00ca-430e-a623-0e598402ca61">

## Home Page

This is the finalised appearance of our homepage, featuring a streamlined interface complemented by an intuitive search box for efficient data exploration. This is displayed in the video below 

https://github.com/zayanx7/Project_3/assets/140313204/bd3f56f6-8bea-4dfa-9158-f13c7a1d1ccc

### Search Results

We incorporated a search bar to enhance navigation to refine what movie we are looking for. For example :
If we input “2” into the search box, it fetches all the movie titles  that has 2 in them.
if we further click on a single movie that has retrieved in the results, it will show you a shot synopsis, the release year, genre, director and runtime.

https://github.com/zayanx7/Project_3/assets/140313204/d8615a82-7827-4242-9819-3f1687ab1ebc

### Interaactive Dashboaard

1. Chart.js: IMDb Ratings Distribution
Utilising Chart.js, we crafted an insightful IMDb ratings distribution chart. This dynamic visualization showcases the distribution of movies based on their IMDb ratings, providing a comprehensive overview of the dataset.

2. Plotly: IMDb Ratings vs. Gross Revenue 
With Plotly, we delved into the correlation between IMDb ratings and Gross revenue. Our graph illuminates the relationship between these key factors, offering a nuanced understanding of how audience reception intersects with financial success.

3. D3.js: Votes vs. Ratings
Leveraging the flexibility of D3.js, we explored the intricate relationship between the number of votes and IMDb ratings. Through a meticulously designed linear chart, we visually depict the interplay between audience engagement, expressed through votes, and the perceived quality of movies.

<img width="1000" alt="board" src="https://github.com/zayanx7/Project_3/assets/140313204/0baa8e05-00e3-4840-ad82-a7f7e5e9b2c5">

We implemented a dynamic bar chart using Chart.js on the main project page. We chose a bar chart for its effectiveness in displaying comparative data and enhancing user interaction with the IMDb Top 1000 dataset.
Data trends we noticed were that majority of the movies within the dataset were rated between 7 & 8 and the numbers reduced as the ratings increased. There are less than 20 movies with a rating of 9 within this dataset

https://github.com/zayanx7/Project_3/assets/140313204/f1a576ba-1fce-4a38-8496-9d0b2cd9a268

### Data Scraping & API

Expanding our horizons, we didn't stop at Kaggle. We ventured into the realm of Box Office Mojo, scraping additional data to enrich our analysis.

<img width="600" alt="geo" src="https://github.com/zayanx7/Project_3/assets/140313204/267c905f-c36e-4522-bd18-7d3b92a7fbcb">

Geo API was used to retrieve the latitude and longitude for all the countries within the area column

https://github.com/zayanx7/Project_3/assets/140313204/db9a7091-d527-4fd1-8fc2-0b0776c2f3f7

Every pop-up marker displays the information on movie name, country and weekends Gross 

## Challenges
JavaScript Variable Issues in Dashboard.HTML:
Challenge: Dashboard. HTML couldn’t define the variables in our JavaScript file 
Consideration: To fix this, we defined the variables in the html file and called them in JavaScript

Refining Movie Details Route :
Challenge: Initially, we created a route for the movie details linked to the search bar. However, later realised that this setup would exclusively search for movies. 
Consideration: To address this limitation, we established an additional route for search results. This route queries all data matching the search criteria and presents it on a separate template named "search results”.

## Conclusion

Overall, I think we managed to have a good insight on the relationships between various factors that influence movie success such as ratings, reviews and the revenue. With the time we have been given, think the database was good enough for us to explore the dataset. But I feel with more time we could done way more.  Combining other datasets that may contain more specific details of the movies. With more time We could have also found a way to loop in updated popular movies for our api so its constantly refreshing and updating. We wish we could have done web scraping but we found that a lot of raw text and too much data that would make it difficult for us.

















