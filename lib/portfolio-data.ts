
export type Project = {
  label: string;
  title: string;
  desc: string;
  href?: string;
  role?: string;
  contribution?: string;
  tools?: string;
  platform?: string;
  image?: string;
};

export type AiTool = {
  name: string;
  category: 'Planning' | 'Visual' | 'Development';
  icon: string;
  desc: string;
};

export type ImpactCard = {
  title: string;
  desc: string;
};

export type RoleScope = {
  title: string;
  scope: string;
  desc: string;
};

export type ImplementationCard = {
  title: string;
  desc: string;
};

export type WorkflowStep = {
  step: string;
  title: string;
  desc: string;
};

export const metrics = [
  { value: '7', label: '글로벌 사이트 1인 운영' },
  { value: '100%', label: 'CMS 기반 유지보수' },
  { value: '1인', label: '이벤트 DB 폼 제작' },
  { value: 'AI', label: '실무 콘텐츠 적용' },
];

export const projects: Project[] = [
  {
    label: 'App UI/UX Case Study · 2023 / 2026',
    title: '오늘, 해달 앱 디자인 · UX 케이스스터디',
    desc: '2023년에 제작한 감정 기록·감사일기 앱 디자인을 2026년 포트폴리오용 UX 케이스스터디로 재정리했습니다. 기획, 페르소나, 플로우, 디자인 시스템, 모바일 화면, AI 기반 UX 확장 방향까지 함께 보여줍니다.',
    role: 'UI/UX 디자인 · 앱 기획 · 케이스스터디 정리',
    contribution: '모바일 앱 화면 설계 · 캐릭터/감정 시스템 구성 · UX Flow 정리 · 포트폴리오용 케이스스터디 보강',
    tools: 'Figma · Photoshop · Illustrator · React · Next.js · ChatGPT',
    platform: 'Personal App UI/UX Project',
    href: '/today-haedal',
    image: '/assets/today-haedal-2023-hq/today-haedal-2023-01.jpg',
  },
  {
    label: 'Global Platform · 2024 — 2026',
    title: 'NANA 성형외과 글로벌 홈페이지',
    desc: 'EN, JP, CN, TH, MN, ID, VN 7개국 글로벌 사이트를 1인으로 유지보수하며 이벤트/서브페이지 제작, DB 저장 폼, 국가별 운영 정책 대응, SEO 개선을 진행했습니다.',
    role: '기획 보조 · UI 리디자인 · 반응형 퍼블리싱 · 이미지 최적화 · 유지보수 · DB 저장 제작 · CMS 개선 · SEO 개선',
    contribution: '글로벌 사이트 7개국 운영 · 이벤트 신청 DB 폼 제작 · 페이지별 SEO 메타태그/콘텐츠 구조 개선 · 국가별 운영 이슈 대응',
    tools: 'HTML · CSS · JavaScript · jQuery · XD · Photoshop · Illustrator · ChatGPT · Claude · Gemini',
    platform: '그누보드 · 카페24 기반',
    href: 'https://en.nanahospital.com',
  },
  {
    label: 'JP Website · 2025',
    title: 'NANA 일본 이벤트/서브페이지 제작',
    desc: '일본 사이트 이벤트 랜딩, 상담 전환형 DB 입력폼, 신규 서브페이지를 제작하고 반응형 구조와 운영 가능한 입력 구조를 함께 개선했습니다.',
    role: '기획 보조 · UI 리디자인 · 반응형 퍼블리싱 · 이미지 최적화 · 유지보수 · DB 저장 제작 · CMS 개선 · SEO 개선',
    contribution: '이벤트 랜딩 제작 · DB 입력폼 제작 · 신규 서브페이지 구축 · 상담 전환 CTA 및 콘텐츠 운영 개선',
    tools: 'HTML · CSS · JavaScript · jQuery · XD · Photoshop · Illustrator · ChatGPT · Claude · Gemini',
    platform: '그누보드 · 카페24 기반',
    href: 'https://jp.nanahospital.com/page/breast_event04',
  },
  {
    label: 'CMS/Admin · 2022 — 2026',
    title: 'CMS/어드민 콘텐츠 입력 구조 개선',
    desc: '관리자가 사진과 문구만 입력해 콘텐츠를 등록할 수 있도록 CMS/어드민 입력 항목을 제작하고 운영 반복 업무를 줄였습니다.',
    role: '기획 보조 · UI 개선 · 반응형 퍼블리싱 · 유지보수 · CMS 개선',
    contribution: 'CMS 입력구조 제작 · 콘텐츠 등록 구조 개선 · 운영 반복 업무 감소 · 관리자 사용성 개선',
    tools: 'HTML · CSS · JavaScript · jQuery · 그누보드 · 카페24',
    platform: '그누보드 · 카페24 기반',
  },
  {
    label: 'EN Website · 2025',
    title: 'Shorts / Google Review 섹션 추가',
    desc: '글로벌 사용자 신뢰도와 콘텐츠 접근성을 높이기 위해 Shorts 콘텐츠와 Google Review 섹션을 추가했습니다.',
    role: '기획 보조 · UI 개선 · 반응형 퍼블리싱 · 유지보수',
    contribution: '마케팅 콘텐츠 섹션 추가 · 글로벌 사용자 신뢰 요소 강화 · 모바일 가독성 개선',
    tools: 'HTML · CSS · JavaScript · jQuery · Photoshop',
    platform: '그누보드 · 카페24 기반',
  },
  {
    label: 'KPI Dashboard · 2025',
    title: 'KPI 대시보드 제작',
    desc: '운영 데이터를 확인할 수 있는 KPI 대시보드 UI를 제작했습니다. 데이터 가독성과 관리 효율을 고려한 화면 구조로 정리했습니다.',
    role: 'UI 설계 · 반응형 퍼블리싱 · 대시보드 화면 제작',
    contribution: '대시보드 UI 구성 · 데이터 가독성 개선 · 운영 관리 화면 제작 · Claude 기반 화면 구성 보강',
    tools: 'HTML · CSS · JavaScript · jQuery · Photoshop · Claude · ChatGPT',
    href: 'https://en.nanahospital.com/myboard/kpinana',
  },
  {
    label: 'Urban Concrete · 2025',
    title: '어반콘크리트 유지보수',
    desc: '브랜드 사이트의 UI 개선, 반응형 퍼블리싱, 운영 유지보수를 진행하고 CMS 사용 흐름을 더 쉽게 관리할 수 있도록 개선했습니다.',
    role: 'UI 개선 · 반응형 퍼블리싱 · 유지보수 · CMS 사용방법 개선',
    contribution: '모바일 페이지 유지보수 · 콘텐츠 수정 대응 · 관리자 사용 흐름 정리 · 반응형 가독성 개선',
    tools: 'HTML · CSS · JavaScript · ChatGPT',
    platform: '카페24 기반',
    href: 'https://m.urbanconcrete.co.kr/',
  },
  {
    label: 'ME Clinic · 2023 — 2024',
    title: '미클리닉 예약 페이지 / 유지보수',
    desc: '온라인 예약 페이지와 전지점 홈페이지 운영/유지보수를 진행했습니다. PHP 기반 페이지 제작과 예약 폼 제작 경험을 포함합니다.',
    role: '기획 · PHP 제작 · 반응형 퍼블리싱 · 랜딩 이미지 제작 · 예약 폼 제작',
    contribution: '반응형 PHP 퍼블리싱 · 예약 신청 폼 제작 · 랜딩 비주얼 제작 · 전지점 홈페이지 유지보수',
    tools: 'PHP · HTML · CSS · JavaScript · jQuery · XD · Photoshop · Illustrator',
    platform: '그누보드 기반',
    href: 'https://www.mecl0.com/board/write/1601/',
  },
  {
    label: 'Lamiste · 2023 — 2024',
    title: '라미스떼 아임웹 운영',
    desc: '아임웹 기반 사이트의 광고 디자인과 콘텐츠 유지보수, 이미지 수정 작업을 진행했습니다.',
    role: '광고 디자인 제작 · 콘텐츠 유지보수',
    contribution: '광고/콘텐츠 디자인 제작 · 이미지 수정 · 사이트 운영 보조 · 브랜드 톤 유지',
    tools: 'Photoshop · Illustrator · 아임웹',
    platform: '아임웹 기반',
    href: 'https://lmst.imweb.me/',
  },
  {
    label: 'Package Design · 2024',
    title: '보테지앙 패키지 디자인',
    desc: '보테지앙 달달쉐이크 패키지 디자인 2인 공동 제작 작업입니다. 제품 특성과 타깃 감성을 고려한 패키지 비주얼을 구성했습니다.',
    role: '패키지 디자인',
    contribution: '패키지 비주얼 방향성 · 제품 그래픽 디자인 · 3D 패키지 목업 제작 보조',
    tools: 'Photoshop · Illustrator · Blender',
    image: '/assets/botezien/botezien-package-main-hq.jpg',
  },
];

