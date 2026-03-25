import { Users, Briefcase, Video, Sparkles, Target, Award } from "lucide-react"

const features = [
  {
    num: "01",
    icon: Users,
    title: "初心者でも安心",
    description: "プログラミング未経験からでも、設計の考え方から丁寧に伴走。「なぜその形なのか」を論理的に説明できるようになります。",
  },
  {
    num: "02",
    icon: Briefcase,
    title: "実務直結のカリキュラム",
    description: "要件定義から実装・公開まで、動くものを積み上げる体験。机上の空論ではなく、実際に使えるシステムを構築します。",
  },
  {
    num: "03",
    icon: Video,
    title: "永年参加権",
    description: "豊富な動画コンテンツへ継続アクセス可能。何度でも学び直し、最新の技術動向もキャッチアップできます。",
  },
  {
    num: "04",
    icon: Sparkles,
    title: "最新技術を網羅",
    description: "Cursor / Supabase / GitHub / Vercel など、現場で実際に使われている最新の技術スタックを習得します。",
  },
  {
    num: "05",
    icon: Target,
    title: "高単価案件への道",
    description: "「ツール屋」から「システムアーキテクト」へ。構造を理解した人材として、高単価案件を獲得する力を身につけます。",
  },
  {
    num: "06",
    icon: Award,
    title: "切磋琢磨する仲間",
    description: "同じ志を持つ仲間との出会い。孤独な学習ではなく、コミュニティの中で成長を加速させます。",
  },
]

export function FeaturesSection() {
  return (
    <section id="features" className="py-20 lg:py-28 border-b border-border">
      <div className="mx-auto max-w-6xl px-4 lg:px-6">
        <div className="text-center mb-16">
          <p className="font-mono text-xs font-semibold tracking-[0.15em] uppercase text-accent mb-3">
            Our Features
          </p>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black tracking-tight mb-6 text-balance">
            手に入るもの
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed">
            自分が欲しい<span className="font-semibold text-foreground">実利あるシステム</span>、
            プロの思考法、そして切磋琢磨する<span className="font-semibold text-foreground">仲間</span>。
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature) => (
            <div
              key={feature.num}
              className="group bg-card border border-border rounded-lg p-6 hover:border-accent/50 hover:shadow-lg transition-all duration-300"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="font-mono text-xs font-semibold text-accent tracking-wider">
                  {feature.num}
                </span>
                <div className="w-10 h-10 rounded-lg bg-secondary text-foreground flex items-center justify-center group-hover:bg-accent/10 group-hover:text-accent transition-colors">
                  <feature.icon className="w-5 h-5" />
                </div>
              </div>
              <h3 className="font-bold text-lg mb-3">{feature.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
