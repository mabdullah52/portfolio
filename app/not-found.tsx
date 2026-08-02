import Link from "next/link";

export default function NotFound() {
  return (
    <div className="mx-auto flex max-w-3xl flex-col items-start px-6 py-24">
      <span className="font-mono text-xs uppercase tracking-wider text-signal">404</span>
      <h1 className="mt-3 font-display text-3xl font-medium text-ink">
        Nothing here.
      </h1>
      <p className="mt-3 text-muted">
        This page doesn&apos;t exist, or the project you&apos;re looking for has moved.
      </p>
      <Link
        href="/"
        className="mt-6 font-mono text-sm text-signal hover:underline"
      >
        ← Back to home
      </Link>
    </div>
  );
}
