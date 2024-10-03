declare interface MediaItem {
  id: string;
  description: string;
  productUrl: string;
  baseUrl: string;
  mimeType: string;
  mediaMetadata: MediaMetadata;
  contributorInfo: ContributorInfo;
  filename: string;
}

declare interface MediaMetadata {
  creationTime: string;
  width: string;
  height: string;
  photo?: Photo;
  video?: Video;
}

declare interface Photo {
  cameraMake: string;
  cameraModel: string;
  focalLength: number;
  apertureFNumber: number;
  isoEquivalent: number;
  exposureTime: string;
}

declare interface Video {
  cameraMake: string;
  cameraModel: string;
  fps: number;
  status: VideoProcessingStatus;
}

declare enum VideoProcessingStatus {
  UNSPECIFIED = "UNSPECIFIED",
  PROCESSING = "PROCESSING",
  READY = "READY",
  FAILED = "FAILED",
}

declare interface ContributorInfo {
  profilePictureBaseUrl: string;
  displayName: string;
}
