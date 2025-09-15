import Link from 'next/link';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const learningTopics = [
  {
    title: 'ダークモード対応',
    description: 'CSS変数とTailwind CSSを使ったダークモード実装',
    href: '/learn/dark-mode',
    features: ['CSS変数', 'Tailwind CSS', 'システム設定対応', '手動切り替え'],
    difficulty: '初級',
    estimatedTime: '30分'
  },
  {
    title: 'レスポンシブデザイン',
    description: 'モバイルファーストのレスポンシブデザイン実装',
    href: '/learn/responsive',
    features: ['モバイルファースト', 'ブレークポイント', 'フレックスボックス', 'グリッドレイアウト'],
    difficulty: '初級',
    estimatedTime: '45分'
  },
  {
    title: 'アクセシビリティ対応',
    description: 'WCAG準拠のアクセシブルなUI実装',
    href: '/learn/accessibility',
    features: ['ARIA属性', 'キーボードナビゲーション', 'スクリーンリーダー', 'カラーコントラスト'],
    difficulty: '中級',
    estimatedTime: '60分'
  },
  {
    title: 'SEO最適化',
    description: 'Next.js 15のSEO機能を活用した最適化',
    href: '/learn/seo',
    features: ['メタデータ', '構造化データ', 'サイトマップ', 'パフォーマンス'],
    difficulty: '中級',
    estimatedTime: '50分'
  },
  {
    title: 'パフォーマンス最適化',
    description: 'Core Web Vitalsを意識したパフォーマンス最適化',
    href: '/learn/performance',
    features: ['画像最適化', 'コード分割', 'キャッシュ戦略', 'バンドル最適化'],
    difficulty: '上級',
    estimatedTime: '90分'
  },
  {
    title: 'エラーハンドリング',
    description: '堅牢なエラーハンドリングとユーザー体験',
    href: '/learn/error-handling',
    features: ['Error Boundary', 'API エラー', 'フォールバックUI', 'ログ管理'],
    difficulty: '中級',
    estimatedTime: '70分'
  },
  {
    title: 'ローディング状態管理',
    description: 'ユーザー体験を向上させるローディング状態',
    href: '/learn/loading-states',
    features: ['Suspense', 'スケルトンUI', 'プログレスバー', '楽観的更新'],
    difficulty: '中級',
    estimatedTime: '55分'
  },
  {
    title: '楽観的更新',
    description: 'リアルタイムなユーザー体験の実現',
    href: '/learn/optimistic-updates',
    features: ['TanStack Query', '楽観的更新', 'ロールバック', '競合解決'],
    difficulty: '上級',
    estimatedTime: '80分'
  }
];

const difficultyColors = {
  初級: 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200',
  中級: 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200',
  上級: 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200'
};

export default function LearnPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold">Next.js 15 学習ガイド</h1>
              <p className="text-muted-foreground mt-2">
                ModernなWeb開発のベストプラクティスを学ぼう
              </p>
            </div>
            <Button asChild>
              <Link href="/">ホームに戻る</Link>
            </Button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        {/* Introduction */}
        <section className="mb-12">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold mb-4">
              ModernなWeb開発をマスターしよう
            </h2>
            <p className="text-muted-foreground text-lg">
              Next.js 15とReact 19の最新機能を使って、プロダクションレディなWebアプリケーションを構築する方法を学びます。
              各トピックには実装例、ベストプラクティス、そして実際に動作するコードが含まれています。
            </p>
          </div>
        </section>

        {/* Learning Topics Grid */}
        <section className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {learningTopics.map((topic) => (
            <Card key={topic.href} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <CardTitle className="text-xl mb-2">{topic.title}</CardTitle>
                    <CardDescription className="text-sm">
                      {topic.description}
                    </CardDescription>
                  </div>
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${difficultyColors[topic.difficulty as keyof typeof difficultyColors]}`}>
                    {topic.difficulty}
                  </span>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div>
                    <h4 className="font-medium text-sm mb-2">学習内容:</h4>
                    <div className="flex flex-wrap gap-1">
                      {topic.features.map((feature) => (
                        <span
                          key={feature}
                          className="px-2 py-1 bg-muted text-muted-foreground rounded text-xs"
                        >
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="flex items-center justify-between pt-2">
                    <span className="text-sm text-muted-foreground">
                      ⏱️ {topic.estimatedTime}
                    </span>
                    <Button asChild size="sm">
                      <Link href={topic.href}>学習開始</Link>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </section>

        {/* Prerequisites */}
        <section className="bg-muted rounded-lg p-8">
          <h3 className="text-xl font-bold mb-4">前提知識</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-medium mb-2">必要な知識:</h4>
              <ul className="space-y-1 text-sm text-muted-foreground">
                <li>• React の基本概念</li>
                <li>• TypeScript の基本</li>
                <li>• CSS と Tailwind CSS</li>
                <li>• JavaScript ES6+</li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium mb-2">推奨環境:</h4>
              <ul className="space-y-1 text-sm text-muted-foreground">
                <li>• Node.js 18+</li>
                <li>• VS Code + TypeScript</li>
                <li>• Chrome DevTools</li>
                <li>• Git</li>
              </ul>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
