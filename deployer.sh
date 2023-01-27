#!/bin/bash

# Cloud Functions API
# Cloud Deployment Manager V2 API
# Cloud Build API
# Cloud Storage
# Cloud Logging API

# --set-env-vars FOO=bar
gcloud functions deploy $1 --region=us-central1 --project=lair-374623 --runtime=nodejs16 --source=$2 --entry-point=$3 --trigger-http --allow-unauthenticated --max-instances=1 --min-instances=1