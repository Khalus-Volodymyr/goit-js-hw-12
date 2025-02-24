export function imageTemplate(image) {
  const {
    webformatURL,
    largeImageURL,
    tags,
    likes,
    views,
    comments,
    downloads,
  } = image;

  return `<li class="gallery__item">
          <a href="${largeImageURL}" class="gallery__link"> 
            <img src="${webformatURL}" alt="${tags}" class="gallery__image" />
          </a>
          <div class="stats">
            <div class="stats-item">
              <p class="stats-text">Likes</p>
              <p class="stats-number">${likes}</p>
            </div>
            <div class="stats-item">
              <p class="stats-text">Views</p>     
              <p class="stats-number">${views}</p>
            </div>
            <div class="stats-item">
              <p class="stats-text">Comments</p>  
              <p class="stats-number">${comments}</p>
            </div>
            <div class="stats-item">
              <p class="stats-text">Downloads</p>
              <p class="stats-number">${downloads}</p>
            </div>
          </div>
        </li>`;
}

export function imagesTemplate(images) {
  return images.map(imageTemplate).join('');
}
