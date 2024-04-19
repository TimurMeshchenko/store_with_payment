# store_with_payment

# Настройка postgresql

sudo -u postgres psql
create database store_with_payment;
sudo -u postgres psql -d store_with_payment -f database_backups/release_plain.sql

## Запуск

sudo poetry install
sudo poetry run python -m uvicorn store.asgi:application --reload
sudo poetry run ./run_with_reload.sh
