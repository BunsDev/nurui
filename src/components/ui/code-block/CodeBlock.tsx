"use client";
import React, { useState } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { atomDark } from "react-syntax-highlighter/dist/cjs/styles/prism";
import { RxCopy } from "react-icons/rx";
import { FaCheck } from "react-icons/fa6";
import { ChevronDown } from "lucide-react";
import { FaJsSquare } from "react-icons/fa";
import { BiLogoTypescript } from "react-icons/bi";

type CodeBlockProps = {
  language?: string;
  code?: string;
};

export const CodeBlock = ({ language = "tsx", code = "" }: CodeBlockProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState("TypeScript (.tsx)");
  const [copied, setCopied] = React.useState(false);
  const selectedLang = languages.find((lang) => lang.name === selectedLanguage);

  const copyToClipboard = async () => {
    if (code) {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const handleSelect = (languageName: string) => {
    setSelectedLanguage(languageName);
    setIsOpen(false);
  };

  return (
    <div className="border border-white/15 rounded-lg max-h-[30rem] overflow-auto w-full text-sm">
      <div className="flex items-center justify-end gap-3 p-3 bg-white/10">
        <button
          onClick={copyToClipboard}
          className="flex items-center gap-1 text-sm text-zinc-400 hover:text-zinc-200 transition-colors"
        >
          {copied ? <FaCheck /> : <RxCopy />}
        </button>

        <div className="relative">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="flex items-center gap-1"
          >
            <span>{selectedLang?.icon}</span>
            <ChevronDown className={`w-3 h-3 ${isOpen ? "rotate-180" : ""}`} />
          </button>

          {/* Dropdown Menu */}
          {isOpen && (
            <div className="absolute z-50 right-0 mt-3.5 border border-white/15 rounded-lg min-w-40 bg-[var(--glass-color)] p-1">
              {languages.map((language, index) => (
                <button
                  key={index}
                  onClick={() => handleSelect(language?.name)}
                  className="w-full flex items-center gap-1 p-2 z-50 hover:bg-white/10 rounded-lg"
                >
                  <span>{language.icon}</span>
                  <span>{language.name}</span>
                </button>
              ))}
            </div>
          )}

          {/* Backdrop to close dropdown when clicking outside */}
          {isOpen && (
            <div
              className="fixed inset-0 z-0"
              onClick={() => setIsOpen(false)}
            />
          )}
        </div>
      </div>

      <SyntaxHighlighter
        language={language}
        style={atomDark}
        wrapLines
        PreTag="div"
        showLineNumbers={true}
        customStyle={{
          margin: 0,
          padding: 16,
          background: "transparent",
        }}
      >
        {code}
      </SyntaxHighlighter>
    </div>
  );
};

const languages = [
  {
    name: "JavaScript (.jsx)",
    icon: <FaJsSquare className="text-[#EFD81D] text-xl" />,
  },
  {
    name: "TypeScript (.tsx)",
    icon: <BiLogoTypescript className="text-[#377CC8] text-xl" />,
  },
];