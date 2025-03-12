# Conversion

* nav
    <nav> <---> <Navbar>


```{
"use client";

import Link from "next/link";
import { DarkThemeToggle, Navbar } from "flowbite-react";
import Image from "next/image";

export function NavBar() {
}
```
   ```
   {

    
         return (

    <Navbar
      className="
    bg-indigo-500
    dark:bg-indigo-300
    fixed
    p-10
    top-0
    w-full
    z-50
    left-0"
    >

      {/* <DarkThemeToggle className="bg-black dark:bg-white" /> */}

      <Navbar.Brand as={Link} href="https://flowbite-react.com">

        <img src="/flowbite-logo.png" className="mr-3 h-6 sm:h-9" alt="Flowbite React Logo" />

        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">Flowbite React</span>

      </Navbar.Brand>
      <Navbar.Toggle />

      <Navbar.Collapse className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">

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
   ```