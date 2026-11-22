/**
 * Centralized business constants for CARBON.
 * Single source of truth for Name, Address, Phone (NAP), Hours, Socials, and SEO.
 * Verified against official Google Maps place data.
 */

export const business = {
  name: "CARBON",
  shortName: "CARBON",
  brandName: "CARBON",
  brandSub: "THE DETAILING STUDIO",
  legalName: "CARBON",
  descriptor: "Automotive Transformation Studio",

  title: "CARBON Hyderabad | PPF in Hyderabad | Paint Protection Film",
  description:
    "CARBON Hyderabad: Premier studio for PPF in Hyderabad, color PPF and ceramic coating at Jubilee Hills. Book a free vehicle inspection with CARBON Hyd today.",

  alternateNames: [
    "CARBON Hyd",
    "CARBON Hyderabad",
    "CARBON - The Detailing Studio",
    "Carbon The Detailing Studio Hyderabad",
    "CARBON Studio Jubilee Hills",
  ],

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
  googleMapsUrl:
    "https://www.google.com/maps/place/CARBON/@17.4253809,78.3951665,17z/data=!3m1!4b1!4m6!3m5!1s0x3bcb91cd034b5469:0x580848e2ba547d27!8m2!3d17.4253809!4d78.3951665!16s%2Fg%2F11x9bphbmx",
  hasMap:
    "https://www.google.com/maps/place/CARBON/@17.4253809,78.3951665,17z/data=!3m1!4b1!4m6!3m5!1s0x3bcb91cd034b5469:0x580848e2ba547d27!8m2!3d17.4253809!4d78.3951665!16s%2Fg%2F11x9bphbmx",

  // Postal Address verified from Google Maps listing
  address: {
    streetAddress: "Plot no 183, Rd No 52",
    landmark: "BNR Hills, BN Reddy Colony, Jubilee Hills",
    addressLocality: "BNR Hills, BN Reddy Colony, Jubilee Hills, Hyderabad",
    addressRegion: "Telangana",
    postalCode: "500033",
    addressCountry: "IN",
    fullAddress:
      "Plot no 183, Rd No 52, BNR Hills, BN Reddy Colony, Jubilee Hills, Hyderabad, Telangana 500033",
  },

  // Hours verified from Google Maps listing
  hours: {
    display: "Mon – Sat: 10:00 AM – Midnight | Sun: 11:00 AM – 5:00 PM",
    displayShort: "Mon – Sat: 10 AM – 12 AM | Sun: 11 AM – 5 PM",
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
        closes: "24:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Sunday"],
        opens: "11:00",
        closes: "17:00",
      },
    ],
  },

  geo: {
    latitude: 17.4253809,
    longitude: 78.3951665,
  },

  areaServed: {
    "@type": "City",
    name: "Hyderabad",
  },

  // Verified Reviews & Rating from official Google Maps listing
  rating: {
    ratingValue: "4.9",
    reviewCount: "56",
  },
};

export default business;
