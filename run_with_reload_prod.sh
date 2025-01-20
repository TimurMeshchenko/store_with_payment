#!/bin/bash

uvicorn store.asgi:application --port 8001

