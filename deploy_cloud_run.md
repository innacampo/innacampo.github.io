# Authenticate with Google Cloud
gcloud auth login

# Set your project ID
export PROJECT_ID=your-project-id
gcloud config set project $PROJECT_ID

# Enable necessary services
gcloud services enable run.googleapis.com \
    artifactregistry.googleapis.com \
    cloudbuild.googleapis.com \
    secretmanager.googleapis.com

# Create the secret for API Key
# Replace YOUR_GEMINI_API_KEY with your actual key
echo -n "YOUR_GEMINI_API_KEY" | gcloud secrets create gemini-api-key --data-file=-

# Build the container image using Cloud Build
gcloud builds submit --tag gcr.io/$PROJECT_ID/portfolio

# Deploy to Cloud Run
gcloud run deploy portfolio \
    --image gcr.io/$PROJECT_ID/portfolio \
    --platform managed \
    --region us-central1 \
    --allow-unauthenticated \
    --set-secrets="GEMINI_API_KEY=gemini-api-key:latest"

# Your URL will be displayed in the output!
