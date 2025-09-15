import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowLeft, Code, Eye, Zap, RefreshCw, AlertCircle, CheckCircle } from 'lucide-react';

export const metadata = {
  title: '楽観的更新 - Next.js 15 学習ガイド',
  description: 'リアルタイムなユーザー体験の実現方法を学びます。',
};

export default function OptimisticUpdatesPage() {
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
              <h1 className="text-3xl font-bold">楽観的更新</h1>
              <p className="text-muted-foreground mt-2">
                リアルタイムなユーザー体験の実現
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
              <Zap className="h-5 w-5" />
              <h2 className="text-2xl font-bold">概要</h2>
            </div>
            <Card>
              <CardContent className="pt-6">
                <p className="text-muted-foreground mb-4">
                  楽観的更新（Optimistic Updates）は、サーバーからの応答を待たずに
                  ユーザーの操作を即座にUIに反映させる技術です。TanStack Query、
                  ロールバック機能、競合解決などの実装方法を学び、
                  リアルタイムでレスポンシブなユーザー体験を実現します。
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">TanStack Query</Badge>
                  <Badge variant="secondary">楽観的更新</Badge>
                  <Badge variant="secondary">ロールバック</Badge>
                  <Badge variant="secondary">競合解決</Badge>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* What is Optimistic Updates */}
          <section>
            <div className="flex items-center gap-2 mb-4">
              <Eye className="h-5 w-5" />
              <h2 className="text-2xl font-bold">楽観的更新とは</h2>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <span className="bg-green-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">✓</span>
                    従来の方法
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2 text-sm">
                    <p>1. ユーザーが操作</p>
                    <p>2. ローディング表示</p>
                    <p>3. サーバーにリクエスト</p>
                    <p>4. サーバーから応答</p>
                    <p>5. UIを更新</p>
                  </div>
                  <div className="mt-4 p-2 bg-yellow-50 rounded text-xs">
                    ⏱️ 遅延: ネットワーク時間 + 処理時間
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <span className="bg-blue-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">⚡</span>
                    楽観的更新
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2 text-sm">
                    <p>1. ユーザーが操作</p>
                    <p>2. 即座にUIを更新</p>
                    <p>3. バックグラウンドでサーバーにリクエスト</p>
                    <p>4. 成功/失敗に応じて調整</p>
                  </div>
                  <div className="mt-4 p-2 bg-green-50 rounded text-xs">
                    ⚡ 遅延: ほぼゼロ
                  </div>
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
              {/* Basic Optimistic Update */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <span className="bg-primary text-primary-foreground rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">1</span>
                    基本的な楽観的更新
                  </CardTitle>
                  <CardDescription>
                    TanStack Query を使った基本的な実装
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="bg-muted rounded-lg p-4 mb-4">
                    <pre className="text-sm overflow-x-auto">
{`import { useMutation, useQueryClient } from '@tanstack/react-query';

function TodoItem({ todo }: { todo: Todo }) {
  const queryClient = useQueryClient();

  const toggleMutation = useMutation({
    mutationFn: async (id: string) => {
      const response = await fetch(\`/api/todos/\${id}\`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ completed: !todo.completed }),
      });
      return response.json();
    },
    onMutate: async (id: string) => {
      // 進行中のクエリをキャンセル
      await queryClient.cancelQueries({ queryKey: ['todos'] });

      // 現在のデータを保存
      const previousTodos = queryClient.getQueryData(['todos']);

      // 楽観的に更新
      queryClient.setQueryData(['todos'], (old: Todo[]) =>
        old.map(t => t.id === id ? { ...t, completed: !t.completed } : t)
      );

      // ロールバック用のデータを返す
      return { previousTodos };
    },
    onError: (err, id, context) => {
      // エラー時は元のデータに戻す
      queryClient.setQueryData(['todos'], context?.previousTodos);
    },
    onSettled: () => {
      // 成功/失敗に関わらず、データを再取得
      queryClient.invalidateQueries({ queryKey: ['todos'] });
    },
  });

  return (
    <div className="flex items-center gap-2">
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={() => toggleMutation.mutate(todo.id)}
        disabled={toggleMutation.isPending}
      />
      <span className={todo.completed ? 'line-through' : ''}>
        {todo.text}
      </span>
      {toggleMutation.isPending && <RefreshCw className="h-4 w-4 animate-spin" />}
    </div>
  );
}`}
                    </pre>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    チェックボックスの状態を即座に更新し、サーバーエラー時は元に戻します。
                  </p>
                </CardContent>
              </Card>

              {/* Like Button with Optimistic Updates */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <span className="bg-primary text-primary-foreground rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">2</span>
                    いいねボタン
                  </CardTitle>
                  <CardDescription>
                    ソーシャル機能での楽観的更新
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="bg-muted rounded-lg p-4 mb-4">
                    <pre className="text-sm overflow-x-auto">
{`function LikeButton({ postId, initialLikes, isLiked }: {
  postId: string;
  initialLikes: number;
  isLiked: boolean;
}) {
  const queryClient = useQueryClient();
  const [optimisticLikes, setOptimisticLikes] = useState(initialLikes);
  const [optimisticIsLiked, setOptimisticIsLiked] = useState(isLiked);

  const likeMutation = useMutation({
    mutationFn: async () => {
      const response = await fetch(\`/api/posts/\${postId}/like\`, {
        method: isLiked ? 'DELETE' : 'POST',
      });
      return response.json();
    },
    onMutate: async () => {
      // 楽観的更新
      const newIsLiked = !optimisticIsLiked;
      const newLikes = newIsLiked 
        ? optimisticLikes + 1 
        : optimisticLikes - 1;

      setOptimisticIsLiked(newIsLiked);
      setOptimisticLikes(newLikes);

      // キャッシュも更新
      queryClient.setQueryData(['post', postId], (old: any) => ({
        ...old,
        likes: newLikes,
        isLiked: newIsLiked,
      }));

      return { previousLikes: optimisticLikes, previousIsLiked: optimisticIsLiked };
    },
    onError: (err, variables, context) => {
      // エラー時は元に戻す
      setOptimisticLikes(context?.previousLikes || initialLikes);
      setOptimisticIsLiked(context?.previousIsLiked || isLiked);
      
      queryClient.setQueryData(['post', postId], (old: any) => ({
        ...old,
        likes: context?.previousLikes || initialLikes,
        isLiked: context?.previousIsLiked || isLiked,
      }));
    },
    onSuccess: (data) => {
      // 成功時は実際のデータで更新
      setOptimisticLikes(data.likes);
      setOptimisticIsLiked(data.isLiked);
    },
  });

  return (
    <button
      onClick={() => likeMutation.mutate()}
      disabled={likeMutation.isPending}
      className={\`flex items-center gap-2 px-3 py-1 rounded-full transition-colors \${
        optimisticIsLiked 
          ? 'bg-red-100 text-red-600' 
          : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
      }\`}
    >
      {likeMutation.isPending ? (
        <RefreshCw className="h-4 w-4 animate-spin" />
      ) : optimisticIsLiked ? (
        <Heart className="h-4 w-4 fill-current" />
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
                    いいねボタンを即座に反応させ、エラー時は元の状態に戻します。
                  </p>
                </CardContent>
              </Card>

              {/* Form Submission */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <span className="bg-primary text-primary-foreground rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">3</span>
                    フォーム送信
                  </CardTitle>
                  <CardDescription>
                    フォーム送信での楽観的更新
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="bg-muted rounded-lg p-4 mb-4">
                    <pre className="text-sm overflow-x-auto">
{`function CommentForm({ postId }: { postId: string }) {
  const queryClient = useQueryClient();
  const [text, setText] = useState('');

  const submitMutation = useMutation({
    mutationFn: async (commentText: string) => {
      const response = await fetch(\`/api/posts/\${postId}/comments\`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ text: commentText }),
      });
      return response.json();
    },
    onMutate: async (commentText: string) => {
      // 楽観的にコメントを追加
      const optimisticComment = {
        id: \`temp-\${Date.now()}\`,
        text: commentText,
        author: 'You',
        createdAt: new Date().toISOString(),
        isOptimistic: true,
      };

      queryClient.setQueryData(['comments', postId], (old: Comment[] = []) => [
        optimisticComment,
        ...old,
      ]);

      return { optimisticComment };
    },
    onError: (err, commentText, context) => {
      // エラー時は楽観的コメントを削除
      queryClient.setQueryData(['comments', postId], (old: Comment[] = []) =>
        old.filter(comment => comment.id !== context?.optimisticComment.id)
      );
    },
    onSuccess: (data, commentText) => {
      // 成功時は楽観的コメントを実際のコメントに置き換え
      queryClient.setQueryData(['comments', postId], (old: Comment[] = []) =>
        old.map(comment => 
          comment.isOptimistic && comment.text === commentText
            ? { ...data, isOptimistic: false }
            : comment
        )
      );
    },
  });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (text.trim()) {
      submitMutation.mutate(text.trim());
      setText('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-2">
      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="コメントを入力..."
        className="flex-1 px-3 py-2 border rounded"
        disabled={submitMutation.isPending}
      />
      <button
        type="submit"
        disabled={submitMutation.isPending || !text.trim()}
        className="px-4 py-2 bg-blue-600 text-white rounded disabled:opacity-50"
      >
        {submitMutation.isPending ? (
          <RefreshCw className="h-4 w-4 animate-spin" />
        ) : (
          '送信'
        )}
      </button>
    </form>
  );
}`}
                    </pre>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    コメントを即座に表示し、送信完了後に実際のデータに置き換えます。
                  </p>
                </CardContent>
              </Card>

              {/* Conflict Resolution */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <span className="bg-primary text-primary-foreground rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">4</span>
                    競合解決
                  </CardTitle>
                  <CardDescription>
                    複数ユーザー間での競合を解決
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="bg-muted rounded-lg p-4 mb-4">
                    <pre className="text-sm overflow-x-auto">
{`function CollaborativeEditor({ documentId }: { documentId: string }) {
  const queryClient = useQueryClient();
  const [localContent, setLocalContent] = useState('');

  const updateMutation = useMutation({
    mutationFn: async (content: string) => {
      const response = await fetch(\`/api/documents/\${documentId}\`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ content }),
      });
      
      if (response.status === 409) {
        // 競合エラー
        const conflictData = await response.json();
        throw new Error(\`CONFLICT:\${JSON.stringify(conflictData)}\`);
      }
      
      return response.json();
    },
    onMutate: async (content: string) => {
      // 楽観的に更新
      queryClient.setQueryData(['document', documentId], (old: any) => ({
        ...old,
        content,
        lastModified: new Date().toISOString(),
      }));

      return { previousContent: localContent };
    },
    onError: (error, content, context) => {
      if (error.message.startsWith('CONFLICT:')) {
        // 競合が発生した場合
        const conflictData = JSON.parse(error.message.replace('CONFLICT:', ''));
        
        // ユーザーに選択肢を提示
        const shouldOverwrite = confirm(
          \`他のユーザーが編集しています。\\n\\n\` +
          \`サーバーの内容: \${conflictData.serverContent}\\n\` +
          \`あなたの変更: \${content}\\n\\n\` +
          \`サーバーの内容で上書きしますか？\`
        );

        if (shouldOverwrite) {
          // サーバーの内容で上書き
          queryClient.setQueryData(['document', documentId], (old: any) => ({
            ...old,
            content: conflictData.serverContent,
            lastModified: conflictData.lastModified,
          }));
          setLocalContent(conflictData.serverContent);
        } else {
          // 元の内容に戻す
          setLocalContent(context?.previousContent || '');
        }
      } else {
        // その他のエラー
        setLocalContent(context?.previousContent || '');
      }
    },
  });

  return (
    <div>
      <textarea
        value={localContent}
        onChange={(e) => setLocalContent(e.target.value)}
        onBlur={() => updateMutation.mutate(localContent)}
        className="w-full h-64 p-4 border rounded"
        placeholder="ドキュメントを編集..."
      />
      {updateMutation.isPending && (
        <div className="text-sm text-gray-500">保存中...</div>
      )}
    </div>
  );
}`}
                    </pre>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    複数ユーザーが同時に編集する際の競合を適切に処理します。
                  </p>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Best Practices */}
          <section>
            <div className="flex items-center gap-2 mb-4">
              <CheckCircle className="h-5 w-5" />
              <h2 className="text-2xl font-bold">ベストプラクティス</h2>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">✅ 推奨事項</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <p className="text-sm">• 適切なロールバック処理</p>
                  <p className="text-sm">• 楽観的更新の視覚的表示</p>
                  <p className="text-sm">• エラー時のユーザー通知</p>
                  <p className="text-sm">• 競合解決の実装</p>
                  <p className="text-sm">• パフォーマンスの考慮</p>
                  <p className="text-sm">• テストの充実</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">❌ 避けるべきこと</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <p className="text-sm">• ロールバック処理の不備</p>
                  <p className="text-sm">• 楽観的更新の過度な使用</p>
                  <p className="text-sm">• エラー状態の無視</p>
                  <p className="text-sm">• 競合の無視</p>
                  <p className="text-sm">• パフォーマンスの軽視</p>
                  <p className="text-sm">• テストの不足</p>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* When to Use */}
          <section>
            <div className="flex items-center gap-2 mb-4">
              <AlertCircle className="h-5 w-5" />
              <h2 className="text-2xl font-bold">使用場面</h2>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">✅ 適している場面</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <p className="text-sm">• いいね、ブックマーク</p>
                  <p className="text-sm">• フォロー/アンフォロー</p>
                  <p className="text-sm">• チェックボックスの切り替え</p>
                  <p className="text-sm">• 簡単な設定変更</p>
                  <p className="text-sm">• コメントの追加</p>
                  <p className="text-sm">• ステータスの更新</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">❌ 適していない場面</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <p className="text-sm">• 重要なデータの削除</p>
                  <p className="text-sm">• 決済処理</p>
                  <p className="text-sm">• 複雑な計算処理</p>
                  <p className="text-sm">• 外部APIとの連携</p>
                  <p className="text-sm">• バリデーションが複雑</p>
                  <p className="text-sm">• 競合が頻繁に発生</p>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Completion */}
          <section>
            <Card className="border-green-200 bg-green-50">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-green-800">
                  <CheckCircle className="h-6 w-6" />
                  学習完了！
                </CardTitle>
                <CardDescription className="text-green-700">
                  おめでとうございます！Next.js 15のModernな機能をすべて学習しました。
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <p className="text-green-700">
                    これで、Next.js 15とReact 19を使った最新のWebアプリケーション開発の
                    基礎知識を身につけることができました。
                  </p>
                  <div className="flex gap-4">
                    <Button asChild className="bg-green-600 hover:bg-green-700">
                      <Link href="/learn">学習一覧に戻る</Link>
                    </Button>
                    <Button variant="outline" asChild>
                      <Link href="/">ホームに戻る</Link>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>
        </div>
      </main>
    </div>
  );
}
