"use client";

import Link from "next/link"
import { Button } from "./ui/button"
import Image from "next/image"
import { useEffect, useRef } from "react";

const HeroSection = () => {
    const imageRef = useRef(null);

    useEffect(() => {
        if(!imageRef.current) return;
        const imageElement=imageRef.current;
        const handleScroll=() =>{
            const scrollPosition = window.scrollY;
            const scrollThreshold = 100;
            if(scrollPosition > scrollThreshold){
                imageElement.classList.add("hero-image-scrolled");
            }
            else{
                imageElement.classList.remove("hero-image-scrolled");
            }
        };
        window.addEventListener("scroll",handleScroll);
        return () => {
            window.removeEventListener("scroll",handleScroll);
        };
    }, []);

  return (
    <section className="w-full pt-28 md:pt-35 pb-10">
        <div className="space-y-6 text-center">
            <div className="space-y-6 mx-auto">
                <h1 className="text-4xl font-bold md:text-5xl lg:text-6xl xl:text-7xl gradient-title">
                    Your AI Career Coach for
                    <br />
                    Professional Success
                </h1>
                <p className="mx-auto max-w-[600px] text-muted-foreground md:text:xl">
                    Advance your career with personalized guidance, interview prep, and 
                    AI-powered tools for job success.
                </p>
            </div>

            <div className="flex justify-center space-x-4">
                <Link href="/dashboard">
                    <Button size="lg" className="px-8 cursor-pointer">Get Started</Button>
                </Link>
            </div>

            <div className="hero-image-wrapper mt-5 md:mt-0 overflow-hidden">
                <div ref={imageRef} className="hero-image">
                    <Image 
                    src="/banner2.png"
                    width={1080}
                    height={720}
                    alt="Banner UpLiftAI"
                    className="rounded-lg shadow-2xl border mx-auto"
                    priority
                    />
                </div>
            </div>
        </div>
    </section>
  )
}

export default HeroSection