# MEDIUM BLOG

## Overview

MEDIUM BLOG is a blog application that allows users to create and update blogs. It utilizes a serverless architecture to ensure scalability and performance. The application leverages TypeScript types from an npm package for schema validation using Zod.

## Features

- **Create Blogs**: Users can create new blog posts.
- **Update Blogs**: Users can edit existing blog posts.
- **Serverless Architecture**: Built using serverless technology for better scalability and maintenance.
- **Cloudflare Workers**: Utilizes Cloudflare Workers for the serverless backend.
- **Type-Safe**: Frontend and backend import types from a shared npm package for consistent schema validation using Zod.

## Tech Stack

### Frontend

- ![React](https://img.shields.io/badge/-React-61DAFB?logo=react&logoColor=white)
- ![TypeScript](https://img.shields.io/badge/-TypeScript-3178C6?logo=typescript&logoColor=white)

### Backend

- ![Cloudflare Workers](https://img.shields.io/badge/-Cloudflare%20Workers-F38020?logo=cloudflare&logoColor=white)
- ![TypeScript](https://img.shields.io/badge/-TypeScript-3178C6?logo=typescript&logoColor=white)
- ![Hono](https://img.shields.io/badge/-Hono-000000?logo=data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDB2aWciIHZpZXdCb3g9IjAgMCAzODAgMzc2IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxzdHlsZT4uY2xzLTF7ZmlsbDojZmY4ZTAwO30uY2xzLTJ7ZmlsbDpub25lO308L3N0eWxlPjxwYXRoIGNsYXNzPSJjbHMtMSIgZD0iTTM3My4xIDBIMTIuM0M1LjIgMCAwIDUuMyAwIDEyLjR2MzUxLjZjMCA3IDUuMiAxMiAxMi4zIDEyaDM2MC44YzcuMSAwIDEyLjMtNSA5Mi0xMi4xVjEyLjNDMzg1LjQgNS4zIDM4MCAwIDM3My4xIDB6TTMwNi4yIDg3LjlIMjk0Yy05IDAtMTAgNi44LTEwIDYuOHY5M2MwIDkuNyA2LjUgMTUuMyAxMy4xIDE1LjNoMjMuM2M2LjUgMCAxMy4xLTUuNiAxMy4xLTE1LjNWNzIuMmMuMS01LjEtNC4zLTguMi0xMi4zLTguMm0tMzMuNCAxOS4ySDI2NWMtNy4zIDAtMTUuOSAzLjUtMTUuOSAxMy41VjE5OWMwIDEwLjEgOC41IDEyLjUgMTUuOSAxMi41aDEwLjNjNi4zIDAgMTUuOS0yLjMgMTUuOS0xMi41djUyLjljMCAxMC44IDguNSA4LjEgMTUuOSA4LjFoMTcuNWM2LjUgMCAxMy4xLTEuOSAxMy4xLTExLjV2LTY4LjFjMC01LjgtNC4yLTExLjUtMTIuNC0xMS41TDI3Mi44IDExNmMwIDAtMS4yIDAtMS4yLjEtMTQgMTEuMy0yOC4zIDIwLjctMjMuNSAzMC4zdi4xem0yLjMgNzguNmMtOS4zIDAtMTEuOCAxMC4yLTExLjggMTAuMXY2OS41YzAgNy44IDcuNiAxMCAxMiAxMGgxNS4zYzQuMiAwIDEwLjktMi4yIDEwLjktMTB2LTYyLjNjMC0xNC4yLTguMy0xNy43LTE3LjQtMTcuNyIvPjxwYXRoIGNsYXNzPSJjbHMtMiIgZD0iTTE4Mi4yIDM3NiA0My4yIDI5Ni41VjU5LjVsMTM5IDE4LjNMMTgyLjIgMzd2MzM5Ii8+PC9zdmc+)

### Shared

- ![Zod](https://img.shields.io/badge/-Zod-00ACD7?logo=typescript&logoColor=white) for schema validation
- Created npm package for TypeScript types(https://www.npmjs.com/package/@ethernos/medium-common)

## Installation

### Prerequisites

- Node.js
- npm or yarn

### Clone the Repository

```bash
git clone https://github.com/ethernos9/medium-blog.git
cd medium-blog

