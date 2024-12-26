![DevOps-URL2QR Project](./Assets/DevOPs-url2qr.png)

This project focuses on creating a streamlined solution for generating QR codes from user-provided URLs. It features a user-friendly `Next.js` front end for URL input, a robust `FastAPI` backend for QR code generation, and a secure storage system for saving the generated codes.


- `Front-End Container:` User-facing website for URL input.
- `API Container:` Backend service for QR code generation.
- `Storage Container:` Secure storage for generated QR codes.



## Cloud & DevOps Practices 

- **`Docker`**: Used for containerizing the front-end (Next.js) and API (FastAPI) to ensure consistent deployment across environments.

- **`GitHub Actions`**: Implements CI/CD pipelines to automate the deployment of containers when source code changes occur.

- **`Terraform`**: Manages and provisions cloud infrastructure, specifically creating a Kubernetes cluster using Infrastructure as Code (IaC).

- **`Kubernetes`**: Orchestrates the deployment and management of containerized applications, ensuring scalability and high availability.

- **`AWS S3`**: Provides secure storage for generated QR codes, allowing for persistent data storage and easy accessibility.

- **`Amazon CloudWatch`**: Monitors container metrics, providing insights for performance and operational monitoring.

- **`Grafana`**: Enhances observability by visualizing metrics collected from the application, aiding in performance monitoring and troubleshooting.


## Project Workflow 
![CICD Pipeline]()


## Running locally

### API

The API code exists in the `api` directory. You can run the API server locally:

- Clone this repo
- Make sure you are in the `api` directory
- Create a virtualenv by typing in the following command: `python -m venv .venv`
- Install the required packages: `pip install -r requirements.txt`
- Create a `.env` file, and add your AWS Access and Secret key, check  `.env.example`
- Also, change the BUCKET_NAME to your S3 bucket name in `main.py`
- Run the API server: `uvicorn main:app --reload`
- Your API Server should be running on port `http://localhost:8000`

### Front-end

The front-end code exits in the `front-end-nextjs` directory. You can run the front-end server locally:

- Clone this repo
- Make sure you are in the `front-end-nextjs` directory
- Install the dependencies: `npm install`
- Run the NextJS Server: `npm run dev`
- Your Front-end Server should be running on `http://localhost:3000`

## Author

[Rishab Kumar](https://github.com/rishabkumar7)

## License

[MIT](./LICENSE)
