import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowLeft, Code, Eye, AlertTriangle, Shield, Bug } from 'lucide-react';

export const metadata = {
  title: 'エラーハンドリング - Next.js 15 学習ガイド',
  description: '堅牢なエラーハンドリングとユーザー体験の実装方法を学びます。',
};

export default function ErrorHandlingPage() {
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
              <h1 className="text-3xl font-bold">エラーハンドリング</h1>
              <p className="text-muted-foreground mt-2">
                堅牢なエラーハンドリングとユーザー体験
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
              <AlertTriangle className="h-5 w-5" />
              <h2 className="text-2xl font-bold">概要</h2>
            </div>
            <Card>
              <CardContent className="pt-6">
                <p className="text-muted-foreground mb-4">
                  エラーハンドリングは、アプリケーションの堅牢性とユーザー体験を向上させる重要な要素です。
                  Next.js 15のError Boundary、API エラー、フォールバックUI、ログ管理などの
                  包括的なエラーハンドリング戦略を実装する方法を学びます。
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">Error Boundary</Badge>
                  <Badge variant="secondary">API エラー</Badge>
                  <Badge variant="secondary">フォールバックUI</Badge>
                  <Badge variant="secondary">ログ管理</Badge>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* Error Types */}
          <section>
            <div className="flex items-center gap-2 mb-4">
              <Bug className="h-5 w-5" />
              <h2 className="text-2xl font-bold">エラーの種類</h2>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <span className="bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">1</span>
                    クライアントエラー
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm">
                    <li>• JavaScript実行エラー</li>
                    <li>• ネットワークエラー</li>
                    <li>• バリデーションエラー</li>
                    <li>• 状態管理エラー</li>
                    <li>• レンダリングエラー</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <span className="bg-orange-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">2</span>
                    サーバーエラー
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm">
                    <li>• API エラー</li>
                    <li>• データベースエラー</li>
                    <li>• 認証エラー</li>
                    <li>• 権限エラー</li>
                    <li>• システムエラー</li>
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
              {/* Error Boundary */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <span className="bg-primary text-primary-foreground rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">1</span>
                    Error Boundary
                  </CardTitle>
                  <CardDescription>
                    React の Error Boundary を活用したエラーキャッチ
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="bg-muted rounded-lg p-4 mb-4">
                    <pre className="text-sm overflow-x-auto">
{`'use client';

import { Component, ReactNode } from 'react';

interface Props {
  children: ReactNode;
  fallback?: ReactNode;
}

interface State {
  hasError: boolean;
  error?: Error;
}

export class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: any) {
    console.error('Error caught by boundary:', error, errorInfo);
    // エラーログの送信
  }

  render() {
    if (this.state.hasError) {
      return this.props.fallback || (
        <div className="p-4 border border-red-200 rounded-lg">
          <h2>エラーが発生しました</h2>
          <p>ページを再読み込みしてください。</p>
        </div>
      );
    }

    return this.props.children;
  }
}`}
                    </pre>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    コンポーネントツリー内のエラーをキャッチし、フォールバックUIを表示します。
                  </p>
                </CardContent>
              </Card>

              {/* API Error Handling */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <span className="bg-primary text-primary-foreground rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">2</span>
                    API エラーハンドリング
                  </CardTitle>
                  <CardDescription>
                    TanStack Query を使ったAPI エラー処理
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="bg-muted rounded-lg p-4 mb-4">
                    <pre className="text-sm overflow-x-auto">
{`import { useQuery } from '@tanstack/react-query';

function useUserData(userId: string) {
  return useQuery({
    queryKey: ['user', userId],
    queryFn: async () => {
      const response = await fetch(\`/api/users/\${userId}\`);
      
      if (!response.ok) {
        if (response.status === 404) {
          throw new Error('ユーザーが見つかりません');
        }
        if (response.status === 403) {
          throw new Error('アクセス権限がありません');
        }
        throw new Error('データの取得に失敗しました');
      }
      
      return response.json();
    },
    retry: (failureCount, error) => {
      // 404エラーは再試行しない
      if (error.message.includes('見つかりません')) {
        return false;
      }
      return failureCount < 3;
    },
    onError: (error) => {
      console.error('API Error:', error);
      // エラーログの送信
    }
  });
}

// コンポーネントでの使用
function UserProfile({ userId }: { userId: string }) {
  const { data, error, isLoading } = useUserData(userId);

  if (isLoading) return <div>読み込み中...</div>;
  
  if (error) {
    return (
      <div className="p-4 border border-red-200 rounded-lg">
        <p className="text-red-600">{error.message}</p>
        <button onClick={() => window.location.reload()}>
          再試行
        </button>
      </div>
    );
  }

  return <div>{data.name}</div>;
}`}
                    </pre>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    API エラーの種類に応じた適切な処理と再試行ロジックを実装します。
                  </p>
                </CardContent>
              </Card>

              {/* Global Error Handler */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <span className="bg-primary text-primary-foreground rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">3</span>
                    グローバルエラーハンドラー
                  </CardTitle>
                  <CardDescription>
                    アプリケーション全体のエラー監視
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="bg-muted rounded-lg p-4 mb-4">
                    <pre className="text-sm overflow-x-auto">
{`// lib/error-handler.ts
export class ErrorHandler {
  static handle(error: Error, context?: string) {
    const errorInfo = {
      message: error.message,
      stack: error.stack,
      context,
      timestamp: new Date().toISOString(),
      userAgent: navigator.userAgent,
      url: window.location.href,
    };

    // コンソールログ
    console.error('Global Error:', errorInfo);

    // エラーログの送信（Sentry、LogRocket等）
    this.sendToErrorService(errorInfo);

    // ユーザーへの通知
    this.notifyUser(error);
  }

  static sendToErrorService(errorInfo: any) {
    // エラー監視サービスへの送信
    fetch('/api/errors', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(errorInfo),
    }).catch(console.error);
  }

  static notifyUser(error: Error) {
    // トースト通知やモーダル表示
    const message = this.getUserFriendlyMessage(error);
    // toast.error(message);
  }

  static getUserFriendlyMessage(error: Error): string {
    if (error.message.includes('ネットワーク')) {
      return 'ネットワークエラーが発生しました。接続を確認してください。';
    }
    if (error.message.includes('権限')) {
      return 'アクセス権限がありません。';
    }
    return '予期しないエラーが発生しました。';
  }
}

// グローバルエラーハンドラーの設定
window.addEventListener('error', (event) => {
  ErrorHandler.handle(event.error, 'Global Error');
});

window.addEventListener('unhandledrejection', (event) => {
  ErrorHandler.handle(new Error(event.reason), 'Unhandled Promise Rejection');
});`}
                    </pre>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    アプリケーション全体のエラーを監視し、適切な処理を行います。
                  </p>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Best Practices */}
          <section>
            <div className="flex items-center gap-2 mb-4">
              <Shield className="h-5 w-5" />
              <h2 className="text-2xl font-bold">ベストプラクティス</h2>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">✅ 推奨事項</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <p className="text-sm">• エラーの種類に応じた適切な処理</p>
                  <p className="text-sm">• ユーザーフレンドリーなエラーメッセージ</p>
                  <p className="text-sm">• エラーログの記録と監視</p>
                  <p className="text-sm">• フォールバックUIの提供</p>
                  <p className="text-sm">• 再試行機能の実装</p>
                  <p className="text-sm">• エラー境界の適切な配置</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">❌ 避けるべきこと</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <p className="text-sm">• エラーの無視や隠蔽</p>
                  <p className="text-sm">• 技術的なエラーメッセージの表示</p>
                  <p className="text-sm">• エラーログの記録漏れ</p>
                  <p className="text-sm">• ユーザーを困らせるエラー画面</p>
                  <p className="text-sm">• 無限ループの再試行</p>
                  <p className="text-sm">• エラー境界の過度な使用</p>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Next Steps */}
          <section>
            <Card>
              <CardHeader>
                <CardTitle>次のステップ</CardTitle>
                <CardDescription>
                  エラーハンドリングの実装が完了したら、次のトピックに進みましょう
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex gap-4">
                  <Button asChild>
                    <Link href="/learn/loading-states">ローディング状態管理 →</Link>
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
