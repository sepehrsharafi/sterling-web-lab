const siteUrlFromEnv = process.env.NEXT_PUBLIC_SITE_URL;
export const siteUrl = siteUrlFromEnv
  ? siteUrlFromEnv.replace(/\/$/, "")
  : "https://sterlingweblab.com";

export const site = {
  name: "Sterling Web Lab",
  description:
    "Sterling Web Lab builds precise, high-performing B2B websites and digital experiences.",
  url: siteUrl,
  locale: "en_US",
};
