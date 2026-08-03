import * as React from "react";

import { Button, type ButtonProps } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type Ripple = { id: number; x: number; y: number };

/** Button with a material-style ripple micro-interaction. */
export const RippleButton = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, children, onClick, ...props }, ref) => {
    const [ripples, setRipples] = React.useState<Ripple[]>([]);

    if (props.asChild) {
      return (
        <Button
          ref={ref}
          className={cn("relative overflow-hidden", className)}
          onClick={onClick}
          {...props}
        >
          {children}
        </Button>
      );
    }

    return (

      <Button
        ref={ref}
        className={cn("relative overflow-hidden", className)}
        onClick={(event) => {
          const rect = event.currentTarget.getBoundingClientRect();
          const id = Date.now() + Math.random();
          setRipples((prev) => [
            ...prev,
            { id, x: event.clientX - rect.left, y: event.clientY - rect.top },
          ]);
          window.setTimeout(
            () => setRipples((prev) => prev.filter((r) => r.id !== id)),
            650,
          );
          onClick?.(event);
        }}
        {...props}
      >
        <span className="relative z-10 inline-flex items-center gap-2">{children}</span>
        {ripples.map((r) => (
          <span
            key={r.id}
            aria-hidden
            className="pointer-events-none absolute h-8 w-8 rounded-full bg-current/30"
            style={{
              left: r.x - 16,
              top: r.y - 16,
              animation: "ripple-out 600ms ease-out forwards",
            }}
          />
        ))}
      </Button>
    );
  },
);
RippleButton.displayName = "RippleButton";
