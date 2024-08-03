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

- React
- TypeScript

### Backend

- Cloudflare Workers
- TypeScript
- Hono

### Shared

- [Zod](https://github.com/colinhacks/zod) for schema validation
- Created npm package for TypeScript types

## Installation

### Prerequisites

- Node.js
- npm or yarn

### Clone the Repository

```bash
git clone https://github.com/ethernos9/medium-blog.git
cd medium-blog
