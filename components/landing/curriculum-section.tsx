import { CheckCircle2 } from "lucide-react"

const curriculum = [
  {
    phase: "準備",
    day: "Day 0",
    title: "事前課題",
    items: [
      "環境構築（Cursor, GitHub, Supabase）",
      "基礎概念の予習動画視聴",
      "自己紹介シートの記入",
    ],
    color: "border-l-gray-400",
  },
  {
    phase: "基礎",
    day: "Day 1-2",
    title: "設計の作法・基礎固め",
    items: [
      "データベース設計の基本原則",
      "ER図の読み方・書き方",
      "正規化とは何か、なぜ必要か",
      "要件定義からテーブル設計への落とし込み",
    ],
    color: "border-l-accent",
  },
  {
    phase: "実装",
    day: "Day 3-4",
    title: "Supabase実装・セキュリティ",
    items: [
      "Supabaseプロジェクトの構築",
      "認証システムの実装",
      "Row Level Security（RLS）の設計と実装",
      "APIの自動生成と活用",
    ],
    color: "border-l-accent",
  },
  {
    phase: "公開",
    day: "Day 5",
    title: "デプロイ・発表",
    items: [
      "Vercelへのデプロイ",
      "本番環境の設定とセキュリティ確認",
      "成果物の発表とフィードバック",
      "今後の学習ロードマップ",
    ],
    color: "border-l-green-500",
  },
]

export function CurriculumSection() {
  return (
    <section id="curriculum" className="py-20 lg:py-28 border-b border-border bg-secondary/30">
      <div className="mx-auto max-w-6xl px-4 lg:px-6">
        <div className="text-center mb-16">
          <p className="font-mono text-xs font-semibold tracking-[0.15em] uppercase text-accent mb-3">
            5-Day Program
          </p>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black tracking-tight mb-6 text-balance">
            5日間カリキュラム
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed">
            「DBのあるWebアプリが、<span className="font-semibold text-foreground">なぜその形なのか</span>」を論理的に説明し、公開し切れる状態を目指します。
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-6">
          {curriculum.map((item, index) => (
            <div
              key={index}
              className={`bg-card border border-border border-l-4 ${item.color} rounded-lg p-6`}
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="font-mono text-xs font-semibold tracking-wider px-2 py-1 bg-secondary rounded text-foreground">
                  {item.day}
                </span>
                <span className="text-xs text-muted-foreground font-medium uppercase tracking-wider">
                  {item.phase}
                </span>
              </div>

              <h3 className="font-bold text-lg mb-4">{item.title}</h3>

              <ul className="space-y-3">
                {item.items.map((listItem, itemIndex) => (
                  <li key={itemIndex} className="flex items-start gap-3 text-sm text-muted-foreground">
                    <CheckCircle2 className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                    <span>{listItem}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 bg-primary text-primary-foreground rounded-lg p-8 text-center">
          <p className="font-mono text-xs font-semibold tracking-[0.15em] uppercase text-accent mb-3">
            Goal
          </p>
          <p className="text-xl lg:text-2xl font-bold leading-relaxed text-balance">
            受講後のあなたは、
            <span className="text-accent">構造を理解し、説明でき、</span>
            <br className="hidden sm:inline" />
            実際に動くシステムを公開できる人材になっています。
          </p>
        </div>
      </div>
    </section>
  )
}
