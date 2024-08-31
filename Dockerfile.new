ARG NODE_VERSION=20.17.0

################################################################################
# Use node image for base image for all stages.
FROM node:${NODE_VERSION}-slim as base

# Set working directory for all build stages.
WORKDIR /usr/src/app

COPY . .

RUN npm ci --omit=dev

# Run the build script.
RUN npm run build

# Use production node environment by default.
ENV NODE_ENV production

# Run the application as a non-root user.
USER node

# Copy the production dependencies from the deps stage and also
# the built application from the build stage into the image.

# Expose the port that the application listens on.
EXPOSE 3000

# Run the application.
CMD npm start
