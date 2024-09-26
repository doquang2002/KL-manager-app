import { defineRouting } from "next-intl/routing";
import { createSharedPathnamesNavigation } from "next-intl/navigation";
import { LANG } from "~/constants/lang";

export const routing = defineRouting({
  // A list of all locales that are supported
  locales: LANG,

  // Used when no locale matches
  defaultLocale: LANG[0],
});

// Lightweight wrappers around Next.js' navigation APIs
// that will consider the routing configuration
export const { Link, redirect, usePathname, useRouter } =
  createSharedPathnamesNavigation(routing);
