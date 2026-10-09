import Image from "next/image";
import { AlertTriangle } from "lucide-react";
import { FAQItem } from "../FAQAccordion";
import { MethodAccordion } from "../MethodAccordion";

export function PreventBypassItem() {
  return (
    <FAQItem question="Can I prevent disabling Normal via Settings? I want to make it impossible to access blocked apps.">
      <div className="space-y-4">
        <p>
          Yes. There are two ways to close the Settings bypass. Pick the one
          that fits how strict you want to be.
        </p>

        <div className="border border-orange-400/30 bg-orange-400/[0.07] p-4 text-sm">
          <p className="flex items-center gap-2 font-semibold text-orange-400">
            <AlertTriangle className="h-4 w-4 shrink-0" />
            Proceed at your own risk
          </p>
          <p className="mt-1.5 text-ink/80">
            Preventing the Settings bypass is possible, but with it in place the
            only ways to turn off blocks are through Normal or resetting your
            phone. If you lock yourself out of your apps, we are not
            responsible, even if Normal stops working as expected. We are also
            not responsible for any data loss if you have to reset your device
            to regain access.
          </p>
        </div>

        <div className="space-y-3">
          <MethodAccordion title="Method 1: Shortcuts automation">
            <div className="space-y-6 pt-2">
              <p>
                Use Apple&apos;s Shortcuts app to automatically bounce you out
                of Settings before you can reach the Screen Time toggle.
              </p>

              <div className="space-y-2">
                <p className="font-medium text-ink-strong">
                  Step 1: Create the automation
                </p>
                <ol className="list-decimal list-inside space-y-1.5 pl-1">
                  <li>Open the Shortcuts app</li>
                  <li>Go to the Automation tab</li>
                  <li>
                    Tap the <span className="text-ink-strong">+</span> button to
                    create a new automation
                  </li>
                  <li>
                    Set the trigger to{" "}
                    <span className="text-ink-strong">
                      &quot;When Settings is closed&quot;
                    </span>
                  </li>
                  <li>
                    Set the action to{" "}
                    <span className="text-ink-strong">
                      &quot;Go to Home Screen&quot;
                    </span>
                  </li>
                </ol>
                <div className="grid grid-cols-2 gap-3 mt-3">
                  <div className="overflow-hidden rounded-xl border border-line">
                    <Image
                      src="/IMG_2503.PNG"
                      alt="Shortcuts Automation tab showing the completed automation"
                      width={400}
                      height={870}
                      className="w-full h-auto"
                    />
                  </div>
                  <div className="overflow-hidden rounded-xl border border-line">
                    <Image
                      src="/IMG_2504.PNG"
                      alt="Automation detail: When Settings is closed, Go to Home Screen"
                      width={400}
                      height={870}
                      className="w-full h-auto"
                    />
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <p className="font-medium text-ink-strong">
                  Step 2: Set it to run automatically
                </p>
                <ul className="list-disc list-inside space-y-1.5 pl-1">
                  <li>
                    Set the automation to{" "}
                    <span className="text-ink-strong">Run Immediately</span>
                  </li>
                  <li>
                    Turn off{" "}
                    <span className="text-ink-strong">Notify When Run</span>
                  </li>
                </ul>
                <p className="mt-2">
                  This ensures it runs immediately every time.
                </p>
              </div>

              <div className="space-y-2">
                <p className="font-medium text-ink-strong">
                  Step 3: Block the Shortcuts app in Normal
                </p>
                <p>
                  Add Shortcuts to your selected apps in Normal so the
                  automation itself can&apos;t be easily modified.
                </p>
                <div className="max-w-[200px] mt-3">
                  <div className="overflow-hidden rounded-xl border border-line">
                    <Image
                      src="/IMG_2505.PNG"
                      alt="Selecting the Shortcuts app in Normal's app picker"
                      width={400}
                      height={870}
                      className="w-full h-auto"
                    />
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <p className="font-medium text-ink-strong">How it works</p>
                <p>
                  Screen Time opens authentication in Settings. The automation
                  detects Settings closing and immediately returns you to the
                  Home Screen, preventing you from reaching the disable option.
                </p>
                <ul className="list-disc list-inside space-y-1.5 pl-1">
                  <li>You may need to enable Face ID for this to work</li>
                  <li>You can still access other device settings normally</li>
                </ul>
              </div>

              <div className="border border-line bg-raised p-4 space-y-3">
                <p className="font-medium text-ink-strong">Important notes</p>
                <ul className="list-disc list-inside space-y-2">
                  <li>
                    When you update your selected apps in Normal, you&apos;ll
                    need to reselect apps in your schedules and groups due to an
                    Apple Screen Time limitation.
                  </li>
                  <li>
                    After this setup, the only ways to disable Normal are:
                    <ul className="list-disc list-inside pl-5 mt-1.5 space-y-1">
                      <li>
                        Using an NFC, QR, or barcode key you&apos;ve configured
                        in Normal
                      </li>
                      <li>Resetting your device</li>
                    </ul>
                  </li>
                  <li>
                    Unblocking Shortcuts or all apps won&apos;t turn off this
                    automation. To manage it:
                    <ul className="list-disc list-inside pl-5 mt-1.5 space-y-1">
                      <li>
                        <span className="text-ink-strong">To disable:</span>{" "}
                        Unblock Shortcuts, then manually turn off the automation
                      </li>
                      <li>
                        <span className="text-ink-strong">To re-enable:</span>{" "}
                        Unblock Shortcuts, turn the automation back on, then
                        re-block Shortcuts
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
            </div>
          </MethodAccordion>

          <MethodAccordion title="Method 2: Screen Time passcode">
            <div className="space-y-4 pt-2">
              <p>
                Lock Screen Time behind a passcode and Apple ID you don&apos;t
                know. Without them, the Screen Time toggle can&apos;t be reached
                at all.
              </p>

              <div className="space-y-2">
                <p className="font-medium text-ink-strong">
                  Pick one option for the passcode and Apple ID
                </p>
                <p className="text-xs text-faint">
                  Any of these works on its own; you only need one.
                </p>
                <div className="grid gap-2 mt-2">
                  <div className="border border-line bg-raised p-3">
                    <p className="font-medium text-ink-strong">
                      Option A: Ask a trusted friend
                    </p>
                    <p className="mt-1">
                      Hand them your phone so they can enter a passcode and
                      Apple ID that only they know.
                    </p>
                  </div>
                  <div className="border border-line bg-raised p-3">
                    <p className="font-medium text-ink-strong">
                      Option B: Use a service like{" "}
                      <a
                        href="https://password-locker.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sage underline decoration-sage/40 underline-offset-4 transition-colors hover:decoration-sage"
                      >
                        password-locker
                      </a>
                    </p>
                    <p className="mt-1">
                      It provides both a dummy Apple ID and a random passcode.
                      This can be made near impossible to recover.
                    </p>
                  </div>
                  <div className="border border-line bg-raised p-3">
                    <p className="font-medium text-ink-strong">
                      Option C: Do it yourself
                    </p>
                    <p className="mt-1">
                      Type in a random passcode and Apple ID password yourself
                      without memorizing them.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3 border border-sage/30 bg-sage/[0.06] p-3 text-xs">
                  <div>
                    <p className="font-semibold text-sage">
                      Why the Apple ID matters
                    </p>
                    <p className="mt-1 text-ink/80">
                      Apple lets you reset a forgotten Screen Time passcode
                      using the Apple ID you registered. If that&apos;s your own
                      account, you can bypass the lock yourself. Which is why
                      it&apos;s important to use credentials you don&apos;t have
                      easy access to.
                    </p>
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <p className="font-medium text-ink-strong">Steps</p>
                <ol className="list-decimal list-inside space-y-1.5 pl-1">
                  <li>
                    Open <span className="text-ink-strong">Screen Time</span> in
                    Settings
                  </li>
                  <li>
                    Tap{" "}
                    <span className="text-ink-strong">
                      &quot;Lock Screen Time Settings&quot;
                    </span>
                  </li>
                  <li>
                    Set a Screen Time passcode (have a friend enter it, use{" "}
                    <a
                      href="https://password-locker.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sage underline decoration-sage/40 underline-offset-4 transition-colors hover:decoration-sage"
                    >
                      password-locker
                    </a>
                    , or type a random PIN yourself)
                  </li>
                  <li>
                    Enter an Apple ID for passcode recovery, ideally a second
                    account you don&apos;t have the password to
                  </li>
                  <li>
                    Done. Screen Time can no longer be disabled without that
                    passcode or Apple ID login.
                  </li>
                </ol>
                <div className="grid grid-cols-3 gap-3 mt-3">
                  <div className="overflow-hidden rounded-xl border border-line">
                    <Image
                      src="/IMG_2600.PNG"
                      alt="Screen Time settings with the Lock Screen Time Settings button"
                      width={400}
                      height={870}
                      className="w-full h-auto"
                    />
                  </div>
                  <div className="overflow-hidden rounded-xl border border-line">
                    <Image
                      src="/IMG_2601.PNG"
                      alt="Re-enter Screen Time passcode screen"
                      width={400}
                      height={870}
                      className="w-full h-auto"
                    />
                  </div>
                  <div className="overflow-hidden rounded-xl border border-line">
                    <Image
                      src="/IMG_2602.PNG"
                      alt="Screen Time Passcode Recovery prompt asking for an Apple ID"
                      width={400}
                      height={870}
                      className="w-full h-auto"
                    />
                  </div>
                </div>
              </div>
            </div>
          </MethodAccordion>
        </div>
      </div>
    </FAQItem>
  );
}
