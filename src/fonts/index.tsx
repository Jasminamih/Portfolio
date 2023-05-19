import { Open_Sans, Roboto, Ubuntu } from "next/font/google";

export const F_Ubuntu = Ubuntu({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
  display: "swap",
});

export const F_Roboto = Roboto({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700"],
  display: "swap",
});

export const F_Open_Sans = Open_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "600"],
  display: "swap",
});
