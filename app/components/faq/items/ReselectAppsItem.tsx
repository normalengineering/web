import { FAQItem } from "../FAQAccordion";

export function ReselectAppsItem() {
  return (
    <FAQItem question="Why do I have to reselect apps in my schedules and groups when I update my selected apps?">
      <div className="space-y-3">
        <p>This is an Apple limitation, not a Normal one.</p>
        <p>
          Apple&apos;s Screen Time API is restrictive for privacy reasons. The
          app-selection pop-over is made by Apple, not us, and is the only way
          to select apps for Screen Time.
        </p>
        <p>Here&apos;s the technical reason:</p>
        <ul className="list-disc list-inside space-y-1.5 pl-1">
          <li>
            Apple creates a random ID for each app every time you use the picker
          </li>
          <li>
            Developers aren&apos;t told which apps were previously selected
          </li>
          <li>
            There&apos;s no way for us to carry over your previous selections
            automatically
          </li>
        </ul>
        <p>
          We require reselecting schedules and groups to ensure Normal&apos;s
          groups, apps, and timed unblocks work consistently. We wish we could
          make this smoother, but Apple enforces this strictly to protect user
          privacy.
        </p>
      </div>
    </FAQItem>
  );
}
