import Link from "next/link";
import { TransitionLink } from "../utils/TransitionLink";

export const FlipNav = () => {
  return (
    <nav className="p-4 flex items-center justify-between relative">
      <NavLeft />
      <button className="px-4 py-2 bg-gradient-to-r from-violet-600 to-indigo-600 text-white font-medium rounded-md whitespace-nowrap">
        Sign in
      </button>
    </nav>
  );
};

const NavLeft = () => {
  return (
    <div className="flex items-center gap-6">
      <Link href="/">
        <Logo />
      </Link>
      <TransitionLink href="/about">About</TransitionLink>
      <TransitionLink href="/community">Community</TransitionLink>
      <TransitionLink href="/pricing">Pricing</TransitionLink>
      <TransitionLink href="/company">Company</TransitionLink>
    </div>
  );
};

const Logo = () => {
  // Temp logo from https://logoipsum.com/
  return (
    <svg
      width="50"
      height="39"
      viewBox="0 0 50 39"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="fill-gray-800"
    >
      <path
        d="M16.4992 2H37.5808L22.0816 24.9729H1L16.4992 2Z"
        stopColor="#000000"
      ></path>
      <path
        d="M17.4224 27.102L11.4192 36H33.5008L49 13.0271H32.7024L23.2064 27.102H17.4224Z"
        stopColor="#000000"
      ></path>
    </svg>
  );
};
