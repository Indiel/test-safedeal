import galleryRendering from './galleryRendering';
import { saveFullPictures } from './saveFullPictures';

export default async function uploadPictures() {
  const url = 'https://boiling-refuge-66454.herokuapp.com/images';

  let data;
  try {
    const response = await fetch(url);
    data = await response.json();

    saveFullPictures(data);
    galleryRendering(data);
  } catch (e) {
    throw new Error(e);
  }
}
