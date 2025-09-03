import '../app/styles/flaticon.css';
import '../app/styles/animate.min.css';
import '../app/styles/boxicons.min.css';
import '../../node_modules/uikit/dist/css/uikit.min.css';
import "swiper/css";
import "swiper/css/bundle";
import WhatsAppButton from '@/components/Common/WhatsAppButton';
import Script from 'next/script';

// Global Styles
import '../app/styles/custom.css';
import '../app/styles/responsive.css';

import { Poppins } from "next/font/google";
import AosAnimation from '@/components/Layout/AosAnimation';

const poppins = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"]
});

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className={poppins.className}>
        {children}

        <WhatsAppButton />
        <AosAnimation />
        <Script src="https://cdn.jsdelivr.net/npm/uikit@3.19.2/dist/js/uikit.min.js" />
        <Script src="https://cdn.jsdelivr.net/npm/uikit@3.19.2/dist/js/uikit-icons.min.js" />
      </body>
    </html>
  );
}
