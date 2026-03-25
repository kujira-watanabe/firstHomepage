import Link from "next/link"

const footerLinks = {
  content: [
    { href: "#features", label: "特徴" },
    { href: "#curriculum", label: "カリキュラム" },
    { href: "#instructor", label: "講師紹介" },
    { href: "#best-effort", label: "正直告知" },
  ],
  support: [
    { href: "#hero", label: "はじめに" },
    { href: "#", label: "プライバシーポリシー" },
    { href: "#", label: "利用規約" },
    { href: "#", label: "運営者情報" },
  ],
  action: [
    { href: "#cta", label: "無料カウンセリング" },
    { href: "#", label: "料金プラン" },
    { href: "#", label: "公式LINE" },
  ],
}

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="mx-auto max-w-6xl px-4 lg:px-6 py-12 lg:py-16">
        {/* Top Section */}
        <div className="space-y-2 mb-12">
          <p className="font-black text-lg">
            AI×DB×Webシステム開発 5日間ブートキャンプ
          </p>
          <p className="text-sm text-primary-foreground/70">
            主催・講師：渡邉 裕司（なべさん） / AI実践起業塾
          </p>
        </div>

        {/* Links Grid */}
        <div className="grid sm:grid-cols-3 gap-8 lg:gap-12 pb-12 border-b border-primary-foreground/15">
          <div>
            <h3 className="font-mono text-xs font-semibold tracking-[0.15em] uppercase text-accent mb-4">
              Contents
            </h3>
            <ul className="space-y-3">
              {footerLinks.content.map((link) => (
                <li key={link.href + link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-primary-foreground/80 hover:text-accent transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-mono text-xs font-semibold tracking-[0.15em] uppercase text-accent mb-4">
              Support
            </h3>
            <ul className="space-y-3">
              {footerLinks.support.map((link) => (
                <li key={link.href + link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-primary-foreground/80 hover:text-accent transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-mono text-xs font-semibold tracking-[0.15em] uppercase text-accent mb-4">
              Action
            </h3>
            <ul className="space-y-3">
              {footerLinks.action.map((link) => (
                <li key={link.href + link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-primary-foreground/80 hover:text-accent transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-primary-foreground/50">
            &copy; 2026 AI実践起業塾. All rights reserved.
          </p>
          <div className="flex items-center gap-6 text-xs text-primary-foreground/50">
            <span className="font-mono">Cursor</span>
            <span className="font-mono">Supabase</span>
            <span className="font-mono">GitHub</span>
            <span className="font-mono">Vercel</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
