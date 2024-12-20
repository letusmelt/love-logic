import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Plus, Play, Radio, Home, Settings } from 'lucide-react'
import Link from "next/link"
import Image from "next/image"
import { ImportSheet } from "@/components/import-sheet"

export default function Page() {
  const talks = [
    {
      date: "2024-12-4",
      duration: "15:04",
      title: "Steve Jobs' 2005 Stanford Commencement Address",
      type: "video",
      thumbnail: "/placeholder.svg?height=200&width=400",
    },
    {
      date: "2024-12-3",
      duration: "34:11",
      title: "How did ancient civilizations make ice cream?",
      type: "podcast",
      thumbnail: "/placeholder.svg?height=100&width=100",
    },
    {
      date: "2024-11-14",
      duration: "19:57",
      title: "171 What is American English",
      type: "podcast",
      thumbnail: "/placeholder.svg?height=100&width=100",
    },
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="sticky top-0 z-10 bg-gray-50/80 backdrop-blur-sm">
        <div className="flex items-center justify-between p-4">
          <h1 className="text-2xl font-bold">LoveLogic</h1>
          <ImportSheet />
        </div>
      </header>

      {/* Content */}
      <main className="px-2 pb-20 max-w-screen-sm mx-auto">
        {talks.map((talk, index) => (
          <div key={index} className="mb-6">
            <div className="mb-2 text-green-800">{talk.date}</div>
            <Card className="overflow-hidden bg-gray-50/50">
              <Link href="#" className="flex gap-4 p-4">
                <div className="relative flex-shrink-0">
                  {talk.type === "video" ? (
                    <div className="relative h-[120px] w-[200px] overflow-hidden rounded-lg">
                      <Image
                        src={talk.thumbnail}
                        alt={talk.title}
                        className="object-cover"
                        width={400}
                        height={200}
                      />
                      <div className="absolute left-2 top-2 rounded-full bg-white/90 p-2">
                        <Play className="h-4 w-4" />
                      </div>
                    </div>
                  ) : (
                    <div className="rounded-full bg-gray-200 p-4">
                      <Radio className="h-6 w-6" />
                    </div>
                  )}
                </div>
                <div className="flex flex-col justify-center">
                  <div className="text-sm text-gray-600">{talk.duration}</div>
                  <h2 className="line-clamp-2 text-base font-medium">{talk.title}</h2>
                </div>
              </Link>
            </Card>
          </div>
        ))}
      </main>

      {/* Bottom Navigation */}
      <nav className="fixed bottom-0 left-0 right-0 border-t bg-white">
        <div className="flex items-center justify-around p-4">
          <Button variant="ghost" className="flex flex-col items-center gap-1">
            <Home className="h-5 w-5" />
            <span className="text-xs">Home</span>
          </Button>
          <Button variant="ghost" className="flex flex-col items-center gap-1">
            <Radio className="h-5 w-5" />
            <span className="text-xs">Podcast</span>
          </Button>
          <Button variant="ghost" className="flex flex-col items-center gap-1">
            <Settings className="h-5 w-5" />
            <span className="text-xs">Settings</span>
          </Button>
        </div>
      </nav>
    </div>
  )
}

