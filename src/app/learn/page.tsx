import Link from 'next/link';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const learningTopics = {
  '技術実装': [
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
  ],
  'デザイン・UX': [
    // 今後追加予定
  ],
  'マーケティング・ビジネス': [
    {
      title: 'CTA（Call-to-Action）',
      description: '効果的なアクション促進ボタンとユーザー導線の設計',
      href: '/learn/cta',
      features: ['ボタンデザイン', 'ユーザー心理', 'A/Bテスト', 'コンバージョン最適化'],
      difficulty: '初級',
      estimatedTime: '40分'
    },
    {
      title: 'Google Analytics 4',
      description: '最新のWeb分析ツールの基本と実践',
      href: '/learn/google-analytics-4',
      features: ['基本設定', '主要レポート', 'カスタムイベント', '離脱ポイント分析'],
      difficulty: '初級',
      estimatedTime: '60分'
    },
    {
      title: 'Google Search Console',
      description: 'SEO分析と検索パフォーマンスの最適化',
      href: '/learn/google-search-console',
      features: ['検索クエリ分析', 'インデックス状況', 'Core Web Vitals', 'SEO改善'],
      difficulty: '初級',
      estimatedTime: '45分'
    },
    {
      title: 'Google Tag Manager',
      description: 'タグ管理とイベント追跡の効率化',
      href: '/learn/google-tag-manager',
      features: ['タグ設定', 'トリガー作成', '変数管理', 'デバッグ'],
      difficulty: '中級',
      estimatedTime: '55分'
    }
  ]
};

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
              <h1 className="text-3xl font-bold">学習ガイド</h1>
              <p className="text-muted-foreground mt-2">
                技術実装からマーケティングまで、実践的なスキルを学ぼう
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
              実践的なスキルを身につけよう
            </h2>
            <p className="text-muted-foreground text-lg">
              技術実装からマーケティング・ビジネスまで、実際のプロジェクトで使えるスキルを学びます。
              各トピックには実装例、ベストプラクティス、そして実践的なノウハウが含まれています。
            </p>
          </div>
        </section>

        {/* Learning Topics by Category */}
        <section className="space-y-12 mb-12">
          {Object.entries(learningTopics).map(([category, topics]) => (
            <div key={category}>
              <h3 className="text-2xl font-bold mb-6 text-center">{category}</h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {topics.map((topic) => (
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
              </div>
            </div>
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
