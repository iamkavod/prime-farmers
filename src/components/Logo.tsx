import Link from "next/link";
import { cn } from "@/lib/utils";
import Image from "next/image";

export function Logo({
  className,
  fullNameOnly = false,
}: {
  className?: string;
  fullNameOnly?: boolean;
}) {
  return (
    <Link
      href="/"
      className={cn(
        "flex items-center gap-2 text-lg font-bold font-headline",
        className,
      )}
    >
      <div className="flex-shrink-0 p-2 rounded-md">
        <Image
          src="/logo.webp"
          height={54}
          width={55}
          alt="Prime Farmers Association"
          className="size-10 lg:size-14"
        />
      </div>
      {fullNameOnly ? (
        "Prime Farmers Association"
      ) : (
        <>
          <span className="sm:hidden">PFA</span>
          <span className="hidden sm:inline">Prime Farmers Association</span>
        </>
      )}
    </Link>
  );
}
