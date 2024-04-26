import { Inter, Whisper } from 'next/font/google';

export const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  weight: ['400', '500', '600', '700'],
  variable: '--font-inter'
});

export const whisper = Whisper({
  subsets: ['latin'],
  display: 'swap',
  weight: ['400'],
  variable: '--font-whisper'
});
