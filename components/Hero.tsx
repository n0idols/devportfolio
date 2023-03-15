import React from "react";
import Image from "next/image";

export default function Hero() {
  return (
    <div className="">
      <div className="max-w-6xl mx-auto h-full px-2">
        <div className="md:grid grid-cols-2 items-center">
          <div className="">
            <div className="space-y-21 ">
              <h1 className="big-title">
                Nice to meet you! I'm{" "}
                <span className="underline decoration-primary decoration-4">
                  Scott Wilson
                </span>
                .
              </h1>
              <p className="my-8">
                Based out of California, I’m a front-end developer passionate
                about building accessible web apps that users love.
              </p>
            </div>
            <button>contact me</button>
          </div>

          <div className="">
            <Image
              src="/image-profile-desktop.webp"
              alt="hero"
              width={540}
              height={200}
              className=""
              //   fill
              //   style={{ objectFit: "contain" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
