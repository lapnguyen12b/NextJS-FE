# FE
## Installation

```bash
$ npm install
```

## Running the app

```bash
$ yarn dev
```

### Docker
network:
```bash
$ docker network create <network-name>
```
Volume:
```bash
$ docker volume create <volume-name>
```
FE:
```bash
$ docker build -t hala-fe .
$ docker run -dp 8080:8080 --network hala-network <network-name> <container-service-name>
```