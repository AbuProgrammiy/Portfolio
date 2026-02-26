export interface WorkModel {
  name?: string;
  imageUrls?: string[];
  extendedDescription?: string;
  duration?: {
    start?: Date | string,
    end?: Date | string;
  };
}