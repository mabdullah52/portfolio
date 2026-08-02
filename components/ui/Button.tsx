import type { MouseEventHandler, ReactNode } from "react";
import { cn } from "@/lib/utils";

type Variant = "primary" | "ghost";

interface ButtonBaseProps {
  readonly children: ReactNode;
  readonly variant?: Variant;
  readonly className?: string;
  readonly ariaLabel?: string;
}

interface LinkButtonProps extends ButtonBaseProps {
  readonly href: string;
  readonly onClick?: never;
  readonly type?: never;
  readonly download?: string;
}

interface ClickButtonProps extends ButtonBaseProps {
  readonly href?: never;
  readonly onClick?: MouseEventHandler<HTMLButtonElement>;
  readonly type?: "button" | "submit";
}

export type ButtonProps = LinkButtonProps | ClickButtonProps;

const baseStyles =
  "inline-flex items-center gap-2 rounded-md px-5 py-2.5 font-mono text-sm tracking-wide transition-colors duration-150 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-signal";

const variantStyles: Record<Variant, string> = {
  primary: "bg-signal text-bg hover:bg-signal/90",
  ghost: "border border-line text-ink hover:border-signal hover:text-signal",
};

export function Button(props: ButtonProps) {
  const { children, variant = "primary", className, ariaLabel } = props;
  const styles = cn(baseStyles, variantStyles[variant], className);

  if (props.href) {
    const isExternal = props.href.startsWith("http") || props.href.startsWith("mailto:");
    return (
      <a
        href={props.href}
        className={styles}
        aria-label={ariaLabel}
        {...(props.download ? { download: props.download } : {})}
        {...(isExternal ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      >
        {children}
      </a>
    );
  }

  return (
    <button
      type={props.type ?? "button"}
      onClick={props.onClick}
      className={styles}
      aria-label={ariaLabel}
    >
      {children}
    </button>
  );
}
