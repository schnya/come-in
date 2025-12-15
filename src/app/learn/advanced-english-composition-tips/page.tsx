import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowLeft, BookOpen, PenTool, Lightbulb, Target, CheckCircle, XCircle, FileText, Zap } from 'lucide-react';

export const metadata = {
  title: '自由英作文 上級者向けTips - 学習ガイド',
  description: '上級者向けの自由英作文の書き方とテクニックを学びます。',
};

export default function AdvancedEnglishCompositionTipsPage() {
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
              <h1 className="text-3xl font-bold">自由英作文 上級者向けTips</h1>
              <p className="text-muted-foreground mt-2">
                高度な表現力と論理的思考を身につける
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
              <BookOpen className="h-5 w-5" />
              <h2 className="text-2xl font-bold">概要</h2>
            </div>
            <Card>
              <CardContent className="pt-6">
                <p className="text-muted-foreground mb-4">
                  上級レベルの自由英作文では、単なる文法の正確さだけでなく、論理的思考、説得力のある議論、
                  洗練された表現力が求められます。このガイドでは、より高度な英作文を書くための実践的なテクニックと
                  戦略を学びます。
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">論理的構成</Badge>
                  <Badge variant="secondary">高度な語彙</Badge>
                  <Badge variant="secondary">説得力のある議論</Badge>
                  <Badge variant="secondary">文体の洗練</Badge>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* Core Principles */}
          <section>
            <div className="flex items-center gap-2 mb-4">
              <Target className="h-5 w-5" />
              <h2 className="text-2xl font-bold">上級英作文の基本原則</h2>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <span className="bg-blue-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">1</span>
                    明確な論理構造
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm">
                    <li>• <strong>Introduction</strong>: 明確なテーゼ（主張）の提示</li>
                    <li>• <strong>Body</strong>: 論理的な段落構成と証拠</li>
                    <li>• <strong>Conclusion</strong>: 主張の再確認と展望</li>
                    <li>• 段落間のスムーズな接続</li>
                    <li>• 因果関係の明確な提示</li>
                    <li>• 反論への対応</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <span className="bg-green-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">2</span>
                    説得力のある議論
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm">
                    <li>• 具体的な例と証拠の提示</li>
                    <li>• 統計データや研究結果の引用</li>
                    <li>• 複数の視点からの検討</li>
                    <li>• 反論への適切な対応</li>
                    <li>• 感情に訴える要素の適切な使用</li>
                    <li>• 読者との共感の構築</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Advanced Writing Techniques */}
          <section>
            <div className="flex items-center gap-2 mb-4">
              <PenTool className="h-5 w-5" />
              <h2 className="text-2xl font-bold">高度な表現テクニック</h2>
            </div>
            
            <div className="space-y-6">
              {/* Sophisticated Vocabulary */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <span className="bg-primary text-primary-foreground rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">1</span>
                    洗練された語彙の使用
                  </CardTitle>
                  <CardDescription>
                    より正確で印象的な表現を選ぶ
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="bg-muted rounded-lg p-4">
                      <h4 className="font-medium mb-2 text-sm">❌ 基本的な表現 → ✅ 上級表現</h4>
                      <ul className="text-sm space-y-1 text-muted-foreground">
                        <li>• <strong>good</strong> → <strong>beneficial, advantageous, favorable</strong></li>
                        <li>• <strong>bad</strong> → <strong>detrimental, adverse, problematic</strong></li>
                        <li>• <strong>important</strong> → <strong>crucial, pivotal, paramount</strong></li>
                        <li>• <strong>think</strong> → <strong>contend, assert, maintain</strong></li>
                        <li>• <strong>show</strong> → <strong>demonstrate, illustrate, reveal</strong></li>
                        <li>• <strong>because</strong> → <strong>due to, owing to, as a result of</strong></li>
                      </ul>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      ただし、過度に難しい単語を使うのではなく、文脈に適した自然な表現を選ぶことが重要です。
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* Varied Sentence Structure */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <span className="bg-primary text-primary-foreground rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">2</span>
                    多様な文構造
                  </CardTitle>
                  <CardDescription>
                    単調さを避け、リズムのある文章を書く
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="bg-muted rounded-lg p-4 mb-4">
                    <pre className="text-sm overflow-x-auto">
{`// 単調な文構造
Technology is important. It helps us. It makes life easier.

// 多様な文構造
While technology undoubtedly plays a crucial role in modern 
society, its impact extends far beyond mere convenience, 
transforming the very fabric of human interaction and 
productivity.`}
                    </pre>
                  </div>
                  <div className="space-y-2 text-sm">
                    <p><strong>テクニック:</strong></p>
                    <ul className="space-y-1 text-muted-foreground ml-4">
                      <li>• 複文と重文のバランス</li>
                      <li>• 分詞構文の効果的な使用</li>
                      <li>• 倒置構文で強調</li>
                      <li>• 短い文でリズムを作る</li>
                      <li>• 長い文で詳細を説明</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>

              {/* Transitional Phrases */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <span className="bg-primary text-primary-foreground rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">3</span>
                    効果的な接続表現
                  </CardTitle>
                  <CardDescription>
                    論理的な流れを作る接続詞・句の使い方
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <h4 className="font-medium mb-2 text-sm">追加・強調</h4>
                      <ul className="text-sm space-y-1 text-muted-foreground">
                        <li>• Furthermore, Moreover</li>
                        <li>• In addition, Additionally</li>
                        <li>• Notably, Significantly</li>
                        <li>• Indeed, In fact</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-medium mb-2 text-sm">対比・逆接</h4>
                      <ul className="text-sm space-y-1 text-muted-foreground">
                        <li>• However, Nevertheless</li>
                        <li>• On the contrary, Conversely</li>
                        <li>• Despite this, In contrast</li>
                        <li>• Whereas, While</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-medium mb-2 text-sm">原因・結果</h4>
                      <ul className="text-sm space-y-1 text-muted-foreground">
                        <li>• Consequently, Therefore</li>
                        <li>• As a result, Hence</li>
                        <li>• Owing to, Due to</li>
                        <li>• Thus, Accordingly</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-medium mb-2 text-sm">例示・説明</h4>
                      <ul className="text-sm space-y-1 text-muted-foreground">
                        <li>• For instance, For example</li>
                        <li>• Specifically, In particular</li>
                        <li>• To illustrate, Namely</li>
                        <li>• Such as, Including</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Rhetorical Devices */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <span className="bg-primary text-primary-foreground rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">4</span>
                    修辞技法の活用
                  </CardTitle>
                  <CardDescription>
                    説得力を高める修辞技法
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-medium mb-2 text-sm">1. 反復法 (Repetition)</h4>
                      <p className="text-sm text-muted-foreground italic mb-2">
                        "We must act. We must act now. We must act decisively."
                      </p>
                    </div>
                    <div>
                      <h4 className="font-medium mb-2 text-sm">2. 対比法 (Antithesis)</h4>
                      <p className="text-sm text-muted-foreground italic mb-2">
                        "It was the best of times, it was the worst of times."
                      </p>
                    </div>
                    <div>
                      <h4 className="font-medium mb-2 text-sm">3. 修辞疑問 (Rhetorical Question)</h4>
                      <p className="text-sm text-muted-foreground italic mb-2">
                        "How can we ignore such compelling evidence?"
                      </p>
                    </div>
                    <div>
                      <h4 className="font-medium mb-2 text-sm">4. 三段論法 (Triad)</h4>
                      <p className="text-sm text-muted-foreground italic mb-2">
                        "Education empowers, enlightens, and elevates."
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Essay Structure */}
          <section>
            <div className="flex items-center gap-2 mb-4">
              <FileText className="h-5 w-5" />
              <h2 className="text-2xl font-bold">効果的なエッセイ構成</h2>
            </div>
            
            <div className="space-y-6">
              {/* Introduction */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Introduction（導入部）</CardTitle>
                  <CardDescription>
                    読者の注意を引き、明確な主張を提示
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="bg-muted rounded-lg p-4">
                    <h4 className="font-medium mb-2 text-sm">構成要素:</h4>
                    <ol className="text-sm space-y-1 text-muted-foreground ml-4 list-decimal">
                      <li><strong>Hook</strong>: 興味深い導入（統計、引用、質問など）</li>
                      <li><strong>Context</strong>: 背景情報の提供</li>
                      <li><strong>Thesis Statement</strong>: 明確な主張の提示</li>
                      <li><strong>Roadmap</strong>: エッセイの構成の予告（オプション）</li>
                    </ol>
                  </div>
                  <div className="bg-blue-50 dark:bg-blue-950 rounded-lg p-4">
                    <h4 className="font-medium mb-2 text-sm">例:</h4>
                    <p className="text-sm italic">
                      "In an era where artificial intelligence permeates every aspect of our lives, 
                      the question of whether AI will enhance or undermine human creativity has 
                      become increasingly urgent. While some argue that AI threatens to replace 
                      human ingenuity, I contend that AI, when properly harnessed, can serve as 
                      a powerful catalyst for unprecedented creative expression."
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* Body Paragraphs */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Body Paragraphs（本論）</CardTitle>
                  <CardDescription>
                    各段落で一つの主要なポイントを展開
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="bg-muted rounded-lg p-4">
                    <h4 className="font-medium mb-2 text-sm">段落構成（PEEL法）:</h4>
                    <ul className="text-sm space-y-1 text-muted-foreground ml-4">
                      <li><strong>P</strong>oint: 段落の主要な主張</li>
                      <li><strong>E</strong>xplanation: 主張の説明</li>
                      <li><strong>E</strong>xample: 具体例や証拠</li>
                      <li><strong>L</strong>ink: 次の段落や全体への接続</li>
                    </ul>
                  </div>
                  <div className="bg-green-50 dark:bg-green-950 rounded-lg p-4">
                    <h4 className="font-medium mb-2 text-sm">段落の流れ:</h4>
                    <ol className="text-sm space-y-1 text-muted-foreground ml-4 list-decimal">
                      <li>最も強い論点から始める</li>
                      <li>各段落は明確なトピックセンテンスで始める</li>
                      <li>段落間の論理的な順序を保つ</li>
                      <li>反論への対応を含める</li>
                    </ol>
                  </div>
                </CardContent>
              </Card>

              {/* Conclusion */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Conclusion（結論部）</CardTitle>
                  <CardDescription>
                    主張を再確認し、読者に印象を残す
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="bg-muted rounded-lg p-4">
                    <h4 className="font-medium mb-2 text-sm">構成要素:</h4>
                    <ul className="text-sm space-y-1 text-muted-foreground ml-4">
                      <li>主張の再確認（新しい情報は追加しない）</li>
                      <li>主要な論点の要約</li>
                      <li>より広い視野での意義や展望</li>
                      <li>読者への呼びかけや行動喚起（オプション）</li>
                    </ul>
                  </div>
                  <div className="bg-purple-50 dark:bg-purple-950 rounded-lg p-4">
                    <h4 className="font-medium mb-2 text-sm">避けるべきこと:</h4>
                    <ul className="text-sm space-y-1 text-muted-foreground ml-4">
                      <li>❌ 新しい議論や証拠の導入</li>
                      <li>❌ "In conclusion" などの陳腐な表現の過度な使用</li>
                      <li>❌ 単なる繰り返し</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Common Mistakes to Avoid */}
          <section>
            <div className="flex items-center gap-2 mb-4">
              <XCircle className="h-5 w-5" />
              <h2 className="text-2xl font-bold">避けるべきよくある間違い</h2>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">❌ 構造の問題</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <p className="text-sm">• 明確なテーゼがない</p>
                  <p className="text-sm">• 段落間の論理的な流れがない</p>
                  <p className="text-sm">• 結論が弱い、または新しい議論を追加</p>
                  <p className="text-sm">• 段落が長すぎる、または短すぎる</p>
                  <p className="text-sm">• トピックセンテンスがない</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">❌ 表現の問題</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <p className="text-sm">• 同じ単語・表現の繰り返し</p>
                  <p className="text-sm">• 不自然な難しい単語の使用</p>
                  <p className="text-sm">• 文構造の単調さ</p>
                  <p className="text-sm">• 不適切な接続詞の使用</p>
                  <p className="text-sm">• 口語表現の使用</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">❌ 内容の問題</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <p className="text-sm">• 具体例や証拠の不足</p>
                  <p className="text-sm">• 表面的な議論</p>
                  <p className="text-sm">• 反論への対応不足</p>
                  <p className="text-sm">• 一般化しすぎた主張</p>
                  <p className="text-sm">• 論理的な飛躍</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">❌ 形式の問題</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <p className="text-sm">• 語数制限の無視</p>
                  <p className="text-sm">• フォーマットの不統一</p>
                  <p className="text-sm">• 引用の不適切な使用</p>
                  <p className="text-sm">• スペル・文法ミス</p>
                  <p className="text-sm">• 句読点の誤用</p>
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
                  <CardTitle className="text-lg">✅ 執筆前</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <p className="text-sm">• テーマを十分に理解する</p>
                  <p className="text-sm">• ブレインストーミングでアイデアを整理</p>
                  <p className="text-sm">• アウトラインを作成</p>
                  <p className="text-sm">• 必要な語彙や表現を準備</p>
                  <p className="text-sm">• 時間配分を計画</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">✅ 執筆中</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <p className="text-sm">• 明確なテーゼを最初に書く</p>
                  <p className="text-sm">• 各段落に一つの主要なポイント</p>
                  <p className="text-sm">• 具体例と証拠を必ず含める</p>
                  <p className="text-sm">• 段落間の接続を意識</p>
                  <p className="text-sm">• 語数制限を常に確認</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">✅ 執筆後</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <p className="text-sm">• 全体の論理的な流れを確認</p>
                  <p className="text-sm">• 文法・スペルチェック</p>
                  <p className="text-sm">• 語彙の多様性を確認</p>
                  <p className="text-sm">• 不要な繰り返しを削除</p>
                  <p className="text-sm">• 最終的な読み直し</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">✅ 継続的な改善</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <p className="text-sm">• 多読で表現力を向上</p>
                  <p className="text-sm">• フィードバックを活用</p>
                  <p className="text-sm">• 様々なトピックで練習</p>
                  <p className="text-sm">• モデルエッセイを分析</p>
                  <p className="text-sm">• 語彙ノートを作成</p>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Practice Tips */}
          <section>
            <div className="flex items-center gap-2 mb-4">
              <Lightbulb className="h-5 w-5" />
              <h2 className="text-2xl font-bold">実践的な練習方法</h2>
            </div>
            
            <Card>
              <CardContent className="pt-6">
                <div className="space-y-6">
                  <div>
                    <h4 className="font-medium mb-3 text-lg">1. タイムドライル（時間制限練習）</h4>
                    <p className="text-sm text-muted-foreground mb-2">
                      実際の試験環境を想定して、制限時間内でエッセイを完成させる練習をします。
                    </p>
                    <ul className="text-sm space-y-1 text-muted-foreground ml-4">
                      <li>• 5分: ブレインストーミングとアウトライン</li>
                      <li>• 20分: 執筆</li>
                      <li>• 5分: 見直しと修正</li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-medium mb-3 text-lg">2. モデルエッセイの分析</h4>
                    <p className="text-sm text-muted-foreground mb-2">
                      高評価のエッセイを読み、構造、表現、論理展開を分析します。
                    </p>
                    <ul className="text-sm space-y-1 text-muted-foreground ml-4">
                      <li>• テーゼの位置と表現方法</li>
                      <li>• 段落構成と接続方法</li>
                      <li>• 使用されている語彙と表現</li>
                      <li>• 修辞技法の使用</li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-medium mb-3 text-lg">3. ピアレビュー</h4>
                    <p className="text-sm text-muted-foreground mb-2">
                      他の学習者とエッセイを交換し、相互にフィードバックを行います。
                    </p>
                    <ul className="text-sm space-y-1 text-muted-foreground ml-4">
                      <li>• 論理的な流れの確認</li>
                      <li>• 表現の改善点の指摘</li>
                      <li>• 文法・スペルミスの発見</li>
                      <li>• 建設的な改善提案</li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-medium mb-3 text-lg">4. 語彙・表現の蓄積</h4>
                    <p className="text-sm text-muted-foreground mb-2">
                      読書やリスニングを通じて、新しい語彙と表現を収集し、実際のエッセイで使用します。
                    </p>
                    <ul className="text-sm space-y-1 text-muted-foreground ml-4">
                      <li>• トピック別の語彙リスト作成</li>
                      <li>• 同義語・類義語の整理</li>
                      <li>• コロケーション（語の組み合わせ）の学習</li>
                      <li>• 実際の使用例の収集</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* Quick Reference */}
          <section>
            <div className="flex items-center gap-2 mb-4">
              <Zap className="h-5 w-5" />
              <h2 className="text-2xl font-bold">クイックリファレンス</h2>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">よく使う上級表現</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <p className="text-sm"><strong>主張:</strong> contend, assert, maintain, argue</p>
                  <p className="text-sm"><strong>示す:</strong> demonstrate, illustrate, reveal, indicate</p>
                  <p className="text-sm"><strong>重要:</strong> crucial, pivotal, paramount, essential</p>
                  <p className="text-sm"><strong>増加:</strong> escalate, surge, proliferate, augment</p>
                  <p className="text-sm"><strong>減少:</strong> diminish, dwindle, decline, deteriorate</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">効果的な導入フレーズ</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <p className="text-sm">• "It is widely acknowledged that..."</p>
                  <p className="text-sm">• "In recent years, there has been growing concern about..."</p>
                  <p className="text-sm">• "The debate surrounding... has intensified..."</p>
                  <p className="text-sm">• "A compelling argument can be made that..."</p>
                  <p className="text-sm">• "While some maintain that..., others contend that..."</p>
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
                  上級英作文のテクニックを学んだら、実践的な練習を始めましょう
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex gap-4">
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
