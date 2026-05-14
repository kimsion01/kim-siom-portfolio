
type FeatureCaseProps = {
  image: string;
};

const sinsangMeta = [
  {
    label: 'Role',
    value: '기획 · UI Design · Publishing · Maintenance · AI 이미지 제작',
  },
  {
    label: 'Contribution',
    value: '반응형 퍼블리싱 · CMS 입력구조 제작 · 콘텐츠 운영 개선 · 이벤트 시작/종료 일정 기반 노출 관리 기능 개선 · SEO 개선을 위한 텍스트/컴포넌트 구조 전환',
  },
  {
    label: 'Tools',
    value: 'HTML · CSS · JavaScript · jQuery · XD · Figma · Photoshop · Illustrator · ChatGPT · Claude · Higgsfield · Gemini · Nano Banana 2',
  },
];

export function FeatureCase({ image }: FeatureCaseProps) {
  return (
    <article className="feature motionDepth" data-reveal data-tilt>
      <div>
        <span className="label">Planning · Design · Publishing · Maintenance</span>
        <h3>신상성형외과 국내 홈페이지 리디자인</h3>
        <p>
          기존 사이트의 통이미지 서브페이지, 올드한 UI, 유지보수 어려움, 검색/접근성 문제를 개선하기 위해 GNB,
          병원소개, 커뮤니티, 눈성형, 안면윤곽까지 확장 가능한 구조로 리디자인했습니다.
        </p>
        <ul className="check">
          <li>통이미지 콘텐츠를 텍스트/컴포넌트 기반 구조로 개선</li>
          <li>GNB 중심 정보구조와 시술별 상세 흐름 설계</li>
          <li>상담 전환 CTA와 모바일 사용성 강화</li>
          <li>이벤트 시작일·종료일 일정에 맞춰 어드민에서 노출을 관리할 수 있도록 개선</li>
          <li>향후 SEO 개선을 고려해 통이미지 중심 콘텐츠를 텍스트/컴포넌트 기반 구조로 전환 예정</li>
        </ul>

        <dl className="featureMeta">
          {sinsangMeta.map((item) => (
            <div key={item.label}>
              <dt>{item.label}</dt>
              <dd>{item.value}</dd>
            </div>
          ))}
        </dl>
      </div>
      <div className="featureImg" data-parallax>
        {image ? <img src={image} alt="Sinsang Redesign" /> : null}
      </div>
    </article>
  );
}
