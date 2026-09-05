import Script from "next/script";
import { GaPageview } from "@/components/analytics/ga-pageview";

const measurementId = process.env.GA4_MEASUREMENT_ID;

/** Google Analytics 4 — renders nothing until GA4_MEASUREMENT_ID is set. */
export function Analytics() {
  if (!measurementId) return null;

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${measurementId}`}
        strategy="afterInteractive"
      />
      <Script
        id="gtag-init"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','${measurementId}',{'anonymize_ip':true});`
        }}
      />
      <GaPageview />
    </>
  );
}
