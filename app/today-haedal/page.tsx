
import Link from 'next/link';
import { Header } from '@/components/Header';
import { MotionProvider } from '@/components/MotionProvider';

const haedalImages = [
  '/assets/today-haedal-2023-hq/today-haedal-2023-01.jpg',
  '/assets/today-haedal-2023-hq/today-haedal-2023-02.jpg',
  '/assets/today-haedal-2023-hq/today-haedal-2023-03.jpg',
  '/assets/today-haedal-2023-hq/today-haedal-2023-04.jpg',
  '/assets/today-haedal-2023-hq/today-haedal-2023-05.jpg',
  '/assets/today-haedal-2023-hq/today-haedal-2023-06.jpg',
  '/assets/today-haedal-2023-hq/today-haedal-2023-07.jpg',
  '/assets/today-haedal-2023-hq/today-haedal-2023-08.jpg',
  '/assets/today-haedal-2023-hq/today-haedal-2023-09.jpg',
  '/assets/today-haedal-2023-hq/today-haedal-2023-10.jpg',
  '/assets/today-haedal-2023-hq/today-haedal-2023-11.jpg',
  '/assets/today-haedal-2023-hq/today-haedal-2023-12.jpg',
  '/assets/today-haedal-2023-hq/today-haedal-2023-13.jpg'
];

const overview = [
  { label: 'Year', value: '2023 Original App Design' },
  { label: 'Refinement', value: '2026 Portfolio Case Study' },
  { label: 'Scope', value: 'UI/UX · IA · Character · Design System' },
  { label: 'Output', value: 'Mobile App Screens · Flow Chart · Visual System' },
];

const flow = [
  ['Splash', '브랜드 진입'],
  ['Onboarding', '감사 루틴 안내'],
  ['Login', '간편 가입/잠금'],
  ['Main', '캘린더·오늘 카드'],
  ['Diary', '감정·날씨·감사일기'],
  ['Timeline', '기록 회고/수정'],
  ['Cards', '명언카드 선택'],
  ['More', '설정/내 정보'],
];

const screenDetails = [
  {
    title: '가입/로그인',
    desc: '개인정보 입력 부담을 줄이고, 빠르게 앱을 시작할 수 있는 구조로 화면을 구성했습니다.',
  },
  {
    title: '메인/캘린더',
    desc: '날짜별 감정 기록을 확인할 수 있도록 캘린더와 오늘의 카드를 연결했습니다.',
  },
  {
    title: '감사일기 작성',
    desc: '이모티콘, 날씨, 감정, 사진, 감사 항목을 조합해 하루를 쉽게 기록할 수 있도록 설계했습니다.',
  },
  {
    title: '타임라인/수정',
    desc: '작성한 일기를 다시 확인하고 수정할 수 있는 회고 중심의 화면을 구성했습니다.',
  },
  {
    title: '명언카드',
    desc: '하루의 힘이 되는 문장을 카드 형태로 선택하게 하여 재방문 동기를 만들었습니다.',
  },
];

