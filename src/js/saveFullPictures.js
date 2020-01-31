import uploadPreview from './uploadPreview';

export const arrFullPictures = {};

export async function saveFullPictures(data) {
  for (let i = 0; i < data.length; i += 1) {
    uploadPreview(data[i].id).then((result) => {
      arrFullPictures[data[i].id] = result;
    });
  }
}
