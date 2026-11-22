/**
 * Centralized business constants for CARBON - The Detailing Studio.
 * Single source of truth for Name, Address, Phone (NAP), Hours, Socials, and SEO.
 */

export const business = {
  name: "CARBON - The Detailing Studio",
  shortName: "CARBON",
  brandName: "CARBON",
  brandSub: "THE DETAILING STUDIO",
  legalName: "CARBON - The Detailing Studio",
  descriptor: "Automotive Transformation Studio",

  title: "Car Detailing, PPF & Ceramic Coating in Hyderabad | CARBON",
  description:
    "Premium car detailing, PPF, ceramic and graphene coating in Hyderabad. Book a consultation at CARBON Studio.",

  url: (process.env.NEXT_PUBLIC_SITE_URL || "https://www.carbonhyd.studio").replace(/\/$/, ""),
  ogImage: "/images/og-image.jpg",

  // Clearly labeled phone & messaging numbers
  telephone: "+91 9959517361",
  telephoneRaw: "+919959517361",
  telephoneDisplay: "Call: +91 9959517361",

  whatsapp: "+91 7416393300",
  whatsappNumber: "+91 7416393300",
  whatsappNumberRaw: "+917416393300",
  whatsappDisplay: "WhatsApp: +91 7416393300",
  whatsappUrl: "https://wa.me/917416393300",

  // Social profile URLs
  instagramUrl: "https://www.instagram.com/carbon.hyd/",
  facebookUrl: "https://www.facebook.com/Carbon.hyd/",
  googleMapsUrl: "https://maps.app.goo.gl/mFHht68AYNDtpZAD8",
  hasMap: "https://maps.app.goo.gl/mFHht68AYNDtpZAD8",

  // Postal Address
  // TODO(owner): Confirm official registered street address and postal code
  address: {
    streetAddress: "Plot No. 183, Road No. 52, BNR Hills, BN Reddy Colony, Jubilee Hills",
    landmark: "BNR Hills, Jubilee Hills",
    addressLocality: "Hyderabad",
    addressRegion: "Telangana",
    postalCode: "500033",
    addressCountry: "IN",
    fullAddress:
      "Plot No. 183, Road No. 52, BNR Hills, BN Reddy Colony, Jubilee Hills, Hyderabad, Telangana – 500033",
  },

  // Hours
  // TODO(owner): Confirm whether operating hours are Monday – Saturday 10:00 AM – 7:00 PM or Everyday 10:00 AM – 7:00 PM
  hours: {
    display: "Monday – Saturday: 10:00 AM – 7:00 PM (Sunday: Closed / By Appointment)",
    displayShort: "Mon – Sat: 10:00 AM – 7:00 PM",
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
        ],
        opens: "10:00",
        closes: "19:00",
      },
    ],
  },

  geo: {
    latitude: 17.425366,
    longitude: 78.395036,
  },

  areaServed: {
    "@type": "City",
    name: "Hyderabad",
  },

  // Verified Reviews & Rating
  // TODO(owner): Confirm exact verified Google rating (currently 4.9) and total review count (currently 48+)
  rating: {
    ratingValue: "4.9",
    reviewCount: "48",
  },
};

export default business;