export default function TodayHaedalPage() {
  return (
    <main>
      <MotionProvider />
      <Header />

      <section className="caseHero haedalHero">
        <div className="caseKicker">Today, Haedal · 2023 App Design / 2026 Case Study Refinement</div>
        <h1>감사로 마무리하는 하루,<br />오늘, 해달 앱 디자인</h1>
        <p className="lead">
          오늘, 해달은 2023년에 제작한 감정 기록·감사일기 기반 모바일 앱 디자인입니다.
          감정, 날씨, 캐릭터, 감사 기록, 타임라인, 명언카드까지 포함해 하루를 긍정적으로 회고하는 루틴을 설계했습니다.
          현재 포트폴리오에서는 2026년 기준으로 문제 정의와 UX 구조를 보강해 케이스스터디 형태로 재정리했습니다.
        </p>
        <div className="actions">
          <Link className="btn primary" href="#original">2023 원본 보기</Link>
          <Link className="btn secondary" href="#refinement">UX 보강 방향 보기</Link>
        </div>
      </section>

      <section className="section">
        <div className="haedalOverviewGrid">
          {overview.map((item) => (
            <article className="caseCard motionCard" data-reveal key={item.label}>
              <span className="caseNumber">{item.label}</span>
              <h3>{item.value}</h3>
            </article>
          ))}
        </div>
      </section>

      <section id="original" className="section">
        <div className="split" data-reveal>
          <div>
            <p className="eyebrow">Original Work</p>
            <h2>2023년에 제작한 앱 디자인 결과물</h2>
          </div>
          <p>
            아래 이미지는 실제 2023년 제작본입니다. 앱의 기획 의도, 페르소나, 플로우, 디자인 시스템,
            캐릭터, 주요 앱 화면이 모두 포함되어 있어 단순 UI 시안보다 프로젝트 완성도가 잘 드러납니다.
          </p>
        </div>

        <div className="haedalShowcaseGrid">
          {haedalImages.slice(0, 2).map((src, index) => (
            <article className="haedalShot motionCard" data-reveal key={src}>
              <img src={src} alt={`오늘, 해달 대표 이미지 ${index + 1}`} />
            </article>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="split" data-reveal>
          <div>
            <p className="eyebrow">Ideation</p>
            <h2>“매일의 감정을 스스로 돌아보고 긍정으로 성장하는 방법”</h2>
          </div>
          <p>
            오늘, 해달은 감정 기록을 무겁게 만드는 대신, 하루 동안의 작은 감정과 감사한 일을 짧게 남기는 경험을 제안합니다.
            이모티콘과 캐릭터, 선택형 입력을 활용해 사용자가 부담 없이 자신의 감정을 확인하도록 설계했습니다.
          </p>
        </div>

        <div className="caseGrid">
          <article className="caseCard motionCard" data-reveal>
            <span className="caseNumber">01 · Problem</span>
            <h3>감정 기록은 지속하기 어렵다</h3>
            <p>긴 글을 매일 써야 한다는 부담 때문에 기록 루틴이 쉽게 끊깁니다.</p>
          </article>
          <article className="caseCard motionCard" data-reveal>
            <span className="caseNumber">02 · Solution</span>
            <h3>짧게 선택하고, 나중에 회고한다</h3>
            <p>감정, 날씨, 캐릭터, 사진, 감사 항목을 선택형으로 구성해 기록 진입 장벽을 낮췄습니다.</p>
          </article>
        </div>
      </section>

      <section className="section">
        <div className="split" data-reveal>
          <div>
            <p className="eyebrow">Planning Assets</p>
            <h2>기획·페르소나·니즈·플로우까지 정리한 화면</h2>
          </div>
          <p>
            Ideation, Persona, Need & Solution, Flow chart는 오늘, 해달의 UX 의도가 가장 잘 보이는 영역입니다.
            이 부분은 포트폴리오에서 “왜 이렇게 설계했는지”를 설명하는 근거가 됩니다.
          </p>
        </div>

        <div className="haedalCaseGallery">
          {haedalImages.slice(2, 5).map((src) => (
            <article className="haedalShot wide motionCard" data-reveal key={src}>
              <img src={src} alt="오늘, 해달 기획 이미지" />
            </article>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="split" data-reveal>
          <div>
            <p className="eyebrow">Information Architecture</p>
            <h2>가입부터 기록, 회고, 설정까지 이어지는 앱 구조</h2>
          </div>
          <p>
            Splash, 온보딩, 로그인, 메인, 감사일기, 타임라인, 명언카드, 더보기까지 전체 앱 흐름을 구성했습니다.
            단일 화면이 아니라 앱 서비스 전체 구조를 고려했다는 점이 이 프로젝트의 강점입니다.
          </p>
        </div>

        <div className="flowRail extended">
          {flow.map(([title, desc]) => (
            <div className="flowNode motionCard" data-reveal key={title}>
              <strong>{title}</strong>
              <span>{desc}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="split" data-reveal>
          <div>
            <p className="eyebrow">Design System</p>
            <h2>메인 컬러, 캐릭터, 감정 요소까지 정리한 시스템</h2>
          </div>
          <p>
            블루는 안정감과 차분함, 옐로우는 감사와 긍정의 인상을 전달합니다.
            해달 캐릭터와 감정 서브 캐릭터를 함께 설계해 앱의 정서적 친밀도를 높였습니다.
          </p>
        </div>

        <div className="haedalCaseGallery">
          {haedalImages.slice(5, 8).map((src) => (
            <article className="haedalShot motionCard" data-reveal key={src}>
              <img src={src} alt="오늘, 해달 디자인 시스템" />
            </article>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="split" data-reveal>
          <div>
            <p className="eyebrow">Core Screens</p>
            <h2>가입, 기록, 타임라인, 명언카드까지 실제 화면 구성</h2>
          </div>
          <p>
            가입/로그인, 메인 캘린더, 감정 선택, 감사일기 작성, 타임라인 회고, 명언카드 선택까지 앱 사용 흐름에 맞춘 핵심 화면을 제작했습니다.
          </p>
        </div>

        <div className="grid grid3">
          {screenDetails.map((screen) => (
            <article className="projectCard motionCard" data-reveal key={screen.title}>
              <span className="label">Screen</span>
              <h3>{screen.title}</h3>
              <p>{screen.desc}</p>
            </article>
          ))}
        </div>

        <div className="haedalCaseGallery screenGallery">
          {haedalImages.slice(8, 13).map((src) => (
            <article className="haedalShot wide motionCard" data-reveal key={src}>
              <img src={src} alt="오늘, 해달 앱 화면" />
            </article>
          ))}
        </div>
      </section>

      <section id="refinement" className="section">
        <div className="insightPanel motionDepth" data-reveal data-tilt>
          <p className="eyebrow">2026 Refinement</p>
          <h2>포트폴리오용으로 보강한 UX 개선 방향</h2>
          <p>
            2023년 작업물은 감성 앱 디자인과 화면 제작 완성도가 강점입니다.
            2026년 포트폴리오에서는 실제 서비스 관점의 개선 방향을 더해 케이스스터디로 확장했습니다.
          </p>
          <div className="insightList">
            <div className="insightItem"><h3>Mood Heatmap</h3><p>누적된 감정 기록을 월간 패턴으로 보여주면 사용자가 자신의 감정 흐름을 쉽게 회고할 수 있습니다.</p></div>
            <div className="insightItem"><h3>AI Weekly Insight</h3><p>일주일간의 감사 기록과 감정 데이터를 기반으로 짧은 회고 문장과 응원 메시지를 제공할 수 있습니다.</p></div>
            <div className="insightItem"><h3>Retention Loop</h3><p>기록 → 피드백 → 명언카드 → 회고로 이어지는 루틴을 강화해 재방문 동기를 만들 수 있습니다.</p></div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="split" data-reveal>
          <div>
            <p className="eyebrow">Portfolio Value</p>
            <h2>이 프로젝트로 보여줄 수 있는 역량</h2>
          </div>
          <p>
            오늘, 해달은 캐릭터 기반 감성 UI, 모바일 앱 화면 설계, 사용 흐름 정리, 디자인 시스템, UX 개선 방향까지 함께 보여줄 수 있는 개인 프로젝트입니다.
          </p>
        </div>
        <div className="grid grid3">
          <article className="projectCard motionCard" data-reveal><span className="label">UI Design</span><h3>모바일 화면 완성도</h3><p>가입, 메인, 기록, 타임라인, 카드 선택까지 앱의 핵심 화면을 일관된 톤으로 제작했습니다.</p></article>
          <article className="projectCard motionCard" data-reveal><span className="label">UX Flow</span><h3>서비스 흐름 구조화</h3><p>사용자가 앱에 진입해 기록하고 회고하기까지의 전체 플로우를 정리했습니다.</p></article>
          <article className="projectCard motionCard" data-reveal><span className="label">Brand System</span><h3>캐릭터와 컬러 시스템</h3><p>해달 캐릭터와 감정 서브 캐릭터, 메인 컬러를 기반으로 브랜드 톤을 구성했습니다.</p></article>
        </div>
      </section>

      <section className="contact" data-reveal>
        <p className="eyebrow">Today, Haedal Case Study</p>
        <h2>2023 앱 디자인을 2026 포트폴리오형 UX 케이스로 확장했습니다.</h2>
        <Link className="btn primary" href="/">포트폴리오 홈으로</Link>
      </section>
    </main>
  );
}
