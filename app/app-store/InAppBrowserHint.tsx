"use client";

import { useSyncExternalStore } from "react";

/**
 * Instagram/Facebook/Threads open links in a locked-down WKWebView that often
 * traps App Store links instead of handing them off to the App Store app.
 * iOS only opens the store on a *user-initiated* tap (never a JS redirect), and
 * even then the in-app browser sometimes swallows it — so when we detect one of
 * these browsers we nudge the user to reopen in Safari, where the tap works.
 */
const IN_APP_BROWSER = /Instagram|FBAN|FBAV|FB_IAB|Messenger|Threads|Line|Twitter/i;

const subscribe = () => () => {};
const isInAppBrowser = () => IN_APP_BROWSER.test(navigator.userAgent || "");

export default function InAppBrowserHint() {
  // Client-only check; renders nothing on the server to avoid a hydration mismatch.
  const inApp = useSyncExternalStore(subscribe, isInAppBrowser, () => false);

  if (!inApp) return null;

  return (
    <p className="mt-6 max-w-xs text-sm text-zinc-500">
      Not opening? Tap <span className="text-zinc-300">•••</span> in the corner
      and choose <span className="text-zinc-300">Open in external browser</span>.
    </p>
  );
}