export const roleScopes: RoleScope[] = [
  {
    title: '신상성형외과 유지보수 및 리뉴얼 디자인, 가이드 제작',
    scope: '기획 · UI 리디자인 · 반응형 퍼블리싱 · 이미지 최적화 · 유지보수 · CMS 개선 · SEO 개선',
    desc: 'GNB, 병원소개, 커뮤니티, 눈성형, 안면윤곽 등 확장 가능한 페이지 구조를 기준으로 리뉴얼 방향과 운영 가이드를 정리했습니다.',
  },
  {
    title: 'NANA 성형외과 글로벌 홈페이지',
    scope: '기획 보조 · UI 리디자인 · 반응형 퍼블리싱 · 이미지 최적화 · 유지보수 · DB 저장 제작 · CMS 개선 · SEO 개선',
    desc: '7개국 글로벌 사이트를 1인으로 유지보수하며 이벤트 신청 DB 폼과 CMS/어드민 기반 콘텐츠 운영 구조를 개선했습니다.',
  },
  {
    title: '어반콘크리트',
    scope: 'UI 개선 · 반응형 퍼블리싱 · 유지보수 · CMS 사용방법 개선',
    desc: '브랜드 사이트 운영 과정에서 모바일 사용성과 관리자 사용 흐름을 고려해 콘텐츠 수정 및 유지보수를 진행했습니다.',
  },
  {
    title: '미클리닉',
    scope: '기획 · PHP 제작 · 반응형 퍼블리싱 · 랜딩 이미지 제작 · 예약 폼 제작',
    desc: '예약 전환을 목표로 한 PHP 기반 예약 페이지와 랜딩 이미지를 제작하고 전지점 홈페이지 유지보수를 수행했습니다.',
  },
  {
    title: '라미스떼',
    scope: '광고 디자인 제작 · 콘텐츠 유지보수',
    desc: '아임웹 기반 운영 환경에서 광고 콘텐츠와 사이트 이미지 유지보수를 진행했습니다.',
  },
  {
    title: '보테지앙',
    scope: '패키지 디자인',
    desc: '달달쉐이크 제품의 패키지 비주얼 방향성과 그래픽 디자인에 참여했습니다.',
  },
];

