"use client";

import {
  Nfc,
  QrCode,
  Lock,
  Layers,
  Shield,
  Smartphone,
  Clock,
  Timer,
  Calendar,
  Zap,
} from "lucide-react";
import FeatureSection from "./FeatureSection";

export default function Features() {
  return (
    <div id="features">
      <FeatureSection
        badge={{ icon: Nfc, label: "Unique to Normal" }}
        heading={
          <>
            Use any NFC tag
            <br />
            or QR code.
          </>
        }
        description="No proprietary hardware needed. Use an AirTag, a sticker on your fridge, a card in your wallet, or print a QR code. Any NFC tag or QR code works as your key to block and unblock apps."
        bullets={[
          {
            icon: Nfc,
            text: "Works with any NFC tag: AirTags, stickers, cards and more",
          },
          {
            icon: QrCode,
            text: "QR code support for flexible placement",
          },
          {
            icon: Lock,
            text: "Cryptographically secured with PBKDF2 hashing",
          },
        ]}
        phones={[
          {
            src: "/IMG_2423.PNG",
            alt: "Choose between NFC tag or QR code",
            className: "sm:-rotate-3 sm:translate-y-4",
          },
          {
            src: "/IMG_2421.PNG",
            alt: "Keys screen showing NFC tags and QR codes",
            className: "sm:rotate-3 sm:-translate-y-4",
          },
        ]}
      />

      <FeatureSection
        heading={
          <>
            Organize with
            <br />
            app groups.
          </>
        }
        description="Create custom groups for Messaging, Social Media, Email, or anything else. Block and unblock each group independently for precise control over your screen time."
        bullets={[
          { icon: Layers, text: "Create unlimited custom app groups" },
          {
            icon: Shield,
            text: "Block and unblock groups independently",
          },
          {
            icon: Smartphone,
            text: "Complete granular control",
          },
        ]}
        phones={[
          {
            src: "/IMG_2419.PNG",
            alt: "App Groups: Messaging, Socials, Email, whatever you want!",
          },
        ]}
        reverse
        background
      />

      <FeatureSection
        badge={{ icon: Timer, label: "Not in most blockers" }}
        heading={
          <>
            Timed unlocks
            <br />
            that auto-reblock.
          </>
        }
        description="Need to check something quickly? Unlock your apps for a set duration. When time's up, everything automatically re-blocks. No willpower required."
        bullets={[
          {
            icon: Clock,
            text: "Multiple preset durations for quick timed unlocks",
          },
          {
            icon: Timer,
            text: "Automatic re-blocking when the timer ends",
          },
          { icon: Layers, text: "Works for individual apps/groups too" },
        ]}
        phones={[
          {
            src: "/IMG_2417.PNG",
            alt: "Timed unlock duration picker",
            className: "sm:-rotate-2 sm:translate-y-6",
          },
          {
            src: "/IMG_2418.PNG",
            alt: "Active timed unlock with countdown",
            className: "sm:rotate-2 sm:-translate-y-6",
          },
        ]}
      />

      <FeatureSection
        heading={
          <>
            Set it and
            <br />
            forget it.
          </>
        }
        description="Create recurring schedules to automatically block apps on specific days and times. Block email during evenings, social media on weekdays, or whatever works for you."
        bullets={[
          {
            icon: Calendar,
            text: "Schedule blocks for specific days of the week",
          },
          {
            icon: Clock,
            text: "Set custom start times and durations",
          },
          {
            icon: Zap,
            text: "Runs automatically, no daily effort required",
          },
        ]}
        phones={[
          {
            src: "/IMG_2422.PNG",
            alt: "Automated blocking schedules for Email",
          },
        ]}
        reverse
        background
      />
    </div>
  );
}
