import Link, { LinkProps } from "next/link";
import { useRouter } from "next/navigation";
import { MouseEvent, ReactNode } from "react";
import React from "react";

interface LinkTransitionProps {
  href: string;
  children: React.ReactNode;
  className?: string;
}

const LinkTransition: React.FC<LinkTransitionProps & LinkProps> = ({ href, children, ...rest }) => {
  const router = useRouter();
  const handleClick = (e: MouseEvent<HTMLAnchorElement>) => {
    if (!document.startViewTransition) {
      // browser does not support view transition. Continue the default behavior.
      return;
    } else {
      // browser supports view transition. Animate the transition.
      e.preventDefault();
      document.startViewTransition(() => {
        router.push(href as string);
      });
    }
  };

  return (
    <Link href={href} onClick={handleClick} {...rest}>
      {children}
    </Link>
  );
};

export default LinkTransition;
