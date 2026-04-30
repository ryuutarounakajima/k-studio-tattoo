export function About() {
  const artists = [
    {
      name: '山田 太郎',
      specialty: 'トライバル / リアリスティック',
      experience: '15年以上の経験',
    },
    {
      name: '佐藤 花子',
      specialty: 'ミニマル / カラー',
      experience: '10年以上の経験',
    },
  ];

  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="mb-4">アーティスト紹介</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            経験豊富なアーティストがあなたの想いを形にします
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {artists.map((artist, index) => (
            <div
              key={index}
              className="bg-card p-8 rounded-lg border border-border text-center"
            >
              <div className="w-32 h-32 mx-auto mb-4 bg-muted rounded-full" />
              <h3 className="mb-2">{artist.name}</h3>
              <p className="text-muted-foreground mb-2">{artist.specialty}</p>
              <p className="text-sm text-muted-foreground">{artist.experience}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
