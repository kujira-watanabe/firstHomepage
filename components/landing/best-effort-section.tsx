import { CheckCircle2, XCircle, Info } from "lucide-react"

const canDo = [
  "DBのあるWebアプリの基本設計と実装",
  "Supabaseを使った認証・データベース構築",
  "Row Level Securityによるセキュリティ設計",
  "Vercelへのデプロイと公開",
  "設計思考の基礎と応用",
]

const cannotDo = [
  "複雑な機械学習モデルの構築",
  "大規模システムのインフラ設計",
  "React/Next.jsの深い部分の解説",
  "iOS/Androidネイティブアプリ開発",
]

export function BestEffortSection() {
  return (
    <section id="best-effort" className="py-20 lg:py-28 border-b border-border bg-secondary/30">
      <div className="mx-auto max-w-6xl px-4 lg:px-6">
        <div className="text-center mb-16">
          <p className="font-mono text-xs font-semibold tracking-[0.15em] uppercase text-accent mb-3">
            Honest Notice
          </p>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black tracking-tight mb-6 text-balance">
            正直にお伝えします
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed">
            過度な期待ではなく、<span className="font-semibold text-foreground">誠実な信頼関係</span>を築くために、
            このプログラムで「できること」と「まだここではないこと」を明確にします。
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Can Do */}
          <div className="bg-card border border-border rounded-lg p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-full bg-green-100 text-green-600 flex items-center justify-center">
                <CheckCircle2 className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-lg">このプログラムでできること</h3>
            </div>

            <ul className="space-y-4">
              {canDo.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span className="text-foreground">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Cannot Do */}
          <div className="bg-card border border-border rounded-lg p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-full bg-gray-100 text-gray-500 flex items-center justify-center">
                <XCircle className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-lg">このプログラムの対象外</h3>
            </div>

            <ul className="space-y-4">
              {cannotDo.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <XCircle className="w-5 h-5 text-gray-400 flex-shrink-0 mt-0.5" />
                  <span className="text-muted-foreground">{item}</span>
                </li>
              ))}
            </ul>

            <div className="mt-6 pt-6 border-t border-border">
              <p className="text-sm text-muted-foreground">
                これらのスキルは、基礎を習得した後のステップアップとして学ぶことをお勧めします。
              </p>
            </div>
          </div>
        </div>

        {/* Note */}
        <div className="mt-8 bg-primary/5 border border-primary/10 rounded-lg p-6 flex items-start gap-4">
          <Info className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
          <div>
            <p className="font-medium mb-2">ベストエフォートでの提供について</p>
            <p className="text-sm text-muted-foreground leading-relaxed">
              5日間という限られた期間で、全員が同じレベルに到達することを保証するものではありません。
              しかし、各自の進捗に合わせた伴走サポートと、永年参加権による継続学習の機会を通じて、
              着実なスキルアップをサポートします。
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
