import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "التيسير للسياحة بطهطا",
  description: "سياحة خارجية وحج وعمرة وحجوزات فنادق وتذاكر طيران وتأشيرات من التيسير للسياحة بطهطا في سوهاج.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ar" dir="rtl">
      <body>{children}</body>
    </html>
  );
}
