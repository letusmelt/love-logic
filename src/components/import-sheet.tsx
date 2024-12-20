import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet" 
import { Button } from "@/components/ui/button"
import { Plus, Video, FileText, Image, Radio } from 'lucide-react'

export function ImportSheet() {
  const importOptions = [
    {
      title: "Youtube URL",
      description: "Play the Youtube video in app without downloading it",
      icon: Video,
    },
    {
      title: "Local Media",
      description: "Import the media file from your local storage without copying it",
      icon: FileText,
    },
    {
      title: "Photo Album",
      description: "Import the media file from your photo album",
      icon: Image,
    },
    {
      title: "Miraa Drop",
      description: "Drop materials between your nearby miraa devices",
      icon: Radio,
    },
  ]

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button size="icon" variant="ghost" className="rounded-full bg-lime-200 hover:bg-lime-300">
          <Plus className="h-5 w-5" />
        </Button>
      </SheetTrigger>
      <SheetContent side="bottom" className="rounded-t-3xl p-4 max-w-[100%] mx-auto">
        <SheetHeader className="pb-6">
          <SheetTitle>Import video or audio</SheetTitle>
          <SheetDescription>
            Please select where you want to import the media from
          </SheetDescription>
        </SheetHeader>
        <div className="grid gap-4">
          {importOptions.map((option, index) => (
            <Button
              key={index}
              variant="outline"
              className="h-auto w-full flex-col items-start gap-1 p-4 rounded-2xl overflow-hidden"
            >
              <div className="flex w-full items-center gap-4">
                <div className="rounded-full bg-gray-100 p-2 flex-shrink-0">
                  <option.icon className="h-5 w-5" />
                </div>
                <div className="flex flex-col items-start gap-1 text-left flex-1 min-w-0">
                  <div className="font-semibold">{option.title}</div>
                  <div className="text-sm text-muted-foreground truncate w-full">
                    {option.description}
                  </div>
                </div>
              </div>
            </Button>
          ))}
        </div>
      </SheetContent>
    </Sheet>
  )
}

