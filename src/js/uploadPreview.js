export default async function uploadPreview(id) {
  const url = `https://boiling-refuge-66454.herokuapp.com/images/${id}`;

  let data;
  try {
    const response = await fetch(url);
    data = await response.json();

    return data;
  } catch (e) {
    throw new Error(e);
  }
}
