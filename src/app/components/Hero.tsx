
export function Hero() {

  
  
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center pt-16 relative bg-black"
      style={{
        backgroundImage: 'url("/assets/images/hero/masakado.jpg")', // ここに画像URLを追加
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        
      }}
    >
      <div className="absolute inset-0 bg-black/60" />
      <div className="container mx-auto px-4 py-20 text-center relative z-10">
        <h1 className="mb-6 tracking-tight">
          アートを肌に刻む
        </h1>
        <p className="max-w-2xl mx-auto mb-8 text-muted-foreground">
          経験豊富なアーティストによる、あなただけのオリジナルタトゥー。<br />
          丁寧なカウンセリングから、アフターケアまで全力でサポートします。
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#contact"
            className="px-8 py-3 bg-primary text-primary-foreground rounded-lg hover:opacity-90 transition-opacity"
          >
            予約する
          </a>
          <a
            href="#gallery"
            className="px-8 py-3 border border-border rounded-lg hover:bg-accent transition-colors"
          >
            作品を見る
          </a>
        </div>
      </div>
    </section>
  );
}
