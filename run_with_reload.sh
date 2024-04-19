#!/bin/bash

# Function to restart Gunicorn
restart_gunicorn() {
    echo "Restarting Gunicorn..."
    pkill -f uvicorn
    uvicorn store.asgi:application &
}

# Start Gunicorn
uvicorn store.asgi:application &

# Watch for changes in the project directory and restart Gunicorn when necessary
while inotifywait -r -e modify,move,create,delete /home/deb/Python/pet_projects/store_with_payment; do 
    restart_gunicorn
done