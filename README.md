# Homitag-Solution

Technology Stack :
1> Node
2> Express
3> PostgreSql
4> sequelize ORM
5> Jest
6> Docker

To Run MovieService App :
  docker build -t movie-service-app . ,
  docker-compose run movie-service-app npm run migrate ,
  docker-compose up ,
  
To run the unit test for MovieService App :
  docker-compose run movie-service-app npm test

Root URL for MovieService App :
  http://localhost:5000/movies
  


To Run GenreService App :
  docker build -t genre-service-app . ,
  docker-compose run genre-service-app npm run migrate ,
  docker-compose up ,
  
To run the unit test for GenreService App :
  docker-compose run genre-service-app npm test

Root URL for GenreService App :
  http://localhost:8000/genres
