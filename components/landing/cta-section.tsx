import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Calendar, MessageCircle } from "lucide-react"

export function CTASection() {
  return (
    <section id="cta" className="py-20 lg:py-28 border-b border-border">
      <div className="mx-auto max-w-4xl px-4 lg:px-6 text-center">
        <div className="space-y-8">
          <div className="space-y-6">
            <p className="font-mono text-xs font-semibold tracking-[0.15em] uppercase text-accent">
              Take Action
            </p>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black tracking-tight leading-tight text-balance">
              2026年、AIを単なる流行で終わらせるのか、
              <br className="hidden sm:inline" />
              <span className="text-accent">一生モノの資産（武器）にするのか。</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed">
              その答えは、あなたの決断の中にあります。
              構造を理解し、長く稼ぎ続けられる人材として一歩を踏み出しましょう。
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground font-bold text-base h-14 px-8 w-full sm:w-auto">
              <Link href="#">
                <Calendar className="mr-2 w-5 h-5" />
                無料カウンセリングを予約する
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="font-bold text-base h-14 px-8 border-2 w-full sm:w-auto">
              <Link href="#">
                <MessageCircle className="mr-2 w-5 h-5" />
                公式LINEに登録
              </Link>
            </Button>
          </div>

          <p className="text-sm text-muted-foreground max-w-xl mx-auto leading-relaxed">
            ※無料カウンセリングでは、目標や現状をお聞きし、最適な学習プランをご提案します。
            強引な勧誘は一切ありません。
          </p>

          {/* Trust Badges */}
          <div className="pt-8 flex flex-wrap items-center justify-center gap-6 text-sm text-muted-foreground">
            <span className="flex items-center gap-2">
              <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              オンライン完結
            </span>
            <span className="flex items-center gap-2">
              <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              永年参加権
            </span>
            <span className="flex items-center gap-2">
              <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              期間限定募集
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}
