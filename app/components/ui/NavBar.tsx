"use client";

import Link from "next/link";
import { DarkThemeToggle, Navbar } from "flowbite-react";

export function NavBar() {
  return (

    <Navbar className="bg-blue-500 dark:bg-blue-300 fixed top-0 w-full z-50 left-0">
      <DarkThemeToggle className="bg-black dark:bg-white" />
      <Navbar.Brand as={Link} href="https://flowbite-react.com">
        <img src="/favicon.svg" className="mr-3 h-6 sm:h-9" alt="Flowbite React Logo" />
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">Flowbite React</span>
      </Navbar.Brand>
      <Navbar.Toggle />

      <Navbar.Collapse>

        <Navbar.Link href="#" active>
          Home
        </Navbar.Link>
        <Navbar.Link as={Link} href="#">
          About
        </Navbar.Link>
        <Navbar.Link href="#">Services</Navbar.Link>
        <Navbar.Link href="#">Pricing</Navbar.Link>
        <Navbar.Link href="#">Contact</Navbar.Link>

      </Navbar.Collapse>

    </Navbar>

  );
}
