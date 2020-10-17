#!/bin/bash 

echo "Waiting for mongodb..."

while ! nc -z $MONGODB_HOST $MONGODB_PORT; do
  sleep 0.1
done

echo "MongoDB started"

#TODO: Insert any migration/bootstrap script

exec "$@"
