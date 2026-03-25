import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Database, Code2, Shield } from "lucide-react"

export function Hero() {
  return (
    <section id="hero" className="relative overflow-hidden border-b border-border">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%230B2A4B' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="relative mx-auto max-w-6xl px-4 py-20 lg:py-32 lg:px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="flex items-center gap-3 flex-wrap">
                <Badge variant="secondary" className="font-mono text-xs font-semibold tracking-wider">
                  <span className="text-accent mr-1">2026</span>
                  AIエンジニア元年
                </Badge>
                <Badge variant="outline" className="text-xs">
                  Day0事前課題あり
                </Badge>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black leading-tight tracking-tight text-balance">
                AIで「画面」は作れる。
                <br />
                <span className="text-accent">でも、そのアプリは</span>
                <br />
                <span className="text-accent">「1ヶ月後」も</span>
                <br className="lg:hidden" />
                動いていますか？
              </h1>

              <p className="text-muted-foreground text-lg leading-relaxed max-w-xl">
                AI実践起業塾がおくる、エンジニアの「視座」を変える5日間。
                <span className="font-semibold text-foreground">ツール屋からシステムアーキテクトへ。</span>
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground font-bold text-base h-14 px-8">
                <Link href="#cta">
                  無料カウンセリングを予約
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="font-bold text-base h-14 px-8 border-2">
                <Link href="#curriculum">
                  カリキュラムを見る
                </Link>
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="flex items-center gap-6 pt-4 text-sm text-muted-foreground">
              <span className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-green-500" />
                期間限定募集中
              </span>
              <span className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-accent" />
                オンライン完結
              </span>
            </div>
          </div>

          {/* Visual */}
          <div className="relative">
            <div className="relative bg-card border border-border rounded-lg p-8 shadow-lg">
              {/* Code Editor Mock */}
              <div className="space-y-4">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-400" />
                  <div className="w-3 h-3 rounded-full bg-yellow-400" />
                  <div className="w-3 h-3 rounded-full bg-green-400" />
                  <span className="ml-4 text-xs text-muted-foreground font-mono">schema.sql</span>
                </div>

                <div className="font-mono text-sm space-y-2 text-foreground/80">
                  <div className="flex items-center gap-2">
                    <span className="text-accent">CREATE TABLE</span>
                    <span>users (</span>
                  </div>
                  <div className="pl-4 text-muted-foreground">
                    id UUID PRIMARY KEY,
                    <br />
                    email VARCHAR UNIQUE,
                    <br />
                    role VARCHAR NOT NULL
                  </div>
                  <div>);</div>
                  <div className="pt-2 text-green-600">-- RLS Policy</div>
                  <div className="flex items-center gap-2">
                    <span className="text-accent">ALTER TABLE</span>
                    <span>users</span>
                  </div>
                  <div className="pl-4 text-muted-foreground">
                    ENABLE ROW LEVEL SECURITY;
                  </div>
                </div>
              </div>

              {/* Tech Stack Icons */}
              <div className="absolute -bottom-6 -right-6 flex gap-3">
                <div className="w-12 h-12 rounded-lg bg-primary text-primary-foreground flex items-center justify-center shadow-lg">
                  <Database className="w-6 h-6" />
                </div>
                <div className="w-12 h-12 rounded-lg bg-accent text-accent-foreground flex items-center justify-center shadow-lg">
                  <Code2 className="w-6 h-6" />
                </div>
                <div className="w-12 h-12 rounded-lg bg-green-600 text-white flex items-center justify-center shadow-lg">
                  <Shield className="w-6 h-6" />
                </div>
              </div>
            </div>

            {/* Floating Badge */}
            <div className="absolute -top-4 -left-4 bg-primary text-primary-foreground px-4 py-2 rounded-lg font-mono text-sm font-semibold shadow-lg">
              5日間集中
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
