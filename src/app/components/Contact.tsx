import { useState } from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');

    // ここにメール送信のロジックを追加してください
    // 例: EmailJS、Supabase、または他のAPIを使用

    // 仮の処理（実際の送信機能は未実装）
    setTimeout(() => {
      console.log('フォームデータ:', formData);
      setStatus('success');
      setFormData({ name: '', email: '', message: '' });

      // 3秒後にステータスをリセット
      setTimeout(() => setStatus('idle'), 3000);
    }, 1000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  return (
    <section id="contact" className="py-20 bg-muted/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="mb-4">お問い合わせ</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            ご予約・ご相談はお気軽にお問い合わせください
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <MapPin className="mt-1 text-primary flex-shrink-0" />
              <div>
                <h4 className="mb-1">所在地</h4>
                <p className="text-muted-foreground">
                  〒150-0001<br />
                  東京都渋谷区神宮前1-2-3<br />
                  INKビル 2F
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <Phone className="mt-1 text-primary flex-shrink-0" />
              <div>
                <h4 className="mb-1">電話番号</h4>
                <p className="text-muted-foreground">03-1234-5678</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <Mail className="mt-1 text-primary flex-shrink-0" />
              <div>
                <h4 className="mb-1">メール</h4>
                <p className="text-muted-foreground">info@inkstudio.jp</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <Clock className="mt-1 text-primary flex-shrink-0" />
              <div>
                <h4 className="mb-1">営業時間</h4>
                <p className="text-muted-foreground">
                  火曜日 - 日曜日: 12:00 - 20:00<br />
                  定休日: 月曜日
                </p>
              </div>
            </div>

          
          </div>

          <div className="bg-card p-8 rounded-lg border border-border">
            <form className="space-y-4" onSubmit={handleSubmit}>
              <div>
                <label htmlFor="name" className="block mb-2">お名前</label>
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 bg-input-background rounded-lg border border-border focus:outline-none focus:ring-2 focus:ring-ring"
                  placeholder="山田 太郎"
                />
              </div>

              <div>
                <label htmlFor="email" className="block mb-2">メールアドレス</label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 bg-input-background rounded-lg border border-border focus:outline-none focus:ring-2 focus:ring-ring"
                  placeholder="example@email.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block mb-2">お問い合わせ内容</label>
                <textarea
                  id="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 bg-input-background rounded-lg border border-border focus:outline-none focus:ring-2 focus:ring-ring resize-none"
                  placeholder="デザインのご相談、ご予約など"
                />
              </div>

              <button
                type="submit"
                disabled={status === 'sending'}
                className="w-full px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:opacity-90 transition-opacity disabled:opacity-50"
              >
                {status === 'sending' ? '送信中...' : '送信する'}
              </button>

              {status === 'success' && (
                <p className="text-green-500 text-sm text-center">
                  送信完了しました（デモ）
                </p>
              )}
              {status === 'error' && (
                <p className="text-red-500 text-sm text-center">
                  送信に失敗しました
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
