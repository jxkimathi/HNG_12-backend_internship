# Basic API Development

## Task Description

Develop a public API that returns the following information in JSON format:

- Your registered email address (used to register on the HNG12 Slack workspace).
- The current datetime as an ISO 8601 formatted timestamp.
- The GitHub URL of the project's codebase.

## Requirements

### Technology Stack

- **Programming Language/Framework**: JavaScript/TypeScript.
- **Deployment**: The API must be deployed to a publicly accessible endpoint.
- **CORS Handling**: Ensure the API handles Cross-Origin Resource Sharing (CORS) appropriately.
- **Response Format**: All responses must be in JSON format.


### Prerequisites

- Node.js installed on your system
- Git installed on your system

### Installation Steps

1. Clone the repository:

  ```bash
  git clone <repository-url>
  cd basic_api
  ```

2. Install dependencies:

  ```bash
  npm install
  ```

3. Create a `.env` file in the root directory and add:

  ```
  PORT=3000
  ```

4. Start the server:

  ```bash
  npm run dev
  ```

The API will be running at `http://localhost:3000`
