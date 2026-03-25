import { AlertTriangle, FileSpreadsheet, Lock, TrendingDown } from "lucide-react"

const problems = [
  {
    icon: FileSpreadsheet,
    title: "Excel地獄からの脱出",
    description: "GASや単発ツールでは、データが増えるほど破綻するExcel地獄から抜け出せない。",
  },
  {
    icon: TrendingDown,
    title: "データ構造の破綻",
    description: "テーブル設計を学ばずに作ったアプリは、1ヶ月後にはメンテナンス不能になる。",
  },
  {
    icon: Lock,
    title: "セキュリティの欠如",
    description: "Row Level Security（RLS）を知らずに作ったアプリは、いつ情報漏洩してもおかしくない。",
  },
  {
    icon: AlertTriangle,
    title: "高単価案件の壁",
    description: "「ちょっとしたツール」しか作れない人に、企業は高額の開発費を払わない。",
  },
]

export function ProblemSection() {
  return (
    <section className="py-20 lg:py-28 border-b border-border bg-secondary/30">
      <div className="mx-auto max-w-6xl px-4 lg:px-6">
        <div className="text-center mb-16">
          <p className="font-mono text-xs font-semibold tracking-[0.15em] uppercase text-accent mb-3">
            The Problem
          </p>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black tracking-tight mb-6 text-balance">
            ツール開発の限界、感じていませんか？
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed">
            GASや単発ツールでは、<span className="font-semibold text-foreground">高単価案件の壁を越えられない</span>という現実。
            多くのAIエンジニアがこの壁にぶつかっています。
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-6">
          {problems.map((problem, index) => (
            <div
              key={index}
              className="group relative bg-card border border-border rounded-lg p-6 hover:border-accent/50 hover:shadow-md transition-all duration-300"
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-primary/5 text-primary flex items-center justify-center group-hover:bg-accent/10 group-hover:text-accent transition-colors">
                  <problem.icon className="w-6 h-6" />
                </div>
                <div className="space-y-2">
                  <h3 className="font-bold text-lg">{problem.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {problem.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-muted-foreground text-sm">
            これらの課題を解決するのが、
            <span className="font-bold text-accent">Supabase × Cursor × 正しい設計思考</span>
            です。
          </p>
        </div>
      </div>
    </section>
  )
}
