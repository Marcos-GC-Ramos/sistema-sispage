'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function Navbar() {
  return (
    <div className="bg-[#FFFFFF] w-full flex justify-between items-center rounded-[12px] drop-shadow gap-2 p-[4px_4px_4px_40px] min-h-[74px]">
      <div>
        <Link href="/inicio">
          <div className="flex gap-2 items-center h-full">
            <Image
              src="/img/navbar/logo-navbar-p1.png"
              alt="Logo Navbar"
              width={45}
              height={43}
            />
            
            <Image
              src="/img/navbar/logo-navbar-p2.png"
              alt="Logo Navbar"
              width={82}
              height={24}
            />
          </div>
        </Link>
      </div>

      <div className="flex items-center gap-1">
        <button
          className="p-0.5 hover:bg-gray-200 rounded-[4px] block lg:hidden"
          type="button"
        >
          <svg
            className="w-6 h-6 text-[#00112F]"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              fillRule="evenodd"
              d="M10 4H4c-1.10457 0-2 .89543-2 2v12c0 1.1046.89543 2 2 2h6V4ZM4.37868 9.29289c-.39052.39053-.39052 1.02371 0 1.41421l1.29283 1.2928-1.29283 1.2929c-.39052.3905-.39052 1.0237 0 1.4142.39052.3905 1.02369.3905 1.41421 0l1.99994-2c.39053-.3905.39053-1.0236 0-1.4142L5.79289 9.29289c-.39052-.39052-1.02369-.39052-1.41421 0Z"
              clipRule="evenodd"
            />
            <path d="M12 20h8c1.1046 0 2-.8954 2-2V6c0-1.10457-.8954-2-2-2h-8v16Z" />
          </svg>
        </button>

        <Image
          src="/img/navbar/logo-sec.svg"
          alt="Logo SEC"
          width={203}
          height={68}
        />
      </div>
    </div>
  );
}
