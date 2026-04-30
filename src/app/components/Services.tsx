import { Palette, Heart, Sparkles, Shield } from 'lucide-react';

export function Services() {
  const services = [
    {
      icon: <Palette size={32} />,
      title: 'カスタムデザイン',
      description: 'お客様のイメージを形にする完全オリジナルデザイン',
    },
    {
      icon: <Heart size={32} />,
      title: 'カバーアップ',
      description: '既存のタトゥーを新しいデザインでカバー',
    },
    {
      icon: <Sparkles size={32} />,
      title: 'カラータトゥー',
      description: '鮮やかな発色の高品質カラーインク使用',
    },
    {
      icon: <Shield size={32} />,
      title: '衛生管理',
      description: '使い捨て器具を使用した徹底的な衛生管理',
    },
  ];

  return (
    <section id="services" className="py-20 bg-muted/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="mb-4">サービス</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            お客様一人ひとりに合わせた最高のサービスを提供します
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-card p-6 rounded-lg border border-border hover:shadow-lg transition-shadow"
            >
              <div className="mb-4 text-primary">{service.icon}</div>
              <h3 className="mb-2">{service.title}</h3>
              <p className="text-sm text-muted-foreground">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
