"use client";
import NextLink from "next/link";
import { useEffect, useState } from "react";

export default function Link({disabled}: {disabled?: boolean}) {
  const [isOpen, setIsOpen] = useState(true);

  useEffect(() => {
    setTimeout(
      () => {
        setIsOpen(true);
      },
      20 * 60 * 1000,
    );
  }, []);

  if (isOpen && !disabled) {
    return (
      <NextLink
        href="https://api.socrative.com/rc/yLhkrp?method=qr"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block mt-6 text-blue-600 font-medium hover:text-blue-800 transition duration-300"
      >
        Abra o teste clicando aqui
      </NextLink>
    );
  }

  return (
    <span className="inline-block mt-6 text-gray-600 font-medium">
      Leia o texto para liberar o link
    </span>
  );
}
