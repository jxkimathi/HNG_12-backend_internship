# API Documentation

## GET /api/info

Returns basic information including email address, current datetime, and GitHub repository URL.

### Endpoint

`http:localhost/api/info`

### Response

Returns a JSON object with the following properties:

| Field | Type | Description |
|-------|------|-------------|
| email | string | Registered email address for HNG12 workspace |
| current_datetime | string | Current date and time in ISO 8601 format |
| github_url | string | URL to the project's GitHub repository |

### Example Response

```json
{
  "email": "judetest@gmail.com",
  "current_datetime": "2023-09-15T10:30:00.000Z",
  "github_url": "https://www.github.com/judetest/HNG_12-backend_internship"
}
```
