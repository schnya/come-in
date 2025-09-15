import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowLeft, Code, Eye, Palette, Settings } from 'lucide-react';

export const metadata = {
  title: 'ダークモード対応 - Next.js 15 学習ガイド',
  description: 'CSS変数とTailwind CSSを使ったダークモード実装方法を学びます。',
};

export default function DarkModePage() {
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
              <h1 className="text-3xl font-bold">ダークモード対応</h1>
              <p className="text-muted-foreground mt-2">
                CSS変数とTailwind CSSを使ったモダンなダークモード実装
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
              <Eye className="h-5 w-5" />
              <h2 className="text-2xl font-bold">概要</h2>
            </div>
            <Card>
              <CardContent className="pt-6">
                <p className="text-muted-foreground mb-4">
                  ダークモードは現代のWebアプリケーションにおいて重要な機能です。
                  この章では、CSS変数とTailwind CSSを使用して、システム設定に応じた自動切り替えと
                  手動切り替えの両方をサポートするダークモードを実装する方法を学びます。
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">CSS変数</Badge>
                  <Badge variant="secondary">Tailwind CSS</Badge>
                  <Badge variant="secondary">システム設定対応</Badge>
                  <Badge variant="secondary">手動切り替え</Badge>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* Implementation Steps */}
          <section>
            <div className="flex items-center gap-2 mb-4">
              <Code className="h-5 w-5" />
              <h2 className="text-2xl font-bold">実装手順</h2>
            </div>
            
            <div className="space-y-6">
              {/* Step 1 */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <span className="bg-primary text-primary-foreground rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">1</span>
                    CSS変数の定義
                  </CardTitle>
                  <CardDescription>
                    globals.cssでライトモードとダークモードの色を定義
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="bg-muted rounded-lg p-4 mb-4">
                    <pre className="text-sm overflow-x-auto">
{`:root {
  --background: 0 0% 100%;
  --foreground: 240 10% 3.9%;
  --primary: 240 5.9% 10%;
  --primary-foreground: 0 0% 98%;
  /* その他の色変数... */
}

.dark {
  --background: 240 10% 3.9%;
  --foreground: 0 0% 98%;
  --primary: 0 0% 98%;
  --primary-foreground: 240 5.9% 10%;
  /* ダークモード用の色変数... */
}`}
                    </pre>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    HSL形式で色を定義し、.darkクラスでダークモード用の色を上書きします。
                  </p>
                </CardContent>
              </Card>

              {/* Step 2 */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <span className="bg-primary text-primary-foreground rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">2</span>
                    Tailwind CSS設定
                  </CardTitle>
                  <CardDescription>
                    @themeディレクティブでTailwind CSSに色を登録
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="bg-muted rounded-lg p-4 mb-4">
                    <pre className="text-sm overflow-x-auto">
{`@theme {
  --color-background: hsl(var(--background));
  --color-foreground: hsl(var(--foreground));
  --color-primary: hsl(var(--primary));
  --color-primary-foreground: hsl(var(--primary-foreground));
  /* その他の色マッピング... */
}`}
                    </pre>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    CSS変数をTailwind CSSの色システムにマッピングします。
                  </p>
                </CardContent>
              </Card>

              {/* Step 3 */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <span className="bg-primary text-primary-foreground rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">3</span>
                    Theme Provider実装
                  </CardTitle>
                  <CardDescription>
                    React Contextを使用したテーマ管理
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="bg-muted rounded-lg p-4 mb-4">
                    <pre className="text-sm overflow-x-auto">
{`export function ThemeProvider({ children, defaultTheme = 'system' }) {
  const [theme, setTheme] = useState(defaultTheme);

  useEffect(() => {
    const root = window.document.documentElement;
    root.classList.remove('light', 'dark');

    if (theme === 'system') {
      const systemTheme = window.matchMedia('(prefers-color-scheme: dark)')
        .matches ? 'dark' : 'light';
      root.classList.add(systemTheme);
    } else {
      root.classList.add(theme);
    }
  }, [theme]);

  return (
    <ThemeProviderContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeProviderContext.Provider>
  );
}`}
                    </pre>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    システム設定の検出とテーマの動的切り替えを実装します。
                  </p>
                </CardContent>
              </Card>

              {/* Step 4 */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <span className="bg-primary text-primary-foreground rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">4</span>
                    テーマ切り替えボタン
                  </CardTitle>
                  <CardDescription>
                    ユーザーがテーマを切り替えられるUI
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="bg-muted rounded-lg p-4 mb-4">
                    <pre className="text-sm overflow-x-auto">
{`export function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  const cycleTheme = () => {
    if (theme === 'light') setTheme('dark');
    else if (theme === 'dark') setTheme('system');
    else setTheme('light');
  };

  return (
    <Button onClick={cycleTheme} aria-label="テーマ切り替え">
      {theme === 'light' && <Sun />}
      {theme === 'dark' && <Moon />}
      {theme === 'system' && <Monitor />}
    </Button>
  );
}`}
                    </pre>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    ライト、ダーク、システム設定の3つのモードを循環して切り替えます。
                  </p>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Best Practices */}
          <section>
            <div className="flex items-center gap-2 mb-4">
              <Settings className="h-5 w-5" />
              <h2 className="text-2xl font-bold">ベストプラクティス</h2>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">✅ 推奨事項</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <p className="text-sm">• システム設定をデフォルトにする</p>
                  <p className="text-sm">• ユーザーの選択をlocalStorageに保存</p>
                  <p className="text-sm">• 適切なコントラスト比を確保</p>
                  <p className="text-sm">• アニメーションを滑らかにする</p>
                  <p className="text-sm">• アクセシビリティを考慮する</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">❌ 避けるべきこと</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <p className="text-sm">• ハードコードされた色の使用</p>
                  <p className="text-sm">• 急激な色の変化</p>
                  <p className="text-sm">• コントラスト比の無視</p>
                  <p className="text-sm">• システム設定の無視</p>
                  <p className="text-sm">• パフォーマンスの軽視</p>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Demo */}
          <section>
            <div className="flex items-center gap-2 mb-4">
              <Palette className="h-5 w-5" />
              <h2 className="text-2xl font-bold">デモ</h2>
            </div>
            
            <Card>
              <CardContent className="pt-6">
                <p className="text-muted-foreground mb-4">
                  右上のテーマ切り替えボタンをクリックして、ダークモードの動作を確認してください。
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <h4 className="font-medium">ライトモード</h4>
                    <div className="bg-background border rounded-lg p-4">
                      <p className="text-foreground">背景色: hsl(var(--background))</p>
                      <p className="text-muted-foreground">テキスト色: hsl(var(--foreground))</p>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <h4 className="font-medium">ダークモード</h4>
                    <div className="bg-background border rounded-lg p-4">
                      <p className="text-foreground">背景色: hsl(var(--background))</p>
                      <p className="text-muted-foreground">テキスト色: hsl(var(--foreground))</p>
                    </div>
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
                  ダークモードの実装が完了したら、次のトピックに進みましょう
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex gap-4">
                  <Button asChild>
                    <Link href="/learn/responsive">レスポンシブデザイン →</Link>
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
