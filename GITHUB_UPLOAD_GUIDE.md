# GitHub 업로드 안내

이 폴더는 GitHub/Vercel 업로드용으로 정리된 Next.js 포트폴리오 소스입니다.

## 업로드 방법

1. 이 ZIP을 압축 해제합니다.
2. GitHub 새 저장소를 만듭니다.
3. 압축 해제한 폴더 안의 파일 전체를 저장소 루트에 업로드합니다.
   - `app`, `components`, `lib`, `public`, `package.json`이 저장소 첫 화면에 보여야 합니다.
   - ZIP 파일 자체를 GitHub에 올리지 마세요.
4. Vercel에서 해당 GitHub 저장소를 Import Project 합니다.
5. Framework Preset은 `Next.js`로 선택합니다.

## 로컬 실행

```bash
npm install
npm run dev
```

## 배포

```bash
npm run build
```

Vercel 배포 시 Build Command는 기본값 `next build`를 사용하면 됩니다.
