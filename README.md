# Flexin Workout API

A simple home workout api made using node.js

## Getting Started

To get started with the API, follow these steps:

1. Clone the repository to your local machine:

```bash
git clone https://github.com/loydcose/flexin-workout-api.git
```

2. Install the dependencies:

```bash
cd workout-api
npm install
```

3. Start the server:

```bash
npm run start
```

The API will now be running on `http://localhost:5000`.

## Endpoints

The API has the following endpoints:

### Get Workouts

- **Endpoint:** `/workouts`
- **Method:** `GET`
- **Description:** Retrieves workouts based on the specified parameters.
- **Query Parameters:**

  - `part` (required): Specifies the muscle group for the workouts (e.g., abs, chest, legs, arms, back).
  - `difficulty` (required): Specifies the difficulty level for the workouts (e.g., beginner, intermediate, advanced).

- **Example Usage:**

  - Retrieve workouts for beginner level abs:
    ```
    GET /workouts?part=abs&difficulty=beginner
    ```

- **Example Response:**

```json
[
  {
    "id": 1,
    "title": "Jumping Jacks",
    "image": "https://res.cloudinary.com/snapify/image/upload/flexin/jumping-jacks",
    "type": "duration",
    "longevity": 20
  },
  {
    "id": 2,
    "title": "Abdominal Crunches",
    "image": "https://res.cloudinary.com/snapify/image/upload/flexin/abdominal-crunches",
    "type": "repetition",
    "longevity": 16
  },
  {
    "id": 3,
    "title": "Russian Twist",
    "image": "https://res.cloudinary.com/snapify/image/upload/flexin/russian-twist",
    "type": "repetition",
    "longevity": 20
  }
]
```

## Contributing

If you would like to contribute to this project, please open an issue or submit a pull request with your proposed changes.

## License

This project is licensed under the MIT License.
