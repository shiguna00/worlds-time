document.addEventListener("DOMContentLoaded", function () {
  const worldClockElement = document.getElementById('worldClock');

  function updateWorldClock() {
      const timeZones = ['America/New_York', 'Europe/London', 'Asia/Tokyo', 'Australia/Sydney'];

      const clockHTML = timeZones.map(timezone => {
          const now = new Date().toLocaleString("ja-JP", {timeZone: timezone});
          return `<div><strong>${timezone.split('/')[1]}</strong><br>${now}</div>`;
      }).join('');

      worldClockElement.innerHTML = clockHTML;
  }

  // 初回実行
  updateWorldClock();

  // 1秒ごとに更新
  setInterval(updateWorldClock, 1000);
});
