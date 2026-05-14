
export type Project = {
  label: string;
  title: string;
  desc: string;
  href?: string;
  role?: string;
  contribution?: string;
  tools?: string;
  platform?: string;
};

export type AiTool = {
  name: string;
  category: 'Planning' | 'Visual';
  icon: string;
  desc: string;
};

export type ImpactCard = {
  title: string;
  desc: string;
};

export const metrics = [
  { value: '7', label: '글로벌 사이트 운영' },
  { value: 'CMS', label: '관리자 입력 기능 제작' },
  { value: 'DB', label: '이벤트 신청폼 제작' },
  { value: 'AI', label: '실제 브랜드 콘텐츠 활용' },
];

export const projects: Project[] = [
  {
    label: 'Global Platform · 2024 — 2026',
    title: 'NANA 글로벌 홈페이지',
    desc: 'EN, JP, CN, TH, MN, ID, VN 사이트 유지보수. 페이지별 SEO 메타태그/콘텐츠 구조 최적화 개선, 중국 사이트 SNS 정책 대응, LASCOM 연계 글로벌 호스팅 속도 개선, 국가별 운영 환경 최적화.',
    role: '기획 보조 · UI Design · Publishing · Maintenance',
    contribution: '반응형 퍼블리싱 · CMS 입력구조 제작 · DB 제작 · 페이지별 SEO 메타태그/콘텐츠 구조 최적화 개선',
    tools: 'HTML · CSS · JavaScript · jQuery · XD · Photoshop · Illustrator · ChatGPT · Claude · Gemini',
    platform: '그누보드 · 카페24 기반',
    href: 'https://en.nanahospital.com',
  },
  {
    label: 'JP Website · 2025',
    title: '일본 사이트 이벤트/서브페이지 제작',
    desc: '이벤트 랜딩, DB 입력폼, 신규 서브페이지 제작. 반응형 퍼블리싱과 상담 전환형 페이지 구조 구현.',
    role: '기획 보조 · UI Design · Publishing · Maintenance',
    contribution: '이벤트 랜딩 제작 · DB 입력폼 제작 · 신규 서브페이지 구축 · 콘텐츠 운영 개선',
    tools: 'HTML · CSS · JavaScript · jQuery · XD · Photoshop · Illustrator · ChatGPT · Claude · Gemini',
    platform: '그누보드 · 카페24 기반',
    href: 'https://jp.nanahospital.com/page/breast_event04',
  },
  {
    label: 'CMS/Admin · 2022 — 2026',
    title: '관리자 콘텐츠 입력 기능 제작',
    desc: '관리자가 사진과 문구만 입력해 콘텐츠를 등록할 수 있도록 어드민 입력 항목을 제작해 운영 편의성을 개선.',
    role: '기획 보조 · UI Design · Publishing · Maintenance',
    contribution: 'CMS 입력구조 제작 · 콘텐츠 등록 구조 개선 · 운영 반복 업무 감소',
    tools: 'HTML · CSS · JavaScript · jQuery · 그누보드 · 카페24',
    platform: '그누보드 · 카페24 기반',
  },
  {
    label: 'EN Website · 2025',
    title: 'Shorts / Google Review 섹션 추가',
    desc: '글로벌 사용자 신뢰도와 콘텐츠 접근성을 높이기 위해 Shorts 콘텐츠와 Google Review 섹션 추가.',
    role: '기획 보조 · UI Design · Publishing · Maintenance',
    contribution: '마케팅 콘텐츠 섹션 추가 · 글로벌 사용자 신뢰 요소 강화',
    tools: 'HTML · CSS · JavaScript · jQuery · Photoshop',
    platform: '그누보드 · 카페24 기반',
  },
  {
    label: 'KPI Dashboard · 2025',
    title: 'KPI 대시보드 제작',
    desc: '운영 데이터를 확인할 수 있는 KPI 대시보드 UI 제작. 데이터 가독성과 관리 효율을 고려.',
    role: 'UI Design · Publishing',
    contribution: '대시보드 UI 구성 · 데이터 가독성 개선 · 운영 관리 화면 제작',
    tools: 'HTML · CSS · JavaScript · jQuery · Photoshop',
    href: 'https://en.nanahospital.com/myboard/kpinana',
  },
  {
    label: 'Urban Concrete · 2025',
    title: '어반콘크리트 유지보수',
    desc: '브랜드 사이트 운영 및 모바일 페이지 유지보수 경험.',
    role: 'UI Design · Publishing · Maintenance',
    contribution: '반응형 퍼블리싱 · CMS 유지보수',
    tools: 'HTML · CSS · JavaScript · ChatGPT',
    platform: '카페24 기반',
    href: 'https://m.urbanconcrete.co.kr/',
  },
  {
    label: 'ME Clinic · 2023 — 2024',
    title: '미클리닉 예약 페이지 / 유지보수',
    desc: '온라인 반응형 예약 페이지 제작 및 전지점 홈페이지 운영/유지보수. 모바일 가독성 개선.',
    role: 'UI Design · Publishing · Maintenance',
    contribution: '반응형 PHP 퍼블리싱 · CMS 유지보수 · 예약신청 폼 제작',
    tools: 'HTML · CSS · JavaScript · jQuery · XD · Photoshop · Illustrator',
    platform: '그누보드 기반',
    href: 'https://www.mecl0.com/board/write/1601/',
  },
  {
    label: 'Lamiste · 2023 — 2024',
    title: '라미스떼 아임웹 운영',
    desc: '아임웹 기반 사이트 운영 및 콘텐츠 유지보수.',
    role: 'Design · Publishing · Maintenance',
    contribution: '콘텐츠 디자인 · HTML/CSS/JavaScript/jQuery 기반 운영 보조 · 이미지 수정 및 유지보수',
    tools: 'HTML · CSS · JavaScript · jQuery · Photoshop · Illustrator',
    platform: '아임웹 기반',
    href: 'https://lmst.imweb.me/',
  },
  {
    label: 'Package Design · 2024',
    title: '보테지앙 패키지 디자인',
    desc: '2024년 보테지앙 패키지 디자인 2인 공동 제작.',
    role: 'Package Design',
    contribution: '패키지 비주얼 방향성 · 제품 그래픽 디자인 · 3D 패키지 목업 제작 보조',
    tools: 'Photoshop · Illustrator · Blender',
  },
];

