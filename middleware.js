import { rewrite } from "@vercel/edge";

const TEAMSYNC_HOSTS = [
  "teamsyncai.co",
  "www.teamsyncai.co",
  "tryteamsyncai.com",
  "www.tryteamsyncai.com",
];

const HIRINGBLUEPRINT_HOSTS = [
  "buildhiringblueprint.com",
  "www.buildhiringblueprint.com",
  "yourhiringblueprint.com",
  "www.yourhiringblueprint.com",
];

export default function middleware(request) {
  const host = (request.headers.get("host") || "").toLowerCase();

  if (TEAMSYNC_HOSTS.includes(host)) {
    return rewrite(new URL("/teamsync/demo.html", request.url));
  }

  if (HIRINGBLUEPRINT_HOSTS.includes(host)) {
    return rewrite(new URL("/hiringblueprint/demo.html", request.url));
  }
}

export const config = {
  matcher: ["/", "/:path*"],
};
