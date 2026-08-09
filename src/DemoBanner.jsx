import "./DemoBanner.css";

/** Persistent museum/demo notice for the archived splash site. */
export function DemoBanner() {
  return (
    <aside className="demo-banner" role="status">
      <strong>Historical demo</strong>
      <span>
        {" "}
        — 2024 Full Stack Boston splash page. Not the live site.{" "}
        <a href="https://fullstackboston.com">Visit fullstackboston.com</a>
      </span>
    </aside>
  );
}
