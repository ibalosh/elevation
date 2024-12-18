"use client";
import classes from "./navlink.module.css"
import Link from "next/link";
import {usePathname} from "next/navigation";

export default function NavLink({ href, children }) {
  const path = usePathname();
  let active = path.startsWith(href);

  if (href === "/" && path.length > 1)
    active = false;

  return (
    <Link
      href={href}
      className={ active ? `${classes.link} ${classes.active}` : classes.link}>
       {children}
    </Link>
  )
}