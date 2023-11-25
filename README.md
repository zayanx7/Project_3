# Project_3 - An interactive IMDB dashboard
<img width="1200" alt="edit" src="https://github.com/zayanx7/Project_3/assets/140313204/3adb9c62-2d96-4308-9d30-6601dfcc2eef">

Team : Kaj Kabilan , Zayan Mohammed , Temitope Ajose-adeogun , Shavez Hussain

* [Dataset](#Dataset)
* [Project Outline](#Project-outline)
* [Tools used](#Tools-used)
* [Process Overview](#Process-overview)
* [HTML](#html)
* [Home Page](#Home_page)
* [Challenges](#challenges)

## Dataset 
Utilising Kaggle’s IMDB top 1000 movies dataset, we analysed movie information for meaningful insights, potentially influencing the movie development landscape.

link: https://www.kaggle.com/datasets/harshitshankhdhar/imdb-dataset-of-top-1000-movies-and-tv-shows
<img width="700" alt="kaggle" src="https://github.com/zayanx7/Project_3/assets/140313204/a9237488-5269-4a0c-b6a0-b1141542ef78">

## Project Outline

<img width="700" alt="strucutre" src="https://github.com/zayanx7/Project_3/assets/140313204/fca65982-b2a4-471a-876c-bd58b9746983">

This project showcases our skills in HTML, Flask, Javascript, Python & SQl. The team chose to explore movie success factors using the IMDb Top 1000 dataset due to the topic's broad appeal, real-world application in the film industry, and the dataset's richness. The intersection of data science, film studies, and business strategy, along with the opportunity for interdisciplinary learning and the practical application of technical skills using Flask and HTML, further motivated the selection of this engaging and multifaceted project.

### Key Observations
We wanted to explore certain factors that could influence movie success such as:
 *Movie ratings and revenue: Understanding the financial impact of critical acclaim
 *Price and rating distribution: Exploring how pricing influences audience perception
 *Movie genre and rating distribution: Investigating the emotional engagement of different genres
 *Release date and revenue: Examining the temporal dynamics of box office success

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

Upon executing our HTML pages, this is the finalised appearance of our homepage, featuring a streamlined interface complemented by an intuitive search box for efficient data exploration. This is displayed in the [video](https://drive.google.com/file/d/1L2AB-HTnq0bFd26Xgl6fvuQnHUCFZZHe/view?usp=sharing)(https://drive.google.com/file/d/1L2AB-HTnq0bFd26Xgl6fvuQnHUCFZZHe/view?usp=sharing/view) below