export const operationalCards: ImpactCard[] = [
  {
    title: '글로벌 사이트 7개국 운영',
    desc: 'EN, JP, CN, TH, MN, ID, VN 사이트를 1인으로 100% 유지보수했습니다.',
  },
  {
    title: 'CMS 기반 콘텐츠 유지보수',
    desc: 'CMS/어드민 기반 콘텐츠 등록, 수정, 노출 관리를 1인으로 100% 유지보수했습니다.',
  },
  {
    title: '이벤트 신청 DB 폼 제작',
    desc: '기존 코드 구조를 기반으로 이벤트 신청 데이터가 저장되는 DB 폼을 1인으로 제작했습니다.',
  },
  {
    title: '병원 상세/이벤트/랜딩 제작',
    desc: '병원 상세페이지, 이벤트 페이지, 랜딩페이지를 다수 제작하고 반응형 운영 구조로 개선했습니다.',
  },
  {
    title: 'AI 이미지 실무 적용',
    desc: 'AI 모델 이미지와 인테리어 내부 이미지를 제작해 실무 콘텐츠 및 포트폴리오 비주얼에 적용했습니다.',
  },
];

export const implementationCards: ImplementationCard[] = [
  {
    title: 'Next.js App Router 구조',
    desc: '메인 포트폴리오와 오늘, 해달 상세 페이지를 App Router 기반으로 분리해 실제 배포 가능한 구조로 구성했습니다.',
  },
  {
    title: 'React 컴포넌트 분리',
    desc: 'Hero, Header, ProjectCard, FeatureCase, AI Gallery, Lightbox 등 섹션별 컴포넌트를 분리해 유지보수성을 높였습니다.',
  },
  {
    title: 'TypeScript 데이터 기반 관리',
    desc: '프로젝트, AI 도구, 성과, 디자인 토큰 정보를 TypeScript 데이터 파일에서 관리해 콘텐츠 수정이 쉽도록 만들었습니다.',
  },
  {
    title: '이미지 라이트박스 구현',
    desc: '이미지 클릭 시 확대 창을 열고, 원본 크기 보기·화면 맞춤·확대/축소·ESC 닫기 기능을 구현했습니다.',
  },
  {
    title: '반응형 네비게이션',
    desc: '모바일 환경에 맞춰 햄버거 메뉴를 적용하고, 불필요한 버튼 박스 없이 아이콘만 보이도록 정리했습니다.',
  },
  {
    title: '이미지 최적화와 배포 대응',
    desc: 'WebP/PNG 자산을 프로젝트에 맞춰 정리하고, GitHub/Vercel 업로드가 가능한 소스 구조로 정리했습니다.',
  },
];

