import { metrics } from '@/lib/portfolio-data';

export function Hero() {
  return (
    <section id="top" className="hero">
      <div className="heroContent" data-reveal>
        <div className="badge">Front-end Publisher · UI/UX · AI Creative</div>
        <h1>
          브랜드 경험을 이해하고
          <br />
          디지털 인터페이스로
          <br />
          구현합니다.
        </h1>
        <p className="lead">
          UI/UX 설계, 반응형 퍼블리싱, 글로벌 사이트 운영, CMS 구조 개선, AI 기반 비주얼 제작까지 실제 서비스
          중심으로 구현하는 Front-end Publisher 김시온입니다.
        </p>
        <div className="actions">
          <a className="btn primary" href="#projects">
            프로젝트 보기
          </a>
          <a className="btn secondary" href="#ai">
            AI Workflow 보기
          </a>
        </div>
        <div className="metrics">
          {metrics.map((metric) => (
            <div className="metric motionCard" data-reveal key={metric.label}>
              <strong>{metric.value}</strong>
              <span>{metric.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
