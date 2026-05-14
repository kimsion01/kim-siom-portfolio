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

## Mobile / AI gallery tabs
- 모바일 헤더 햄버거 메뉴 추가
- AI Visual Archive를 얼굴컷 / 전신컷 탭 구조로 변경
- 사용자가 제공한 AI 이미지 8장을 기준으로 갤러리 재구성

## Final visibility fix
- 모바일 햄버거 메뉴를 1024px 이하부터 노출되도록 수정
- AI Visual Archive 탭 UI를 더 명확히 표시
- NANA / 일본 사이트 / 관리자 콘텐츠 / Shorts Google Review 섹션의 Platform에서 아임웹 제거

## Final requested update
- NANA / 일본 사이트 / 관리자 콘텐츠 / Shorts Google Review 섹션 Platform에서 아임웹 제거
- 모바일 햄버거 메뉴 추가
- AI 갤러리 얼굴컷 / 전신컷 탭 추가
- 신상성형외과 리뉴얼 메인 이미지를 사용자 첨부 이미지로 교체

## AI gallery tab bugfix
- 탭 전환 시 새로 렌더링되는 이미지 카드가 `data-reveal` opacity 상태에 걸려 보이지 않던 문제 수정
- 얼굴컷/전신컷 탭 전환 후에도 이미지가 즉시 보이도록 변경

## Sinsang redesign scroll frame
- 신상성형외과 리디자인 이미지를 전체 축소 통이미지가 아니라 확대된 스크롤 프레임으로 표시하도록 수정
- 데스크톱/모바일에서 프레임 내부 스크롤로 전체 리디자인을 확인 가능

## Botezien package image fix
- 보테지앙 패키지 이미지를 웹 최적화 JPG로 교체
- ProjectCard에 이미지 렌더링 필드 추가
- object-fit: contain 기반으로 이미지 잘림/깨짐 방지

## Global image lightbox
- 포트폴리오 내 주요 이미지를 클릭하면 크게 볼 수 있는 라이트박스 기능 추가
- 확대된 이미지/배경/닫기 버튼을 클릭하면 닫힘
- ESC 키 닫기 지원

## Contact email updated
- 하단 Contact 이메일을 `ontop4748@gmail.com`로 변경

## Hero visual badge overlap fix
- Hero 이미지 상단의 브라우저 컬러 도트와 `AI Beauty Campaign` 라벨이 겹치지 않도록 간격 수정
- 모바일에서도 라벨과 도트가 분리되어 보이도록 보정

## Line-break polish
- React/Next.js 소개 문구가 어색하게 줄바꿈되지 않도록 문장 압축
- 한글/영문 혼합 타이틀에 `word-break: keep-all` 보정 적용

## Sinsang vertical-only quality fix
- 신상성형외과 리디자인 이미지를 원본 크기 기반 PNG로 재저장
- 오른쪽 미리보기 영역의 가로 스크롤 제거
- 세로 스크롤만 자연스럽게 동작하도록 수정
- 이미지 강제 확대/최소폭 설정을 제거해 화질 저하를 방지
