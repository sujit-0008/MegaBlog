const config = {
  url: String(import.meta.env.VITE_APPWRITE_URL),
  dbId: String(import.meta.env.VITE_APPWRITE_DATABASE_ID),
  projectId: String(import.meta.VITE_APPWRITE_PROJECT_ID),
  collectionId: String(import.meta.VITE_APPWRITE_COLLECTION_ID),
  bucketId: String(import.meta.VITE_APPWRITE_BUCKET_ID),
};
export default config;
