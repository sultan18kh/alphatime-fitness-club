export function getImagePath(image: string | null) {
  if (!image) return null;
  return image.startsWith("/") ? image : `/${image}`;
}
