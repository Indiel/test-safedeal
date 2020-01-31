import { arrFullPictures } from './saveFullPictures';
import submitComment from './submitComment';
import timeConverter from './timeConverter';

export default function openPreview() {
  const galleryWrapper = document.querySelector('.gallery__wrapper');
  const galleryOverlay = document.querySelector('.gallery-overlay');

  galleryWrapper.addEventListener('click', async (evt) => {
    galleryOverlay.classList.remove('visually-hidden');

    const target = evt.target.closest('.gallery__link');

    const picture = arrFullPictures[target.dataset.id];
    galleryOverlay.querySelector('.gallery-overlay__image').src = picture.url;

    const comments = galleryOverlay.querySelector('.gallery-overlay__comments');
    const commentsTemplate = galleryOverlay.querySelector('#comment-template').content;

    if (picture.comments.length > 0) {
      const fragment = new DocumentFragment();
      for (let i = 0; i < picture.comments.length; i += 1) {
        const commentsElement = commentsTemplate.cloneNode(true);

        commentsElement.querySelector('.gallery-overlay__date').textContent = timeConverter(picture.comments[i].date);
        commentsElement.querySelector('.gallery-overlay__text').textContent = picture.comments[i].text;

        fragment.append(commentsElement);
      }
      comments.append(fragment);
    }

    submitComment(target);

    galleryOverlay.querySelector('.gallery-overlay__close').addEventListener('click', () => {
      galleryOverlay.classList.add('visually-hidden');
      galleryOverlay.querySelector('.gallery-overlay__image').src = '';

      while (comments.firstChild) {
        comments.removeChild(comments.firstChild);
      }
    });
  });
}
