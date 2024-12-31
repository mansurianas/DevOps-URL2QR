FROM python:3.9

# Set up the work directory in the container
WORKDIR /usr/src/app  

# Copy the dependency files to the working directory
COPY requirements.txt ./

# Install the needed packages specified in the requirements.txt
RUN pip install --no-cache-dir -r requirements.txt

# Copy the content of local src directory to the working directory
COPY . .

# Command to run the application
CMD ["uvicorn", "main:app", "--host", "0.0.0.0", "--port", "80"]
