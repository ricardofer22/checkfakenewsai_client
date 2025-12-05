import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeftCircle, Radar, Sparkles, ThumbsUp } from "lucide-react";

const Results = ({ onBack = () => {} }) => {
  return (
    <div className="flex h-full w-full flex-col items-center justify-center gap-y-4">
      <Card className="w-11/12 md:w-5/12 h-10/12 p-6 flex flex-col gap-6">
        <div className="flex items-center gap-3 text-destructive">
          <Radar />
            <h1 className="text-2xl font-bold text-foreground">Scan results</h1>
        </div>
        <div className="rounded-xl border border-muted-foreground/30 bg-muted-foreground/10 p-4 text-sm space-y-1">
          <h1>Your search...</h1>
          <p className="italic text-muted-foreground">
            "Here the cited fake news will be displayed. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          </p>
        </div>
        <div className="grid gap-3 text-sm text-muted-foreground">
          <div className="flex items-center gap-3 rounded-lg border border-white/10 bg-white/5 p-3">
            <ThumbsUp className="h-5 w-5 text-destructive" />
            <div>
              <p className="font-semibold text-foreground">Verdict</p>
              <p>High probability of being reliable information.</p>
            </div>
          </div>
          <div className="flex items-center gap-3 rounded-lg border border-white/10 bg-white/5 p-3">
            <Sparkles className="h-5 w-5 text-destructive" />
            <div>
              <p className="font-semibold text-foreground">Signals</p>
              <p>Consistent sources and no signs of visual manipulation.</p>
            </div>
          </div>
        </div>
      </Card>
      <Button variant="destructive" className="gap-2" onClick={onBack}>
        Go Back
      </Button>
    </div>
  );
};

export default Results;
