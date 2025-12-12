FROM docker.io/dspace/dspace:dspace-8.1

RUN apt-get update && \
    apt-get install -y --no-install-recommends --no-install-suggests \
    imagemagick \
    ghostscript \
    ffmpeg && \
    # Clean up the apt cache to reduce the final image size
    rm -rf /var/lib/apt/lists/*