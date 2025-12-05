import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Textarea } from "@/components/ui/textarea";
import { BadgeCheck, ImageUp, LoaderCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useEffect, useRef, useState } from "react";

const NewsInput = ({ onCheckComplete = () => {} }) => {
  const [type, setType] = useState("txt");
  const [isChecking, setIsChecking] = useState(false);
  const [selectedFile, setSelectedFile] = useState(null);
  const [isDragging, setIsDragging] = useState(false);
  const fileInputRef = useRef(null);
  const [flashHighlight, setFlashHighlight] = useState(false);
  const flashTimeoutRef = useRef(null);

  const handleFileSelect = (files) => {
    if (!files?.length) return;
    setSelectedFile(files[0]);
    setType("img");
    setFlashHighlight(true);
    if (flashTimeoutRef.current) clearTimeout(flashTimeoutRef.current);
    flashTimeoutRef.current = setTimeout(() => setFlashHighlight(false), 200);
  };

  const handleDrop = (event) => {
    event.preventDefault();
    setIsDragging(false);
    handleFileSelect(event.dataTransfer.files);
  };

  const handleDragOver = (event) => {
    event.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => setIsDragging(false);

  useEffect(() => {
    return () => {
      if (flashTimeoutRef.current) clearTimeout(flashTimeoutRef.current);
    };
  }, []);

  const handleCheck = () => {
    setIsChecking(true);
    setTimeout(() => {
      setIsChecking(false);
      onCheckComplete();
    }, 1800);
  };

  return (
    <div className="flex h-full w-full flex-col items-center justify-center gap-y-4">
      <Card className="w-11/12 md:w-5/12 h-10/12 p-2">
        {isChecking ? (
          <div className="flex h-full w-full flex-col items-center justify-center gap-4">
            <div className="flex items-center justify-center rounded-full border border-destructive/40 bg-destructive/10 p-6">
              <LoaderCircle className="h-12 w-12 animate-spin text-destructive" />
            </div>
            <p className="text-lg font-semibold text-foreground">Analyzing content...</p>
            <p className="text-sm text-muted-foreground">
              Looking for manipulation signals and verifying sources
            </p>
          </div>
        ) : (
          <Tabs
            defaultValue={type}
            className="flex h-full w-full min-h-0 flex-col gap-2"
          >
            <TabsList className="grid w-full shrink-0 grid-cols-2 gap-2">
              <TabsTrigger
                value="txt"
                onClick={() => setType("txt")}
                className="data-[state=active]:bg-destructive data-[state=active]:text-white"
              >
                Text
              </TabsTrigger>
              <TabsTrigger
                value="img"
                onClick={() => setType("img")}
                className="data-[state=active]:bg-destructive data-[state=active]:text-white"
              >
                Image
              </TabsTrigger>
            </TabsList>
            <TabsContent value="txt" className="flex flex-1 min-h-0 flex-col">
              <Textarea
                className="h-full w-full flex-1 resize-none !ring-destructive"
                placeholder="Paste or type the news article, headline, or statement you want to verify..."
              />
            </TabsContent>
            <TabsContent value="img" className="flex flex-1 min-h-0 flex-col">
              <input
                ref={fileInputRef}
                type="file"
                accept="image/*"
                className="hidden"
                onClick={(e) => {
                  e.target.value = null;
                }}
                onChange={(e) => handleFileSelect(e.target.files)}
              />
              <Card
                role="button"
                tabIndex={0}
                onClick={() => fileInputRef.current?.click()}
                onDrop={handleDrop}
                onDragOver={handleDragOver}
                onDragEnter={handleDragOver}
                onDragLeave={handleDragLeave}
                className={`p-2 cursor-pointer flex h-full w-full flex-col items-center justify-center gap-y-4 border-2 border-dashed text-muted-foreground transition-all duration-300 ease-out ${
                  isDragging
                    ? "border-destructive/70 bg-destructive/5 scale-[1.01]"
                    : flashHighlight
                      ? "border-destructive/70 bg-destructive/5 scale-[1.01]"
                      : "border-white/20"
                }`}
              >
                {selectedFile ? (
                  <BadgeCheck
                    size={30}
                    className="text-destructive animate-in fade-in-0 zoom-in-95"
                  />
                ) : (
                  <ImageUp size={30} className="animate-in fade-in-0" />
                )}
                <div className="text-center">
                  <h1 className="text-foreground">
                    {selectedFile
                      ? "File ready for analysis"
                      : "Upload an Image for Verification"}
                  </h1>
                  {selectedFile ? (
                    <p className="text-sm text-muted-foreground">
                      {selectedFile.name}
                    </p>
                  ) : (
                    <p className="text-sm">
                      Drag and drop a screenshot or photo of the news content here
                    </p>
                  )}
                </div>
              </Card>
            </TabsContent>
          </Tabs>
        )}
      </Card>
      <Button
        variant="destructive"
        disabled={isChecking}
        onClick={handleCheck}
      >
        {isChecking ? "Checking..." : "Check"}
      </Button>
    </div>
  );
};

export default NewsInput;
