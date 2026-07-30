const WEBSITE_ALIASES = {
  google: "google",
  browser: "google",

  youtube: "youtube",
  "you tube": "youtube",

  github: "github",
  "git hub": "github",

  gmail: "gmail",
  "g mail": "gmail",

  reddit: "reddit",

  facebook: "facebook",

  instagram: "instagram",

  linkedin: "linkedin",
  "linked in": "linkedin",

  chatgpt: "chatgpt",
  "chat gpt": "chatgpt",
  chatgptai: "chatgpt",
  gpt: "chatgpt",
  "chat jpd": "chatgpt",
"chat gpd": "chatgpt",
"chat gbt": "chatgpt",

  x: "x",
  twitter: "x",
};

export function normalizeWebsite(name) {
  const key = name.toLowerCase().trim();
  return WEBSITE_ALIASES[key] || key;
}