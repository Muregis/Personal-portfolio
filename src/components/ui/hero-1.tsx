"use client";

import * as React from "react";
import { Bot, Paperclip, Sparkles } from "lucide-react";

const Hero1 = () => {
  return (
    <div className="relative flex min-h-screen flex-col overflow-x-hidden bg-[#0c0414] text-white">
      <div className="absolute right-[-30rem] top-[-40rem] z-0 flex rotate-[-20deg] gap-[10rem] skew-[-40deg] opacity-50 blur-[4rem]">
        <div className="h-[20rem] w-[10rem] bg-linear-90 from-white to-blue-300" />
        <div className="h-[20rem] w-[10rem] bg-linear-90 from-white to-blue-300" />
        <div className="h-[20rem] w-[10rem] bg-linear-90 from-white to-blue-300" />
      </div>
      <div className="absolute right-[-50rem] top-[-50rem] z-0 flex rotate-[-20deg] gap-[10rem] skew-[-40deg] opacity-50 blur-[4rem]">
        <div className="h-[20rem] w-[10rem] bg-linear-90 from-white to-blue-300" />
        <div className="h-[20rem] w-[10rem] bg-linear-90 from-white to-blue-300" />
        <div className="h-[20rem] w-[10rem] bg-linear-90 from-white to-blue-300" />
      </div>
      <div className="absolute right-[-60rem] top-[-60rem] z-0 flex rotate-[-20deg] gap-[10rem] skew-[-40deg] opacity-50 blur-[4rem]">
        <div className="h-[30rem] w-[10rem] bg-linear-90 from-white to-blue-300" />
        <div className="h-[30rem] w-[10rem] bg-linear-90 from-white to-blue-300" />
        <div className="h-[30rem] w-[10rem] bg-linear-90 from-white to-blue-300" />
      </div>

      <header className="relative z-10 flex items-center justify-between p-6">
        <div className="flex items-center gap-2">
          <div className="rounded-full bg-white/10 p-2">
            <Bot className="h-5 w-5 text-blue-200" />
          </div>
          <div className="text-md font-bold">HextaAI</div>
        </div>
        <button className="cursor-pointer rounded-full bg-white px-4 py-2 text-sm font-semibold text-black hover:bg-gray-200">
          Get Started
        </button>
      </header>

      <main className="relative z-10 flex flex-1 flex-col items-center justify-center px-4 text-center">
        <div className="mx-auto max-w-4xl space-y-6">
          <div className="flex flex-1 justify-center">
            <div className="mx-4 flex w-fit items-center gap-2 rounded-full bg-[#1c1528] px-4 py-2">
              <span className="flex items-center gap-2 text-xs">
                <span className="rounded-full bg-black p-1">Launch</span>
                Introducing Magic Components
              </span>
            </div>
          </div>
          <h1 className="text-4xl font-bold leading-tight sm:text-5xl">
            Build Stunning websites effortslessly
          </h1>
          <p className="text-md">
            HextaAI can create amazing websites with few lines of prompt.
          </p>
          <div className="relative mx-auto w-full max-w-2xl">
            <div className="flex items-center rounded-full bg-[#1c1528] p-3">
              <button className="rounded-full p-2 transition-all hover:bg-[#2a1f3d]">
                <Paperclip className="h-5 w-5 text-gray-400" />
              </button>
              <button className="rounded-full p-2 transition-all hover:bg-[#2a1f3d]">
                <Sparkles className="h-5 w-5 text-purple-400" />
              </button>
              <input
                type="text"
                placeholder="How HextaAI can help you today?"
                className="flex-1 bg-transparent pl-4 text-gray-300 outline-none"
              />
            </div>
          </div>
          <div className="mx-auto mt-12 flex max-w-2xl flex-wrap justify-center gap-2">
            <button className="rounded-full bg-[#1c1528] px-4 py-2 text-sm hover:bg-[#2a1f3d]">
              Launch a blog with Astro
            </button>
            <button className="rounded-full bg-[#1c1528] px-4 py-2 text-sm hover:bg-[#2a1f3d]">
              Develop an app using NativeScript
            </button>
            <button className="rounded-full bg-[#1c1528] px-4 py-2 text-sm hover:bg-[#2a1f3d]">
              Build documentation with VitePress
            </button>
            <button className="rounded-full bg-[#1c1528] px-4 py-2 text-sm hover:bg-[#2a1f3d]">
              Generate UI with shadcn
            </button>
            <button className="rounded-full bg-[#1c1528] px-4 py-2 text-sm hover:bg-[#2a1f3d]">
              Generate UI with HextaUI
            </button>
          </div>
        </div>
      </main>
    </div>
  );
};

export { Hero1 };

