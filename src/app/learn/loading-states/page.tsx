import { ArrowLeft, BarChart3, Code, Eye, Loader2, Zap } from 'lucide-react';
import Link from 'next/link';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

// Skeleton component for loading states
function Skeleton({ className }: { className?: string }) {
  return (
    <div className={`animate-pulse bg-muted rounded ${className}`} />
  );
}

export const metadata = {
  title: 'ローディング状態管理 - Next.js 15 学習ガイド',
  description: 'ユーザー体験を向上させるローディング状態の実装方法を学びます。',
};

export default function LoadingStatesPage() {
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
              <h1 className="text-3xl font-bold">ローディング状態管理</h1>
              <p className="text-muted-foreground mt-2">
                ユーザー体験を向上させるローディング状態
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
              <Loader2 className="h-5 w-5" />
              <h2 className="text-2xl font-bold">概要</h2>
            </div>
            <Card>
              <CardContent className="pt-6">
                <p className="text-muted-foreground mb-4">
                  ローディング状態の適切な管理は、ユーザー体験を大幅に向上させます。
                  Next.js 15のSuspense、スケルトンUI、プログレスバー、楽観的更新などの
                  様々なローディング状態の実装方法を学び、ユーザーに快適な体験を提供します。
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">Suspense</Badge>
                  <Badge variant="secondary">スケルトンUI</Badge>
                  <Badge variant="secondary">プログレスバー</Badge>
                  <Badge variant="secondary">楽観的更新</Badge>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* Loading Types */}
          <section>
            <div className="flex items-center gap-2 mb-4">
              <BarChart3 className="h-5 w-5" />
              <h2 className="text-2xl font-bold">ローディングの種類</h2>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <span className="bg-blue-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">1</span>
                    初期ローディング
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm">
                    <li>• ページの初回読み込み</li>
                    <li>• アプリケーションの起動</li>
                    <li>• 大きなリソースの読み込み</li>
                    <li>• 認証状態の確認</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <span className="bg-green-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">2</span>
                    データローディング
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm">
                    <li>• API データの取得</li>
                    <li>• データベースクエリ</li>
                    <li>• ファイルのアップロード</li>
                    <li>• 検索結果の取得</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <span className="bg-purple-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">3</span>
                    操作ローディング
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm">
                    <li>• フォーム送信</li>
                    <li>• データの保存</li>
                    <li>• 削除操作</li>
                    <li>• 状態の更新</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <span className="bg-orange-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">4</span>
                    ナビゲーション
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm">
                    <li>• ページ遷移</li>
                    <li>• ルートの変更</li>
                    <li>• モーダルの開閉</li>
                    <li>• タブの切り替え</li>
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
              {/* Suspense */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <span className="bg-primary text-primary-foreground rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">1</span>
                    Suspense
                  </CardTitle>
                  <CardDescription>
                    React の Suspense を使った非同期コンポーネント
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="bg-muted rounded-lg p-4 mb-4">
                    <pre className="text-sm overflow-x-auto">
{`import { Suspense } from 'react';

// 非同期コンポーネント
async function UserProfile({ userId }: { userId: string }) {
  const user = await fetchUser(userId);
  return <div>{user.name}</div>;
}

// ローディングコンポーネント
function LoadingSkeleton() {
  return (
    <div className="animate-pulse">
      <div className="h-4 bg-gray-200 rounded w-3/4 mb-2"></div>
      <div className="h-4 bg-gray-200 rounded w-1/2"></div>
    </div>
  );
}

// 使用例
function App() {
  return (
    <Suspense fallback={<LoadingSkeleton />}>
      <UserProfile userId="123" />
    </Suspense>
  );
}

// 複数のSuspense境界
function Dashboard() {
  return (
    <div>
      <Suspense fallback={<div>ユーザー情報読み込み中...</div>}>
        <UserProfile userId="123" />
      </Suspense>
      
      <Suspense fallback={<div>統計情報読み込み中...</div>}>
        <Statistics />
      </Suspense>
    </div>
  );
}`}
                    </pre>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Suspenseを使用して非同期コンポーネントのローディング状態を管理します。
                  </p>
                </CardContent>
              </Card>

              {/* Skeleton UI */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Skeleton className="h-5 w-5" />
                    スケルトンUI
                  </CardTitle>
                  <CardDescription>
                    コンテンツの構造を予測させるスケルトンローディング
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="bg-muted rounded-lg p-4 mb-4">
                    <pre className="text-sm overflow-x-auto">
{`// スケルトンコンポーネント
function SkeletonCard() {
  return (
    <div className="border rounded-lg p-4">
      <div className="flex items-center space-x-4">
        <div className="rounded-full bg-gray-200 h-12 w-12 animate-pulse"></div>
        <div className="space-y-2 flex-1">
          <div className="h-4 bg-gray-200 rounded animate-pulse w-3/4"></div>
          <div className="h-4 bg-gray-200 rounded animate-pulse w-1/2"></div>
        </div>
      </div>
    </div>
  );
}

// カードリストのスケルトン
function CardListSkeleton() {
  return (
    <div className="grid gap-4">
      {Array.from({ length: 3 }).map((_, i) => (
        <SkeletonCard key={i} />
      ))}
    </div>
  );
}

// 使用例
function UserList() {
  const { data, isLoading } = useQuery({
    queryKey: ['users'],
    queryFn: fetchUsers,
  });

  if (isLoading) {
    return <CardListSkeleton />;
  }

  return (
    <div className="grid gap-4">
      {data.map(user => (
        <UserCard key={user.id} user={user} />
      ))}
    </div>
  );
}`}
                    </pre>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    実際のコンテンツの構造に似たスケルトンUIで、より自然なローディング体験を提供します。
                  </p>
                </CardContent>
              </Card>

              {/* Progress Bar */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <BarChart3 className="h-5 w-5" />
                    プログレスバー
                  </CardTitle>
                  <CardDescription>
                    進捗を視覚的に表示するプログレスバー
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="bg-muted rounded-lg p-4 mb-4">
                    <pre className="text-sm overflow-x-auto">
{`// プログレスバーコンポーネント
function ProgressBar({ progress, label }: { progress: number; label?: string }) {
  return (
    <div className="w-full">
      {label && <div className="text-sm text-gray-600 mb-1">{label}</div>}
      <div className="w-full bg-gray-200 rounded-full h-2">
        <div
          className="bg-blue-600 h-2 rounded-full transition-all duration-300"
          style={{ width: \`\${progress}%\` }}
        ></div>
      </div>
      <div className="text-xs text-gray-500 mt-1">{progress}%</div>
    </div>
  );
}

// ファイルアップロードの進捗
function FileUpload() {
  const [uploadProgress, setUploadProgress] = useState(0);
  const [isUploading, setIsUploading] = useState(false);

  const handleUpload = async (file: File) => {
    setIsUploading(true);
    setUploadProgress(0);

    const formData = new FormData();
    formData.append('file', file);

    try {
      await fetch('/api/upload', {
        method: 'POST',
        body: formData,
        onUploadProgress: (progressEvent) => {
          const progress = Math.round(
            (progressEvent.loaded * 100) / progressEvent.total
          );
          setUploadProgress(progress);
        },
      });
    } finally {
      setIsUploading(false);
    }
  };

  return (
    <div>
      {isUploading && (
        <ProgressBar 
          progress={uploadProgress} 
          label="ファイルをアップロード中..." 
        />
      )}
    </div>
  );
}`}
                    </pre>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    ファイルアップロードや長時間の処理で進捗を視覚的に表示します。
                  </p>
                </CardContent>
              </Card>

              {/* Optimistic Updates */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Zap className="h-5 w-5" />
                    楽観的更新
                  </CardTitle>
                  <CardDescription>
                    ユーザー操作を即座に反映する楽観的更新
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="bg-muted rounded-lg p-4 mb-4">
                    <pre className="text-sm overflow-x-auto">
{`import { useMutation, useQueryClient } from '@tanstack/react-query';

function LikeButton({ postId, initialLikes }: { postId: string; initialLikes: number }) {
  const queryClient = useQueryClient();
  const [optimisticLikes, setOptimisticLikes] = useState(initialLikes);

  const likeMutation = useMutation({
    mutationFn: async () => {
      const response = await fetch(\`/api/posts/\${postId}/like\`, {
        method: 'POST',
      });
      return response.json();
    },
    onMutate: async () => {
      // 楽観的更新
      setOptimisticLikes(prev => prev + 1);
      
      // キャッシュを楽観的に更新
      queryClient.setQueryData(['post', postId], (old: any) => ({
        ...old,
        likes: old.likes + 1,
      }));
    },
    onError: () => {
      // エラー時は元に戻す
      setOptimisticLikes(initialLikes);
      queryClient.invalidateQueries(['post', postId]);
    },
    onSuccess: (data) => {
      // 成功時は実際のデータで更新
      setOptimisticLikes(data.likes);
    },
  });

  return (
    <button
      onClick={() => likeMutation.mutate()}
      disabled={likeMutation.isPending}
      className="flex items-center gap-2"
    >
      {likeMutation.isPending ? (
        <Loader2 className="h-4 w-4 animate-spin" />
      ) : (
        <Heart className="h-4 w-4" />
      )}
      {optimisticLikes}
    </button>
  );
}`}
                    </pre>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    ユーザーの操作を即座に反映し、サーバー応答を待たずにUIを更新します。
                  </p>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Best Practices */}
          <section>
            <div className="flex items-center gap-2 mb-4">
              <Eye className="h-5 w-5" />
              <h2 className="text-2xl font-bold">ベストプラクティス</h2>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">✅ 推奨事項</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <p className="text-sm">• 適切なローディング時間の表示</p>
                  <p className="text-sm">• スケルトンUIの活用</p>
                  <p className="text-sm">• 進捗の視覚的表示</p>
                  <p className="text-sm">• 楽観的更新の実装</p>
                  <p className="text-sm">• エラー時の適切な処理</p>
                  <p className="text-sm">• ローディング状態の一貫性</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">❌ 避けるべきこと</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <p className="text-sm">• 長時間の空白画面</p>
                  <p className="text-sm">• 不適切なローディング表示</p>
                  <p className="text-sm">• 進捗の不明確な表示</p>
                  <p className="text-sm">• 楽観的更新の失敗処理</p>
                  <p className="text-sm">• ローディング状態の無視</p>
                  <p className="text-sm">• 一貫性のないローディングUI</p>
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
                  ローディング状態管理の実装が完了したら、最後のトピックに進みましょう
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex gap-4">
                  <Button asChild>
                    <Link href="/learn/optimistic-updates">楽観的更新 →</Link>
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
