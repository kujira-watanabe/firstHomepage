import { Database, Key, Globe, Cpu } from "lucide-react"

const solutions = [
  {
    icon: Database,
    title: "認証・DB・APIが一つに",
    description: "Supabaseなら、バックエンド構築の複雑さから解放される。必要なものが全て揃っている。",
  },
  {
    icon: Key,
    title: "Row Level Security",
    description: "ユーザーごとのデータアクセス制御を、データベースレベルで実現。情報漏洩リスクを根本から排除。",
  },
  {
    icon: Globe,
    title: "即座にデプロイ",
    description: "Vercelとの連携で、作ったものをすぐに公開。プロトタイプから本番まで一気通貫。",
  },
  {
    icon: Cpu,
    title: "AIが実装を加速",
    description: "難しいコードはCursorに任せ、あなたは「設計」という本質に集中できる。",
  },
]

export function SolutionSection() {
  return (
    <section className="py-20 lg:py-28 border-b border-border">
      <div className="mx-auto max-w-6xl px-4 lg:px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div>
              <p className="font-mono text-xs font-semibold tracking-[0.15em] uppercase text-accent mb-3">
                The Solution
              </p>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black tracking-tight mb-6 text-balance">
                Supabaseという武器を手に入れる
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed">
                なぜSupabaseなのか？それは、認証・データベース・APIが一つに完結し、
                <span className="font-semibold text-foreground">難しいことはAI（Cursor）に任せ、自分は「設計」という本質に集中できる</span>
                からです。
              </p>
            </div>

            <div className="grid gap-4">
              {solutions.map((solution, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-accent/10 text-accent flex items-center justify-center">
                    <solution.icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-bold mb-1">{solution.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {solution.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Visual - Tech Stack */}
          <div className="relative">
            <div className="bg-primary rounded-xl p-8 text-primary-foreground">
              <h3 className="font-mono text-xs font-semibold tracking-[0.15em] uppercase text-accent mb-6">
                Tech Stack
              </h3>

              <div className="space-y-6">
                {[
                  { name: "Cursor", desc: "AI-Powered IDE", color: "bg-purple-500" },
                  { name: "Supabase", desc: "Backend as a Service", color: "bg-green-500" },
                  { name: "GitHub", desc: "Version Control", color: "bg-gray-400" },
                  { name: "Vercel", desc: "Deploy & Hosting", color: "bg-white text-primary" },
                ].map((tech, index) => (
                  <div key={index} className="flex items-center gap-4">
                    <div className={`w-12 h-12 rounded-lg ${tech.color} flex items-center justify-center font-bold text-sm`}>
                      {tech.name.charAt(0)}
                    </div>
                    <div>
                      <p className="font-bold">{tech.name}</p>
                      <p className="text-sm text-primary-foreground/70 font-mono">{tech.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 pt-6 border-t border-primary-foreground/20">
                <p className="text-sm text-primary-foreground/80 leading-relaxed">
                  これらの技術スタックを<span className="font-bold text-accent">5日間で習得</span>し、
                  実務で使えるレベルまで引き上げます。
                </p>
              </div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute -z-10 top-4 left-4 w-full h-full bg-accent/20 rounded-xl" />
          </div>
        </div>
      </div>
    </section>
  )
}
