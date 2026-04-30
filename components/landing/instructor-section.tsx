import { Quote } from "lucide-react"

export function InstructorSection() {
  return (
      <section id="instructor" className="scroll-mt-20 lg:scroll-mt-24 py-20 lg:py-28 border-b border-border">
      <div className="mx-auto max-w-6xl px-4 lg:px-6">
        <div className="text-center mb-16">
          <p className="font-mono text-xs font-semibold tracking-[0.15em] uppercase text-accent mb-3">
            Instructor
          </p>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black tracking-tight mb-6 text-balance">
            講師紹介
          </h2>
        </div>

        <div className="grid lg:grid-cols-5 gap-8 lg:gap-12 items-start">
          {/* Profile Image Area */}
          <div className="lg:col-span-2 lg:min-w-0">
            <div className="relative">
              <div className="aspect-[4/5] bg-primary/5 rounded-xl border border-border flex items-center justify-center relative overflow-hidden">
                <div className="text-center space-y-4 p-8">
                  <div className="w-32 h-32 mx-auto rounded-full bg-primary text-primary-foreground flex items-center justify-center shrink-0">
                    <span className="text-4xl font-black">渡</span>
                  </div>
                  <div>
                    <p className="font-bold text-xl">渡邉 裕司</p>
                    <p className="text-muted-foreground text-sm">なべさん</p>
                  </div>
                </div>

                {/* プロフィール枠内・右上（中央の顔・アイコンと横の引用パネルとは重ならない位置） */}
                <div className="absolute top-3 right-3 sm:top-4 sm:right-4 bg-accent text-accent-foreground px-3 py-2 rounded-lg font-bold text-xs sm:text-sm shadow-lg max-w-[calc(100%-2rem)] text-left">
                  AI実践起業塾 主宰
                </div>
              </div>
            </div>
          </div>

          {/* Profile Content */}
          <div className="lg:col-span-3 space-y-6">
            <div className="space-y-4">
              <h3 className="text-xl lg:text-2xl font-bold">
                「静かに、しかし確実に構造を変える。」
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                内省的アーキテクトとして、派手さはないが確実に動くシステムを作り続けてきました。
                誠実な設計思想を大切にし、受講生一人ひとりと向き合いながら、
                「ツール屋」から「システムアーキテクト」への転換をサポートしています。
              </p>
            </div>

            <div className="bg-secondary/50 rounded-lg p-6 border border-border">
              <Quote className="w-8 h-8 text-accent mb-4" />
              <blockquote className="text-lg font-medium leading-relaxed italic">
                「AIは加速装置。構造と権限の責任は、人間にある。」
              </blockquote>
              <p className="mt-4 text-sm text-muted-foreground">
                このキャッチコピーには、私の設計哲学が詰まっています。
                AIが進化する今だからこそ、人間が担うべき「設計」と「責任」の重要性を伝えていきたい。
              </p>
            </div>

            <div className="grid sm:grid-cols-3 gap-4">
              {[
                { label: "指導実績", value: "300+" },
                { label: "満足度", value: "98%" },
                { label: "開発歴", value: "15年+" },
              ].map((stat, index) => (
                <div key={index} className="text-center p-4 bg-card border border-border rounded-lg">
                  <p className="font-mono text-2xl font-bold text-accent">{stat.value}</p>
                  <p className="text-sm text-muted-foreground">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
