"use client";

import { cn } from "@/lib/utils";
import { Navigation, Newspaper, Pickaxe } from "lucide-react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import React from "react";

const sidebarData = [
    {
        title: "Browse",
        icon: Navigation,
        href: "/",
    },
    {
        title: "Workshops",
        href: "/workshops",
        icon: Pickaxe,
    },
    {
        title: "News",
        href: "/news",
        icon: Newspaper,
    },
];

const SidebarItem = ({ item }: { item: (typeof sidebarData)[0] }) => {
    const pathname = usePathname();
    const router = useRouter();

    const isActive =
        (pathname === "/" && item.href === "/") ||
        pathname === item.href ||
        pathname.startsWith(`${item.href}/`);

    return (
        <li className="mb-1">
            <Link
                href={item.href}
                className={cn(
                    "flex flex-row items-center gap-2 hover:bg-gray-100 px-2 py-4",
                    isActive ? "bg-gray-100 border-r-4 border-r-sky-800" : ""
                )}
            >
                {item.icon && <item.icon className="h-4 w-4" />}
                <span>{item.title}</span>
            </Link>
        </li>
    );
};

const SidebarRoute = ({ data }: { data: typeof sidebarData }) => {
    return (
        <ul>
            {data.map((item, index) => (
                <SidebarItem key={index} item={item} />
            ))}
        </ul>
    );
};
const Sidebar = () => {
    return (
        <div className="bg-white border-r hidden md:flex border-gray-200 flex-col h-full w-64 pt-4 fixed space-y-0 z-0">
            {<SidebarRoute data={sidebarData} />}
        </div>
    );
};

export default Sidebar;
