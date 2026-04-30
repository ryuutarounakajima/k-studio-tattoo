import { useState } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

export function Gallery() {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  // ここに作品画像のURLを追加してください
  const portfolioItems = [
    {
      id: 1,
      category: 'トライバル',
      description: '伝統的なトライバルデザイン',
      images: [
        '', // 画像URL 1
        '', // 画像URL 2
        '', // 画像URL 3
      ]
    },
    {
      id: 2,
      category: 'リアリスティック',
      description: 'リアルな肖像画タトゥー',
      images: [
        '', // 画像URL
      ]
    },
    {
      id: 3,
      category: '和彫り',
      description: '日本伝統の和彫り',
      images: [
        '', // 画像URL
      ]
    },
    {
      id: 4,
      category: 'ミニマル',
      description: 'シンプルでミニマルなデザイン',
      images: [
        '', // 画像URL
      ]
    },
    {
      id: 5,
      category: 'カラー',
      description: '鮮やかなカラータトゥー',
      images: [
        '', // 画像URL
      ]
    },
    {
      id: 6,
      category: 'レタリング',
      description: '文字を使ったデザイン',
      images: [
        '', // 画像URL
      ]
    },
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handleNext = () => {
    if (selectedIndex !== null && portfolioItems[selectedIndex].images.length > 0) {
      setCurrentImageIndex((prev) =>
        (prev + 1) % portfolioItems[selectedIndex].images.length
      );
    }
  };

  const handlePrev = () => {
    if (selectedIndex !== null && portfolioItems[selectedIndex].images.length > 0) {
      setCurrentImageIndex((prev) =>
        prev === 0 ? portfolioItems[selectedIndex].images.length - 1 : prev - 1
      );
    }
  };

  const openModal = (index: number) => {
    setSelectedIndex(index);
    setCurrentImageIndex(0);
  };

  const closeModal = () => {
    setSelectedIndex(null);
    setCurrentImageIndex(0);
  };

  return (
    <section id="gallery" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="mb-4">ギャラリー</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            これまでの作品の一部をご紹介します
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {portfolioItems.map((item, index) => (
            <div
              key={item.id}
              onClick={() => openModal(index)}
              className="group relative aspect-square bg-muted rounded-lg overflow-hidden cursor-pointer hover:shadow-xl transition-shadow"
              style={{
                backgroundImage: item.images[0] ? `url(${item.images[0]})` : 'none',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <h3 className="mb-1 text-white">{item.category}</h3>
                <p className="text-sm text-white/80">{item.description}</p>
                {item.images.filter(img => img).length > 0 && (
                  <p className="text-xs text-white/60 mt-2">
                    {item.images.filter(img => img).length}枚の画像
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* モーダル表示 */}
      {selectedIndex !== null && (
        <div
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={closeModal}
        >
          <button
            onClick={closeModal}
            className="absolute top-4 right-4 text-white hover:text-white/70 transition-colors"
          >
            <X size={32} />
          </button>

          <div
            className="relative max-w-4xl w-full"
            onClick={(e) => e.stopPropagation()}
          >
            {portfolioItems[selectedIndex].images.filter(img => img).length > 0 ? (
              <>
                <div className="aspect-square bg-muted rounded-lg overflow-hidden mb-4">
                  <img
                    src={portfolioItems[selectedIndex].images[currentImageIndex]}
                    alt={portfolioItems[selectedIndex].category}
                    className="w-full h-full object-cover"
                  />
                </div>

                {portfolioItems[selectedIndex].images.filter(img => img).length > 1 && (
                  <div className="flex items-center justify-between">
                    <button
                      onClick={handlePrev}
                      className="p-2 bg-white/10 hover:bg-white/20 rounded-full transition-colors"
                    >
                      <ChevronLeft size={24} className="text-white" />
                    </button>
                    <p className="text-white">
                      {currentImageIndex + 1} / {portfolioItems[selectedIndex].images.filter(img => img).length}
                    </p>
                    <button
                      onClick={handleNext}
                      className="p-2 bg-white/10 hover:bg-white/20 rounded-full transition-colors"
                    >
                      <ChevronRight size={24} className="text-white" />
                    </button>
                  </div>
                )}
              </>
            ) : (
              <div className="aspect-square bg-muted rounded-lg flex items-center justify-center">
                <p className="text-muted-foreground">画像がありません</p>
              </div>
            )}

            <div className="text-center mt-4">
              <h3 className="text-white mb-2">{portfolioItems[selectedIndex].category}</h3>
              <p className="text-white/70">{portfolioItems[selectedIndex].description}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
