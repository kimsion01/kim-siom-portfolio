export function AiGalleryTabs() {
  const faceImages = [
    '/assets/ai-gallery-face/face-01.jpg',
    '/assets/ai-gallery-face/face-02.jpg',
    '/assets/ai-gallery-face/face-03.jpg',
    '/assets/ai-gallery-face/face-04.jpg',
  ];

  const fullImages = [
    '/assets/ai-gallery-full/full-01.jpg',
    '/assets/ai-gallery-full/full-02.jpg',
    '/assets/ai-gallery-full/full-03.jpg',
    '/assets/ai-gallery-full/full-04.jpg',
  ];

  return (
    <section id="gallery" className="section">
      <div className="split" data-reveal>
        <div>
          <p className="eyebrow">AI Visual Archive</p>
          <h2>AI 이미지 제작 결과물</h2>
        </div>
        <p>
          실제 SNS/홈페이지 비주얼로 활용 가능한 AI 모델 이미지를 얼굴컷과 전신컷으로 구분했습니다.
          중복 컷은 제외하고, 포트폴리오에서 퀄리티가 잘 보이는 이미지 중심으로 구성했습니다.
        </p>
      </div>

      <div className="aiTabs" data-reveal>
        <input className="tabRadio" type="radio" name="ai-gallery-tab" id="ai-face-tab" defaultChecked />
        <input className="tabRadio" type="radio" name="ai-gallery-tab" id="ai-full-tab" />

        <div className="tabRow">
          <label className="tabButton" htmlFor="ai-face-tab">얼굴컷</label>
          <label className="tabButton" htmlFor="ai-full-tab">전신컷</label>
        </div>

        <div className="aiGalleryPanel facePanel">
          <div className="aiGalleryGrid">
            {faceImages.map((src, index) => (
              <article className="aiGalleryItem motionCard" key={src}>
                <img src={src} alt={`AI 얼굴컷 ${index + 1}`} loading="lazy" />
              </article>
            ))}
          </div>
        </div>

        <div className="aiGalleryPanel fullPanel">
          <div className="aiGalleryGrid">
            {fullImages.map((src, index) => (
              <article className="aiGalleryItem motionCard" key={src}>
                <img src={src} alt={`AI 전신컷 ${index + 1}`} loading="lazy" />
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
