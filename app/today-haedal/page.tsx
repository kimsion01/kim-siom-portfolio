const pdfImages = ["/assets/today-haedal-pdf/today-haedal-01.webp", "/assets/today-haedal-pdf/today-haedal-02.webp", "/assets/today-haedal-pdf/today-haedal-03.webp", "/assets/today-haedal-pdf/today-haedal-04.webp", "/assets/today-haedal-pdf/today-haedal-05.webp", "/assets/today-haedal-pdf/today-haedal-06.webp", "/assets/today-haedal-pdf/today-haedal-07.webp", "/assets/today-haedal-pdf/today-haedal-08.webp", "/assets/today-haedal-pdf/today-haedal-09.webp", "/assets/today-haedal-pdf/today-haedal-10.webp", "/assets/today-haedal-pdf/today-haedal-11.webp", "/assets/today-haedal-pdf/today-haedal-12.webp"];

const pageInfo = [{"title": "Overview", "desc": "2023 UI/UX 앱 디자인 프로젝트의 첫 인상과 핵심 컨셉을 보여주는 커버 화면입니다."}, {"title": "Ideation", "desc": "감사 일기와 감정 기록을 통해 작은 행복을 발견하도록 설계한 기획 배경입니다."}, {"title": "Persona & Need Solution", "desc": "사용자 페르소나와 니즈를 정의하고, 감정 기록 서비스의 문제 해결 방향을 정리했습니다."}, {"title": "Flow Chart", "desc": "온보딩부터 메인, 감사 일기, 타임라인, 더보기까지 전체 정보 구조를 설계했습니다."}, {"title": "Design System", "desc": "컬러, 타이포그래피, 아이콘, 앱 진입 화면 등 브랜드 무드와 UI 시스템을 정리했습니다."}, {"title": "Character System", "desc": "메인 캐릭터와 서브 캐릭터를 통해 감정 기록 경험을 부드럽게 전달했습니다."}, {"title": "Onboarding", "desc": "회원가입, 로그인, 비밀번호 찾기 등 시작 흐름을 직관적으로 구성했습니다."}, {"title": "Diary Writing", "desc": "캘린더, 감정 선택, 일기 작성 등 핵심 기록 플로우를 화면 중심으로 구성했습니다."}, {"title": "Timeline & Emotion Record", "desc": "작성한 일기를 타임라인에서 확인하고, 감정·날씨·감사 항목을 수정할 수 있도록 설계했습니다."}, {"title": "Fortune Card", "desc": "하루를 긍정적으로 마무리할 수 있는 명언 카드 경험을 추가했습니다."}, {"title": "Screen Mockup", "desc": "앱의 주요 화면을 한눈에 볼 수 있는 목업 구성입니다."}, {"title": "Thank You", "desc": "프로젝트 마무리 페이지입니다."}];

export default function TodayHaedalPage() {
  return (
    <main className="haedalDetail">
      <section className="haedalHero">
        <div>
          <p className="eyebrow">2023 UI/UX App Design</p>
          <h1>오늘, 해달</h1>
          <p>
            감사로 마무리하는 하루를 위한 감정 기록 앱 디자인입니다. 첨부한 PDF 원본을 기반으로
            고해상도 이미지를 다시 추출해 케이스 스터디 페이지를 선명하게 재구성했습니다.
          </p>
        </div>
        <a className="primaryLink" href="/">Back to Portfolio</a>
      </section>

      <section className="haedalSummary">
        <article>
          <span>Role</span>
          <strong>UI/UX Design · App Flow · Design System</strong>
        </article>
        <article>
          <span>Year</span>
          <strong>2023</strong>
        </article>
        <article>
          <span>Output</span>
          <strong>Persona · Flow Chart · Character · Screen Design</strong>
        </article>
      </section>

      <section className="haedalPdfGallery">
        {pdfImages.map((src, index) => (
          <article className="haedalPdfCard" key={src}>
            <div className="haedalPdfText">
              <span>{String(index + 1).padStart(2, '0')}</span>
              <h2>{pageInfo[index]?.title}</h2>
              <p>{pageInfo[index]?.desc}</p>
            </div>
            <figure className="haedalPdfFrame">
              <img src={src} alt={`오늘, 해달 ${pageInfo[index]?.title}`} loading="lazy" />
            </figure>
          </article>
        ))}
      </section>
    </main>
  );
}
