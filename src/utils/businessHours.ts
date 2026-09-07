export interface SalonOpenStatus {
  isOpen: boolean;
  statusText: string;
  badgeText: string;
  scheduleText: string;
  currentDayName: string;
  isTodaySunday: boolean;
  currentTimeStr: string;
}

/**
 * Calculates current open/closed status for Burak Saç Tasarım based on Europe/Istanbul (Turkey UTC+3) timezone.
 * Working Hours:
 * - Monday - Saturday: 09:00 - 21:00
 * - Sunday: 10:00 - 19:00
 */
export function getSalonOpenStatus(): SalonOpenStatus {
  try {
    const now = new Date();

    // Format into Europe/Istanbul parts to guarantee precision regardless of visitor device timezone
    const formatter = new Intl.DateTimeFormat('en-US', {
      timeZone: 'Europe/Istanbul',
      hour12: false,
      weekday: 'short',
      hour: 'numeric',
      minute: 'numeric',
    });

    const parts = formatter.formatToParts(now);
    let weekday = 'Mon';
    let hour = 0;
    let minute = 0;

    for (const part of parts) {
      if (part.type === 'weekday') weekday = part.value; // 'Sun', 'Mon', etc.
      if (part.type === 'hour') hour = parseInt(part.value, 10);
      if (part.type === 'minute') minute = parseInt(part.value, 10);
    }

    const currentTotalMinutes = hour * 60 + minute;
    const isTodaySunday = weekday === 'Sun';

    const dayMap: Record<string, string> = {
      Mon: 'Pazartesi',
      Tue: 'Salı',
      Wed: 'Çarşamba',
      Thu: 'Perşembe',
      Fri: 'Cuma',
      Sat: 'Cumartesi',
      Sun: 'Pazar',
    };
    const currentDayName = dayMap[weekday] || 'Pazartesi';

    let openMinutes = 9 * 60; // 09:00 (540)
    let closeMinutes = 21 * 60; // 21:00 (1260)
    let openHourStr = '09:00';
    let closeHourStr = '21:00';

    if (isTodaySunday) {
      openMinutes = 10 * 60; // 10:00 (600)
      closeMinutes = 19 * 60; // 19:00 (1140)
      openHourStr = '10:00';
      closeHourStr = '19:00';
    }

    const isOpen = currentTotalMinutes >= openMinutes && currentTotalMinutes < closeMinutes;
    const currentTimeFormatted = `${String(hour).padStart(2, '0')}:${String(minute).padStart(2, '0')}`;

    if (isOpen) {
      return {
        isOpen: true,
        statusText: 'Şu An Açık',
        badgeText: 'Açık',
        scheduleText: `Kapanış: ${closeHourStr}`,
        currentDayName,
        isTodaySunday,
        currentTimeStr: currentTimeFormatted,
      };
    } else {
      // If closed, tell when it opens
      const nextOpenStr = currentTotalMinutes < openMinutes
        ? `Bugün ${openHourStr}`
        : (isTodaySunday ? 'Pazartesi 09:00' : (weekday === 'Sat' ? 'Pazar 10:00' : 'Yarın 09:00'));

      return {
        isOpen: false,
        statusText: 'Şu An Kapalı',
        badgeText: 'Kapalı',
        scheduleText: `Açılış: ${nextOpenStr}`,
        currentDayName,
        isTodaySunday,
        currentTimeStr: currentTimeFormatted,
      };
    }
  } catch {
    // Robust fallback
    const now = new Date();
    const h = now.getHours();
    const isOpen = h >= 9 && h < 21;
    return {
      isOpen,
      statusText: isOpen ? 'Şu An Açık' : 'Şu An Kapalı',
      badgeText: isOpen ? 'Açık' : 'Kapalı',
      scheduleText: isOpen ? 'Kapanış: 21:00' : 'Açılış: 09:00',
      currentDayName: 'Bugün',
      isTodaySunday: false,
      currentTimeStr: `${String(h).padStart(2, '0')}:00`,
    };
  }
}
