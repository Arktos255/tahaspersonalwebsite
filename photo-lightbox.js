const photoGallery = document.getElementById("photo-gallery");
const photoLightbox = document.getElementById("photo-lightbox");

if (photoGallery && photoLightbox instanceof HTMLDialogElement) {
  const photoButtons = Array.from(photoGallery.querySelectorAll(".photo-open"));
  const lightboxImage = photoLightbox.querySelector(".photo-lightbox-image");
  const closeButton = photoLightbox.querySelector(".photo-lightbox-close");
  const previousButton = photoLightbox.querySelector(".photo-lightbox-previous");
  const nextButton = photoLightbox.querySelector(".photo-lightbox-next");
  const documentRoot = document.documentElement;
  let currentPhotoIndex = 0;
  let openingButton = null;
  let previousRootOverflow = "";

  const showPhoto = (index) => {
    currentPhotoIndex = (index + photoButtons.length) % photoButtons.length;
    const photo = photoButtons[currentPhotoIndex].querySelector("img");
    lightboxImage.src = photo.currentSrc || photo.src;
    lightboxImage.alt = photo.alt;
  };

  const openPhoto = (index) => {
    openingButton = photoButtons[index];
    showPhoto(index);
    photoLightbox.showModal();
    previousRootOverflow = documentRoot.style.overflow;
    documentRoot.style.overflow = "hidden";
    closeButton.focus();
  };

  photoGallery.addEventListener("click", (event) => {
    if (!(event.target instanceof Element)) {
      return;
    }

    const button = event.target.closest(".photo-open");
    const index = photoButtons.indexOf(button);

    if (index >= 0) {
      openPhoto(index);
    }
  });

  closeButton.addEventListener("click", () => photoLightbox.close());
  previousButton.addEventListener("click", () => showPhoto(currentPhotoIndex - 1));
  nextButton.addEventListener("click", () => showPhoto(currentPhotoIndex + 1));

  photoLightbox.addEventListener("click", (event) => {
    if (event.target === photoLightbox) {
      photoLightbox.close();
    }
  });

  photoLightbox.addEventListener("close", () => {
    documentRoot.style.overflow = previousRootOverflow;
    openingButton?.focus();
    openingButton = null;
  });

  document.addEventListener("keydown", (event) => {
    if (!photoLightbox.open) {
      return;
    }

    if (event.key === "ArrowLeft") {
      event.preventDefault();
      showPhoto(currentPhotoIndex - 1);
    } else if (event.key === "ArrowRight") {
      event.preventDefault();
      showPhoto(currentPhotoIndex + 1);
    }
  });
}
