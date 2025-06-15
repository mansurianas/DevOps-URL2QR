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
  - **`KIND(Kubernetes in Docker)`** Deploying application to test the functionality localy using Kind Cluster. 
  - **`AWS EKS`**: Deploying the application on prodcution using AWS EKS cluster. 

- **`AWS S3`**: Provides secure storage for generated QR codes, allowing for persistent data storage and easy accessibility.

- **`Prometheus`**: Monitors container and system metrics, offering real-time insights for performance and operational monitoring.

- **`Grafana`**: Visualizes metrics collected from Prometheus and other sources, enhancing observability and aiding in performance monitoring and troubleshooting.

## Project Workflow

<div align="center">
  <img src="./Assets/DevOpsURL2QR.png.drawio.svg" alt="DevOps URL2QR Project Workflow">
</div>

## End to End CI/CD Pipeline

![CICD Pipeline](./Assets/CICD-Pipeline.png)

## Running the project locally

### Run the Backend

The Backend code exists in the `api` directory. You can run the API server locally:

1. Clone this repo

```bash
git clone <repository-url>
```

2. Make sure you are in the `api` directory

```bash
cd api
```

3. Create a virtualenv by typing in the following command:

```bash
python -m venv .venv
```

4. Install the required packages:

```bash
pip install -r requirements.txt
```

5. Create a `.env` file, and add your AWS Access and Secret key, check `.env.example` just run the below command

```bash
cp .env.example .env
```

6. Also, change the BUCKET_NAME to your S3 bucket name in `main.py`
7. Run the API server:

```bash
uvicorn main:app --reload
```

8. Your API Server should be running on port
   [ `http://localhost:8000`](http://localhost:8000)

### Run the Front-end

The front-end code exits in the `front-end-nextjs` directory. You can run the front-end server locally:

1. Make sure you are in the `front-end-nextjs` directory

```bash
cd front-end-nextjs
```

2. Install the dependencies:

```bash
npm install
```

3. Run the NextJS Server:

```bash
npm run dev
```

4. Your Front-end Server should be running on [`http://localhost:3000`](`http://localhost:3000`)

## This project is inpired by

[Rishab Kumar](https://github.com/rishabkumar7)

## Star 🌟 the project

If you like this project so far don't forget to star 🤩 the project for future reference.

## License

[MIT](./LICENSE)
