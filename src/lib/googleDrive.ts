import axios from 'axios';

const API_KEY = process.env.NEXT_PUBLIC_GOOGLE_DRIVE_API_KEY;
const FOLDER_ID = process.env.NEXT_PUBLIC_GOOGLE_DRIVE_FOLDER_ID;

const GOOGLE_DRIVE_API_URL = "https://www.googleapis.com/drive/v3/files";

interface GoogleDriveFile {
  id: string;
  name: string;
  mimeType: string;
  thumbnailLink?: string;
  src?: string;
}

export async function fetchGoogleDriveFiles(): Promise<GoogleDriveFile[]> {
  if (!API_KEY || !FOLDER_ID) {
    console.error("Google Drive API Key or Folder ID not configured.");
    return [];
  }

  try {
    const response = await axios.get(GOOGLE_DRIVE_API_URL, {
      params: {
        q: `'${FOLDER_ID}' in parents and (mimeType contains 'image/' or mimeType contains 'video/')`,
        fields: "files(id, name, mimeType, thumbnailLink)",
        key: API_KEY,
      },
    });

    return response.data.files.map((file: GoogleDriveFile) => ({
      ...file,
      src: `https://docs.google.com/uc?id=${file.id}&export=download`,
    }));
  } catch (error) {
    console.error("Error fetching files from Google Drive:", error);
    return [];
  }
}
