"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { HamburgerMenuIcon } from "@radix-ui/react-icons";

import { cn } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "../ui/navigation-menu";
import { Button } from "../ui/button";
import { Sheet, SheetContent, SheetHeader, SheetTrigger } from "../ui/sheet";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";
import { Separator } from "../ui/separator";

const Navbar = () => {
  const NAVBAR_ITEM = [
    {
      title: "PROFIL",
      submenu: [
        {
          title: "Tentang",
          href: "/tentang",
        },
        {
          title: "Profile Pejabat Struktural",
          href: "/profile-pejabat-struktural",
        },
        {
          title: "Tugas dan Fungsi",
          href: "/tugas-dan-fungsi",
        },
        {
          title: "Visi dan Misi",
          href: "/visi-dan-misi",
        },
      ],
    },
    {
      title: "PROGAM",
      submenu: [
        {
          title: "PROGAM DISKOMINFO",
          href: "/program-diskominfo",
        },
      ],
    },
    {
      title: "BERITA",
      href: "/berita",
    },
    {
      title: "GALERI",
      submenu: [
        {
          title: "Galeri Foto",
          href: "/galeri-foto",
        },
        {
          title: "Galeri Video",
          href: "/galeri-video",
        },
      ],
    },
    {
      title: "KONTAK",
      href: "/kontak",
    },
  ];

  return (
    <header className="bg-white py-3 drop-shadow-lg">
      <nav className="container hidden justify-between md:flex">
        <Link href="/" className="">
          <Image
            src="/images/base-logo.png"
            alt="Diskominfo Sragen"
            width={200}
            height={200}
          />
        </Link>
        <div></div>
        <NavigationMenu>
          <NavigationMenuList>
            {NAVBAR_ITEM.map((item, index) => (
              <NavigationMenuItem key={index}>
                {item.href ? (
                  <Link href={item.href} legacyBehavior passHref>
                    <NavigationMenuLink
                      className={navigationMenuTriggerStyle()}
                    >
                      {item.title}
                    </NavigationMenuLink>
                  </Link>
                ) : (
                  <NavigationMenuTrigger>{item.title}</NavigationMenuTrigger>
                )}
                {item.submenu && (
                  <NavigationMenuContent>
                    <ul className="grid p-2 md:w-[300px]">
                      {item.submenu.map((subitem, index) => (
                        <ListItem
                          key={index}
                          href={subitem.href}
                          title={subitem.title}
                        />
                      ))}
                    </ul>
                  </NavigationMenuContent>
                )}
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>
      </nav>
      <nav className="container flex justify-between md:hidden">
        <Link href="/" className="">
          <Image
            src="/images/base-logo.png"
            alt="Diskominfo Sragen"
            width={200}
            height={200}
          />
        </Link>
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="outline" size="icon">
              <HamburgerMenuIcon />
            </Button>
          </SheetTrigger>
          <SheetContent side="left">
            <SheetHeader>
              <Image
                src="/images/base-logo.png"
                alt="Diskominfo Sragen"
                width={200}
                height={200}
              />
            </SheetHeader>
            <div className="mt-4">
              {NAVBAR_ITEM.map((item, index) => (
                <div key={index}>
                  <Accordion type="multiple" className="w-full">
                    {item.href && (
                      <div className="pt-3">
                        <Link href={item.href}>
                          <p className="p-3 transition-all hover:text-blue-950">
                            {item.title}
                          </p>
                        </Link>
                        <Separator className="mt-3" />
                      </div>
                    )}

                    {item.submenu && (
                      <AccordionItem key={index} value={`item-1`}>
                        <AccordionTrigger>
                          <p className="p-3 ">{item.title}</p>
                        </AccordionTrigger>
                        {item.submenu.map((subitem, index) => (
                          <AccordionContent key={index}>
                            <Link key={index} href={subitem.href}>
                              <p className="p-3 transition-all hover:text-blue-950">
                                - {subitem.title}
                              </p>
                            </Link>
                          </AccordionContent>
                        ))}
                      </AccordionItem>
                    )}
                  </Accordion>
                </div>
              ))}
            </div>
          </SheetContent>
        </Sheet>
      </nav>
    </header>
  );
};

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className,
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";

export default Navbar;
