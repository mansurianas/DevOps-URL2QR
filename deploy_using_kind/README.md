# Deploying QR Code Application with Kind

This guide walks through deploying the QR code application locally using Kind (Kubernetes IN Docker).

## Prerequisites

- [Docker](https://docs.docker.com/get-docker/) installed
- [Kind](https://kind.sigs.k8s.io/docs/user/quick-start/#installation) installed
- [kubectl](https://kubernetes.io/docs/tasks/tools/install-kubectl/) installed

## Setup Kind Cluster

```bash
# Create a Kind cluster
kind create cluster --name qr-app

# Verify the cluster is running
kubectl cluster-info --context kind-qr-app
```

## Deploy the Application

1. **Clone the repository with Kubernetes manifests**

2. **Apply the ConfigMap first**

```bash
kubectl apply -f Kubernetes/frontend-config.yaml
```

3. **Deploy backend services**

```bash
kubectl apply -f Kubernetes/backend.yaml
```

4. **Deploy frontend services**

```bash
kubectl apply -f Kubernetes/frontend.yaml
```

5. **Verify deployments and pods are running**

```bash
kubectl get deployments
kubectl get pods
kubectl get services
```

## Access the Application Locally

Since we're using Kind, we need to forward ports to access our services:

```bash
# For the frontend service (port 80 in the service maps to 3000 in the container)
kubectl port-forward svc/qr-frontend-service 8080:80
```

Now you can access the frontend at http://localhost:8080

## Troubleshooting

### Check logs

```bash
# Check frontend logs
kubectl logs -l app=qr-frontend

# Check backend logs
kubectl logs -l app=qr-backend
```

### Verify connectivity

```bash
# Start a debug pod
kubectl run -it --rm debug --image=curlimages/curl -- sh

# Test backend connectivity from within the cluster
curl http://qr-backend-service:8000

# Exit the debug pod
exit
```

### Common Issues and Solutions

#### "Broken pipe" errors during port forwarding
If you see errors like `write: broken pipe` during port forwarding:
```
E0518 08:46:06.749641 13534 portforward.go:385] "Unhandled Error" err="error copying from remote stream to local connection: readfrom tcp6 [::1]:3000->[::1]:42660: write tcp6 [::1]:3000->[::1]:42660: write: broken pipe"
```

Try these solutions:
1. Use a different local port: `kubectl port-forward svc/qr-frontend-service 8080:80`
2. Specify the address explicitly: `kubectl port-forward svc/qr-frontend-service 8080:80 --address 0.0.0.0`
3. Restart the port-forward if it disconnects

#### Frontend can't connect to backend
If the frontend can access its UI but API calls to the backend fail:

1. Verify both pods are running:
```bash
kubectl get pods
```

2. Check that the backend service is properly defined:
```bash
kubectl describe service qr-backend-service
```

3. Test backend connectivity from within the cluster:
```bash
kubectl exec -it deploy/qr-frontend -- curl http://qr-backend-service:8000
```

4. If needed, port-forward the backend service too for direct testing:
```bash
kubectl port-forward svc/qr-backend-service 8000:8000
```

## Cleanup

```bash
# Delete the Kind cluster when done
kind delete cluster --name qr-app
```
