# PFA Docker - Challenge 2

Take advantage of challenge 1 that you created in PFA, the application with your favorite language, Nginx and MySQL to apply Docker Compose.

Create docker-compose.yaml with 3 services, one for each technology. You must configure the following points:

- The MySQL service should not have a custom Dockerfile, it is necessary to directly use the official MySQL image and there must be a volume to persist the database in the project, the name of the folder will be dbdata. You should use docker-entrypoint-initdb.d to already create a database and populate data in the standard database.

- The service of your favorite language should continue to list data through the WEB coming from MySQL. Before the container starts, it should check if MySQL is ready for connection, we suggest using Dockerize to do this verification.

- The Nginx service will continue to be a reverse proxy for your favorite language application and must expose port 8000 to access the application in the browser. This service should start only when your favorite language application is started and should be restarted automatically if the favorite language application is not running yet.

- MySQL and favorite language services must have a shared network that Nginx does not see and favorite language and Nginx must have a shared network that MySQL does not see.

To correct your project we will just run the command "docker-compose up", everything should already be up and available when doing this, test it a lot before sending the challenge for correction.

Have fun and good work!

## How to Run

- Simply run:
  ```sh
  docker-compose up
  ```

## Result

Open http://localhost:8000 on your preferred browser and you should see a list with some of the Full Cycle course module names.

```JSON
[
  {
    "name": "Docker"
  },
  {
    "name": "Kubernetes"
  },
  {
    "name": "RabbitMQ"
  },
  {
    "name": "Apache Kafka"
  }
]
```

<small>
Pro tip: use the <a href="https://chrome.google.com/webstore/detail/json-viewer/gbmdgpbipfallnflgajpaliibnhdgobh" rel="noopener noreferrer" target="_blank">JSON Viewer</a> web browser extension to see formatted JSON data on the browser.
</small>
