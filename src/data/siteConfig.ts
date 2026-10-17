export const siteConfig = {
  name: "CARBON",
  legalName: "CARBON The Detailing Studio",
  title: "CARBON | Premium Car Detailing, PPF, Ceramic Coating & Performance in Hyderabad",
  description: "Carbon is Hyderabad's automotive transformation studio specializing in PPF, ceramic coating, detailing, wrapping, bodykits, restoration, paint and performance upgrades.",
  url: (process.env.NEXT_PUBLIC_SITE_URL || "https://www.carbonhyd.studio").replace(/\/$/, ""),
  ogImage: "/images/og-image.jpg",
  telephone: "+91 9959517361",
  telephoneRaw: "+919959517361",
  whatsappUrl: "https://wa.me/919959517361",
  instagramUrl: "https://www.instagram.com/carbon.hyd/",
  facebookUrl: "https://www.facebook.com/Carbon.hyd/",
  googleMapsUrl: "https://maps.app.goo.gl/mFHht68AYNDtpZAD8",
  address: {
    streetAddress: "Hyderabad Studio",
    addressLocality: "Hyderabad",
    addressRegion: "Telangana",
    addressCountry: "IN",
  },
  openingHours: "Mo-Su 10:00-19:00",
};

export function absoluteUrl(path: string = ""): string {
  const cleanPath = path.startsWith("/") ? path : `/${path}`;
  return `${siteConfig.url}${cleanPath}`;
}
