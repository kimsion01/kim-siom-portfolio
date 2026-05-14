# Kim Siom Next.js Portfolio

React / Next.js / TypeScript 기반 포트폴리오입니다.

## 실행

```bash
npm install
npm run dev
```

## 배포

Vercel 배포 권장. GitHub 저장소에 업로드 후 Vercel에서 Import Project 하면 됩니다.

## 구조

- `app/page.tsx`: 메인 포트폴리오
- `app/today-haedal/page.tsx`: 오늘, 해달 상세 케이스스터디
- `components/`: React 컴포넌트
- `lib/portfolio-data.ts`: TypeScript 데이터
- `lib/motion.ts`: Motion hooks

## Motion

Scroll progress, reveal blur, pointer glow, card spotlight, tilt, parallax.


## Today, Haedal 2023 이미지 반영

헤더 내 Today, Haedal 메뉴는 제거했고, 메인 프로젝트 카드와 상세 라우트(`/today-haedal`)에서만 접근하도록 구성했습니다. 2023년 원본 앱 디자인 이미지와 2026년 포트폴리오용 UX 보강 내용을 함께 정리했습니다.


## About / Positioning 문구 추가

메인에 About 섹션을 추가해 `Front-end Publisher · UI/UX · AI Creative` 포지션을 더 명확히 전달하도록 구성했습니다.

포트폴리오 제작 문구:
> React/Next.js 기반으로 컴포넌트를 분리하고, TypeScript 데이터 구조와 커스텀 motion hook을 활용해 반응형 포트폴리오를 제작했습니다.


## Role / Contribution / Tools 반영

각 프로젝트 카드에 Role, Contribution, Tools, Platform 정보를 추가해 실제 담당 범위가 명확히 보이도록 구성했습니다.


## 추가 반영 사항
- NANA 글로벌 홈페이지: 페이지별 SEO 최적화 개선 경험 반영
- Platform: 그누보드 · 카페24 · 아임웹 기반 운영 경험 반영
- AI-assisted React/Next.js 제작 역량 문구 반영


## SEO / Search Optimization 반영

- NANA 글로벌 홈페이지: 페이지별 SEO 메타태그/콘텐츠 구조 최적화 개선
- 신상성형외과 리뉴얼: 향후 SEO 개선을 고려해 통이미지 중심 콘텐츠를 텍스트/컴포넌트 기반 구조로 전환하는 방향 추가
