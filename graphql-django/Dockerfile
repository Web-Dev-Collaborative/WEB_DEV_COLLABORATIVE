# Use an official Python runtime as a base image
FROM python:3.5.3

# Run commands inside container
RUN apt-get update
RUN easy_install -U pip

# Set the working directory to /code
RUN mkdir /code
WORKDIR /code

# Copy the current directory contents into the container at /code
ADD . /code

# Add python requirements file
ADD requirements.txt /code/requirements.txt

# Install any needed packages specified in requirements.txt
RUN pip install -r requirements.txt

# Make port 80 available to the world outside this container
#EXPOSE 80

# Define environment variable
#ENV NAME World

# Run app.py when the container launches
#CMD ["python", "app.py"]
