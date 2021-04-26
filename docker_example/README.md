# NodeJs docker express app

## Prerequisites:
Make sure you have [docker desktop](https://www.docker.com/products/docker-desktop) installed and running.

## Instructions:

Building:
```
docker build . --tag itp-405/node-intro-example-app
```

running:
```
docker run --name itp-405-node-intro -p 8000:8000 -d itp-405/node-intro-example-app
```

list all the running containers:
```
docker container ls
```

getting container logs:
```
docker logs -f <CONTAINER_ID>
```

stopping:
```
docker container stop <CONTAINER_ID>
```

removing stopped containers:
```
docker container prune
```
