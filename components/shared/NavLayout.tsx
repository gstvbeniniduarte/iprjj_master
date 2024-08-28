"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import Header from "./Header/Header";

const NavLayout = () => {
  const [isActive, setIsActive] = useState(false);
  const [isHidden, setIsHidden] = useState(false);
  const [isNavOpen, setIsNavOpen] = useState(false);
  const lastScrollPosRef = useRef(0);

  const handleScroll = useCallback(() => {
    const currentScrollPos = window.scrollY;

    setIsActive(currentScrollPos >= 48 || isNavOpen);
    setIsHidden(currentScrollPos > lastScrollPosRef.current && !isNavOpen);

    lastScrollPosRef.current = currentScrollPos;
  }, [isNavOpen]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  const handleNavToggle = useCallback(() => {
    setIsNavOpen((prev) => !prev);
    setIsActive((prev) => !prev || window.scrollY >= 48);
  }, []);

  useEffect(() => {
    if (isNavOpen) {
      document.body.classList.add("scroll-lock");
    } else {
      document.body.classList.remove("scroll-lock");
    }

    return () => {
      document.body.classList.remove("scroll-lock");
    };
  }, [isNavOpen]);

  return (
    <Header
      isActive={isActive}
      isHidden={isHidden}
      isOpen={isNavOpen}
      onToggle={handleNavToggle}
    />
  );
};

export default NavLayout;
