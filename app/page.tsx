
import { AiToolCard } from '@/components/AiToolCard';
import { FeatureCase } from '@/components/FeatureCase';
import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { MotionProvider } from '@/components/MotionProvider';
import { ProjectCard } from '@/components/ProjectCard';
import { SectionHeader } from '@/components/SectionHeader';
import { aiTools, designTokens, operationalCards, projects } from '@/lib/portfolio-data';

const aiImages = ["/assets/featured/ai-archive-01.jpg", "/assets/featured/ai-archive-02.jpg", "/assets/featured/ai-archive-03.jpg", "/assets/featured/ai-archive-04.jpg"];

export default function Home() {
  return (
    <main>
      <MotionProvider />
      <Header />
      <Hero heroImage="/assets/featured/hero-ai.jpg" />


      <section className="section aboutSection">
        <SectionHeader
          eyebrow="About"
          title="운영을 이해하고, 브랜드 경험을 화면으로 구현하는 퍼블리셔"
          description="저는 단순히 화면을 만드는 것보다 실제 운영 환경에서 오래 사용할 수 있는 구조를 중요하게 생각합니다. 글로벌 사이트 유지보수, CMS 입력 구조 개선, 반응형 UI 개선, AI 기반 비주얼 제작 경험을 바탕으로 브랜드와 사용자가 만나는 디지털 접점을 설계하고 구현합니다."
        />
        <div className="grid grid3">
          <article className="projectCard motionCard" data-reveal>
            <span className="label">Front-end Publishing</span>
            <h3>운영 가능한 화면 구현</h3>
            <p>HTML, CSS, JavaScript, jQuery 기반 퍼블리싱부터 AI를 활용한 React/Next.js 프로토타입 제작과 포트폴리오 구현까지 프로젝트 목적에 맞는 화면을 구현합니다.</p>
          </article>
          <article className="projectCard motionCard" data-reveal>
            <span className="label">UI/UX & Brand</span>
            <h3>브랜드 톤을 고려한 UI</h3>
            <p>Figma, XD, Photoshop, Illustrator를 활용해 의료·뷰티·브랜드 서비스에 맞는 시각 톤과 사용 흐름을 정리합니다.</p>
          </article>
          <article className="projectCard motionCard" data-reveal>
            <span className="label">AI-assisted Workflow</span>
            <h3>AI를 실무 제작에 연결</h3>
            <p>ChatGPT, Claude, Gemini, Higgsfield, Nano Banana 2를 활용해 기획, 문구, 코드, 브랜드 비주얼 제작 속도를 높입니다.</p>
          </article>
        </div>

        <div className="systemPanel motionDepth aboutTechPanel" data-reveal data-tilt>
          <span className="label">Built with React / Next.js</span>
          <h3>AI를 활용해 React/Next.js 기반으로 컴포넌트를 분리하고, TypeScript 데이터 구조와 커스텀 motion hook을 적용한 반응형 포트폴리오를 제작했습니다.</h3>
          <p>이 포트폴리오는 단순 정적 페이지가 아니라 컴포넌트, 데이터, 모션 로직을 분리해 유지보수성과 인터랙션 완성도를 높인 구조입니다. AI를 활용해 구조화·코드 제작·디버깅 속도를 높였습니다.</p>
        </div>
      </section>

      <section id="projects" className="section">
        <SectionHeader
          eyebrow="Featured Case"
          title="문제 분석부터 리디자인, 운영 개선까지 보여줍니다."
          description="단순 결과물보다 문제를 어떻게 정의하고, 실제 운영 가능한 구조로 개선했는지를 중심으로 구성했습니다."
        />
        <FeatureCase image="/assets/featured/sinsang-redesign.jpg" />
      </section>

      <section className="section">
        <SectionHeader
          eyebrow="Operational Impact"
          title="운영 환경을 이해하고 개선한 경험"
          description="정확한 수치를 임의로 만들지 않고, 실제 수행한 운영 개선 범위와 문제 해결 경험을 기준으로 정리했습니다."
        />
        <div className="grid grid4">
          {operationalCards.map((card) => (
            <article className="card motionCard" data-reveal key={card.title}>
              <h3>{card.title}</h3>
              <p>{card.desc}</p>
            </article>
          ))}
        </div>
      </section>


      <section className="section">
        <SectionHeader
          eyebrow="SEO / Search Optimization"
          title="검색 노출과 운영 효율을 고려한 페이지 구조 개선"
          description="NANA 글로벌 홈페이지에서는 페이지별 SEO 메타태그와 콘텐츠 구조 최적화 개선을 진행했습니다. 신상성형외과 리뉴얼은 향후 SEO 개선을 고려해 통이미지 중심 콘텐츠를 텍스트/컴포넌트 기반 구조로 전환하는 방향으로 설계했습니다."
        />
        <div className="grid grid3">
          <article className="projectCard motionCard" data-reveal>
            <span className="label">NANA Global</span>
            <h3>페이지별 SEO 최적화 개선</h3>
            <p>국가별 글로벌 페이지 운영 과정에서 페이지별 메타 정보와 콘텐츠 구조를 점검하고 검색 노출에 유리한 방향으로 개선했습니다.</p>
          </article>
          <article className="projectCard motionCard" data-reveal>
            <span className="label">Sinsang Renewal</span>
            <h3>SEO 개선을 고려한 구조 전환</h3>
            <p>통이미지 중심의 서브페이지를 텍스트/컴포넌트 기반 구조로 전환해 검색 접근성, 유지보수성, 반응형 대응력을 높이는 방향으로 설계했습니다.</p>
          </article>
          <article className="projectCard motionCard" data-reveal>
            <span className="label">Publishing</span>
            <h3>운영 가능한 콘텐츠 구조</h3>
            <p>어드민 입력 구조, 이벤트 노출 일정, 페이지별 콘텐츠 수정 가능성을 함께 고려해 장기 운영에 적합한 구조를 지향했습니다.</p>
          </article>
        </div>
      </section>

      <section className="section">
        <SectionHeader
          eyebrow="Selected Works"
          title="실제 운영 경험을 먼저 보여줍니다."
          description="글로벌 운영, 관리자 기능, 성능 개선, 국가별 정책 대응까지 담았습니다."
        />
        <div className="grid grid3">
          {projects.map((project) => (
            <ProjectCard project={project} key={project.title} />
          ))}
        </div>
      </section>

      <section id="system" className="section">
        <SectionHeader
          eyebrow="Design System"
          title="감각이 아니라 규칙으로 설계합니다."
          description="타이포, 그리드, 컴포넌트, 반응형 규칙을 기준으로 운영 가능한 화면을 만듭니다."
        />
        <div className="systemPanel motionDepth" data-reveal data-tilt>
          <h3>Responsive UI System</h3>
          <p>Apple-like white/blue/#111 무드를 기준으로, 운영 가능한 웹사이트에 맞는 디자인 시스템을 구성했습니다.</p>
          <div className="grid grid4">
            {designTokens.map((token) => (
              <div className="systemToken" data-reveal key={token.title}>
                <h3>{token.title}</h3>
                <p>{token.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="ai" className="section">
        <SectionHeader
          eyebrow="AI Workflow"
          title="AI 기반 제작 역량과 실무 활용 경험"
          description="AI를 단순 이미지 생성 도구가 아니라, 기획 정리·브랜드 비주얼 제작·UI 문구 개선·코드 제작을 연결하는 실무형 제작 도구로 활용합니다."
        />
        <div className="grid grid4">
          {aiTools.map((tool) => (
            <AiToolCard tool={tool} key={tool.name} />
          ))}
        </div>
      </section>

      <section className="section">
        <SectionHeader
          eyebrow="App UI/UX Case Study"
          title="오늘, 해달 2023 앱 디자인 · 2026 리뉴얼"
          description="2023년에 제작한 감정 기록 앱 디자인을 기반으로, 2026년 포트폴리오용 UX 케이스스터디 구조로 재정리했습니다."
        />
        <div className="grid grid3">
          <article className="projectCard motionCard" data-reveal>
            <span className="label">2023 Original</span>
            <h3>감사 루틴 기반 앱 디자인</h3>
            <p>감정, 날씨, 캐릭터, 감사일기, 타임라인, 명언카드까지 포함한 모바일 앱 화면을 제작했습니다.</p>
          </article>
          <article className="projectCard motionCard" data-reveal>
            <span className="label">UX Flow</span>
            <h3>가입부터 기록, 회고까지 연결</h3>
            <p>Splash, 온보딩, 로그인, 메인, 감사일기, 타임라인, 명언카드, 더보기까지 전체 앱 흐름을 구성했습니다.</p>
          </article>
          <article className="projectCard motionCard" data-reveal>
            <span className="label">AI UX Expansion</span>
            <h3>감정 데이터 기반 회고 확장</h3>
            <p>Mood Heatmap, AI Weekly Insight 등 감정 기록 데이터를 회고 경험으로 확장할 수 있는 구조를 제안했습니다.</p>
            <a href="/today-haedal">Case Study View</a>
          </article>
        </div>
      </section>

      <section id="gallery" className="section">
        <SectionHeader
          eyebrow="AI Visual Archive"
          title="브랜드 활용 목적을 기준으로 선별한 AI 비주얼"
          description="랜딩, SNS, 홈페이지 비주얼에 활용 가능한 대표 컷 중심으로 구성했습니다."
        />
        <div className="masonry">
          {aiImages.map((src) => (
            <div className="masonryItem" data-reveal key={src}>
              <img src={src} alt="AI Visual" />
            </div>
          ))}
        </div>
      </section>

      <section className="section">
        <SectionHeader
          eyebrow="Package Design"
          title="보테지앙 패키지 디자인 · 2024"
          description="2인 공동 제작으로 참여한 건강/뷰티 제품 패키지 디자인 작업입니다."
        />
        <article className="feature motionDepth" data-reveal data-tilt>
          <div>
            <span className="label">Package Design</span>
            <h3>DalDal Slim Shake Package</h3>
            <p>제품 특성과 타깃 감성을 고려해 컬러와 패키지 비주얼 방향성 작업에 참여했습니다.</p>
          </div>
          <div className="featureImg" data-parallax>
            <img src="/assets/featured/botezien-package.jpg" alt="Botezien Package" />
          </div>
        </article>
      </section>

      <section id="contact" className="contact" data-reveal>
        <p className="eyebrow">Contact</p>
        <h2>Kim Siom · Front-end Publisher · UI/UX · AI Creative</h2>
        <p>운영을 이해하는 퍼블리셔로서, AI를 활용해 더 빠르고 완성도 높은 디지털 경험을 만들겠습니다.</p>
        <a className="btn primary" href="mailto:lpoint__@naver.com">
          lpoint__@naver.com
        </a>
      </section>

      <footer className="footer">© 2026 Kim Siom Portfolio. Built with Next.js.</footer>
    </main>
  );
}
