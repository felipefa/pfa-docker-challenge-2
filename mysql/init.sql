CREATE DATABASE pfa_docker;

USE pfa_docker;

CREATE TABLE IF NOT EXISTS modules (name VARCHAR(255));

INSERT INTO modules (name) VALUES ('Docker');
INSERT INTO modules (name) VALUES ('Kubernetes');
INSERT INTO modules (name) VALUES ('RabbitMQ');
INSERT INTO modules (name) VALUES ('Apache Kafka');
