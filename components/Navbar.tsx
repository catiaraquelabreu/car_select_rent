"use client";

import Link from "next/link";
import Image from "next/image";
import { CustomButton } from ".";
import { UserButton } from "@clerk/nextjs";
import { useUser } from "@clerk/nextjs";

const Navbar = () => {
  const { isLoaded, isSignedIn, user } = useUser();
  if (isLoaded) {
    return (
      <header className="w-full absolute z-10">
        <nav className="max-w-[1440px] mx-auto flex justify-between items-center sm:px-16 px-6 py-4">
          <Link href="/" className="flex justify-center items-center">
            <Image
              src="/logo.svg"
              alt="Car Rental Logo"
              width={118}
              height={18}
              className="object-cotain"
            />
          </Link>

          {isSignedIn ? (
            <div className="flex gap-4 items-center">
              {user ? <p>Welcome {user.firstName}!</p> : null}
              <UserButton
                appearance={{
                  elements: {
                    avatarBox: "h-10 w-10",
                  },
                  variables: {
                    colorPrimary: "#ff7000",
                  },
                }}
                afterSignOutUrl="/"
              />
            </div>
          ) : (
            <Link href="/sign-in">
              <CustomButton
                title="Sign In"
                btnType="button"
                containerStyles="text-orange-400 hover:text-white bg-white hover:bg-orange-400 rounded-full border-2 border-orange-400 min-w-[130px]"
              />
            </Link>
          )}
        </nav>
      </header>
    );
  }
};

export default Navbar;
