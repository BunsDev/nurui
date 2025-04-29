"use client";
import AuthWithSocialMediaButton from "@/components/common/AuthWithSocialMediaButton";
import Bytenexia from "@/components/common/Bytenexia";
import React from "react";
import Link from "next/link";
import OutlineButton from "@/components/common/OutlineButton";

interface SingInSingUpComponentProps {
  data: {
    leftSection: {
      greeting: string;
      description: string;
      buttonText: string;
      navigation: string;
    };
    rightSection: {
      title: string;
      subtitle: string;
      authOptions: {
        provider: string;
        label: string;
        icon: React.ReactNode;
        action: string;
      }[];
      orText?: string;
      formFields: {
        label: string;
        placeholder: string;
        type: string;
      }[];
      forgotPasswordText?: string;
      submitButton: string;
    };
    reverse?: boolean;
  };
}

const SingInSingUpComponent: React.FC<SingInSingUpComponentProps> = ({
  data,
}) => {
  return (
    <div className="min-h-screen flex items-center">
      <div
        className={`bg-gradient-to-t from-[var(--glass-color-2)] via-[var(--glass-color-2)] to-[var(--primary-color-1)] max-w-7xl mx-auto w-full flex ${
          data?.reverse ? "flex-row-reverse" : "flex-row"
        } clip-path-auth-layout`}
      >
        <div
          className={`w-1/2 bg-[var(--primary-color-1)] bg-[url('/images/background-layout.png')] rounded-xl ${
            data?.reverse ? "mb-5 mt-10 ml-28 mr-5" : "mb-10 mt-5 ml-5"
          } flex flex-col items-center justify-center text-center space-y-5`}
        >
          <h3 className="text-4xl font-bold">{data?.leftSection?.greeting}</h3>
          <p className="text-lg max-w-96">{data?.leftSection?.description}</p>
          <OutlineButton
            title={data?.leftSection?.buttonText}
            navigation={data?.leftSection?.navigation}
          />
        </div>
        <div
          className={`flex flex-col items-center w-1/2 ${
            data?.reverse ? "" : "pl-20"
          } p-14`}
        >
          <Bytenexia />
          <h1 className="text-3xl font-semibold mt-5">
            {data?.rightSection?.title}
          </h1>
          <p className="text-lg mt-3">{data?.rightSection?.subtitle}</p>
          <div className="flex items-center gap-4 mt-4">
            {data?.rightSection?.authOptions?.map((d, idx) => {
              return (
                <AuthWithSocialMediaButton
                  key={d?.label + idx}
                  title={d?.label}
                  icon={d?.icon}
                />
              );
            })}
          </div>
          <p className="text-lg mt-5">{data?.rightSection?.orText}</p>
          <form className="flex flex-col w-full mt-6">
            {data?.rightSection?.formFields?.map((d, idx) => {
              return (
                <div className="flex flex-col mb-1" key={d?.label + idx}>
                  <label htmlFor={d?.placeholder} className="capitalize mb-1">
                    {d?.label}
                  </label>
                  <input
                    type={d?.type}
                    placeholder={d?.placeholder}
                    className="border border-gray-300 rounded p-2 mb-4"
                  />
                </div>
              );
            })}
            {data?.rightSection?.forgotPasswordText && (
              <Link href={"/"} className="text-right mb-4 text-blue-500">
                {data?.rightSection?.forgotPasswordText}
              </Link>
            )}
            <button
              type="submit"
              className="bg-[var(--primary-color)] text-[var(--white-color)] rounded p-2"
            >
              {data?.rightSection?.submitButton}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SingInSingUpComponent;
