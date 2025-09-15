import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowLeft, Code, Eye, Accessibility, Keyboard, Volume2, Palette } from 'lucide-react';

export const metadata = {
  title: 'アクセシビリティ対応 - Next.js 15 学習ガイド',
  description: 'WCAG準拠のアクセシブルなUI実装方法を学びます。',
};

export default function AccessibilityPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center gap-4">
            <Button variant="outline" size="sm" asChild>
              <Link href="/learn">
                <ArrowLeft className="h-4 w-4 mr-2" />
                学習一覧に戻る
              </Link>
            </Button>
            <div>
              <h1 className="text-3xl font-bold">アクセシビリティ対応</h1>
              <p className="text-muted-foreground mt-2">
                WCAG準拠のアクセシブルなUI実装
              </p>
            </div>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto space-y-8">
          {/* Overview */}
          <section>
            <div className="flex items-center gap-2 mb-4">
              <Accessibility className="h-5 w-5" />
              <h2 className="text-2xl font-bold">概要</h2>
            </div>
            <Card>
              <CardContent className="pt-6">
                <p className="text-muted-foreground mb-4">
                  アクセシビリティ（a11y）は、すべてのユーザーがWebサイトやアプリケーションを
                  利用できるようにする重要な要素です。WCAG 2.1のガイドラインに従って、
                  ARIA属性、キーボードナビゲーション、スクリーンリーダー対応などの
                  実装方法を学びます。
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">ARIA属性</Badge>
                  <Badge variant="secondary">キーボードナビゲーション</Badge>
                  <Badge variant="secondary">スクリーンリーダー</Badge>
                  <Badge variant="secondary">カラーコントラスト</Badge>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* WCAG Principles */}
          <section>
            <div className="flex items-center gap-2 mb-4">
              <Eye className="h-5 w-5" />
              <h2 className="text-2xl font-bold">WCAG 2.1 の4つの原則</h2>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <span className="bg-blue-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">1</span>
                    知覚可能 (Perceivable)
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm">
                    <li>• 代替テキストの提供</li>
                    <li>• カラーコントラストの確保</li>
                    <li>• テキストの拡大縮小対応</li>
                    <li>• 音声コンテンツの字幕</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <span className="bg-green-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">2</span>
                    操作可能 (Operable)
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm">
                    <li>• キーボード操作の対応</li>
                    <li>• 十分な操作時間の提供</li>
                    <li>• 発作を起こす可能性のあるコンテンツの回避</li>
                    <li>• ナビゲーションの提供</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <span className="bg-yellow-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">3</span>
                    理解可能 (Understandable)
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm">
                    <li>• 読みやすいテキスト</li>
                    <li>• 予測可能な動作</li>
                    <li>• 入力エラーの回避と修正</li>
                    <li>• 一貫したナビゲーション</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <span className="bg-purple-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">4</span>
                    堅牢 (Robust)
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm">
                    <li>• マークアップの妥当性</li>
                    <li>• 支援技術との互換性</li>
                    <li>• 将来の技術への対応</li>
                    <li>• セマンティックHTML</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Implementation Examples */}
          <section>
            <div className="flex items-center gap-2 mb-4">
              <Code className="h-5 w-5" />
              <h2 className="text-2xl font-bold">実装例</h2>
            </div>
            
            <div className="space-y-6">
              {/* ARIA Attributes */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <span className="bg-primary text-primary-foreground rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">1</span>
                    ARIA属性
                  </CardTitle>
                  <CardDescription>
                    スクリーンリーダーに情報を提供するARIA属性
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="bg-muted rounded-lg p-4 mb-4">
                    <pre className="text-sm overflow-x-auto">
{`<button
  aria-label="メニューを開く"
  aria-expanded={isOpen}
  aria-controls="menu"
  onClick={toggleMenu}
>
  <MenuIcon />
</button>

<div
  id="menu"
  role="menu"
  aria-hidden={!isOpen}
  className={isOpen ? 'block' : 'hidden'}
>
  <div role="menuitem" tabIndex={0}>項目1</div>
  <div role="menuitem" tabIndex={0}>項目2</div>
</div>`}
                    </pre>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    ARIA属性を使用して、ボタンの状態やメニューの構造をスクリーンリーダーに伝えます。
                  </p>
                </CardContent>
              </Card>

              {/* Keyboard Navigation */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <span className="bg-primary text-primary-foreground rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">2</span>
                    キーボードナビゲーション
                  </CardTitle>
                  <CardDescription>
                    キーボードのみで操作できるUI
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="bg-muted rounded-lg p-4 mb-4">
                    <pre className="text-sm overflow-x-auto">
{`const handleKeyDown = (event: KeyboardEvent) => {
  switch (event.key) {
    case 'Enter':
    case ' ':
      event.preventDefault();
      handleClick();
      break;
    case 'Escape':
      handleClose();
      break;
    case 'ArrowDown':
      focusNext();
      break;
    case 'ArrowUp':
      focusPrevious();
      break;
  }
};

<button
  onKeyDown={handleKeyDown}
  tabIndex={0}
  className="focus:ring-2 focus:ring-primary"
>
  キーボード対応ボタン
</button>`}
                    </pre>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Enter、Space、Escape、矢印キーなどで操作できるようにします。
                  </p>
                </CardContent>
              </Card>

              {/* Focus Management */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <span className="bg-primary text-primary-foreground rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">3</span>
                    フォーカス管理
                  </CardTitle>
                  <CardDescription>
                    視覚的なフォーカス表示とフォーカストラップ
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="bg-muted rounded-lg p-4 mb-4">
                    <pre className="text-sm overflow-x-auto">
{`/* フォーカス表示 */
.focus-visible:focus {
  outline: 2px solid hsl(var(--ring));
  outline-offset: 2px;
}

/* フォーカストラップ */
const trapFocus = (element: HTMLElement) => {
  const focusableElements = element.querySelectorAll(
    'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
  );
  
  const firstElement = focusableElements[0] as HTMLElement;
  const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;
  
  // Tabキーでフォーカスを循環させる
};`}
                    </pre>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    フォーカスの視覚的表示と、モーダル内でのフォーカストラップを実装します。
                  </p>
                </CardContent>
              </Card>

              {/* Color Contrast */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <span className="bg-primary text-primary-foreground rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">4</span>
                    カラーコントラスト
                  </CardTitle>
                  <CardDescription>
                    WCAG AA準拠のコントラスト比（4.5:1以上）
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="bg-muted rounded-lg p-4 mb-4">
                    <pre className="text-sm overflow-x-auto">
{`/* 十分なコントラスト比 */
.text-primary {
  color: hsl(240 5.9% 10%); /* ダークテキスト */
}

.bg-primary {
  background-color: hsl(0 0% 98%); /* ライト背景 */
}

/* コントラスト比: 約 16:1 (AA準拠) */`}
                    </pre>
                  </div>
                  <div className="space-y-2">
                    <div className="p-4 bg-white text-black rounded">✅ 十分なコントラスト (16:1)</div>
                    <div className="p-4 bg-gray-300 text-gray-500 rounded">❌ 不十分なコントラスト (2:1)</div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Testing Tools */}
          <section>
            <div className="flex items-center gap-2 mb-4">
              <Volume2 className="h-5 w-5" />
              <h2 className="text-2xl font-bold">テストツール</h2>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">自動テスト</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <p className="text-sm">• axe-core (Chrome DevTools)</p>
                  <p className="text-sm">• Lighthouse</p>
                  <p className="text-sm">• WAVE (Web Accessibility Evaluator)</p>
                  <p className="text-sm">• Pa11y</p>
                  <p className="text-sm">• jest-axe</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">手動テスト</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <p className="text-sm">• キーボードのみでの操作</p>
                  <p className="text-sm">• スクリーンリーダー (NVDA, JAWS)</p>
                  <p className="text-sm">• ズーム機能のテスト</p>
                  <p className="text-sm">• 色覚異常シミュレーター</p>
                  <p className="text-sm">• 実際のユーザーテスト</p>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Best Practices */}
          <section>
            <div className="flex items-center gap-2 mb-4">
              <Palette className="h-5 w-5" />
              <h2 className="text-2xl font-bold">ベストプラクティス</h2>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">✅ 推奨事項</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <p className="text-sm">• セマンティックHTMLを使用</p>
                  <p className="text-sm">• 適切な見出し構造</p>
                  <p className="text-sm">• 代替テキストの提供</p>
                  <p className="text-sm">• キーボードナビゲーション</p>
                  <p className="text-sm">• 十分なコントラスト比</p>
                  <p className="text-sm">• フォーカス表示の明確化</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">❌ 避けるべきこと</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <p className="text-sm">• divやspanの乱用</p>
                  <p className="text-sm">• 色のみでの情報伝達</p>
                  <p className="text-sm">• 小さすぎるタッチターゲット</p>
                  <p className="text-sm">• 自動再生の動画・音声</p>
                  <p className="text-sm">• フォーカスの除去</p>
                  <p className="text-sm">• タイムアウトの短縮</p>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Demo */}
          <section>
            <div className="flex items-center gap-2 mb-4">
              <Keyboard className="h-5 w-5" />
              <h2 className="text-2xl font-bold">デモ</h2>
            </div>
            
            <Card>
              <CardContent className="pt-6">
                <p className="text-muted-foreground mb-4">
                  以下のボタンでキーボードナビゲーションとフォーカス表示をテストしてください。
                </p>
                <div className="space-y-4">
                  <div className="flex gap-4">
                    <Button 
                      className="focus:ring-2 focus:ring-primary focus:ring-offset-2"
                      aria-label="アクセシブルなボタン 1"
                    >
                      ボタン 1
                    </Button>
                    <Button 
                      variant="outline"
                      className="focus:ring-2 focus:ring-primary focus:ring-offset-2"
                      aria-label="アクセシブルなボタン 2"
                    >
                      ボタン 2
                    </Button>
                    <Button 
                      variant="secondary"
                      className="focus:ring-2 focus:ring-primary focus:ring-offset-2"
                      aria-label="アクセシブルなボタン 3"
                    >
                      ボタン 3
                    </Button>
                  </div>
                  
                  <div className="p-4 bg-muted rounded-lg">
                    <h4 className="font-medium mb-2">テスト方法:</h4>
                    <ul className="text-sm space-y-1 text-muted-foreground">
                      <li>• Tabキーでフォーカスを移動</li>
                      <li>• EnterキーまたはSpaceキーでクリック</li>
                      <li>• フォーカスリングの表示を確認</li>
                      <li>• スクリーンリーダーでaria-labelを確認</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* Next Steps */}
          <section>
            <Card>
              <CardHeader>
                <CardTitle>次のステップ</CardTitle>
                <CardDescription>
                  アクセシビリティ対応の実装が完了したら、次のトピックに進みましょう
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex gap-4">
                  <Button asChild>
                    <Link href="/learn/seo">SEO最適化 →</Link>
                  </Button>
                  <Button variant="outline" asChild>
                    <Link href="/learn">学習一覧に戻る</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </section>
        </div>
      </main>
    </div>
  );
}
