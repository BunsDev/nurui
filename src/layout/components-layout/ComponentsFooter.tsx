import React from "react";

const ComponentsFooter = () => {
  return (
    <footer className="relative py-6 md:py-0 mt-auto">
      <div
        className="absolute top-0 h-px w-full "
        style={{
          background:
            "radial-gradient(50% 100% at 50% 100%,#3ca2fa 0%,rgba(255,255,255,0) 100%)",
        }}
      ></div>
      <div className="container flex flex-col items-center justify-center gap-4 md:h-16 md:flex-row">
        <p className="text-[--copy-right-color] text-xs lg:text-sm">
            Created by{" "}
            <a
              href="https://github.com/afsar-dev"
              target="_blank"
              className="text-[var(--primary-color)] border-b border-[var(--primary-color)] font-semibold"
            >
              Md Afsar Mahmud
            </a>{" "}
            © {new Date().getFullYear()}. All rights reserved.
          </p>
      </div>
    </footer>
  );
};

export default ComponentsFooter;
