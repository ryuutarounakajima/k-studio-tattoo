import { Instagram } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-card border-t border-border text-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="mb-4">INK STUDIO</h3>
            <p className="text-muted-foreground text-sm">
              あなただけのアートを肌に刻む。<br />
              経験豊富なアーティストが<br />
              最高の作品をお届けします。
            </p>
          </div>

          <div>
            <h4 className="mb-4">営業時間</h4>
            <p className="text-muted-foreground text-sm">
              火曜日 - 日曜日<br />
              12:00 - 20:00<br />
              定休日: 月曜日
            </p>
          </div>

          <div>
            <h4 className="mb-4">フォローする</h4>
            <div className="flex gap-4">
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors" aria-label="Instagram">
                <Instagram size={24} />
              </a>
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors" aria-label="TikTok">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-border text-center">
          <p className="text-muted-foreground text-sm">
            &copy; 2026 INK STUDIO. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
