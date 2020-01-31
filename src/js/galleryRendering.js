import openPreview from './openPreview';

export default function galleryRendering(data) {
  const galleryWrapper = document.querySelector('.gallery__wrapper');
  const fragment = new DocumentFragment();

  for (let i = 0; i < data.length; i += 1) {
    const galleryLink = document.createElement('a');
    galleryLink.className = 'gallery__link';
    galleryLink.tabIndex = '0';
    galleryLink.dataset.id = data[i].id;

    const temperatureIcon = document.createElement('img');
    temperatureIcon.className = 'gallery__image';
    temperatureIcon.src = `${data[i].url}`;

    galleryLink.append(temperatureIcon);
    fragment.append(galleryLink);
  }

  galleryWrapper.append(fragment);

  openPreview();
}