export const operationalCards: ImpactCard[] = [
  {
    title: 'CN 사이트 정책 대응',
    desc: '중국 사용자 환경을 고려해 YouTube·Instagram 요소를 직접 코드 수정으로 제거했습니다.',
  },
  {
    title: '글로벌 속도 개선',
    desc: 'LASCOM과 연계해 중국 포함 글로벌 사이트 속도 개선 및 운영 환경 최적화를 진행했습니다.',
  },
  {
    title: 'CMS 운영 효율화',
    desc: '관리자가 사진과 문구만 입력해 콘텐츠를 등록할 수 있도록 어드민 입력 항목을 제작했습니다.',
  },
  {
    title: '반응형 가독성 개선',
    desc: '모바일 환경에 맞춰 폰트 사이즈, 굵기, 문단 구조를 조정했습니다.',
  },
];

export const aiTools: AiTool[] = [
  {
    name: 'ChatGPT',
    category: 'Planning',
    icon: '/assets/ai-logos/chatgpt.png',
    desc: '기획 구조화, UI 문구 개선, 프론트엔드 코드 제작',
  },
  {
    name: 'Claude',
    category: 'Planning',
    icon: '/assets/ai-logos/claude.png',
    desc: '긴 문서 구조화, 서비스 시나리오 정리',
  },
  {
    name: 'Gemini',
    category: 'Planning',
    icon: '/assets/ai-logos/gemini.png',
    desc: '리서치 기반 아이디어 확장과 방향성 정리',
  },
  {
    name: 'Higgsfield',
    category: 'Visual',
    icon: '/assets/ai-logos/higgsfield.png',
    desc: '브랜드 무드 기반 AI 비주얼 제작',
  },
  {
    name: 'Nano Banana 2',
    category: 'Visual',
    icon: '/assets/ai-logos/nanobanana2.png',
    desc: '뷰티·피부과 모델 이미지 생성',
  },
];

export const designTokens = [
  { title: 'Typography', desc: 'SF Pro 기반, 적절한 굵기와 자간' },
  { title: 'Spacing', desc: '8px 기반 scale, 컴팩트한 섹션 간격' },
  { title: 'Grid', desc: 'Desktop / Tablet / Mobile 대응' },
  { title: 'Component', desc: 'CTA, Card, Gallery 재사용 구조' },
];