export const aiWorkflowSteps: WorkflowStep[] = [
  {
    step: '01',
    title: '콘텐츠 구조와 UX 문구 정리',
    desc: 'ChatGPT와 Claude로 포트폴리오 정보 구조, 프로젝트 설명, UX 문구, 채용 담당자가 이해하기 쉬운 역할 문구를 정리합니다.',
  },
  {
    step: '02',
    title: '코드 제작과 화면 구현 보강',
    desc: 'ChatGPT로 React/Next.js 코드와 인터랙션을 제작하고, Claude로 홈페이지·대시보드 화면 구조와 장문 콘텐츠 정리를 보강합니다.',
  },
  {
    step: '03',
    title: 'AI 모델·인테리어 비주얼 제작',
    desc: 'Higgsfield와 Nano Banana 2로 실사에 가까운 AI 모델 이미지, 인테리어 내부 이미지, 뷰티 캠페인형 비주얼을 제작합니다.',
  },
  {
    step: '04',
    title: '기획/코드 보완과 품질 점검',
    desc: 'Gemini로 코드와 기획에서 부족한 부분을 교차 점검하고, 서비스 흐름과 콘텐츠 논리를 보완합니다.',
  },
  {
    step: '05',
    title: '최종 보정과 웹 최적화',
    desc: 'Photoshop, XD, Figma에서 최종 보정한 뒤 실제 웹페이지에 맞게 이미지 비율, 용량, 포맷, 반응형 노출 방식을 최적화합니다.',
  },
];

export const aiTools: AiTool[] = [
  {
    name: 'ChatGPT',
    category: 'Development',
    icon: '/assets/ai-logos/chatgpt.png',
    desc: '콘텐츠 구조화, UX 문구 개선, React/Next.js 코드 제작과 개발 보조',
  },
  {
    name: 'Claude',
    category: 'Development',
    icon: '/assets/ai-logos/claude.png',
    desc: '홈페이지 제작, 대시보드 화면 구성, 긴 문서와 서비스 시나리오 정리',
  },
  {
    name: 'Gemini',
    category: 'Planning',
    icon: '/assets/ai-logos/gemini.png',
    desc: '코드·기획의 부족한 부분 보강, 아이디어 확장, 방향성 교차 검토',
  },
  {
    name: 'Higgsfield',
    category: 'Visual',
    icon: '/assets/ai-logos/higgsfield.png',
    desc: '실사형 AI 모델 이미지와 브랜드 무드 기반 캠페인 비주얼 제작',
  },
  {
    name: 'Nano Banana 2',
    category: 'Visual',
    icon: '/assets/ai-logos/nanobanana2.png',
    desc: 'AI 모델 이미지와 인테리어 내부 이미지를 더 현실적인 톤으로 보정·제작',
  },
];

export const designTokens = [
  { title: 'Typography', desc: 'SF Pro 기반, 적절한 굵기와 자간' },
  { title: 'Spacing', desc: '8px 기반 scale, 컴팩트한 섹션 간격' },
  { title: 'Grid', desc: 'Desktop / Tablet / Mobile 대응' },
  { title: 'Component', desc: 'CTA, Card, Gallery 재사용 구조' },
];
