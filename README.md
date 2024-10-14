```markdown
## NODE CACHE
`node-cache` is a simple in-memory caching library for Node.js. It allows you to temporarily store frequently used data to speed up requests and reduce load on databases or other external sources.

## Use Cases
- **Reduce the number of calls** to a database or API.
- **Speed up** request processing, especially for frequently used data.
- **Temporarily cache** results of complex calculations.

## Installation
To install `node-cache`, run:
```bash
npm install node-cache
```
## Key Parameters
- **`stdTTL`** – Time-to-live (in seconds) for each cache entry.
- **`checkperiod`** – Period to check for expired entries.

`node-cache` stores cached data **in the RAM** of the Node.js process. This means that:
1. **Data is only available during execution** of the program.
2. **Data loss occurs on restart** — once the process ends or the server restarts, cached data is lost.

## How to access cached data?
- **`get`** – Retrieve the value by key.
- **`keys`** – Get all keys in the cache.
- **`mget`** – Retrieve multiple values by multiple keys.
- **`data` (internal property)** – An object containing all cached data.

```markdown
## MEMCACHED  
**Memcached** is an **open-source, high-performance, distributed memory caching system**. It stores data and objects in **RAM** to reduce the time it takes to retrieve data from a database or API, improving the performance of web applications.

## Use Cases
- **Key-value store**: Stores data as key-value pairs.
- **In-memory caching**: All data is stored in **RAM**, making reads and writes extremely fast.
- **Distributed system**: Can run on multiple servers, supporting horizontal scaling.
- **Volatile storage**: Data is **not persistent**; it will be lost if the server restarts.

## How to Use Memcached

### 1. Run Memcached using Docker
You can quickly start a Memcached server using the following Docker command:

```bash
docker run -d --name memcached-server -p 11211:11211 memcached:latest
```

### 2. Set Up a Memcached Client in Node.js
Install the Memcached client library for Node.js:

```bash
npm install memcached
```

```javascript
const Memcached = require('memcached');
const memcached = new Memcached('localhost:11211');
```
```markdown
## IOREDIS  
**ioredis** is a powerful Node.js client for **Redis**, a fast, in-memory key-value store. It supports Redis features like **pub/sub**, **clusters**, and **pipelines**, making it suitable for caching, real-time applications, and more.

## Key Features of ioredis  
- **Support for Redis clusters**: Works with Redis clusters for high availability.  
- **Pub/Sub**: Enables message publishing and subscribing between services.  
- **Pipelines**: Allows batching of multiple commands to improve performance.  
- **Promises & Callbacks**: Supports both for asynchronous operations.

## Installation  
Install ioredis via npm:

```bash
npm install ioredis
```

## Basic Setup
```javascript
const Redis = require('ioredis');
const redis = new Redis(); // Connects to Redis on localhost:6379 by default
```

## Key Configuration Options
- **`host`**: Redis server hostname (default: `localhost`).
- **`port`**: Redis server port (default: `6379`).
- **`password`**: Password for Redis authentication.
- **`tls`**: Use TLS for secure connections (if required).

Example with custom config:
```javascript
const redis = new Redis({
  host: 'redis-server',
  port: 6380,
  password: 'your_password',
  tls: {},
});
```

## Running Redis with Docker
Start Redis with Docker:

```bash
docker run -d --name redis-server -p 6379:6379 redis:latest
```
