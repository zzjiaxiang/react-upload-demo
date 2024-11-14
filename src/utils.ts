 export const fileToBlob = (file: File): string =>
  URL.createObjectURL(new Blob([file], { type: 'image/png' }));
