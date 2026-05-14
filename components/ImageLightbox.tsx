'use client';

import { useEffect, useRef, useState } from 'react';

type LightboxImage = {
  src: string;
  alt: string;
};

type LightboxMode = 'fit' | 'actual';

const clickableImageSelector = [
  '.featureImg img',
  '.projectImage img',
  '.aiGalleryItem img',
  '.masonryItem img',
  '.haedalShot img',
  '.haedalCaseGallery img',
  '.haedalShowcaseGrid img',
  '.caseImage img',
  '.gallery img',
].join(',');

const clampZoom = (value: number) => Math.min(3, Math.max(0.5, value));

export function ImageLightbox() {
  const [image, setImage] = useState<LightboxImage | null>(null);
  const [mode, setMode] = useState<LightboxMode>('fit');
  const [zoom, setZoom] = useState(1);
  const [naturalSize, setNaturalSize] = useState({ width: 0, height: 0 });
  const viewportRef = useRef<HTMLDivElement | null>(null);

  const closeLightbox = () => {
    setImage(null);
    setMode('fit');
    setZoom(1);
    setNaturalSize({ width: 0, height: 0 });
  };

  const openLightbox = (nextImage: LightboxImage) => {
    setImage(nextImage);
    setMode('fit');
    setZoom(1);
    setNaturalSize({ width: 0, height: 0 });
  };

  const toggleMode = () => {
    setMode((currentMode) => (currentMode === 'fit' ? 'actual' : 'fit'));
    setZoom(1);
  };

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

      openLightbox({
        src,
        alt: img.alt || '확대 이미지',
      });
    };

    document.addEventListener('click', onClick);

    return () => {
      document.removeEventListener('click', onClick);
    };
  }, []);

  useEffect(() => {
    if (!image) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [image]);

  useEffect(() => {
    if (!image) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        closeLightbox();
      }

      if (event.key === '0') {
        setMode('fit');
        setZoom(1);
      }

      if (event.key === '+' || event.key === '=') {
        setMode('actual');
        setZoom((currentZoom) => clampZoom(currentZoom + 0.25));
      }

      if (event.key === '-' || event.key === '_') {
        setMode('actual');
        setZoom((currentZoom) => clampZoom(currentZoom - 0.25));
      }
    };

    document.addEventListener('keydown', onKeyDown);

    return () => {
      document.removeEventListener('keydown', onKeyDown);
    };
  }, [image]);

  useEffect(() => {
    if (mode !== 'actual') return;

    requestAnimationFrame(() => {
      const viewport = viewportRef.current;
      if (!viewport) return;
      viewport.scrollLeft = Math.max(0, (viewport.scrollWidth - viewport.clientWidth) / 2);
      viewport.scrollTop = 0;
    });
  }, [mode, zoom, naturalSize.width, image]);

  if (!image) return null;

  const isActualMode = mode === 'actual';
  const zoomLabel = `${Math.round(zoom * 100)}%`;
  const imageStyle =
    isActualMode && naturalSize.width
      ? { width: `${Math.round(naturalSize.width * zoom)}px` }
      : undefined;

  return (
    <div
      className={`imageLightbox ${isActualMode ? 'isActualSize' : 'isFitSize'}`}
      role="dialog"
      aria-modal="true"
      aria-label="이미지 확대 보기"
    >
      <div className="imageLightboxTopbar">
        <div>
          <strong>이미지 확대 보기</strong>
          <span>
            {naturalSize.width ? `${naturalSize.width} × ${naturalSize.height}px` : '이미지를 불러오는 중입니다'}
          </span>
        </div>
        <div className="imageLightboxControls" aria-label="이미지 보기 옵션">
          <button type="button" onClick={toggleMode}>
            {isActualMode ? '화면 맞춤' : '원본 크기'}
          </button>
          <button
            type="button"
            onClick={() => {
              setMode('actual');
              setZoom((currentZoom) => clampZoom(currentZoom - 0.25));
            }}
            disabled={!isActualMode || zoom <= 0.5}
            aria-label="이미지 축소"
          >
            −
          </button>
          <span>{isActualMode ? zoomLabel : 'Fit'}</span>
          <button
            type="button"
            onClick={() => {
              setMode('actual');
              setZoom((currentZoom) => clampZoom(currentZoom + 0.25));
            }}
            disabled={!isActualMode || zoom >= 3}
            aria-label="이미지 확대"
          >
            +
          </button>
          <button className="imageLightboxClose" type="button" aria-label="확대 이미지 닫기" onClick={closeLightbox}>
            ×
          </button>
        </div>
      </div>

      <div
        className="imageLightboxViewport"
        ref={viewportRef}
        onClick={(event) => {
          if (event.target === event.currentTarget) closeLightbox();
        }}
      >
        <div className="imageLightboxCanvas">
          <img
            src={image.src}
            alt={image.alt}
            style={imageStyle}
            onLoad={(event) => {
              setNaturalSize({
                width: event.currentTarget.naturalWidth,
                height: event.currentTarget.naturalHeight,
              });
            }}
            onClick={(event) => {
              event.preventDefault();
              event.stopPropagation();
              toggleMode();
            }}
          />
        </div>
      </div>

      <p className="imageLightboxGuide">
        이미지를 한 번 더 클릭하면 원본 크기와 화면 맞춤이 전환됩니다. 원본 크기에서는 스크롤로 전체 이미지를 확인할 수 있습니다.
      </p>
    </div>
  );
}
