
import './globals.css';
import { ImageLightbox } from '@/components/ImageLightbox';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Kim Siom Portfolio',
  description: 'Front-end Publisher · UI/UX · AI Creative Portfolio',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body>{children}
        <ImageLightbox /></body>
    </html>
  );
}
