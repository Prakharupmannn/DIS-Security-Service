// Central image map. Replace any value with a local file, e.g. "/images/hero-guard.jpg"
// (drop the file into public/images/). Remote URLs must be on images.unsplash.com
// or be added to remotePatterns in next.config.mjs.
const u = (id, w = 1600) => `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=80`;

export const IMAGES = {
  heroBuilding: u("photo-1486406146926-c627a92ad1ab", 2000),
  heroGuard: u("photo-1618044733300-9472054094ee", 1400),
  manpower: u("photo-1555952517-2e8e729e0b44", 600),
  electronic: u("photo-1557597774-9d273605dfa9", 600),
  event: u("photo-1470229722913-7c0e2dbbafd3", 600),
  vip: u("photo-1533473359331-0135ef1b58bf", 600),
  corporate: u("photo-1545324418-cc1a3fa10c00", 600),
  controlRoom: u("photo-1551288049-bebda4e38f71", 1400),
  careers: u("photo-1497366216548-37526070297c", 1400),
  customer: u("photo-1500648767791-00dcc994a43e", 200),
};
