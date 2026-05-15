# Kim Siom Portfolio

Front-end Publisher / UI·UX / AI Creative 포트폴리오입니다.  
React, Next.js, TypeScript 기반으로 제작했으며, 병원·뷰티·브랜드 사이트 운영 경험과 AI 기반 콘텐츠 제작 역량을 함께 보여주는 제출용 포트폴리오입니다.

## Positioning

- Front-end Publisher
- UI/UX Designer
- AI Creative Operator
- CMS/어드민 기반 웹사이트 운영 및 유지보수 경험
- 병원 상세페이지, 이벤트 페이지, 랜딩페이지 제작 경험

## Tech Stack

- **Framework**: Next.js App Router
- **Library**: React
- **Language**: TypeScript
- **Styling**: CSS, Responsive Layout, Component-based UI
- **Interaction**: Custom reveal motion, image lightbox, original-size zoom
- **Deployment**: GitHub + Vercel

## Main Features

- 반응형 포트폴리오 메인 페이지
- 오늘, 해달 앱 디자인 상세 케이스스터디 `/today-haedal`
- 프로젝트 카드 기반 Selected Works 구성
- 신상성형외과 리뉴얼 Featured Case
- 이미지 클릭 라이트박스
- 원본 크기 보기 / 화면 맞춤 / 확대 / 축소 / ESC 닫기
- 모바일 햄버거 메뉴
- AI Gallery 얼굴컷 / 전신컷 탭
- React/Next.js 구현 설명 섹션
- AI Workflow 섹션
- 성과/기여도 섹션

## Project Scope

### 신상성형외과 유지보수 및 리뉴얼 디자인, 가이드 제작

- 기획
- UI 리디자인
- 반응형 퍼블리싱
- 이미지 최적화
- 유지보수
- CMS 개선
- SEO 개선
- 리뉴얼 디자인 가이드 제작

### NANA 성형외과 글로벌 홈페이지

- 기획 보조
- UI 리디자인
- 반응형 퍼블리싱
- 이미지 최적화
- 유지보수
- DB 저장 제작
- CMS 개선
- SEO 개선
- EN, JP, CN, TH, MN, ID, VN 7개국 글로벌 사이트 1인 유지보수

### 어반콘크리트

- UI 개선
- 반응형 퍼블리싱
- 유지보수
- CMS 사용방법 개선

### 미클리닉

- 기획
- PHP 제작
- 반응형 퍼블리싱
- 랜딩 이미지 제작
- 예약 폼 제작

### 라미스떼

- 광고 디자인 제작
- 콘텐츠 유지보수

### 보테지앙

- 패키지 디자인

## Operational Impact

- 글로벌 사이트 7개국 운영 경험: EN, JP, CN, TH, MN, ID, VN 사이트 1인 100% 유지보수
- CMS 기반 콘텐츠 유지보수 경험: CMS/어드민 기반 콘텐츠 등록, 수정, 노출 관리 1인 유지보수
- 이벤트 신청 DB 폼 제작 경험: 기존 코드 구조를 기반으로 1인 제작
- 병원 상세페이지 / 이벤트 페이지 / 랜딩페이지 다수 제작
- AI 이미지 제작 및 실무 콘텐츠 적용 경험

## Front-end Implementation

이 포트폴리오는 React/Next.js 기반으로 직접 구조화한 프로젝트입니다.

- Next.js App Router 기반 페이지 구성
- React 컴포넌트 단위 섹션 설계
- TypeScript 데이터 파일 기반 프로젝트 관리
- 이미지 라이트박스 및 원본 크기 확대 기능 구현
- 모바일 햄버거 메뉴 구현
- 반응형 레이아웃 및 이미지 최적화
- GitHub/Vercel 배포를 고려한 소스 구조 정리

## AI Workflow

AI를 단순 이미지 생성 도구가 아니라 기획, 개발, 디자인, 콘텐츠 보정까지 연결하는 실무 제작 도구로 활용합니다.

1. **ChatGPT / Claude**  
   콘텐츠 구조, UX 문구, 홈페이지 제작, 대시보드 제작, React/Next.js 코드 제작에 활용합니다.

2. **Gemini**  
   코드나 기획에서 부족한 부분을 보강하고, 서비스 흐름과 방향성을 교차 검토합니다.

3. **Higgsfield / Nano Banana 2**  
   인테리어 내부 이미지, AI 모델 이미지, 뷰티 캠페인형 비주얼을 더 현실적인 톤으로 제작합니다.

4. **Photoshop / XD / Figma**  
   AI로 제작한 이미지와 웹 시안을 최종 보정하고 실제 웹페이지에 맞게 이미지 크기, 비율, 포맷을 최적화합니다.

## Folder Structure

```text
app/
  page.tsx
  layout.tsx
  globals.css
  today-haedal/
    page.tsx
components/
  Header.tsx
  Hero.tsx
  FeatureCase.tsx
  ProjectCard.tsx
  AiToolCard.tsx
  AiGalleryTabs.tsx
  ImageLightbox.tsx
  MotionProvider.tsx
  SectionHeader.tsx
lib/
  portfolio-data.ts
  motion.ts
public/
  assets/
package.json
tsconfig.json
```

## Run Locally

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

## Deploy

Vercel 배포를 권장합니다.

1. GitHub 저장소에 프로젝트 파일 업로드
2. Vercel에서 `Add New Project`
3. GitHub Repository 선택
4. Framework Preset: `Next.js`
5. Deploy

## Upload Notes

GitHub에는 ZIP 파일 자체를 올리지 말고, 압축을 푼 뒤 아래 파일과 폴더가 저장소 첫 화면에 보이도록 업로드합니다.

```text
app
components
lib
public
package.json
tsconfig.json
README.md
```

`node_modules`, `.next`, `.vercel`, `out`, `dist`, ZIP 파일은 업로드하지 않습니다.
