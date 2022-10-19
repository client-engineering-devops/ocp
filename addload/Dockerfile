# https://catalog.redhat.com/software/containers/ubi8/nodejs-14-minimal/6065b8e1b92fbda3a4c65d91?architecture=s390x 
# First stage builds the application
FROM registry.redhat.io/rhel8/nodejs-16 as builder

# Add application sources
ADD app-src $HOME

# Install the dependencies
RUN npm install

# Second stage copies the application to the minimal image
FROM registry.redhat.io/ubi8/nodejs-16-minimal

# Copy the application source and build artifacts from the builder image to this one
COPY --from=builder $HOME $HOME

# Run script uses standard ways to run the application
CMD npm run -d start
