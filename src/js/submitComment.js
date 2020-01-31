export default function submitComment(target) {
  const btnSubmitComment = document.querySelector('.gallery-overlay__form-submit');

  btnSubmitComment.addEventListener('click', (evt) => {
    evt.preventDefault();

    const xhr = new XMLHttpRequest();
    xhr.responseType = 'json';
    xhr.open('POST', `https://boiling-refuge-66454.herokuapp.com/images/${target.dataset.id}/comments`);

    xhr.send(document.forms.comment[1].value);
  });
}
