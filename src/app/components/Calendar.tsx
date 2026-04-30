export function Calendar() {
  return (
    <section id="calendar" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="mb-4">予約カレンダー</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            空いている日程を確認できます
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-card p-4 rounded-lg border border-border overflow-hidden">
            {/* Googleカレンダーの埋め込み */}
            <div className="aspect-[4/3] sm:aspect-[16/9]">
              <iframe
                src="https://calendar.google.com/calendar/embed?height=600&wkst=1&ctz=Asia%2FTokyo&showTitle=0&showNav=1&showDate=1&showPrint=0&showTabs=1&showCalendars=0&mode=MONTH&src=YOUR_CALENDAR_ID@group.calendar.google.com"
                className="w-full h-full border-0"
                frameBorder="0"
                scrolling="no"
              />
            </div>
          </div>

          
        </div>
      </div>
    </section>
  );
}
