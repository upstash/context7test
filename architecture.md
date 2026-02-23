# Architecture Overview

Our microservices architecture separates concerns into distinct, independently deployable services. Each service owns its data and exposes well-defined APIs for inter-service communication. This approach enables teams to work independently and deploy updates without affecting the entire system.

The message queue system ensures reliable communication between services. Messages are persisted to disk before being processed, guaranteeing that no data is lost even in the event of service failures or network partitions.
