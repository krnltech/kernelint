"use client"

import { useState } from "react"
import Image from "next/image"
import { Moon, Sun } from "lucide-react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { adminScreens, mobileScreens, webScreens, type Screenshot } from "../data/restaurant-data"

type Theme = "dark" | "light"

/**
 * Screens are full-page captures, so several are extremely tall. Rather than
 * cropping them, the frame caps its height and scrolls — the top of the page is
 * always visible and the rest stays reachable.
 */
function ScreenFrame({ screen, theme, phone }: { screen: Screenshot; theme?: Theme; phone?: boolean }) {
  const src = `/products/restaurant/${screen.src}${theme ? `-${theme}` : ""}.webp`

  return (
    <figure className={phone ? "mx-auto w-full max-w-[300px]" : "w-full"}>
      <div
        className={
          phone
            ? "showcase-scroll max-h-[600px] overflow-y-auto rounded-[2rem] border-8 border-foreground/80 bg-muted shadow-xl"
            : "showcase-scroll max-h-[560px] overflow-y-auto rounded-xl border border-border bg-muted shadow-lg"
        }
      >
        <Image
          key={src}
          src={src}
          alt={screen.title}
          width={screen.width}
          height={screen.height}
          className="w-full h-auto"
        />
      </div>
      <figcaption className="mt-4 text-center">
        <span className="font-semibold">{screen.title}</span>
        <span className="block text-sm text-foreground/60 mt-1">{screen.caption}</span>
      </figcaption>
    </figure>
  )
}

function ScreenPicker({
  screens,
  selected,
  onSelect,
}: {
  screens: Screenshot[]
  selected: number
  onSelect: (index: number) => void
}) {
  return (
    <div className="flex flex-wrap justify-center gap-2 mb-8">
      {screens.map((screen, index) => (
        <button
          key={screen.src}
          onClick={() => onSelect(index)}
          aria-pressed={index === selected}
          className={`px-4 py-2 rounded-full text-sm font-medium transition ${
            index === selected
              ? "bg-primary text-primary-foreground"
              : "bg-muted text-foreground/70 hover:text-primary"
          }`}
        >
          {screen.title}
        </button>
      ))}
    </div>
  )
}

function ThemeToggle({ theme, onChange }: { theme: Theme; onChange: (theme: Theme) => void }) {
  return (
    <div className="flex justify-center mb-8">
      <div className="inline-flex items-center rounded-full bg-muted p-1">
        {(["dark", "light"] as const).map((option) => (
          <button
            key={option}
            onClick={() => onChange(option)}
            aria-pressed={theme === option}
            className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-sm font-medium transition ${
              theme === option ? "bg-background shadow-sm text-foreground" : "text-foreground/60 hover:text-foreground"
            }`}
          >
            {option === "dark" ? <Moon size={14} /> : <Sun size={14} />}
            {option === "dark" ? "Dark" : "Light"}
          </button>
        ))}
      </div>
    </div>
  )
}

export function ScreenshotShowcase() {
  const [webIndex, setWebIndex] = useState(0)
  const [mobileIndex, setMobileIndex] = useState(0)
  const [adminIndex, setAdminIndex] = useState(0)
  const [mobileTheme, setMobileTheme] = useState<Theme>("dark")
  const [adminTheme, setAdminTheme] = useState<Theme>("dark")

  return (
    <section id="screens" className="py-20 md:py-32 bg-secondary/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-balance">
            See the <span className="text-primary">Whole Suite</span>
          </h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            Real screens from a live deployment. The mobile app and admin console ship in both dark and light
            themes.
          </p>
        </div>

        <Tabs defaultValue="web" className="max-w-5xl mx-auto items-center">
          <TabsList className="mb-8">
            <TabsTrigger value="web">Web Ordering</TabsTrigger>
            <TabsTrigger value="mobile">Mobile App</TabsTrigger>
            <TabsTrigger value="admin">Admin</TabsTrigger>
          </TabsList>

          <TabsContent value="web" className="w-full">
            <ScreenPicker screens={webScreens} selected={webIndex} onSelect={setWebIndex} />
            <ScreenFrame screen={webScreens[webIndex]} />
          </TabsContent>

          <TabsContent value="mobile" className="w-full">
            <ThemeToggle theme={mobileTheme} onChange={setMobileTheme} />
            <ScreenPicker screens={mobileScreens} selected={mobileIndex} onSelect={setMobileIndex} />
            <ScreenFrame screen={mobileScreens[mobileIndex]} theme={mobileTheme} phone />
          </TabsContent>

          <TabsContent value="admin" className="w-full">
            <ThemeToggle theme={adminTheme} onChange={setAdminTheme} />
            <ScreenPicker screens={adminScreens} selected={adminIndex} onSelect={setAdminIndex} />
            <ScreenFrame screen={adminScreens[adminIndex]} theme={adminTheme} />
          </TabsContent>
        </Tabs>
      </div>
    </section>
  )
}
