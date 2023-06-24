export function isDeviceTouchable() {
 return ('ontouchstart' in document.documentElement);
}
export function copyToClipboard(text) {
  const temp = document.createElement("textarea");
temp.style.position = "absolute";
  temp.style.left = "-9999px";
  temp.value = text;
  document.body.appendChild(temp);
  temp.select();
  document.execCommand("copy");
  document.body.removeChild(temp);
}
export const email = "eagelzoneal@gmail.com";
export const phone = 355675386361
export const facebookName = "Eagle-Zone-Albania";
export const instagramName = 'eagle_zone_gaming';
export const darkMode = JSON.parse(sessionStorage.getItem("Eagle-Zone-Dark-Mode") || "true");
