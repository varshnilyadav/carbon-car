import { business } from "@/lib/business";

export const siteConfig = {
  ...business,
};

export function absoluteUrl(path: string = ""): string {
  const cleanPath = path.startsWith("/") ? path : `/${path}`;
  return `${siteConfig.url}${cleanPath}`;
}
