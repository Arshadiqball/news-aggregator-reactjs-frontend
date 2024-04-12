# News Aggregator Frontend & Backend

## Docker Instructions

1. Build the Docker image: `docker-compose build`.
2. Start the Docker containers: `docker-compose up -d`.
3. Run this command: `docker exec -i mysql mysql -uroot -psecret news_app < ./data/mysql.sql`
3. Make sure to run above commands outside the frontend and backend folder.
