"use client"
import { Button } from "@/components/ui/button";
import { useAuth, UserButton } from "@clerk/nextjs";
import { LogIn, LogOut, Menu } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import React from "react";

const Navbar = () => {

	const {isSignedIn} = useAuth();
    const router = useRouter();
    const pathname = usePathname();

    const isTeacher = pathname.startsWith("/teacher");
    const isStudent = pathname.startsWith('/student');

    console.log(isTeacher, isStudent);


    return (
        <div className="bg-white w-full flex flex-row min-h-[60px] justify-between items-center px-2 border-b border-b-gray-200 fixed z-0 ">
            <div className="flex flex-row items-center gap-2">
                <Button variant={"ghost"} className="md:hidden flex">
                    <Menu />
                </Button>
                <div className="flex flex-row items-center gap-2">
					<Image 
						src="/images/logo.svg"
						alt="Doodle Learning Ground"
						width={40}
						height={40}
						className="w-[30px] h-[30px]"
					/>
                    <div>
                        <h1 className="text-1xl font-bold text-red-400">
                            Doodle Learning Ground
                        </h1>
                        <p className="text-sm">Code with Doodle</p>

                    </div>
                </div>
            </div>
			{isSignedIn ? (
                <div className="flex flex-row items-center gap-2">
                    {(isTeacher || isStudent) ? (
                        <Button variant={"ghost"}>
                            <LogOut className="w-4 h-4" /> 
                            <span>Exit</span>
                        </Button>) : 
                        (
                            <Link href="/teacher/courses">
                                <Button variant={"ghost"}>Teacher Mode</Button>
                            </Link>
                        )
                    }
                    <UserButton />
                </div>
            ) : <Button onClick={() => router.push("/sign-in")} variant={"outline"} className="flex flex-row gap-2 items-center"><LogIn/> <span>Sign In</span></Button>}
            
        </div>
    );
};

export default Navbar;
