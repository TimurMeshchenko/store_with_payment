# Настройка postgresql

sudo -u postgres psql
create database store_with_payment;
sudo -u postgres psql -d store_with_payment -f database_backups/release_plain.sql

## Запуск

poetry install
poetry run python -m uvicorn store.asgi:application --reload --port 8001
poetry run ./run_with_reload.sh

# Webpack optimization

docker build -f Dockerfile.webpack -t store_webpack .
docker run --name store_webpack_container -p 8080:8080 -v ./optimized:/app/optimized -v ./webpack.config.js:/app/webpack.config.js -d store_webpack

sudo docker exec -it store_webpack_container bash
npx webpack

sudo docker stop store_webpack_container
sudo docker rm store_webpack_container
sudo docker rmi store_webpack
