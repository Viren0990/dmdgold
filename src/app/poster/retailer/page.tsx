import type { Metadata } from "next";
import RetailerPoster from "./RetailerPoster";

export const metadata: Metadata = {
  title: "Retailer Edition — Pricing Poster | DMD Gold",
  description:
    "DMD Gold Retailer Edition pricing poster. Special launch offer: ₹90,000 for 6 months only.",
  robots: { index: false, follow: false },
};

export default function Page() {
  return <RetailerPoster />;
}
