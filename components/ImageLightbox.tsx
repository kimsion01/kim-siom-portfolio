'use client';

import { useEffect, useState } from 'react';

type LightboxImage = {
  src: string;
  alt: string;
};

const clickableImageSelector = [
  '.featureImg img',
  '.haedalPdfFrame img',
  '.projectImage img',
  '.aiGalleryItem img',
  '.masonryItem img',
  '.haedalShot img',
  '.haedalCaseGallery img',
  '.haedalShowcaseGrid img',
  '.caseImage img',
  '.gallery img',
].join(',');

export function ImageLightbox() {
  const [image, setImage] = useState<LightboxImage | null>(null);

  useEffect(() => {
    const onClick = (event: MouseEvent) => {
      const target = event.target as HTMLElement | null;
      if (!target) return;

      const img = target.closest(clickableImageSelector) as HTMLImageElement | null;
      if (!img) return;

      const src = img.currentSrc || img.src;
      if (!src) return;

      event.preventDefault();
      event.stopPropagation();

      setImage({
        src,
        alt: img.alt || '확대 이미지',
      });
    };

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setImage(null);
      }
    };

    document.addEventListener('click', onClick);
    document.addEventListener('keydown', onKeyDown);

    return () => {
      document.removeEventListener('click', onClick);
      document.removeEventListener('keydown', onKeyDown);
    };
  }, []);

  if (!image) return null;

  return (
    <div
      className="imageLightbox"
      role="dialog"
      aria-modal="true"
      aria-label="이미지 확대 보기"
      onClick={() => setImage(null)}
    >
      <button
        className="imageLightboxClose"
        type="button"
        aria-label="확대 이미지 닫기"
        onClick={() => setImage(null)}
      >
        ×
      </button>
      <img
        src={image.src}
        alt={image.alt}
        onClick={() => setImage(null)}
      />
    </div>
  );
}
