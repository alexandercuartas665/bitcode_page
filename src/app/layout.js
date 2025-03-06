import '../app/styles/flaticon.css';
import '../app/styles/animate.min.css';
import '../app/styles/boxicons.min.css';
import '../../node_modules/uikit/dist/css/uikit.min.css';
import "swiper/css";
import "swiper/css/bundle";

// Global Styles
import '../app/styles/custom.css';
import '../app/styles/responsive.css';

import { Poppins } from "next/font/google";
import AosAnimation from '@/components/Layout/AosAnimation';

const poppins = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"]
});

export const metadata = {
  title: "Gunter - React Nextjs IT & Digital Marketing Agency Template",
  description: "React Nextjs IT & Digital Marketing Agency Template",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className={poppins.className}>
        {children}

        <AosAnimation />
      </body>
    </html>
  );
}
