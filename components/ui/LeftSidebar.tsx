"use client";

import { sidebarLinks } from "@/constants";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function LeftSidebar() {
  const pathname = usePathname();

  return (
    <section className="left_sidebar">
      <nav className="flex flex-col gap-6">
        <Link
          href="/"
          className="flex cursor-pointer items-center gap-1 pb-10 max-lg:justify-center"
        >
          <Image
            src="/icons/logo.svg"
            alt="Vocalix Logo"
            height={27}
            width={23}
          />
          <h1 className="text-24 font-extrabold text-white-1">Vocalix</h1>
        </Link>

        {sidebarLinks.map((item, index) => {
          const isActive =
            pathname === item.route || pathname.startsWith(`${item.route}/`);

          return (
            <Link
              key={index}
              href={item.route}
              className={cn(
                "flex items-center gap-3 py-4 justify-center max-lg:px-4 lg:justify-start",
                "text-white-1 hover:text-white-3",
                { "bg-nav-focus border-r border-orange-1 ": isActive }
              )}
            >
              <Image
                src={item.imgURL}
                alt={item.label}
                height={24}
                width={24}
              />
              <span>{item.label}</span>
            </Link>
          );
        })}
      </nav>
    </section>
  );
}
