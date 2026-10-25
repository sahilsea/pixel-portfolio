/* @ds-bundle: {"format":4,"namespace":"PixelArtDesignSystem_d84aca","components":[{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"ICON_NAMES","sourcePath":"components/core/Icon.jsx"},{"name":"Icon","sourcePath":"components/core/Icon.jsx"},{"name":"IconButton","sourcePath":"components/core/IconButton.jsx"},{"name":"Badge","sourcePath":"components/display/Badge.jsx"},{"name":"Card","sourcePath":"components/display/Card.jsx"},{"name":"CodeBlock","sourcePath":"components/display/CodeBlock.jsx"},{"name":"ProgressBar","sourcePath":"components/display/ProgressBar.jsx"},{"name":"Stat","sourcePath":"components/display/Stat.jsx"},{"name":"Tag","sourcePath":"components/display/Tag.jsx"},{"name":"WindowFrame","sourcePath":"components/display/WindowFrame.jsx"},{"name":"Dialog","sourcePath":"components/feedback/Dialog.jsx"},{"name":"Toast","sourcePath":"components/feedback/Toast.jsx"},{"name":"Tooltip","sourcePath":"components/feedback/Tooltip.jsx"},{"name":"Checkbox","sourcePath":"components/forms/Checkbox.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"Radio","sourcePath":"components/forms/Radio.jsx"},{"name":"Select","sourcePath":"components/forms/Select.jsx"},{"name":"Switch","sourcePath":"components/forms/Switch.jsx"},{"name":"Navbar","sourcePath":"components/navigation/Navbar.jsx"},{"name":"Tabs","sourcePath":"components/navigation/Tabs.jsx"}],"sourceHashes":{"components/core/Button.jsx":"71dd10be9127","components/core/Icon.jsx":"be03e3dc0211","components/core/IconButton.jsx":"07514d032cc5","components/display/Badge.jsx":"fe43762463ab","components/display/Card.jsx":"5f3590455501","components/display/CodeBlock.jsx":"ff162a894768","components/display/ProgressBar.jsx":"dd40d18ec1d0","components/display/Stat.jsx":"ac39f2212984","components/display/Tag.jsx":"5a36846e6dba","components/display/WindowFrame.jsx":"59ee93638ecb","components/feedback/Dialog.jsx":"4f3c354a4788","components/feedback/Toast.jsx":"2e961bd639e9","components/feedback/Tooltip.jsx":"2a545fac18b2","components/forms/Checkbox.jsx":"0e686711d3f2","components/forms/Input.jsx":"c5a9687aa7a4","components/forms/Radio.jsx":"0d40822ea35b","components/forms/Select.jsx":"e9397e540a4a","components/forms/Switch.jsx":"284a2da999bc","components/navigation/Navbar.jsx":"ec2fc4b3085d","components/navigation/Tabs.jsx":"d310172040c0","ui_kits/learn/Chrome.jsx":"ef9363eb36e1","ui_kits/learn/Drawer.jsx":"e12678865d38","ui_kits/learn/Exercise.jsx":"ab424b5ec88b","ui_kits/learn/doc-page.js":"f52ae9c02fca","ui_kits/website/Club.jsx":"6083b6ff508a","ui_kits/website/Features.jsx":"324866f519e9","ui_kits/website/Hero.jsx":"dc0d984f3079","ui_kits/website/Shared.jsx":"8ca0a18cbc16"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.PixelArtDesignSystem_d84aca = window.PixelArtDesignSystem_d84aca || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/core/Icon.jsx
try { (() => {
// Pixel icon set — pixelarticons (MIT, halfmage). Paths embedded so icons resolve from any page location.
const ICONS = {
  "alert": "<path d=\"M13 1h-2v2H9v2H7v2H5v2H3v2H1v2h2v2h2v2h2v2h2v2h2v2h2v-2h2v-2h2v-2h2v-2h2v-2h2v-2h-2V9h-2V7h-2V5h-2V3h-2V1zm0 2v2h2v2h2v2h2v2h2v2h-2v2h-2v2h-2v2h-2v2h-2v-2H9v-2H7v-2H5v-2H3v-2h2V9h2V7h2V5h2V3h2zm0 4h-2v6h2V7zm0 8h-2v2h2v-2z\" ></path>",
  "arrow-left": "<path d=\"M20 11v2H8v2H6v-2H4v-2h2V9h2v2h12zM10 7H8v2h2V7zm0 0h2V5h-2v2zm0 10H8v-2h2v2zm0 0h2v2h-2v-2z\" ></path>",
  "arrow-right": "<path d=\"M4 11v2h12v2h2v-2h2v-2h-2V9h-2v2H4zm10-4h2v2h-2V7zm0 0h-2V5h2v2zm0 10h2v-2h-2v2zm0 0h-2v2h2v-2z\" ></path>",
  "article": "<path d=\"M5 3H3v18h18V3H5zm14 2v14H5V5h14zm-2 2H7v2h10V7zM7 11h10v2H7v-2zm7 4H7v2h7v-2z\" ></path>",
  "book-open": "<path d=\"M3 3h8v2H3v12h8V5h2v12h8V5h-8V3h10v16H13v2h-2v-2H1V3h2zm16 7h-4v2h4v-2zm-4-3h4v2h-4V7zm2 6h-2v2h2v-2z\" ></path>",
  "bookmark": "<path d=\"M18 2H6v2h12v16h-2v-2h-2v-2h-4v2H8v2H6V2H4v20h4v-2h2v-2h4v2h2v2h4V2h-2z\" ></path>",
  "briefcase": "<path d=\"M8 3h8v4h6v14H2V7h6V3zm2 4h4V5h-4v2zM4 9v10h16V9H4z\" ></path>",
  "calendar": "<path d=\"M15 2h2v2h4v18H3V4h4V2h2v2h6V2zM5 8h14V6H5v2zm0 2v10h14V10H5z\" ></path>",
  "camera": "<path d=\"M9 3H7v2H2v16h20V5h-5V3H9zm8 4h3v12H4V7h5V5h6v2h2zm-7 2h4v2h-4V9zm4 6h-4v2h4v-2h2v-4h-2v4zm-6-4h2v4H8v-4z\" ></path>",
  "chart-bar": "<path d=\"M13 5h2v14h-2V5zm-2 4H9v10h2V9zm-4 4H5v6h2v-6zm12 0h-2v6h2v-6z\" ></path>",
  "check": "<path d=\"M18 6h2v2h-2V6zm-2 4V8h2v2h-2zm-2 2v-2h2v2h-2zm-2 2h2v-2h-2v2zm-2 2h2v-2h-2v2zm-2 0v2h2v-2H8zm-2-2h2v2H6v-2zm0 0H4v-2h2v2z\" ></path>",
  "checkbox": "<path d=\"M5 3H3v18h18V3H5zm0 2h14v14H5V5zm4 7H7v2h2v2h2v-2h2v-2h2v-2h2V8h-2v2h-2v2h-2v2H9v-2z\" ></path>",
  "checkbox-on": "<path d=\"M3 3h18v18H3V3zm16 16V5H5v14h14z\" ></path>",
  "chevron-down": "<path d=\"M7 8H5v2h2v2h2v2h2v2h2v-2h2v-2h2v-2h2V8h-2v2h-2v2h-2v2h-2v-2H9v-2H7V8z\" ></path>",
  "chevron-left": "<path d=\"M16 5v2h-2V5h2zm-4 4V7h2v2h-2zm-2 2V9h2v2h-2zm0 2H8v-2h2v2zm2 2v-2h-2v2h2zm0 0h2v2h-2v-2zm4 4v-2h-2v2h2z\" ></path>",
  "chevron-right": "<path d=\"M8 5v2h2V5H8zm4 4V7h-2v2h2zm2 2V9h-2v2h2zm0 2h2v-2h-2v2zm-2 2v-2h2v2h-2zm0 0h-2v2h2v-2zm-4 4v-2h2v2H8z\" ></path>",
  "clock": "<path d=\"M19 3H5v2H3v14h2v2h14v-2h2V5h-2V3zm0 2v14H5V5h14zm-8 2h2v6h4v2h-6V7z\" ></path>",
  "close": "<path d=\"M5 5h2v2H5V5zm4 4H7V7h2v2zm2 2H9V9h2v2zm2 0h-2v2H9v2H7v2H5v2h2v-2h2v-2h2v-2h2v2h2v2h2v2h2v-2h-2v-2h-2v-2h-2v-2zm2-2v2h-2V9h2zm2-2v2h-2V7h2zm0 0V5h2v2h-2z\" ></path>",
  "code": "<path d=\"M8 5h2v2H8V5zM6 7h2v2H6V7zM4 9h2v2H4V9zm-2 2h2v2H2v-2zm2 2h2v2H4v-2zm2 2h2v2H6v-2zm2 2h2v2H8v-2zm8-12h-2v2h2V5zm2 2h-2v2h2V7zm2 2h-2v2h2V9zm2 2h-2v2h2v-2zm-2 2h-2v2h2v-2zm-2 2h-2v2h2v-2zm-2 2h-2v2h2v-2z\" ></path>",
  "coin": "<path d=\"M6 2h12v2H6V2zM4 6V4h2v2H4zm0 12V6H2v12h2zm2 2v-2H4v2h2zm12 0v2H6v-2h12zm2-2v2h-2v-2h2zm0-12h2v12h-2V6zm0 0V4h-2v2h2zm-9-1h2v2h3v2h-6v2h6v6h-3v2h-2v-2H8v-2h6v-2H8V7h3V5z\" ></path>",
  "command": "<path d=\"M4 2H2v8h2V2zm16 0h2v8h-2V2zm-6 6h-4V2H4v2h4v4H4v2h4v4H4v2h4v4H4v2h6v-6h4v6h2v-6h4v-2h-4v-4h4V8h-4V2h-2v6zm-4 6v-4h4v4h-4zM20 2h-4v2h4V2zM2 14h2v8H2v-8zm14 6h4v2h-4v-2zm6-6h-2v8h2v-8z\" ></path>",
  "copy": "<path d=\"M4 2h11v2H6v13H4V2zm4 4h12v16H8V6zm2 2v12h8V8h-8z\" ></path>",
  "device-laptop": "<path d=\"M6 4H4v12h16V4H6zm12 2v8H6V6h12zm4 12H2v2h20v-2z\" ></path>",
  "download": "<path d=\"M13 17V3h-2v10H9v-2H7v2h2v2h2v2h2zm8 2v-4h-2v4H5v-4H3v6h18v-2zm-8-6v2h2v-2h2v-2h-2v2h-2z\" ></path>",
  "edit": "<path d=\"M18 2h-2v2h-2v2h-2v2h-2v2H8v2H6v2H4v2H2v6h6v-2h2v-2h2v-2h2v-2h2v-2h2v-2h2V8h2V6h-2V4h-2V2zm0 8h-2v2h-2v2h-2v2h-2v2H8v-2H6v-2h2v-2h2v-2h2V8h2V6h2v2h2v2zM6 16H4v4h4v-2H6v-2z\" ></path>",
  "external-link": "<path d=\"M21 11V3h-8v2h4v2h-2v2h-2v2h-2v2H9v2h2v-2h2v-2h2V9h2V7h2v4h2zM11 5H3v16h16v-8h-2v6H5V7h6V5z\" ></path>",
  "eye": "<path d=\"M8 6h8v2H8V6zm-4 4V8h4v2H4zm-2 2v-2h2v2H2zm0 2v-2H0v2h2zm2 2H2v-2h2v2zm4 2H4v-2h4v2zm8 0v2H8v-2h8zm4-2v2h-4v-2h4zm2-2v2h-2v-2h2zm0-2h2v2h-2v-2zm-2-2h2v2h-2v-2zm0 0V8h-4v2h4zm-10 1h4v4h-4v-4z\" ></path>",
  "file": "<path d=\"M3 22h18V8h-2V6h-2v2h-2V6h2V4h-2V2H3v20zm2-2V4h8v6h6v10H5z\" ></path>",
  "flag": "<path d=\"M3 2h10v2h8v14H11v-2H5v6H3V2zm2 12h8v2h6V6h-8V4H5v10z\" ></path>",
  "folder": "<path d=\"M4 4h8v2h10v14H2V4h2zm16 4H10V6H4v12h16V8z\" ></path>",
  "gamepad": "<path d=\"M2 5h20v14H2V5zm18 12V7H4v10h16zM8 9h2v2h2v2h-2v2H8v-2H6v-2h2V9zm6 0h2v2h-2V9zm4 4h-2v2h2v-2z\" ></path>",
  "gift": "<path d=\"M19 12v8h-7m7-8h2V8h-3m1 4H5m13-4V4h-6m6 4H6m0 0V4h6M6 8H3v4h2m0 0v8h7m0 0V4\" stroke=\"currentColor\" stroke-width=\"2\"></path>",
  "git-branch": "<path d=\"M5 2h2v12h3v3h7v-7h-3V2h8v8h-3v9h-9v3H2v-8h3V2zm15 6V4h-4v4h4zM8 19v-3H4v4h4v-1z\" ></path>",
  "grid": "<path d=\"M2 2h20v20H2V2zm2 2v4h4V4H4zm6 0v4h4V4h-4zm6 0v4h4V4h-4zm4 6h-4v4h4v-4zm0 6h-4v4h4v-4zm-6 4v-4h-4v4h4zm-6 0v-4H4v4h4zm-4-6h4v-4H4v4zm6-4v4h4v-4h-4z\" ></path>",
  "heart": "<path d=\"M9 2H5v2H3v2H1v6h2v2h2v2h2v2h2v2h2v2h2v-2h2v-2h2v-2h2v-2h2v-2h2V6h-2V4h-2V2h-4v2h-2v2h-2V4H9V2zm0 2v2h2v2h2V6h2V4h4v2h2v6h-2v2h-2v2h-2v2h-2v2h-2v-2H9v-2H7v-2H5v-2H3V6h2V4h4z\" ></path>",
  "home": "<path d=\"M14 2h-4v2H8v2H6v2H4v2H2v2h2v10h7v-6h2v6h7V12h2v-2h-2V8h-2V6h-2V4h-2V2zm0 2v2h2v2h2v2h2v2h-2v8h-3v-6H9v6H6v-8H4v-2h2V8h2V6h2V4h4z\" ></path>",
  "image": "<path d=\"M4 3H2v18h20V3H4zm16 2v14H4V5h16zm-6 4h-2v2h-2v2H8v2H6v2h2v-2h2v-2h2v-2h2v2h2v2h2v-2h-2v-2h-2V9zM8 7H6v2h2V7z\" ></path>",
  "info-box": "<path d=\"M3 3h2v18H3V3zm16 0H5v2h14v14H5v2h16V3h-2zm-8 6h2V7h-2v2zm2 8h-2v-6h2v6z\" ></path>",
  "label": "<path d=\"M12 2H2v10h2v2h2v2h2v2h2v2h2v2h2v-2h2v-2h2v-2h2v-2h2v-2h-2v-2h-2V8h-2V6h-2V4h-2V2zm0 2v2h2v2h2v2h2v2h2v2h-2v2h-2v2h-2v2h-2v-2h-2v-2H8v-2H6v-2H4V4h8zM6 6h2v2H6V6z\" ></path>",
  "link": "<path d=\"M4 6h7v2H4v8h7v2H2V6h2zm16 0h-7v2h7v8h-7v2h9V6h-2zm-3 5H7v2h10v-2z\" ></path>",
  "list": "<path d=\"M6 6H4v2h2V6zm14 0H8v2h12V6zM4 11h2v2H4v-2zm16 0H8v2h12v-2zM4 16h2v2H4v-2zm16 0H8v2h12v-2z\" ></path>",
  "lock": "<path d=\"M15 2H9v2H7v4H4v14h16V8h-3V4h-2V2zm0 2v4H9V4h6zm-6 6h9v10H6V10h3zm4 3h-2v4h2v-4z\" ></path>",
  "login": "<path d=\"M5 3H3v4h2V5h14v14H5v-2H3v4h18V3H5zm12 8h-2V9h-2V7h-2v2h2v2H3v2h10v2h-2v2h2v-2h2v-2h2v-2z\" ></path>",
  "logout": "<path d=\"M5 3h16v4h-2V5H5v14h14v-2h2v4H3V3h2zm16 8h-2V9h-2V7h-2v2h2v2H7v2h10v2h-2v2h2v-2h2v-2h2v-2z\" ></path>",
  "mail": "<path d=\"M22 4H2v16h20V4zM4 18V6h16v12H4zM8 8H6v2h2v2h2v2h4v-2h2v-2h2V8h-2v2h-2v2h-4v-2H8V8z\" ></path>",
  "map": "<path d=\"M8 2h2v2h2v2h-2v10H8V6H6V4h2V2zM4 8V6h2v2H4zm2 10v2H4v2H2V8h2v10h2zm0 0h2v-2H6v2zm6 0h-2v-2h2v2zm2-10V6h-2v2h2zm2 0h-2v10h-2v2h2v2h2v-2h2v-2h2v-2h2V2h-2v2h-2v2h-2v2zm0 0h2V6h2v10h-2v2h-2V8z\" ></path>",
  "menu": "<path d=\"M4 6h16v2H4V6zm0 5h16v2H4v-2zm16 5H4v2h16v-2z\" ></path>",
  "message": "<path d=\"M20 2H2v20h2V4h16v12H6v2H4v2h2v-2h16V2h-2z\" ></path>",
  "minus": "<path d=\"M4 11h16v2H4z\"></path>",
  "mood-happy": "<path d=\"M5 3h14v2H5V3zm0 16H3V5h2v14zm14 0v2H5v-2h14zm0 0h2V5h-2v14zM10 8H8v2h2V8zm4 0h2v2h-2V8zm-5 6v-2H7v2h2zm6 0v2H9v-2h6zm0 0h2v-2h-2v2z\" ></path>",
  "moon": "<path d=\"M6 2h8v2h-2v2h-2V4H6V2ZM4 6V4h2v2H4Zm0 10H2V6h2v10Zm2 2H4v-2h2v2Zm2 2H6v-2h2v2Zm10 0v2H8v-2h10Zm2-2v2h-2v-2h2Zm-2-4h2v4h2v-8h-2v2h-2v2Zm-6 0v2h6v-2h-6Zm-2-2h2v2h-2v-2Zm0 0V6H8v6h2Z\"></path>",
  "notes": "<path d=\"M5 2h16v20H3V2h2zm14 18V4H5v16h14zM7 6h10v2H7V6zm10 4H7v2h10v-2zM7 14h7v2H7v-2z\" ></path>",
  "notification": "<path d=\"M14 4V2h-4v2H5v2h14V4h-5zm5 12H5v-4H3v6h5v4h2v-4h4v2h-4v2h6v-4h5v-6h-2V6h-2v8h2v2zM5 6v8h2V6H5z\" ></path>",
  "play": "<path d=\"M10 20H8V4h2v2h2v3h2v2h2v2h-2v2h-2v3h-2v2z\" ></path>",
  "plus": "<path d=\"M11 4h2v7h7v2h-7v7h-2v-7H4v-2h7V4z\" ></path>",
  "reload": "<path d=\"M16 2h-2v2h2v2H4v2H2v5h2V8h12v2h-2v2h2v-2h2V8h2V6h-2V4h-2V2zM6 20h2v2h2v-2H8v-2h12v-2h2v-5h-2v5H8v-2h2v-2H8v2H6v2H4v2h2v2z\" ></path>",
  "search": "<path d=\"M6 2h8v2H6V2zM4 6V4h2v2H4zm0 8H2V6h2v8zm2 2H4v-2h2v2zm8 0v2H6v-2h8zm2-2h-2v2h2v2h2v2h2v2h2v-2h-2v-2h-2v-2h-2v-2zm0-8h2v8h-2V6zm0 0V4h-2v2h2z\" ></path>",
  "shield": "<path d=\"M22 2H2v12h2V4h16v10h2V2zM6 14H4v2h2v-2zm0 2h2v2h2v2H8v-2H6v-2zm4 4v2h4v-2h2v-2h-2v2h-4zm10-6h-2v2h-2v2h2v-2h2v-2z\" ></path>",
  "sun": "<path d=\"M13 3h-2v2h2V3zm4 2h2v2h-2V5zm-6 6h2v2h-2v-2zm-8 0h2v2H3v-2zm18 0h-2v2h2v-2zM5 5h2v2H5V5zm14 14h-2v-2h2v2zm-8 2h2v-2h-2v2zm-4-2H5v-2h2v2zM9 7h6v2H9V7zm0 8H7V9h2v6zm0 0v2h6v-2h2V9h-2v6H9z\" ></path>",
  "trash": "<path d=\"M16 2v4h6v2h-2v14H4V8H2V6h6V2h8zm-2 2h-4v2h4V4zm0 4H6v12h12V8h-4zm-5 2h2v8H9v-8zm6 0h-2v8h2v-8z\" ></path>",
  "trophy": "<path d=\"M16 3H6v2H2v10h6V5h8v10h6V5h-4V3h-2zm4 4v6h-2V7h2zM6 13H4V7h2v6zm12 2H6v2h12v-2zm-7 2h2v2h3v2H8v-2h3v-2z\" ></path>",
  "upload": "<path d=\"M11 5V3h2v2h2v2h2v2h-2V7h-2v10h-2V7H9v2H7V7h2V5h2zM3 15v6h18v-6h-2v4H5v-4H3z\" ></path>",
  "user": "<path d=\"M15 2H9v2H7v6h2V4h6V2zm0 8H9v2h6v-2zm0-6h2v6h-2V4zM4 16h2v-2h12v2H6v4h12v-4h2v6H4v-6z\" ></path>",
  "users": "<path d=\"M11 0H5v2H3v6h2v2h6V8H5V2h6V0zm0 2h2v6h-2V2zM0 14h2v4h12v2H0v-6zm2 0h12v-2H2v2zm14 0h-2v6h2v-6zM15 0h4v2h-4V0zm4 8h-4v2h4V8zm0-6h2v6h-2V2zm5 12h-2v4h-4v2h6v-6zm-6-2h4v2h-4v-2z\" ></path>",
  "zap": "<path d=\"M12 1h2v8h8v4h-2v-2h-8V5h-2V3h2V1zM8 7V5h2v2H8zM6 9V7h2v2H6zm-2 2V9h2v2H4zm10 8v2h-2v2h-2v-8H2v-4h2v2h8v6h2zm2-2v2h-2v-2h2zm2-2v2h-2v-2h2zm0 0h2v-2h-2v2z\" ></path>"
};
const ICON_NAMES = Object.keys(ICONS);
function Icon({
  name,
  size = 24,
  color = 'currentColor',
  title,
  style,
  ...rest
}) {
  const body = ICONS[name];
  if (!body) return null;
  return React.createElement('svg', Object.assign({
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    width: size,
    height: size,
    fill: color,
    role: title ? 'img' : 'presentation',
    'aria-hidden': title ? undefined : true,
    'aria-label': title,
    shapeRendering: 'crispEdges',
    style: Object.assign({
      display: 'inline-block',
      flexShrink: 0,
      verticalAlign: 'middle'
    }, style),
    dangerouslySetInnerHTML: {
      __html: body
    }
  }, rest));
}
Object.assign(__ds_scope, { ICON_NAMES, Icon });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Icon.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
const VARIANTS = {
  primary: {
    bg: 'var(--yellow-400)',
    hover: 'var(--yellow-300)',
    fg: 'var(--fg-on-yellow)',
    border: 'var(--border-pixel)',
    bevel: 'inset 0 -4px 0 #D99A00',
    press: 'inset 0 -1px 0 #D99A00'
  },
  secondary: {
    bg: 'var(--blue-400)',
    hover: 'var(--blue-300)',
    fg: 'var(--white)',
    border: '#06243F',
    bevel: 'inset 0 -4px 0 #0A5A99',
    press: 'inset 0 -1px 0 #0A5A99'
  },
  outline: {
    bg: 'var(--ink-850)',
    hover: 'var(--ink-750)',
    fg: 'var(--fg-1)',
    border: 'var(--gray-300)',
    bevel: 'inset 0 -3px 0 #020414',
    press: 'inset 0 -1px 0 #020414'
  },
  ghost: {
    bg: 'transparent',
    hover: 'rgba(255,255,255,.08)',
    fg: 'var(--fg-1)',
    border: 'transparent',
    bevel: 'none',
    press: 'none'
  },
  danger: {
    bg: 'var(--orange-500)',
    hover: 'var(--orange-400)',
    fg: 'var(--white)',
    border: 'var(--orange-700)',
    bevel: 'inset 0 -4px 0 #7A2C14',
    press: 'inset 0 -1px 0 #7A2C14'
  }
};
const SIZES = {
  sm: {
    h: 32,
    px: 14,
    fs: 'var(--text-button-sm)',
    icon: 16
  },
  md: {
    h: 42,
    px: 22,
    fs: 'var(--text-button-md)',
    icon: 18
  },
  lg: {
    h: 54,
    px: 34,
    fs: 'var(--text-button-lg)',
    icon: 20
  }
};
function Button({
  variant = 'primary',
  size = 'md',
  iconLeft,
  iconRight,
  disabled = false,
  fullWidth = false,
  href,
  type = 'button',
  onClick,
  children,
  style,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const [press, setPress] = React.useState(false);
  const v = VARIANTS[variant] || VARIANTS.primary;
  const s = SIZES[size] || SIZES.md;
  const pressed = press && !disabled;
  const css = {
    display: fullWidth ? 'flex' : 'inline-flex',
    width: fullWidth ? '100%' : undefined,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
    boxSizing: 'border-box',
    height: s.h,
    padding: '0 ' + s.px + 'px',
    paddingTop: pressed ? 2 : 0,
    fontFamily: 'var(--font-display)',
    fontWeight: 400,
    fontSize: s.fs,
    letterSpacing: 'var(--tracking-button)',
    lineHeight: 1,
    color: disabled ? 'var(--fg-disabled)' : v.fg,
    background: disabled ? 'var(--ink-800)' : hover ? v.hover : v.bg,
    border: '2px solid ' + (disabled ? 'var(--ink-700)' : v.border),
    boxShadow: disabled ? 'none' : pressed ? v.press : v.bevel,
    clipPath: variant === 'ghost' ? undefined : 'var(--clip-notch-sm)',
    borderRadius: variant === 'ghost' ? 'var(--radius-sm)' : 0,
    cursor: disabled ? 'not-allowed' : 'pointer',
    textDecoration: 'none',
    whiteSpace: 'nowrap',
    userSelect: 'none',
    transition: 'background var(--dur-fast) var(--ease-out)',
    ...style
  };
  const handlers = {
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => {
      setHover(false);
      setPress(false);
    },
    onMouseDown: () => setPress(true),
    onMouseUp: () => setPress(false)
  };
  const content = [iconLeft ? React.createElement(__ds_scope.Icon, {
    key: 'l',
    name: iconLeft,
    size: s.icon
  }) : null, children != null ? React.createElement('span', {
    key: 'c'
  }, children) : null, iconRight ? React.createElement(__ds_scope.Icon, {
    key: 'r',
    name: iconRight,
    size: s.icon
  }) : null];
  if (href && !disabled) return React.createElement('a', {
    href,
    style: css,
    ...handlers,
    ...rest
  }, content);
  return React.createElement('button', {
    type,
    disabled,
    onClick,
    style: css,
    ...handlers,
    ...rest
  }, content);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/IconButton.jsx
try { (() => {
const SIZES = {
  sm: {
    box: 32,
    icon: 18
  },
  md: {
    box: 40,
    icon: 22
  },
  lg: {
    box: 48,
    icon: 26
  }
};
function IconButton({
  icon,
  label,
  variant = 'outline',
  size = 'md',
  active = false,
  disabled = false,
  onClick,
  style,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const s = SIZES[size] || SIZES.md;
  const looks = {
    outline: {
      bg: active ? 'var(--ink-700)' : hover ? 'var(--ink-750)' : 'var(--ink-850)',
      fg: 'var(--fg-1)',
      border: '2px solid var(--gray-400)',
      shadow: 'inset 0 -3px 0 #020414',
      clip: 'var(--clip-notch-sm)'
    },
    ghost: {
      bg: active || hover ? 'rgba(255,255,255,.08)' : 'transparent',
      fg: active ? 'var(--yellow-400)' : 'var(--gray-200)',
      border: '2px solid transparent',
      shadow: 'none',
      radius: 'var(--radius-sm)'
    },
    solid: {
      bg: hover ? 'var(--yellow-300)' : 'var(--yellow-400)',
      fg: 'var(--fg-on-yellow)',
      border: '2px solid var(--border-pixel)',
      shadow: 'inset 0 -3px 0 #D99A00',
      clip: 'var(--clip-notch-sm)'
    }
  };
  const l = looks[variant] || looks.outline;
  return React.createElement('button', {
    type: 'button',
    'aria-label': label,
    title: label,
    'aria-pressed': active || undefined,
    disabled,
    onClick,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      width: s.box,
      height: s.box,
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: 0,
      boxSizing: 'border-box',
      background: l.bg,
      color: disabled ? 'var(--fg-disabled)' : l.fg,
      border: l.border,
      boxShadow: l.shadow,
      clipPath: l.clip,
      borderRadius: l.radius || 0,
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? 0.5 : 1,
      transition: 'background var(--dur-fast) var(--ease-out)',
      ...style
    },
    ...rest
  }, React.createElement(__ds_scope.Icon, {
    name: icon,
    size: s.icon
  }));
}
Object.assign(__ds_scope, { IconButton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/IconButton.jsx", error: String((e && e.message) || e) }); }

// components/display/Badge.jsx
try { (() => {
const TONES = {
  success: {
    solid: ['var(--green-400)', '#0E2305'],
    soft: ['var(--green-900)', 'var(--green-300)']
  },
  warning: {
    solid: ['var(--yellow-400)', 'var(--fg-on-yellow)'],
    soft: ['var(--cream-200)', '#8A5A00']
  },
  info: {
    solid: ['var(--blue-400)', '#04213D'],
    soft: ['var(--blue-900)', 'var(--blue-300)']
  },
  danger: {
    solid: ['var(--red-500)', 'var(--white)'],
    soft: ['var(--red-900)', 'var(--red-400)']
  },
  purple: {
    solid: ['var(--purple-500)', 'var(--white)'],
    soft: ['var(--purple-900)', 'var(--purple-300)']
  },
  pink: {
    solid: ['var(--pink-400)', '#3A0520'],
    soft: ['var(--pink-900)', 'var(--pink-300)']
  },
  neutral: {
    solid: ['var(--gray-300)', 'var(--ink-900)'],
    soft: ['var(--ink-750)', 'var(--gray-300)']
  }
};
function Badge({
  tone = 'neutral',
  variant = 'soft',
  children,
  style
}) {
  const [bg, fg] = (TONES[tone] || TONES.neutral)[variant] || TONES.neutral.soft;
  return React.createElement('span', {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 4,
      height: 20,
      padding: '0 10px',
      boxSizing: 'border-box',
      background: bg,
      color: fg,
      borderRadius: 'var(--radius-pill)',
      whiteSpace: 'nowrap',
      fontFamily: 'var(--font-body)',
      fontWeight: 800,
      fontSize: 11,
      letterSpacing: 'var(--tracking-caps)',
      textTransform: 'uppercase',
      lineHeight: 1,
      ...style
    }
  }, children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/display/Badge.jsx", error: String((e && e.message) || e) }); }

// components/display/Card.jsx
try { (() => {
function Card({
  variant = 'surface',
  padding = 24,
  children,
  style,
  innerStyle,
  ...rest
}) {
  if (variant === 'gold') {
    return React.createElement('div', {
      style: {
        background: 'linear-gradient(160deg,#F7C928 0%,#EDB311 45%,#D99A00 100%)',
        borderRadius: 'var(--radius-2xl)',
        padding: 14,
        boxShadow: 'var(--shadow-card)',
        ...style
      },
      ...rest
    }, React.createElement('div', {
      style: {
        background: 'var(--gradient-parchment)',
        borderRadius: 'var(--radius-xl)',
        padding,
        color: 'var(--fg-on-parchment)',
        ...innerStyle
      }
    }, children));
  }
  const looks = {
    surface: {
      background: 'var(--bg-surface)',
      border: '1px solid var(--border-subtle)',
      borderRadius: 'var(--radius-lg)'
    },
    raised: {
      background: 'var(--bg-raised)',
      border: '1px solid var(--border-default)',
      borderRadius: 'var(--radius-lg)',
      boxShadow: 'var(--shadow-float)'
    },
    outline: {
      background: 'transparent',
      border: '2px solid var(--border-strong)',
      clipPath: 'var(--clip-notch-md)'
    },
    parchment: {
      background: 'var(--gradient-parchment)',
      color: 'var(--fg-on-parchment)',
      borderRadius: 'var(--radius-lg)'
    },
    media: {
      background: 'var(--ink-850)',
      borderRadius: 'var(--radius-xl)',
      overflow: 'hidden',
      boxShadow: 'var(--shadow-card)'
    }
  };
  return React.createElement('div', {
    style: {
      padding: variant === 'media' ? 0 : padding,
      color: 'var(--text-body)',
      boxSizing: 'border-box',
      ...(looks[variant] || looks.surface),
      ...style
    },
    ...rest
  }, children);
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/display/Card.jsx", error: String((e && e.message) || e) }); }

// components/display/CodeBlock.jsx
try { (() => {
function CodeBlock({
  code = '',
  lineNumbers = false,
  copyable = true,
  variant = 'block',
  style
}) {
  const [copied, setCopied] = React.useState(false);
  const lines = String(code).replace(/\n$/, '').split('\n');
  const copy = () => {
    try {
      navigator.clipboard.writeText(code);
    } catch (e) {}
    setCopied(true);
    setTimeout(() => setCopied(false), 1200);
  };
  const isTerminal = variant === 'terminal';
  return React.createElement('div', {
    style: {
      position: 'relative',
      background: isTerminal ? 'var(--bg-inset)' : 'var(--bg-code)',
      borderRadius: isTerminal ? 0 : 'var(--radius-md)',
      padding: '16px 20px',
      boxSizing: 'border-box',
      ...style
    }
  }, React.createElement('pre', {
    style: {
      margin: 0,
      fontFamily: 'var(--font-mono)',
      fontSize: 'var(--text-code)',
      lineHeight: 'var(--lh-code)',
      color: isTerminal ? 'var(--gray-200)' : 'var(--gray-100)',
      whiteSpace: 'pre',
      overflowX: 'auto'
    }
  }, lines.map((ln, i) => React.createElement('div', {
    key: i,
    style: {
      display: 'flex',
      gap: 16
    }
  }, lineNumbers ? React.createElement('span', {
    style: {
      color: 'var(--ink-500)',
      minWidth: 16,
      textAlign: 'right',
      userSelect: 'none'
    }
  }, i + 1) : null, React.createElement('span', {
    style: {
      color: /^\s*#|^\s*\/\//.test(ln) ? 'var(--gray-400)' : undefined
    }
  }, ln || ' ')))), copyable && !isTerminal ? React.createElement('button', {
    type: 'button',
    onClick: copy,
    'aria-label': 'Copy code',
    title: copied ? 'Copied!' : 'Copy',
    style: {
      position: 'absolute',
      top: 10,
      right: 10,
      background: 'transparent',
      border: 'none',
      padding: 4,
      cursor: 'pointer',
      color: copied ? 'var(--green-400)' : 'var(--gray-400)'
    }
  }, React.createElement(__ds_scope.Icon, {
    name: copied ? 'check' : 'copy',
    size: 18
  })) : null);
}
Object.assign(__ds_scope, { CodeBlock });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/display/CodeBlock.jsx", error: String((e && e.message) || e) }); }

// components/display/ProgressBar.jsx
try { (() => {
const FILLS = {
  green: 'var(--green-400)',
  yellow: 'var(--yellow-400)',
  blue: 'var(--blue-400)',
  pink: 'var(--pink-400)',
  purple: 'var(--purple-400)'
};
function ProgressBar({
  value = 0,
  tone = 'green',
  showLabel = false,
  height = 10,
  segmented = false,
  style
}) {
  const pct = Math.max(0, Math.min(100, value));
  const fill = FILLS[tone] || FILLS.green;
  const bar = React.createElement('div', {
    role: 'progressbar',
    'aria-valuenow': pct,
    'aria-valuemin': 0,
    'aria-valuemax': 100,
    style: {
      position: 'relative',
      flex: 1,
      height,
      boxSizing: 'border-box',
      background: 'var(--ink-850)',
      border: '2px solid var(--gray-400)',
      clipPath: 'var(--clip-notch-sm)',
      overflow: 'hidden'
    }
  }, React.createElement('div', {
    style: {
      position: 'absolute',
      inset: 0,
      width: pct + '%',
      background: fill,
      boxShadow: 'inset 0 2px 0 rgba(255,255,255,.35), inset 0 -2px 0 rgba(0,0,0,.2)',
      transition: 'width var(--dur-slow) var(--ease-pixel)'
    }
  }), segmented ? React.createElement('div', {
    style: {
      position: 'absolute',
      inset: 0,
      backgroundImage: 'repeating-linear-gradient(90deg, transparent 0 10px, var(--ink-850) 10px 12px)'
    }
  }) : null);
  if (!showLabel) return React.createElement('div', {
    style: {
      display: 'flex',
      ...style
    }
  }, bar);
  return React.createElement('div', {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      ...style
    }
  }, bar, React.createElement('span', {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--text-body-sm)',
      color: 'var(--fg-2)',
      minWidth: 36
    }
  }, Math.round(pct) + '%'));
}
Object.assign(__ds_scope, { ProgressBar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/display/ProgressBar.jsx", error: String((e && e.message) || e) }); }

// components/display/Stat.jsx
try { (() => {
const TONES = {
  yellow: 'var(--yellow-500)',
  green: 'var(--green-400)',
  purple: 'var(--purple-400)',
  pink: 'var(--pink-400)',
  blue: 'var(--blue-400)',
  white: 'var(--white)'
};
function Stat({
  value,
  label,
  tone = 'yellow',
  size = 'md',
  align = 'center',
  style
}) {
  const fs = size === 'lg' ? 64 : size === 'sm' ? 32 : 48;
  return React.createElement('div', {
    style: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: align === 'left' ? 'flex-start' : 'center',
      gap: 6,
      textAlign: align,
      ...style
    }
  }, React.createElement('span', {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: fs,
      lineHeight: 1,
      color: TONES[tone] || tone,
      letterSpacing: '0.02em'
    }
  }, value), label ? React.createElement('span', {
    style: {
      fontFamily: 'var(--font-body)',
      fontWeight: 500,
      fontSize: size === 'sm' ? 15 : 19,
      color: 'var(--gray-200)'
    }
  }, label) : null);
}
Object.assign(__ds_scope, { Stat });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/display/Stat.jsx", error: String((e && e.message) || e) }); }

// components/display/Tag.jsx
try { (() => {
function Tag({
  children,
  color = '#1E2A78',
  size = 'md',
  style
}) {
  const s = size === 'sm' ? {
    fs: 13,
    h: 26,
    px: 8
  } : size === 'lg' ? {
    fs: 22,
    h: 40,
    px: 14
  } : {
    fs: 16,
    h: 32,
    px: 10
  };
  return React.createElement('span', {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      height: s.h,
      padding: '0 ' + s.px + 'px',
      boxSizing: 'border-box',
      background: '#FFF8DC',
      color,
      border: '2px solid #1A1640',
      boxShadow: 'var(--shadow-sign)',
      clipPath: 'none',
      fontFamily: 'var(--font-pixel-caps)',
      fontWeight: 700,
      fontSize: s.fs,
      letterSpacing: '0.04em',
      textTransform: 'uppercase',
      lineHeight: 1,
      whiteSpace: 'nowrap',
      ...style
    }
  }, children);
}
Object.assign(__ds_scope, { Tag });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/display/Tag.jsx", error: String((e && e.message) || e) }); }

// components/display/WindowFrame.jsx
try { (() => {
const TINTS = {
  sky: {
    bar: '#DCEFFF',
    dot: '#7FB6E6',
    body: 'var(--ink-950)'
  },
  lime: {
    bar: '#EAFBD2',
    dot: '#8FBF66',
    body: '#C3FB86'
  },
  dark: {
    bar: 'var(--ink-800)',
    dot: 'var(--ink-500)',
    body: 'var(--ink-950)'
  }
};
function WindowFrame({
  tint = 'sky',
  children,
  style,
  bodyStyle
}) {
  const t = TINTS[tint] || TINTS.sky;
  const dot = React.createElement('span', {
    style: {
      width: 12,
      height: 12,
      borderRadius: '50%',
      border: '1.5px solid ' + t.dot,
      boxSizing: 'border-box'
    }
  });
  return React.createElement('div', {
    style: {
      borderRadius: 'var(--radius-lg)',
      overflow: 'hidden',
      boxShadow: 'var(--shadow-card)',
      background: t.body,
      ...style
    }
  }, React.createElement('div', {
    style: {
      height: 30,
      background: t.bar,
      display: 'flex',
      alignItems: 'center',
      gap: 6,
      padding: '0 14px'
    }
  }, React.cloneElement(dot, {
    key: 1
  }), React.cloneElement(dot, {
    key: 2
  }), React.cloneElement(dot, {
    key: 3
  })), React.createElement('div', {
    style: {
      position: 'relative',
      ...bodyStyle
    }
  }, children));
}
Object.assign(__ds_scope, { WindowFrame });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/display/WindowFrame.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Dialog.jsx
try { (() => {
function Dialog({
  open = true,
  title,
  children,
  actions,
  onClose,
  width = 440,
  style
}) {
  if (!open) return null;
  return React.createElement('div', {
    onClick: onClose,
    style: {
      position: 'fixed',
      inset: 0,
      background: 'var(--bg-overlay)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: 24,
      zIndex: 100
    }
  }, React.createElement('div', {
    role: 'dialog',
    'aria-modal': true,
    onClick: e => e.stopPropagation(),
    style: {
      width,
      maxWidth: '100%',
      boxSizing: 'border-box',
      background: 'var(--bg-surface)',
      border: '2px solid var(--border-strong)',
      clipPath: 'var(--clip-notch-md)',
      boxShadow: 'inset 0 -4px 0 var(--ink-950)',
      padding: 28,
      display: 'flex',
      flexDirection: 'column',
      gap: 16,
      ...style
    }
  }, React.createElement('div', {
    style: {
      display: 'flex',
      alignItems: 'flex-start',
      justifyContent: 'space-between',
      gap: 16
    }
  }, React.createElement('h3', {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: 'var(--text-display-xs)',
      lineHeight: 'var(--lh-display-xs)',
      color: 'var(--fg-1)',
      margin: 0
    }
  }, title), onClose ? React.createElement(__ds_scope.IconButton, {
    icon: 'close',
    label: 'Close',
    variant: 'ghost',
    size: 'sm',
    onClick: onClose
  }) : null), React.createElement('div', {
    style: {
      color: 'var(--text-body)',
      fontSize: 'var(--text-body-md)',
      lineHeight: 'var(--lh-body-md)'
    }
  }, children), actions ? React.createElement('div', {
    style: {
      display: 'flex',
      justifyContent: 'flex-end',
      gap: 12,
      marginTop: 8
    }
  }, actions) : null));
}
Object.assign(__ds_scope, { Dialog });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Dialog.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Toast.jsx
try { (() => {
const TONES = {
  xp: {
    bg: '#0B2244',
    border: 'var(--blue-500)',
    icon: 'zap',
    iconColor: 'var(--yellow-400)'
  },
  success: {
    bg: '#1B3312',
    border: 'var(--green-600)',
    icon: 'trophy',
    iconColor: 'var(--yellow-400)'
  },
  info: {
    bg: 'var(--ink-800)',
    border: 'var(--ink-600)',
    icon: 'info-box',
    iconColor: 'var(--blue-300)'
  },
  danger: {
    bg: '#33100E',
    border: 'var(--red-500)',
    icon: 'alert',
    iconColor: 'var(--red-400)'
  }
};
function Toast({
  tone = 'info',
  title,
  message,
  icon,
  onClose,
  style
}) {
  const t = TONES[tone] || TONES.info;
  return React.createElement('div', {
    role: 'status',
    style: {
      display: 'flex',
      alignItems: 'flex-start',
      gap: 12,
      padding: '12px 14px',
      boxSizing: 'border-box',
      minWidth: 260,
      maxWidth: 360,
      background: t.bg,
      border: '2px solid ' + t.border,
      borderRadius: 'var(--radius-md)',
      boxShadow: 'var(--shadow-float)',
      ...style
    }
  }, React.createElement(__ds_scope.Icon, {
    name: icon || t.icon,
    size: 24,
    color: t.iconColor,
    style: {
      marginTop: 2
    }
  }), React.createElement('div', {
    style: {
      flex: 1,
      display: 'flex',
      flexDirection: 'column',
      gap: 2
    }
  }, title ? React.createElement('div', {
    style: {
      fontFamily: 'var(--font-body)',
      fontWeight: 700,
      fontSize: 'var(--text-body-sm)',
      color: 'var(--fg-1)'
    }
  }, title) : null, message ? React.createElement('div', {
    style: {
      fontSize: 'var(--text-caption)',
      lineHeight: 'var(--lh-caption)',
      color: 'var(--gray-300)'
    }
  }, message) : null), onClose ? React.createElement('button', {
    type: 'button',
    onClick: onClose,
    'aria-label': 'Dismiss',
    style: {
      background: 'none',
      border: 'none',
      padding: 0,
      cursor: 'pointer',
      color: 'var(--gray-400)'
    }
  }, React.createElement(__ds_scope.Icon, {
    name: 'close',
    size: 18
  })) : null);
}
Object.assign(__ds_scope, { Toast });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Toast.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Tooltip.jsx
try { (() => {
function Tooltip({
  label,
  placement = 'top',
  children,
  open,
  style
}) {
  const [hover, setHover] = React.useState(false);
  const show = open !== undefined ? open : hover;
  const top = placement === 'top';
  return React.createElement('span', {
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    onFocus: () => setHover(true),
    onBlur: () => setHover(false),
    style: {
      position: 'relative',
      display: 'inline-flex',
      ...style
    }
  }, children, show ? React.createElement('span', {
    role: 'tooltip',
    style: {
      position: 'absolute',
      left: '50%',
      transform: 'translateX(-50%)',
      [top ? 'bottom' : 'top']: 'calc(100% + 10px)',
      zIndex: 50,
      whiteSpace: 'nowrap',
      background: 'var(--gray-100)',
      color: 'var(--ink-950)',
      padding: '6px 10px',
      fontFamily: 'var(--font-body)',
      fontWeight: 700,
      fontSize: 'var(--text-caption)',
      lineHeight: 1.2,
      clipPath: 'var(--clip-notch-sm)',
      boxShadow: 'inset 0 -2px 0 var(--gray-300)',
      pointerEvents: 'none'
    }
  }, label, React.createElement('span', {
    style: {
      position: 'absolute',
      left: '50%',
      marginLeft: -4,
      [top ? 'top' : 'bottom']: '100%',
      width: 8,
      height: 4,
      background: 'var(--gray-100)'
    }
  })) : null);
}
Object.assign(__ds_scope, { Tooltip });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Tooltip.jsx", error: String((e && e.message) || e) }); }

// components/forms/Checkbox.jsx
try { (() => {
function Checkbox({
  label,
  checked,
  defaultChecked = false,
  onChange,
  disabled,
  style
}) {
  const [inner, setInner] = React.useState(defaultChecked);
  const on = checked !== undefined ? checked : inner;
  const toggle = () => {
    if (disabled) return;
    if (checked === undefined) setInner(!on);
    onChange && onChange(!on);
  };
  return React.createElement('label', {
    onClick: e => {
      e.preventDefault();
      toggle();
    },
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 10,
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? 0.5 : 1,
      color: 'var(--fg-1)',
      fontSize: 'var(--text-body-md)',
      ...style
    }
  }, React.createElement('span', {
    role: 'checkbox',
    'aria-checked': on,
    tabIndex: disabled ? -1 : 0,
    onKeyDown: e => {
      if (e.key === ' ' || e.key === 'Enter') {
        e.preventDefault();
        toggle();
      }
    },
    style: {
      width: 20,
      height: 20,
      boxSizing: 'border-box',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexShrink: 0,
      background: on ? 'var(--yellow-400)' : 'var(--bg-inset)',
      border: '2px solid ' + (on ? 'var(--border-pixel)' : 'var(--gray-400)'),
      clipPath: 'var(--clip-notch-sm)',
      color: 'var(--fg-on-yellow)'
    }
  }, on ? React.createElement(__ds_scope.Icon, {
    name: 'check',
    size: 16
  }) : null), label ? React.createElement('span', null, label) : null);
}
Object.assign(__ds_scope, { Checkbox });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Checkbox.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
function Input({
  label,
  hint,
  error,
  iconLeft,
  size = 'md',
  id,
  disabled,
  style,
  inputStyle,
  ...rest
}) {
  const [focus, setFocus] = React.useState(false);
  const inputId = id || React.useId();
  const h = size === 'sm' ? 34 : size === 'lg' ? 50 : 42;
  const borderColor = error ? 'var(--danger)' : focus ? 'var(--yellow-400)' : 'var(--border-strong)';
  return React.createElement('label', {
    htmlFor: inputId,
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 6,
      ...style
    }
  }, label ? React.createElement('span', {
    style: {
      fontFamily: 'var(--font-body)',
      fontWeight: 700,
      fontSize: 'var(--text-body-sm)',
      color: 'var(--fg-1)'
    }
  }, label) : null, React.createElement('span', {
    style: {
      position: 'relative',
      display: 'flex',
      alignItems: 'center'
    }
  }, iconLeft ? React.createElement(__ds_scope.Icon, {
    name: iconLeft,
    size: 18,
    color: 'var(--fg-3)',
    style: {
      position: 'absolute',
      left: 12,
      pointerEvents: 'none'
    }
  }) : null, React.createElement('input', {
    id: inputId,
    disabled,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: {
      width: '100%',
      height: h,
      boxSizing: 'border-box',
      padding: iconLeft ? '0 12px 0 38px' : '0 12px',
      background: disabled ? 'var(--ink-850)' : 'var(--bg-inset)',
      color: 'var(--fg-1)',
      border: '2px solid ' + borderColor,
      borderRadius: 0,
      clipPath: 'var(--clip-notch-sm)',
      outline: 'none',
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--text-body-md)',
      opacity: disabled ? 0.55 : 1,
      boxShadow: focus ? 'inset 0 0 0 1px rgba(255,210,31,.35)' : 'none',
      ...inputStyle
    },
    ...rest
  })), error || hint ? React.createElement('span', {
    style: {
      fontSize: 'var(--text-caption)',
      color: error ? 'var(--danger)' : 'var(--fg-3)'
    }
  }, error || hint) : null);
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// components/forms/Radio.jsx
try { (() => {
function Radio({
  name,
  options = [],
  value,
  defaultValue,
  onChange,
  direction = 'column',
  disabled,
  style
}) {
  const [inner, setInner] = React.useState(defaultValue);
  const current = value !== undefined ? value : inner;
  const opts = options.map(o => typeof o === 'string' ? {
    value: o,
    label: o
  } : o);
  const pick = v => {
    if (disabled) return;
    if (value === undefined) setInner(v);
    onChange && onChange(v);
  };
  return React.createElement('div', {
    role: 'radiogroup',
    'aria-label': name,
    style: {
      display: 'flex',
      flexDirection: direction,
      gap: direction === 'row' ? 20 : 10,
      ...style
    }
  }, opts.map(o => {
    const on = o.value === current;
    return React.createElement('label', {
      key: o.value,
      onClick: () => pick(o.value),
      style: {
        display: 'inline-flex',
        alignItems: 'center',
        gap: 10,
        cursor: disabled ? 'not-allowed' : 'pointer',
        opacity: disabled ? 0.5 : 1,
        color: 'var(--fg-1)'
      }
    }, React.createElement('span', {
      role: 'radio',
      'aria-checked': on,
      tabIndex: 0,
      onKeyDown: e => {
        if (e.key === ' ' || e.key === 'Enter') {
          e.preventDefault();
          pick(o.value);
        }
      },
      style: {
        width: 20,
        height: 20,
        boxSizing: 'border-box',
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexShrink: 0,
        background: 'var(--bg-inset)',
        border: '2px solid ' + (on ? 'var(--yellow-400)' : 'var(--gray-400)'),
        clipPath: 'var(--clip-notch-md)'
      }
    }, on ? React.createElement('span', {
      style: {
        width: 8,
        height: 8,
        background: 'var(--yellow-400)'
      }
    }) : null), React.createElement('span', null, o.label));
  }));
}
Object.assign(__ds_scope, { Radio });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Radio.jsx", error: String((e && e.message) || e) }); }

// components/forms/Select.jsx
try { (() => {
function Select({
  label,
  options = [],
  value,
  defaultValue,
  onChange,
  placeholder,
  disabled,
  size = 'md',
  style,
  ...rest
}) {
  const [focus, setFocus] = React.useState(false);
  const h = size === 'sm' ? 34 : size === 'lg' ? 50 : 42;
  const opts = options.map(o => typeof o === 'string' ? {
    value: o,
    label: o
  } : o);
  return React.createElement('label', {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 6,
      ...style
    }
  }, label ? React.createElement('span', {
    style: {
      fontWeight: 700,
      fontSize: 'var(--text-body-sm)',
      color: 'var(--fg-1)'
    }
  }, label) : null, React.createElement('span', {
    style: {
      position: 'relative',
      display: 'flex',
      alignItems: 'center'
    }
  }, React.createElement('select', {
    value,
    defaultValue: value === undefined ? defaultValue ?? (placeholder ? '' : undefined) : undefined,
    onChange: e => onChange && onChange(e.target.value, e),
    disabled,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: {
      appearance: 'none',
      WebkitAppearance: 'none',
      width: '100%',
      height: h,
      padding: '0 40px 0 12px',
      boxSizing: 'border-box',
      background: 'var(--bg-inset)',
      color: 'var(--fg-1)',
      border: '2px solid ' + (focus ? 'var(--yellow-400)' : 'var(--border-strong)'),
      borderRadius: 0,
      clipPath: 'var(--clip-notch-sm)',
      outline: 'none',
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--text-body-md)',
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? 0.55 : 1
    },
    ...rest
  }, placeholder ? React.createElement('option', {
    value: '',
    disabled: true
  }, placeholder) : null, opts.map(o => React.createElement('option', {
    key: o.value,
    value: o.value
  }, o.label))), React.createElement(__ds_scope.Icon, {
    name: 'chevron-down',
    size: 20,
    color: 'var(--fg-2)',
    style: {
      position: 'absolute',
      right: 10,
      pointerEvents: 'none'
    }
  })));
}
Object.assign(__ds_scope, { Select });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Select.jsx", error: String((e && e.message) || e) }); }

// components/forms/Switch.jsx
try { (() => {
function Switch({
  label,
  checked,
  defaultChecked = false,
  onChange,
  disabled,
  style
}) {
  const [inner, setInner] = React.useState(defaultChecked);
  const on = checked !== undefined ? checked : inner;
  const toggle = () => {
    if (disabled) return;
    if (checked === undefined) setInner(!on);
    onChange && onChange(!on);
  };
  return React.createElement('label', {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 10,
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? 0.5 : 1,
      color: 'var(--fg-1)',
      ...style
    }
  }, React.createElement('button', {
    type: 'button',
    role: 'switch',
    'aria-checked': on,
    onClick: toggle,
    disabled,
    style: {
      position: 'relative',
      width: 46,
      height: 26,
      padding: 0,
      boxSizing: 'border-box',
      cursor: 'inherit',
      background: on ? 'var(--green-500)' : 'var(--ink-750)',
      border: '2px solid ' + (on ? 'var(--green-700)' : 'var(--ink-600)'),
      clipPath: 'var(--clip-notch-sm)',
      transition: 'background var(--dur-fast) var(--ease-pixel)'
    }
  }, React.createElement('span', {
    style: {
      position: 'absolute',
      top: 2,
      left: on ? 22 : 2,
      width: 18,
      height: 18,
      background: on ? 'var(--white)' : 'var(--gray-400)',
      boxShadow: 'inset 0 -3px 0 rgba(0,0,0,.25)',
      transition: 'left var(--dur-fast) var(--ease-pixel)'
    }
  })), label ? React.createElement('span', null, label) : null);
}
Object.assign(__ds_scope, { Switch });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Switch.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Navbar.jsx
try { (() => {
function NavLink({
  link
}) {
  const [hover, setHover] = React.useState(false);
  return React.createElement('a', {
    href: link.href || '#',
    onClick: link.onClick,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 6,
      color: link.active || hover ? 'var(--yellow-400)' : 'var(--gray-200)',
      textDecoration: 'none',
      fontFamily: 'var(--font-body)',
      fontWeight: 600,
      fontSize: 16
    }
  }, link.label, link.hasMenu ? React.createElement(__ds_scope.Icon, {
    name: 'chevron-down',
    size: 16
  }) : null);
}
function Navbar({
  brand = 'Pixel Art',
  links = [],
  actions,
  sticky = true,
  maxWidth = 1024,
  style
}) {
  const brandNode = typeof brand === 'string' ? React.createElement('span', {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: 24,
      color: 'var(--fg-1)',
      letterSpacing: '0.02em',
      whiteSpace: 'nowrap'
    }
  }, brand) : brand;
  return React.createElement('header', {
    style: {
      position: sticky ? 'sticky' : 'relative',
      top: 0,
      zIndex: 40,
      background: 'var(--ink-950)',
      borderBottom: '2px solid var(--ink-750)',
      ...style
    }
  }, React.createElement('nav', {
    style: {
      maxWidth,
      margin: '0 auto',
      height: 'var(--nav-height)',
      padding: '0 var(--container-pad)',
      display: 'flex',
      alignItems: 'center',
      gap: 32
    }
  }, brandNode, React.createElement('div', {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 28,
      flex: 1
    }
  }, links.map((l, i) => React.createElement(NavLink, {
    key: i,
    link: l
  }))), actions ? React.createElement('div', {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 12
    }
  }, actions) : null));
}
Object.assign(__ds_scope, { Navbar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Navbar.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Tabs.jsx
try { (() => {
function Tabs({
  items = [],
  value,
  defaultValue,
  onChange,
  variant = 'underline',
  style
}) {
  const [inner, setInner] = React.useState(defaultValue ?? (items[0] && items[0].value));
  const current = value !== undefined ? value : inner;
  const pick = v => {
    if (value === undefined) setInner(v);
    onChange && onChange(v);
  };
  const file = variant === 'file';
  return React.createElement('div', {
    role: 'tablist',
    style: {
      display: 'flex',
      gap: file ? 0 : 28,
      borderBottom: file ? 'none' : '2px solid var(--border-subtle)',
      background: file ? 'var(--ink-850)' : 'transparent',
      ...style
    }
  }, items.map(it => {
    const on = it.value === current;
    const css = file ? {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 8,
      height: 36,
      padding: '0 16px',
      background: on ? 'var(--ink-750)' : 'transparent',
      color: on ? 'var(--fg-1)' : 'var(--fg-3)',
      border: 'none',
      borderTop: '2px solid ' + (on ? 'var(--yellow-400)' : 'transparent'),
      fontFamily: 'var(--font-body)',
      fontWeight: 600,
      fontSize: 13,
      cursor: 'pointer'
    } : {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 8,
      height: 44,
      padding: 0,
      marginBottom: -2,
      background: 'transparent',
      color: on ? 'var(--fg-1)' : 'var(--fg-3)',
      border: 'none',
      borderBottom: '3px solid ' + (on ? 'var(--yellow-400)' : 'transparent'),
      fontFamily: 'var(--font-display)',
      fontSize: 17,
      letterSpacing: '0.03em',
      cursor: 'pointer'
    };
    return React.createElement('button', {
      key: it.value,
      type: 'button',
      role: 'tab',
      'aria-selected': on,
      onClick: () => pick(it.value),
      style: css
    }, it.icon ? React.createElement(__ds_scope.Icon, {
      name: it.icon,
      size: file ? 14 : 18,
      color: file && on ? 'var(--yellow-400)' : undefined
    }) : null, it.label);
  }));
}
Object.assign(__ds_scope, { Tabs });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Tabs.jsx", error: String((e && e.message) || e) }); }

// ui_kits/learn/Chrome.jsx
try { (() => {
const NS = window.PixelArtDesignSystem_d84aca;
function AppHeader({
  course,
  lesson,
  progress
}) {
  const {
    ProgressBar,
    IconButton,
    Badge
  } = NS;
  return /*#__PURE__*/React.createElement("header", {
    style: {
      height: 52,
      display: 'flex',
      alignItems: 'center',
      gap: 20,
      padding: '0 16px',
      background: 'var(--ink-950)',
      borderBottom: '2px solid var(--ink-750)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: '700 22px var(--font-display)',
      color: '#fff',
      letterSpacing: '.02em'
    }
  }, "Pixel Art"), /*#__PURE__*/React.createElement(Badge, {
    tone: "info",
    variant: "solid"
  }, "Club")), /*#__PURE__*/React.createElement("span", {
    style: {
      font: '500 14px var(--font-body)',
      color: 'var(--fg-3)',
      whiteSpace: 'nowrap'
    }
  }, course, " ", /*#__PURE__*/React.createElement("span", {
    style: {
      margin: '0 4px'
    }
  }, "/"), " ", /*#__PURE__*/React.createElement("b", {
    style: {
      color: '#fff',
      fontWeight: 700
    }
  }, lesson)), /*#__PURE__*/React.createElement(ProgressBar, {
    value: progress,
    showLabel: true,
    style: {
      width: 200,
      flexShrink: 0
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1
    }
  }), /*#__PURE__*/React.createElement(IconButton, {
    icon: "flag",
    label: "Report an issue",
    variant: "ghost"
  }), /*#__PURE__*/React.createElement(IconButton, {
    icon: "notification",
    label: "Notifications",
    variant: "ghost"
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      width: 34,
      height: 34,
      background: 'var(--pink-400)',
      clipPath: 'var(--clip-notch-sm)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      font: '700 14px var(--font-display)',
      color: '#3A0520'
    }
  }, "AL"));
}
function PanelBar({
  children,
  right
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      height: 38,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '0 16px',
      background: 'var(--ink-850)',
      borderBottom: '1px solid var(--ink-750)',
      font: '600 13px var(--font-body)',
      color: 'var(--fg-2)'
    }
  }, children, right);
}
function AvatarStack({
  names,
  count
}) {
  const colors = ['var(--yellow-400)', 'var(--pink-400)', 'var(--green-400)'];
  return /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8,
      fontSize: 12,
      color: 'var(--fg-3)',
      whiteSpace: 'nowrap'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex'
    }
  }, names.map((n, i) => /*#__PURE__*/React.createElement("span", {
    key: n,
    style: {
      width: 20,
      height: 20,
      marginLeft: i ? -6 : 0,
      borderRadius: '50%',
      background: colors[i % 3],
      border: '2px solid var(--ink-850)',
      font: '800 10px var(--font-body)',
      color: '#111',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, n))), count, " also learning");
}
function LessonFooter({
  title,
  index,
  total,
  done,
  onBack,
  onNext,
  onMenu,
  canNext
}) {
  const {
    IconButton,
    Badge,
    Button
  } = NS;
  return /*#__PURE__*/React.createElement("footer", {
    style: {
      height: 60,
      display: 'flex',
      alignItems: 'center',
      gap: 14,
      padding: '0 16px',
      background: 'var(--ink-950)',
      borderTop: '2px solid var(--ink-750)'
    }
  }, /*#__PURE__*/React.createElement(IconButton, {
    icon: "list",
    label: "All exercises",
    onClick: onMenu,
    size: "sm"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      lineHeight: 1.3,
      whiteSpace: 'nowrap'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: '700 14px var(--font-body)',
      color: '#fff'
    }
  }, title), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8,
      fontSize: 12,
      color: 'var(--fg-3)'
    }
  }, "Exercise ", index, " / ", total, " ", done ? /*#__PURE__*/React.createElement(Badge, {
    tone: "success",
    variant: "solid"
  }, "Done!") : null)), /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1
    }
  }), /*#__PURE__*/React.createElement(Button, {
    variant: "outline",
    size: "sm",
    onClick: onBack,
    disabled: index === 1,
    style: {
      minWidth: 96
    }
  }, "Back"), /*#__PURE__*/React.createElement(Button, {
    size: "sm",
    onClick: onNext,
    disabled: !canNext,
    style: {
      minWidth: 96
    }
  }, "Next"));
}
Object.assign(window, {
  NS,
  AppHeader,
  PanelBar,
  AvatarStack,
  LessonFooter
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/learn/Chrome.jsx", error: String((e && e.message) || e) }); }

// ui_kits/learn/Drawer.jsx
try { (() => {
function ExerciseDrawer({
  open,
  current,
  done,
  onPick,
  onClose
}) {
  const {
    Icon,
    Badge,
    IconButton,
    ProgressBar
  } = NS;
  if (!open) return null;
  return /*#__PURE__*/React.createElement("div", {
    onClick: onClose,
    style: {
      position: 'absolute',
      inset: 0,
      background: 'var(--bg-overlay)',
      zIndex: 20
    }
  }, /*#__PURE__*/React.createElement("aside", {
    onClick: e => e.stopPropagation(),
    style: {
      position: 'absolute',
      left: 0,
      top: 0,
      bottom: 0,
      width: 340,
      background: 'var(--bg-surface)',
      borderRight: '2px solid var(--border-strong)',
      display: 'flex',
      flexDirection: 'column'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '20px 20px 16px',
      display: 'flex',
      flexDirection: 'column',
      gap: 12,
      borderBottom: '1px solid var(--ink-750)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: '700 12px var(--font-pixel-caps)',
      letterSpacing: '.2em',
      color: 'var(--yellow-400)'
    }
  }, "CHAPTER 1"), /*#__PURE__*/React.createElement(IconButton, {
    icon: "close",
    label: "Close",
    variant: "ghost",
    size: "sm",
    onClick: onClose
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      font: '700 24px var(--font-display)',
      color: '#fff'
    }
  }, "Hello World"), /*#__PURE__*/React.createElement(ProgressBar, {
    value: done.length / EXERCISES.length * 100,
    showLabel: true
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 12,
      display: 'flex',
      flexDirection: 'column',
      gap: 4
    }
  }, EXERCISES.map(ex => {
    const on = ex.n === current,
      isDone = done.includes(ex.n);
    return /*#__PURE__*/React.createElement("button", {
      key: ex.n,
      onClick: () => onPick(ex.n),
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 12,
        padding: '12px',
        background: on ? 'var(--ink-750)' : 'transparent',
        border: 'none',
        borderLeft: '3px solid ' + (on ? 'var(--yellow-400)' : 'transparent'),
        color: '#fff',
        cursor: 'pointer',
        textAlign: 'left',
        font: '600 15px var(--font-body)'
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: isDone ? 'checkbox-on' : 'checkbox',
      size: 20,
      color: isDone ? 'var(--green-400)' : 'var(--ink-500)'
    }), /*#__PURE__*/React.createElement("span", {
      style: {
        flex: 1
      }
    }, String(ex.n).padStart(2, '0'), ". ", ex.title), isDone ? /*#__PURE__*/React.createElement(Badge, {
      tone: "success"
    }, "+10 XP") : null);
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 12,
      padding: 12,
      color: 'var(--fg-disabled)',
      font: '600 15px var(--font-body)'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "lock",
    size: 20
  }), "04. Bonus challenge"))));
}
Object.assign(window, {
  ExerciseDrawer
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/learn/Drawer.jsx", error: String((e && e.message) || e) }); }

// ui_kits/learn/Exercise.jsx
try { (() => {
const EXERCISES = [{
  n: 1,
  title: 'Setting Up',
  heading: 'Welcome',
  starter: '# Nothing to write yet — press Run 🚀\n',
  expected: null,
  body: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("p", null, "Every coder starts somewhere. In this chapter you'll write your very first programs in Python."), /*#__PURE__*/React.createElement("p", null, "Press ", /*#__PURE__*/React.createElement("b", null, "Run"), " to see what happens, then ", /*#__PURE__*/React.createElement("b", null, "Submit answer"), "."))
}, {
  n: 2,
  title: 'Hello World',
  heading: 'Print',
  starter: '# Write code below 💖\n\n',
  expected: 'Hello World!',
  body: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("p", null, "In Python, the ", /*#__PURE__*/React.createElement(Code, null, "print()"), " function tells a computer to \"talk.\" It's something we'll use ", /*#__PURE__*/React.createElement("i", null, "a lot"), "."), /*#__PURE__*/React.createElement("p", null, "The message goes inside the parentheses and is wrapped in quotes. Double ", /*#__PURE__*/React.createElement(Code, null, "\""), " or single ", /*#__PURE__*/React.createElement(Code, null, "'"), " quotes both work, as long as they match."), /*#__PURE__*/React.createElement("p", null, "Here's an example:"), /*#__PURE__*/React.createElement(LessonCode, {
    code: "print('👋 Howdy')"
  }), /*#__PURE__*/React.createElement("p", null, "Your turn: print ", /*#__PURE__*/React.createElement("b", null, "Hello World!"), " to the terminal."))
}, {
  n: 3,
  title: 'Pattern',
  heading: 'Multiple lines',
  starter: '# Print two lines\n',
  expected: null,
  body: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("p", null, "Each ", /*#__PURE__*/React.createElement(Code, null, "print()"), " starts a new line. Try printing your name on one line and your favorite snack on the next."))
}];
function LessonCode(props) {
  const C = window.PixelArtDesignSystem_d84aca && window.PixelArtDesignSystem_d84aca.CodeBlock;
  return C ? /*#__PURE__*/React.createElement(C, props) : /*#__PURE__*/React.createElement("pre", {
    style: {
      margin: 0,
      fontFamily: 'var(--font-mono)'
    }
  }, props.code);
}
function Code({
  children
}) {
  return /*#__PURE__*/React.createElement("code", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 13,
      background: 'var(--ink-750)',
      color: '#fff',
      padding: '1px 5px',
      borderRadius: 3
    }
  }, children);
}
function LessonPanel({
  ex
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      minHeight: 0,
      borderRight: '2px solid var(--ink-750)'
    }
  }, /*#__PURE__*/React.createElement(PanelBar, {
    right: /*#__PURE__*/React.createElement(AvatarStack, {
      names: ['J', 'E', 'M'],
      count: 214
    })
  }, "Exercise"), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '24px 24px 40px',
      overflow: 'auto',
      display: 'flex',
      flexDirection: 'column',
      gap: 14,
      font: '400 15px/1.6 var(--font-body)',
      color: 'var(--fg-2)'
    }
  }, /*#__PURE__*/React.createElement("h1", {
    style: {
      font: '700 28px var(--font-display)',
      color: '#fff',
      margin: 0
    }
  }, String(ex.n).padStart(2, '0'), ". ", ex.title), /*#__PURE__*/React.createElement("h2", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8,
      font: '600 18px var(--font-body)',
      color: '#fff',
      margin: '4px 0 0'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--blue-400)'
    }
  }, "#"), ex.heading), ex.body));
}
function EditorPanel({
  code,
  setCode,
  onRun,
  onSubmit,
  output,
  toasts,
  dismiss
}) {
  const {
    Tabs,
    IconButton,
    Button,
    Toast,
    Tooltip
  } = NS;
  const lines = code.split('\n');
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateRows: '1fr auto 200px',
      minHeight: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      minHeight: 0
    }
  }, /*#__PURE__*/React.createElement(Tabs, {
    variant: "file",
    items: [{
      value: 'main',
      label: 'hello_world.py',
      icon: 'file'
    }]
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      display: 'flex',
      background: 'var(--bg-inset)',
      minHeight: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '14px 0 0 16px',
      font: '400 13px/1.7 var(--font-mono)',
      color: 'var(--ink-500)',
      textAlign: 'right',
      userSelect: 'none'
    }
  }, lines.map((_, i) => /*#__PURE__*/React.createElement("div", {
    key: i
  }, i + 1))), /*#__PURE__*/React.createElement("textarea", {
    value: code,
    onChange: e => setCode(e.target.value),
    spellCheck: false,
    style: {
      flex: 1,
      resize: 'none',
      background: 'transparent',
      border: 'none',
      outline: 'none',
      padding: '14px 16px',
      font: '400 13px/1.7 var(--font-mono)',
      color: 'var(--gray-100)',
      caretColor: 'var(--yellow-400)'
    }
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8,
      padding: '10px 16px',
      background: 'var(--bg-inset)',
      borderBottom: '2px solid var(--ink-750)'
    }
  }, /*#__PURE__*/React.createElement(Tooltip, {
    label: "Copy code"
  }, /*#__PURE__*/React.createElement(IconButton, {
    icon: "copy",
    label: "Copy code",
    size: "sm"
  })), /*#__PURE__*/React.createElement(Tooltip, {
    label: "Screenshot"
  }, /*#__PURE__*/React.createElement(IconButton, {
    icon: "camera",
    label: "Screenshot",
    size: "sm"
  })), /*#__PURE__*/React.createElement(Tooltip, {
    label: "Reset code"
  }, /*#__PURE__*/React.createElement(IconButton, {
    icon: "reload",
    label: "Reset code",
    size: "sm",
    onClick: () => setCode('# Write code below 💖\n\n')
  })), /*#__PURE__*/React.createElement(Tooltip, {
    label: "Ask AI"
  }, /*#__PURE__*/React.createElement(IconButton, {
    icon: "message",
    label: "Ask AI",
    size: "sm"
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1
    }
  }), /*#__PURE__*/React.createElement(Button, {
    variant: "outline",
    size: "sm",
    iconLeft: "play",
    onClick: onRun
  }, "Run"), /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    size: "sm",
    onClick: onSubmit
  }, "Submit answer")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      minHeight: 0,
      background: 'var(--ink-950)'
    }
  }, /*#__PURE__*/React.createElement(PanelBar, null, "Terminal"), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      display: 'grid',
      gridTemplateColumns: '1fr auto',
      gap: 12,
      padding: 14,
      minHeight: 0
    }
  }, /*#__PURE__*/React.createElement("pre", {
    style: {
      margin: 0,
      font: '400 13px/1.7 var(--font-mono)',
      color: output.error ? 'var(--red-400)' : 'var(--gray-200)',
      whiteSpace: 'pre-wrap'
    }
  }, output.text, /*#__PURE__*/React.createElement("span", {
    style: {
      background: 'var(--gray-300)',
      display: 'inline-block',
      width: 7,
      height: 14,
      verticalAlign: 'middle',
      marginLeft: 2
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 8
    }
  }, toasts.map(t => /*#__PURE__*/React.createElement(Toast, {
    key: t.id,
    tone: t.tone,
    title: t.title,
    message: t.message,
    onClose: () => dismiss(t.id)
  }))))));
}
Object.assign(window, {
  EXERCISES,
  LessonPanel,
  EditorPanel,
  Code
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/learn/Exercise.jsx", error: String((e && e.message) || e) }); }

// ui_kits/learn/doc-page.js
try { (() => {
// @ds-adherence-ignore -- omelette starter scaffold (raw elements/hex/px by design)
// Copied omelette starter. Re-running copy_starter_component with this kind overwrites this file with the latest version (page content is unaffected).
/* BEGIN USAGE */
/**
 * <doc-page> — paged-document shell for printable HTML.
 *
 * FIRST, decide how the document paginates — up front, before building:
 *
 * - FLOWING document (the default): write the whole document as one
 *   normal HTML flow inside <doc-page>; the browser's print engine
 *   splits it onto pages at export. Use for long-form documents with a
 *   single text flow: reports, memos, letters, essays.
 * - EXPLICIT pagination: a fixed set of pre-paginated pages, one
 *   <section class="page"> child per page. Use when the user asks for a
 *   specific page count, or the design implies one: a one-page resume, a
 *   two-sided flier, a poster, a certificate, a brochure — any richly
 *   laid-out document without a single text flow.
 * - If in doubt, ask the user as part of the build.
 *
 * PAGE SIZING — paper differs by country (letter vs A4), so the printed
 * sheet is not one fixed truth:
 * - FLOWING documents pin NO paper size: the print engine paginates
 *   onto the user's real paper, and the content reflows to it.
 * - EXPLICITLY PAGINATED documents print each page at a FIXED page box
 *   with overflow hidden — letter by default, size="a4" for a clearly
 *   metric user, the user's chosen paper when they export. Design each
 *   page to FILL that box, fitting letter and A4 alike without overlap.
 * - width/height pin an explicit fixed size, ONLY when the user gives
 *   one.
 * Never write your own @page rule or hard-code paper dimensions in the
 * content.
 *
 * Sizing modes (attributes):
 *   (none)                      — portrait: flowing docs use the user's
 *           paper; explicitly paginated pages use the named size box
 *           (letter unless size="a4")
 *   orientation="landscape"     — the same, landscape
 *   width / height              — explicit fixed size, ONLY when the user
 *           gives one (e.g. width="22in" height="30in" for a 22×30
 *           poster): the page IS the design's size, printed at true
 *           dimensions (or scaled onto the user's paper at print time).
 *           Any absolute CSS length: px/in/mm/cm/pt/pc.
 * The component announces the chosen mode to the host app at runtime (a
 * meta tag it injects), so the print path can inject the user's true
 * paper size.
 *
 * On screen the document renders on a desk background: a flowing
 * document as one tall scrolling sheet (Google Docs' pageless view);
 * explicitly paginated documents as one card per page.
 *
 * EXPLICIT pagination usage:
 *   <style>doc-page:not(:defined){visibility:hidden}</style>
 *   <doc-page>
 *     <section class="page" id="p1">…one page's design…</section>
 *     <section class="page" id="p2">…</section>
 *   </doc-page>
 *   <script src="doc-page.js"></script>
 * How the page box works, concretely: each .page prints as ONE full-bleed
 * sheet at a FIXED physical size — letter by default (set size="a4" for
 * a clearly metric user), the user's chosen paper when they export —
 * with overflow hidden. Nothing scrolls and nothing reflows onto a next
 * sheet: content that misses the box is CLIPPED. Design each page to
 * FILL that page box, and to fit it — letter and A4 alike — without
 * overlap. Each page is a size container; don't size anything in
 * viewport units (they track the window, not the page), and never set
 * width or height on the .page section itself (the component sizes the
 * page box; an authored height like 100% is meaningless at print and is
 * overridden). The component owns the page box, the screen card chrome,
 * and the page breaks (never add your own break-before/after). Don't mix
 * .page sections with flowing content or header/footer slots in the same
 * document.
 *
 * FLOWING usage:
 *   <style>doc-page:not(:defined){visibility:hidden}</style>
 *   <doc-page margin="0.75in">
 *     <h1>Title</h1>
 *     <p>…body…</p>
 *   </doc-page>
 *   <script src="doc-page.js"></script>
 * There is no manual page-splitting — the browser's print engine
 * paginates at export. Standard break-hygiene rules (`break-inside:
 * avoid` on figures, code blocks, images and table rows; `orphans/
 * widows: 3`) are applied so paragraphs and groups split cleanly. On
 * screen and at print, headings default to `text-wrap: balance` and
 * body text to `text-wrap: pretty`; the defaults have zero specificity,
 * so any text-wrap you declare wins.
 *
 * Other attributes:
 *   size    — letter | a4 | legal (default letter). Flowing documents:
 *           preview proportion only — it does NOT pin their printed
 *           paper (the print dialog's paper governs); leave it alone
 *           there. Explicitly paginated documents: it sets the page box
 *           the cards and the pinned @page share (the export dialog's
 *           choice overrides both at print) — set size="a4" for a
 *           clearly metric user. Scaled-fit: names the sheet the fit is
 *           computed against, same a4-for-metric-users advice.
 *   content-width / content-height — the design's own fixed dimensions
 *           (CSS lengths), for scaling a fixed-size design ONTO the
 *           named sheet: content lays out at exactly this size, and the
 *           component scales it to fit that sheet's printable area
 *           (centered horizontally, top-aligned; the export dialog
 *           re-fits to the user's actual paper choice where available).
 *           Both must be set; they do not change the page box. For pages
 *           WITHOUT running header/footer slots.
 *   margin  — printable inset on every page of a FLOWING document
 *           (default 0.75in); margin="0" makes pages full-bleed.
 *           Explicitly paginated pages are always full-bleed.
 *
 * Running header/footer (flowing documents only): give an element
 * `slot="header"` or `slot="footer"` and it repeats on every printed
 * page via `position: fixed`. To keep body text from sliding under it,
 * the component prints inside a single-cell table whose <thead>/<tfoot>
 * are spacers sized to the header/footer height — browsers repeat
 * thead/tfoot on every page, so each sheet's content starts below the
 * header and ends above the footer. On screen the header/footer render
 * once at the top/bottom of the sheet.
 *
 * At print the component injects `@page { margin: 0 }` (which leaves
 * Chrome no margin box to draw its date/URL/page-count header in) and
 * moves the visual margin onto the sheet's own padding. It also marks
 * the document as owning its print CSS (a
 * `meta[name="omelette-owns-print"]` it injects at runtime), so the
 * PDF export never injects page-geometry CSS of its own on top.
 *
 * Print best practices for the content you author:
 * - Multi-column text: use CSS columns (`column-count` +
 *   `column-gap`), never side-by-side flex/grid columns — only real
 *   CSS columns flow and break across pages. `column-span: all` lets
 *   a heading span the columns; `hyphens: auto` (needs `lang` on
 *   the html element) keeps narrow columns readable.
 * - Page breaks in flowing documents: `break-before: page` on an
 *   element that must start a new page (a chapter, an appendix). Add
 *   your own kept-together blocks (callouts, stat tiles, cards) to a
 *   `break-inside: avoid` rule, and keep each one shorter than a page.
 * - Extend `orphans: 3; widows: 3` to any custom text blocks you add
 *   (p and li are covered by default).
 * - Give long tables a <thead> — browsers repeat it on every printed
 *   page.
 * - No `position: fixed`/`sticky` and no viewport units in content:
 *   fixed elements stamp every printed page (running headers/footers go
 *   in the component's slots) and `100vh` mis-sizes at print.
 *
 * Author content as static HTML so the user can click-to-edit any text
 * directly. Do not set width/padding/background on the document body —
 * the component owns the sheet box.
 */
/* END USAGE */

(() => {
  const PAPER = {
    letter: ['8.5in', '11in'],
    a4: ['210mm', '297mm'],
    legal: ['8.5in', '14in']
  };
  const CSS_LENGTH = /^\d+(\.\d+)?(px|in|mm|cm|pt|pc)$/;
  // Unitless "0" is a valid CSS length and the natural way to write
  // margin="0"; normalise it to 0px so max()/calc() (which reject a bare
  // number) keep working.
  const safeLen = (v, fb) => {
    v = (v || '').trim();
    return v === '0' ? '0px' : CSS_LENGTH.test(v) ? v : fb;
  };
  // WebKit (Safari and every iOS browser shell) never repeats a table's
  // thead/tfoot on printed pages (WebKit bug 17205), so the spacer-borne
  // vertical margins of a FLOWING document reach only the first page
  // there. Engine check, not browser check: vendor is 'Apple Computer,
  // Inc.' exactly for WebKit and 'Google Inc.' for Blink.
  const WK_PRINT = /apple/i.test(navigator.vendor || '');
  // CSS length → px number (CSS absolute units are exact: 1in = 96px).
  // Returns NaN for anything safeLen would reject — callers gate on it.
  const PX_PER = {
    px: 1,
    in: 96,
    mm: 96 / 25.4,
    cm: 96 / 2.54,
    pt: 96 / 72,
    pc: 16
  };
  const toPx = v => {
    const m = /^(\d+(?:\.\d+)?)(px|in|mm|cm|pt|pc)$/.exec((v || '').trim());
    return m ? parseFloat(m[1]) * PX_PER[m[2]] : NaN;
  };
  const stylesheet = `
    :host {
      position: relative;
      display: block;
      /* When the viewport is narrower than the page, grow to wrap the
       * sheet (plus this padding) instead of staying viewport-width, so
       * the desk background and right margin reach the sheet's far edge
       * in the horizontal scroll. */
      min-width: max-content;
      min-height: 100vh;
      background: #f5f5f4;
      padding: 48px 24px;
      box-sizing: border-box;
      font-family: -apple-system, BlinkMacSystemFont, "Helvetica Neue", Arial, sans-serif;
      --doc-page-w: 8.5in;
      --doc-page-h: 11in;
      --doc-page-margin: 0.75in;
      --doc-hdr-h: 0px;
      --doc-ftr-h: 0px;
      --doc-hdr-pad: 0px;
      --doc-ftr-pad: 0px;
    }
    .sheet {
      width: var(--doc-page-w);
      margin: 0 auto;
      background: #fff;
      box-shadow: 0 2px 10px rgba(20, 20, 19, 0.12);
      border-radius: 7px;
      box-sizing: border-box;
      padding: var(--doc-page-margin);
    }
    .frame { width: 100%; border-collapse: collapse; }
    /* Scaled-fit mode (content-width/content-height): the inner .fit box
     * lays the content out at its authored fixed size and scales it onto
     * the printable area; .fit-box reserves the scaled footprint in flow
     * (transforms don't affect layout) and centers it. Without the mode,
     * both divs are unstyled block pass-throughs. */
    /* Explicit pagination: direct .page children are the pages. The sheet
     * becomes a transparent stack and each page carries the card look on
     * screen; at print each page is exactly one full-bleed sheet. The
     * ::slotted defaults are deliberately weak (document CSS wins), so
     * authored page styling can override any of this. */
    .sheet.paginated {
      background: transparent;
      box-shadow: none;
      border-radius: 0;
      padding: 0;
    }
    .paginated ::slotted(.page) {
      position: relative;
      display: block;
      width: 100%;
      aspect-ratio: var(--doc-page-ar);
      container-type: size;
      overflow: hidden;
      box-sizing: border-box;
      background: #fff;
      border-radius: 7px;
      box-shadow: 0 2px 10px rgba(0, 0, 0, 0.25);
      print-color-adjust: exact;
      -webkit-print-color-adjust: exact;
      break-inside: avoid;
    }
    .paginated ::slotted(.page:not(:first-child)) { margin-top: 1rem; }
    @media print {
      .sheet.paginated { padding: 0; }
      /* The flowing-document vertical inset lives on the repeating
       * thead/tfoot spacers, not the sheet padding — they must go too,
       * or each full-sheet .page is pushed ~margin down and spills onto
       * a second sheet. Paginated pages are full-bleed by definition
       * (content owns its insets). */
      .sheet.paginated .hdr-space,
      .sheet.paginated .ftr-space { height: 0; }
      .paginated ::slotted(.page) {
        border-radius: 0 !important;
        box-shadow: none !important;
        margin: 0 !important;
        /* Physical page-box sizing, no viewport units: Safari resolves
         * 100vh against the window, not the page box, so a vh-sized card
         * paginates wrong there. --doc-page-w/h are the named size by
         * default and are overridden to the user's chosen paper by the
         * export path, so every card is exactly one sheet either way.
         * Width + height (same source values as @page size) rather than
         * width + aspect-ratio: the ratio is a 6-decimal rounding of the
         * same division, and a few millionths of overflow would spill a
         * blank sheet after every page. The screen-only aspect-ratio
         * (preview proportions) must not leak into print. cqh typography
         * tracks the same box.
         *
         * Every declaration is !important: per CSS Scoping, unimportant
         * shadow ::slotted rules LOSE to the document context, so a page
         * section's authored inline style would silently beat this print
         * geometry. A model-authored height:100% did exactly that — the
         * percentage resolves as auto in the all-auto print ancestry, the
         * base rule's size containment turns auto into ZERO, and
         * overflow:hidden then paints nothing: a blank PDF with perfect
         * page boxes. At print the component's geometry is the design's
         * whole contract, so it must win over any authored sizing. */
        aspect-ratio: auto !important;
        width: var(--doc-page-w) !important;
        height: var(--doc-page-h) !important;
        overflow: hidden !important;
      }
      .paginated ::slotted(.page:not(:first-child)) {
        break-before: page !important;
        margin-top: 0 !important;
      }
    }
    .fit-mode .fit-box {
      width: calc(var(--doc-fit-w) * var(--doc-fit-scale));
      height: calc(var(--doc-fit-h) * var(--doc-fit-scale));
      margin: 0 auto;
      break-inside: avoid;
    }
    /* Monolithic at print: Blink slices a transform-scaled child at
     * fragmentainer boundaries mapped in UNSCALED layout coordinates
     * (transforms are paint-time), so the .fit box (authored size, e.g.
     * 1400x990) gets cut at the page's free block space and spills onto
     * a second sheet even though its SCALED footprint fits the page by
     * construction. overflow:hidden makes .fit-box a scroll container —
     * monolithic under fragmentation (css-break-3) — so the scaled
     * content prints atomically on one sheet. No clipping for content
     * within the authored box: .fit-box is calc-sized to exactly the
     * scaled footprint. (Content that bleeds past content-width/height
     * is clipped at the footprint — fit mode's contract; it previously
     * painted beyond it at print.) Print-only, so the screen rendering
     * keeps visible overflow for editor affordances.
     * The export path injects the same rule into frozen copies
     * (print-eval.ts om-print-fit-contain). The .fit-mode scope is
     * load-bearing: .fit-box wraps slotted content in EVERY mode, and an
     * unscoped overflow:hidden would make whole flowing documents
     * monolithic (one truncated sheet). overflow:hidden, never clip —
     * clip is not a scroll container, so not monolithic. */
    @media print {
      .fit-mode .fit-box { overflow: hidden; }
    }
    .fit-mode .fit {
      width: var(--doc-fit-w);
      height: var(--doc-fit-h);
      transform: scale(var(--doc-fit-scale));
      transform-origin: top left;
    }
    .frame td, .frame th { padding: 0; text-align: left; font-weight: inherit; }
    .hdr-space { height: var(--doc-hdr-h); }
    .ftr-space { height: var(--doc-ftr-h); }
    ::slotted([slot="header"]),
    ::slotted([slot="footer"]) { display: block; box-sizing: border-box; }
    @media print {
      :host { background: none; padding: 0; min-width: 0; min-height: 0; }
      .sheet {
        width: auto; margin: 0; box-shadow: none; border-radius: 0;
        padding: 0 var(--doc-page-margin);
      }
      /* The thead/tfoot spacers repeat on every page, so they carry the
       * vertical page margin (which the sheet's own padding cannot, since
       * that padding is consumed once on the first/last page). The running
       * header/footer are fixed inside that band. */
      /* The 0.35in is breathing room between a running header/footer and
       * the body; without one the spacer is exactly the page margin, so a
       * margin="0" full-bleed document gets truly full-bleed pages. */
      .hdr-space { height: max(var(--doc-page-margin), calc(var(--doc-hdr-h) + var(--doc-hdr-pad))); }
      .ftr-space { height: max(var(--doc-page-margin), calc(var(--doc-ftr-h) + var(--doc-ftr-pad))); }
      /* WebKit flowing documents: @page carries the vertical margin (see
       * _syncPrintPageRule), so the spacers keep only whatever a running
       * header/footer needs BEYOND it — page 1 would otherwise double its
       * top inset. Paginated sheets already zero their spacers above. */
      .sheet.wk-print:not(.paginated) .hdr-space { height: max(0px, calc(max(var(--doc-page-margin), calc(var(--doc-hdr-h) + var(--doc-hdr-pad))) - var(--doc-page-margin))); }
      .sheet.wk-print:not(.paginated) .ftr-space { height: max(0px, calc(max(var(--doc-page-margin), calc(var(--doc-ftr-h) + var(--doc-ftr-pad))) - var(--doc-page-margin))); }
      ::slotted([slot="header"]) {
        position: fixed; top: 0; left: 0; right: 0; margin: 0;
        padding: calc(var(--doc-page-margin) * 0.45) var(--doc-page-margin) 0;
      }
      ::slotted([slot="footer"]) {
        position: fixed; bottom: 0; left: 0; right: 0; margin: 0;
        padding: 0 var(--doc-page-margin) calc(var(--doc-page-margin) * 0.45);
      }
    }
  `;
  class DocPage extends HTMLElement {
    static get observedAttributes() {
      return ['size', 'width', 'height', 'margin', 'orientation', 'content-width', 'content-height'];
    }
    constructor() {
      super();
      this._root = this.attachShadow({
        mode: 'open'
      });
      this._mo = typeof MutationObserver === 'function' ? new MutationObserver(() => this._scheduleMeasure()) : null;
    }

    /** The named paper's [w, h], swapped when orientation="landscape".
     *  Only the named size swaps — explicit width/height are exact values
     *  the author already oriented. */
    _paperSize() {
      const named = PAPER[(this.getAttribute('size') || '').toLowerCase()] || PAPER.letter;
      const landscape = (this.getAttribute('orientation') || '').trim().toLowerCase() === 'landscape';
      return landscape ? [named[1], named[0]] : named;
    }
    get pageWidth() {
      return safeLen(this.getAttribute('width'), this._paperSize()[0]);
    }
    get pageHeight() {
      return safeLen(this.getAttribute('height'), this._paperSize()[1]);
    }
    get pageMargin() {
      return safeLen(this.getAttribute('margin'), '0.75in');
    }

    /** Scaled-fit mode's content box [w, h] as CSS lengths, or null when
     *  the mode is off (either attribute missing/invalid/zero — a partial
     *  declaration falls back to normal flow rather than guessing). */
    _contentFit() {
      const w = safeLen(this.getAttribute('content-width'), null);
      const h = safeLen(this.getAttribute('content-height'), null);
      if (!w || !h) return null;
      const wPx = toPx(w),
        hPx = toPx(h);
      return wPx > 0 && hPx > 0 ? [w, h, wPx, hPx] : null;
    }
    connectedCallback() {
      if (!this._sheet) this._render();
      this._syncSize();
      this._syncPrintPageRule();
      this._ensureTextWrapDefaults();
      this._ensureOwnsPrintMeta();
      this._syncFixedSizeMeta();
      this._syncPrintSizingMeta();
      if (this._mo) this._mo.observe(this, {
        subtree: true,
        childList: true,
        characterData: true,
        attributes: true
      });
      this._onResize = () => this._scheduleMeasure();
      window.addEventListener('resize', this._onResize);
      if (document.fonts && document.fonts.ready) {
        document.fonts.ready.then(() => this._scheduleMeasure());
      }
      this._scheduleMeasure();
    }
    disconnectedCallback() {
      window.removeEventListener('resize', this._onResize);
      if (this._mo) this._mo.disconnect();
      if (this._raf) {
        cancelAnimationFrame(this._raf);
        this._raf = null;
      }
      // Drop the head rules when the last doc-page leaves, so a deleted
      // document's @page geometry and text-wrap defaults can't apply to
      // whatever replaces it.
      const survivor = document.querySelector('doc-page');
      if (!survivor) {
        ['doc-page-print', 'doc-page-text-wrap', 'doc-page-owns-print', 'doc-page-fixed-size', 'doc-page-print-sizing'].forEach(id => {
          const tag = document.getElementById(id);
          if (tag) tag.remove();
        });
        // A live deck-stage deferred its own print-sizing meta to ours —
        // hand the page-global meta over so the deck isn't left unmarked.
        const deck = document.querySelector('deck-stage');
        if (deck && typeof deck._ensurePrintSizingMeta === 'function') {
          deck._ensurePrintSizingMeta();
        }
      } else {
        // A departed owner hands each page-global meta to whatever
        // doc-page remains (or it's removed).
        if (typeof survivor._syncFixedSizeMeta === 'function') {
          survivor._syncFixedSizeMeta();
        }
        if (typeof survivor._syncPrintSizingMeta === 'function') {
          survivor._syncPrintSizingMeta();
        }
      }
    }
    attributeChangedCallback() {
      if (!this._sheet) return;
      this._syncSize();
      this._syncPrintPageRule();
      this._syncFixedSizeMeta();
      this._syncPrintSizingMeta();
      this._scheduleMeasure();
    }
    _render() {
      this._root.innerHTML = `
        <style>${stylesheet}</style>
        <style id="vars"></style>
        <div class="sheet" data-screen-label="Document">
          <table class="frame" role="presentation">
            <thead><tr><th><div class="hdr-space"><slot name="header"></slot></div></th></tr></thead>
            <tbody><tr><td class="body"><div class="fit-box"><div class="fit"><slot></slot></div></div></td></tr></tbody>
            <tfoot><tr><td><div class="ftr-space"><slot name="footer"></slot></div></td></tr></tfoot>
          </table>
        </div>`;
      this._sheet = this._root.querySelector('.sheet');
      this._vars = this._root.getElementById('vars');
    }

    /** Runtime sizing lives in a shadow <style> :host rule, never on the
     *  light-DOM host element, so serialize-persist can't write it back. */
    _syncSize(hdrH, ftrH) {
      // Scaled-fit mode: content at its authored size, scaled onto the
      // printable area (page minus margins on both axes). The factor is a
      // plain number var so calc(length * number) stays valid; 4 decimals
      // keeps the shadow style stable across re-measures. Upscaling is
      // allowed — print transforms are vector, so text and CSS stay crisp
      // (raster images soften, which the catalog bullet warns about).
      const fit = this._contentFit();
      let fitVars = '';
      if (fit) {
        const marginPx = toPx(this.pageMargin) || 0;
        const availW = toPx(this.pageWidth) - 2 * marginPx;
        const availH = toPx(this.pageHeight) - 2 * marginPx;
        const scale = Math.min(availW / fit[2], availH / fit[3]);
        if (scale > 0 && Number.isFinite(scale)) {
          fitVars = '--doc-fit-w:' + fit[0] + ';' + '--doc-fit-h:' + fit[1] + ';' + '--doc-fit-scale:' + scale.toFixed(4) + ';';
        }
      }
      this._sheet.classList.toggle('fit-mode', !!fitVars);
      // Numeric w/h ratio for the paginated page cards' aspect-ratio —
      // aspect-ratio takes a number, not a length ratio, so compute it
      // here (CSS length division isn't portable). 6 decimals keeps the
      // shadow style stable across re-syncs.
      const arW = toPx(this.pageWidth);
      const arH = toPx(this.pageHeight);
      const ar = arW > 0 && arH > 0 ? (arW / arH).toFixed(6) : '0.772727';
      this._vars.textContent = ':host{' + fitVars + '--doc-page-ar:' + ar + ';' + '--doc-page-w:' + this.pageWidth + ';' + '--doc-page-h:' + this.pageHeight + ';' + '--doc-page-margin:' + this.pageMargin + ';' + '--doc-hdr-h:' + (hdrH || 0) + 'px;' + '--doc-ftr-h:' + (ftrH || 0) + 'px;' + '--doc-hdr-pad:' + (hdrH ? '0.35in' : '0px') + ';' + '--doc-ftr-pad:' + (ftrH ? '0.35in' : '0px') + '}';
    }

    /** @page is a no-op inside shadow DOM, so the rule lives in <head>.
     *  Re-appended on every sync so it stays last in source order — the
     *  @page cascade is source-order per descriptor, so this rule wins
     *  over any other @page rule in the document.
     *
     *  The @page SIZE is pinned where the page box IS part of the design:
     *  explicit-fixed-size mode (width + height authored), scaled-fit
     *  mode (the named sheet the fit targets), and explicit pagination
     *  (the named size the cards share — so card and sheet agree on
     *  every print path, and the export path's chosen paper overrides
     *  BOTH with one later rule). For FLOWING documents no paper size is
     *  emitted at all — the true size comes from the user's preference,
     *  injected by the export path or chosen in the print dialog — so a
     *  flowing document never fights the paper it lands on.
     *  margin: 0 is emitted in every mode: it leaves Chrome no margin box
     *  to draw its date/URL/page-count header in, and the visual margin
     *  lives on the sheet's own padding. */
    _syncPrintPageRule() {
      const id = 'doc-page-print';
      let tag = document.getElementById(id);
      if (!tag) {
        tag = document.createElement('style');
        tag.id = id;
      }
      document.head.appendChild(tag);
      // Three print-geometry regimes:
      // - true-size: the page IS the design — pin its exact size.
      // - scaled-fit (content-width/height): the fit factor is computed
      //   against the NAMED paper's printable area, so that paper must
      //   stay pinned or the scaled content overflows a smaller sheet
      //   (the export path re-fits and re-pins at print time on top).
      // - default modes: no paper size — but landscape still needs the
      //   paper-agnostic 'size: landscape' keyword, because the size
      //   descriptor is what carries orientation; without it a landscape
      //   document prints portrait whenever nothing injects a size.
      const landscape = (this.getAttribute('orientation') || '').trim().toLowerCase() === 'landscape';
      // Explicit pagination pins the page box to the SAME values that
      // size the cards (the named size by default, the export path's
      // chosen paper when its later rule overrides both) — card and
      // sheet agree on every print path, and a mismatched real paper
      // shrinks-to-fit in the dialog instead of clipping a Letter card
      // on A4. Declared before the paginated read below so both derive
      // from one check.
      const paginatedNow = this.querySelector(':scope > .page') !== null;
      const sizeDescriptor = this._trueSizePx() ? 'size: ' + this.pageWidth + ' ' + this.pageHeight + '; ' : this._contentFit() ? 'size: ' + this.pageWidth + ' ' + this.pageHeight + '; ' : paginatedNow ? 'size: ' + this.pageWidth + ' ' + this.pageHeight + '; ' : landscape ? 'size: landscape; ' : '';
      // WebKit never repeats the thead/tfoot spacers that carry a flowing
      // document's vertical page margins (see WK_PRINT above), so pages
      // after the first print edge-to-edge there. Carry the VERTICAL
      // margins on @page for WebKit instead, and the shadow print CSS
      // trims the first-page spacers by the same amount (.sheet.wk-print
      // rules). Horizontal inset stays on the sheet's own padding in
      // every engine. Blink keeps margin: 0 (a nonzero margin there
      // re-opens the box Chrome draws its header furniture in). One cost,
      // learned in testing: Safari's own date/URL headers are a USER
      // dialog setting ("Print headers and footers") that renders in the
      // margin area when room exists — margin: 0 only suppressed it by
      // leaving no room, and no CSS controls it. The export dialog's
      // Safari guide teaches turning the setting off for flowing
      // documents. Explicitly paginated and fixed-size documents keep
      // margin: 0 everywhere: their pages ARE the sheet.
      const wkFlowing = WK_PRINT && !paginatedNow && !this._trueSizePx() && !this._contentFit();
      const marginDescriptor = wkFlowing ? 'margin: ' + this.pageMargin + ' 0; ' : 'margin: 0; ';
      // Shadow-internal marker (never serialized), kept in lockstep with
      // the @page decision above: the print CSS trims the first-page
      // spacers ONLY while @page actually carries the margins — a
      // true-size or scaled-fit sheet keeps margin: 0 and must keep its
      // spacers too. Re-synced here so attribute changes and pagination
      // flips move both together.
      if (this._sheet) this._sheet.classList.toggle('wk-print', wkFlowing);
      tag.textContent = '@page { ' + sizeDescriptor + marginDescriptor + '} ' + '@media print { html, body { margin: 0 !important; padding: 0 !important; background: none !important; height: auto !important; overflow: visible !important; } ' + 'h1,h2,h3,h4,h5,h6 { break-after: avoid; } ' + 'figure,pre,blockquote,img,svg,tr { break-inside: avoid; } ' + 'p,li { orphans: 3; widows: 3; } ' + '* { -webkit-print-color-adjust: exact; print-color-adjust: exact; ' + 'backdrop-filter: none !important; -webkit-backdrop-filter: none !important; } ' + '*, *::before, *::after { animation-delay: -99s !important; animation-duration: .001s !important; ' + 'animation-iteration-count: 1 !important; animation-fill-mode: both !important; ' + 'animation-play-state: running !important; transition-duration: 0s !important; } }';
    }

    /** Typographic defaults for document text: balance headings, avoid
     *  widowed/orphaned words in body copy (browsers without text-wrap
     *  support drop the declarations). Zero-specificity via :where() so
     *  any text-wrap authored on those elements wins; document-level so the
     *  rules reach the slotted (light DOM) content — shadow styles can't.
     *  data-omelette-injected marks the tag for the host editor to strip
     *  at serialize, so it is never written back as authored source. */
    _ensureTextWrapDefaults() {
      if (document.getElementById('doc-page-text-wrap')) return;
      const tag = document.createElement('style');
      tag.id = 'doc-page-text-wrap';
      tag.setAttribute('data-omelette-injected', '');
      tag.textContent = ':where(h1,h2,h3,h4,h5,h6){text-wrap:balance}' + ':where(p,li,blockquote,figcaption){text-wrap:pretty}';
      document.head.appendChild(tag);
    }

    /** Declares that this document owns its print CSS. The instant-PDF
     *  export checks for the meta by NAME PRESENCE alone (content is
     *  ignored) and skips its automatic print-CSS injections, so the
     *  component's @page geometry is never overridden by a heuristic.
     *  data-omelette-injected keeps it out of serialized source. */
    _ensureOwnsPrintMeta() {
      if (document.getElementById('doc-page-owns-print')) return;
      const tag = document.createElement('meta');
      tag.id = 'doc-page-owns-print';
      tag.name = 'omelette-owns-print';
      tag.content = 'true';
      tag.setAttribute('data-omelette-injected', '');
      document.head.appendChild(tag);
    }

    /** This page's valid true-size page box (explicit width AND height)
     *  as [w, h] px ints, or null when the mode is off. */
    _trueSizePx() {
      if (!safeLen(this.getAttribute('width'), null) || !safeLen(this.getAttribute('height'), null)) return null;
      const w = Math.round(toPx(this.pageWidth));
      const h = Math.round(toPx(this.pageHeight));
      return w > 0 && h > 0 ? [w, h] : null;
    }

    /** True-size pages (explicit width AND height) also declare the page
     *  box as the preview size: the in-app preview reads
     *  meta[name="omelette-fixed-size"] (content "W,H" in px ints) and
     *  scales the sheet into view — without it an 18in poster previews at
     *  true size with scrollbars. Never overrides an author-set meta
     *  (only the component's own id is managed). The meta is page-global
     *  while doc-page instances are not, so every sync recomputes the
     *  page-wide owner — the first connected true-size doc-page — and a
     *  non-true-size sibling's sync can never delete the owner's meta.
     *  Removed when no true-size page remains (the owner's disconnect
     *  re-syncs via any survivor) or when an author-set meta exists. */
    _syncFixedSizeMeta() {
      const id = 'doc-page-fixed-size';
      const own = document.getElementById(id);
      const authored = document.querySelector('meta[name="omelette-fixed-size"]:not([data-omelette-injected])');
      // The page-wide owner, not this instance: an upgraded true-size page
      // anywhere in the document keeps the meta alive and sized.
      let box = null;
      for (const el of document.querySelectorAll('doc-page')) {
        box = typeof el._trueSizePx === 'function' ? el._trueSizePx() : null;
        if (box) break;
      }
      if (!box || authored) {
        if (own) own.remove();
        return;
      }
      const tag = own || document.createElement('meta');
      tag.id = id;
      tag.name = 'omelette-fixed-size';
      tag.content = box[0] + ',' + box[1];
      tag.setAttribute('data-omelette-injected', '');
      if (!own) document.head.appendChild(tag);
    }

    /** This page's print-sizing mode: 'fixed' when an explicit width AND
     *  height are authored (the page is the design's own size), else the
     *  default paper in the authored orientation. */
    _printSizingMode() {
      if (this._trueSizePx()) return 'fixed';
      const landscape = (this.getAttribute('orientation') || '').trim().toLowerCase() === 'landscape';
      return landscape ? 'default-landscape' : 'default-portrait';
    }

    /** Announces the print-sizing mode to the host app:
     *  meta[name="omelette-print-sizing"] with content 'default-portrait',
     *  'default-landscape', or 'fixed' (fixed pages also carry the
     *  omelette-fixed-size meta with the page box in px). The export path
     *  probes it to decide what true paper size to inject at print time —
     *  in the default modes the component emits no paper size of its own.
     *  Same page-global ownership rules as the fixed-size meta above:
     *  first connected doc-page owns it, an authored meta is never
     *  overridden, removed when no doc-page remains. */
    _syncPrintSizingMeta() {
      const id = 'doc-page-print-sizing';
      const own = document.getElementById(id);
      const authored = document.querySelector('meta[name="omelette-print-sizing"]:not([data-omelette-injected])');
      // A fixed page wins outright (mirroring the fixed-size loop above,
      // so the two metas can never contradict each other in a mixed
      // multi-page document); otherwise the first page's mode holds.
      let mode = null;
      for (const el of document.querySelectorAll('doc-page')) {
        if (typeof el._printSizingMode !== 'function') continue;
        const m = el._printSizingMode();
        if (m === 'fixed') {
          mode = m;
          break;
        }
        if (mode === null) mode = m;
      }
      if (!mode || authored) {
        if (own) own.remove();
        return;
      }
      // A deck-stage that connected first injected its own meta and
      // defers to any existing one — take it over, or the document ends
      // up with two conflicting injected metas (a doc-page page is the
      // document; the deck re-ensures its meta if every doc-page leaves).
      const deckMeta = document.getElementById('deck-stage-print-sizing');
      if (deckMeta) deckMeta.remove();
      const tag = own || document.createElement('meta');
      tag.id = id;
      tag.name = 'omelette-print-sizing';
      tag.content = mode;
      tag.setAttribute('data-omelette-injected', '');
      if (!own) document.head.appendChild(tag);
    }
    _scheduleMeasure() {
      if (this._raf) return;
      this._raf = requestAnimationFrame(() => {
        this._raf = null;
        this._measure();
      });
    }

    /** Slot heights feed the print spacers (--doc-hdr-h / --doc-ftr-h), so
     *  they re-measure on content mutation, resize, and font load. The
     *  same pass detects explicit pagination (direct .page children) and
     *  toggles the sheet between the flowing-document card and the
     *  page-per-card stack — content edits can add or remove pages at any
     *  time, so this tracks the same mutations the measurement does. */
    _measure() {
      const hdr = this.querySelector(':scope > [slot="header"]');
      const ftr = this.querySelector(':scope > [slot="footer"]');
      const wasPaginated = this._sheet.classList.contains('paginated');
      this._sheet.classList.toggle('paginated', this.querySelector(':scope > .page') !== null);
      // The WebKit @page margin is flowing-only, so a pagination flip
      // must re-emit the rule (content edits can add or remove .page
      // sections at any time).
      if (this._sheet.classList.contains('paginated') !== wasPaginated) {
        this._syncPrintPageRule();
      }
      this._syncSize(hdr ? hdr.offsetHeight : 0, ftr ? ftr.offsetHeight : 0);
    }
  }
  if (!customElements.get('doc-page')) {
    customElements.define('doc-page', DocPage);
  }
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/learn/doc-page.js", error: String((e && e.message) || e) }); }

// ui_kits/website/Club.jsx
try { (() => {
const CLUB_FEATURES = [{
  icon: 'book-open',
  color: 'var(--blue-400)',
  title: 'Complete access to courses',
  body: 'Every course, including Club-only subjects like data structures, algorithms and Node.js.'
}, {
  icon: 'notes',
  color: 'var(--green-400)',
  title: 'Course certificates',
  body: 'Earn a certificate of completion for Python, HTML, JavaScript and more.'
}, {
  icon: 'users',
  color: 'var(--gray-300)',
  title: 'Code mentors',
  body: 'Get personal feedback on your projects and on-demand help from mentors.'
}, {
  icon: 'message',
  color: 'var(--pink-400)',
  title: 'Unlimited AI help',
  body: 'Ask your coding companion to debug, brainstorm, or suggest practice problems.'
}, {
  icon: 'code',
  color: 'var(--purple-400)',
  title: 'Unlimited builds',
  body: 'Start projects, test snippets, and host your creations right here.'
}, {
  icon: 'calendar',
  color: 'var(--yellow-400)',
  title: 'Club-exclusive events',
  body: 'Game nights, resume workshops, and more with learners around the world.'
}];
function ClubSection({
  onJoin
}) {
  const {
    Icon,
    Button
  } = NS;
  return /*#__PURE__*/React.createElement("section", {
    id: "club",
    style: {
      background: 'var(--gradient-club)',
      padding: '88px 0'
    }
  }, /*#__PURE__*/React.createElement(Container, {
    wide: true
  }, /*#__PURE__*/React.createElement(SectionTitle, {
    align: "center"
  }, "Join the Club"), /*#__PURE__*/React.createElement("p", {
    style: {
      font: '400 20px/1.6 var(--font-body)',
      color: 'var(--gray-200)',
      textAlign: 'center',
      maxWidth: 860,
      margin: '20px auto 56px'
    }
  }, "Unlimited learning content, Club-only perks, and support designed to help you reach your goals. From $9.99/month. ", /*#__PURE__*/React.createElement("a", {
    href: "#club"
  }, "Learn more")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3,minmax(0,1fr))',
      columnGap: 56,
      rowGap: 56
    }
  }, CLUB_FEATURES.map(f => /*#__PURE__*/React.createElement("div", {
    key: f.title,
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 14
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: f.icon,
    size: 36,
    color: f.color
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      font: '700 19px var(--font-body)',
      color: '#fff',
      marginTop: 8
    }
  }, f.title), /*#__PURE__*/React.createElement("p", {
    style: {
      font: '400 16px/1.6 var(--font-body)',
      color: 'var(--gray-300)',
      margin: 0
    }
  }, f.body)))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'center',
      marginTop: 56
    }
  }, /*#__PURE__*/React.createElement(Button, {
    size: "lg",
    onClick: onJoin
  }, "Join Club now"))));
}
function FinalCTA({
  onStart
}) {
  const {
    Button
  } = NS;
  const full = 'Ready to build?';
  const [n, setN] = React.useState(0);
  React.useEffect(() => {
    const t = setInterval(() => setN(v => v >= full.length + 12 ? 0 : v + 1), 110);
    return () => clearInterval(t);
  }, []);
  return /*#__PURE__*/React.createElement(SceneSlot, {
    label: "Town square pixel scene \u2014 artwork needed",
    gradient: "linear-gradient(180deg,#4B5A3C 0%,#5E6A48 50%,#6F6A52 100%)",
    labelColor: "#fff",
    style: {
      minHeight: 520,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 40
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      font: '700 72px var(--font-display)',
      color: '#fff',
      textShadow: '0 5px 0 rgba(0,0,0,.45)',
      minHeight: 80
    }
  }, full.slice(0, Math.min(n, full.length)), /*#__PURE__*/React.createElement("span", {
    style: {
      opacity: n % 2 ? 1 : 0
    }
  }, "|")), /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    size: "lg",
    onClick: onStart
  }, "Start learning for free"));
}
function SignupDialog({
  open,
  onClose
}) {
  const {
    Dialog,
    Input,
    Button,
    Checkbox,
    Toast
  } = NS;
  const [done, setDone] = React.useState(false);
  React.useEffect(() => {
    if (open) setDone(false);
  }, [open]);
  return /*#__PURE__*/React.createElement(Dialog, {
    open: open,
    onClose: onClose,
    title: done ? 'Welcome, adventurer!' : 'Create your character',
    width: 420,
    actions: done ? /*#__PURE__*/React.createElement(Button, {
      onClick: onClose
    }, "Let's go") : /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Button, {
      variant: "outline",
      onClick: onClose
    }, "Cancel"), /*#__PURE__*/React.createElement(Button, {
      onClick: () => setDone(true)
    }, "Sign up"))
  }, done ? /*#__PURE__*/React.createElement(Toast, {
    tone: "xp",
    title: "+50 XP",
    message: "Your account is ready. Your first quest is waiting.",
    style: {
      maxWidth: 'none'
    }
  }) : /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 14
    }
  }, /*#__PURE__*/React.createElement(Input, {
    label: "Username",
    placeholder: "pixel_pioneer"
  }), /*#__PURE__*/React.createElement(Input, {
    label: "Email",
    placeholder: "you@example.com"
  }), /*#__PURE__*/React.createElement(Checkbox, {
    label: "Send me weekly challenges",
    defaultChecked: true
  })));
}
Object.assign(window, {
  ClubSection,
  FinalCTA,
  SignupDialog
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Club.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Features.jsx
try { (() => {
function EditorPreview() {
  const {
    Badge,
    ProgressBar,
    Toast,
    Button
  } = NS;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--ink-950)',
      fontSize: 11,
      color: 'var(--fg-2)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 12,
      padding: '8px 14px',
      borderBottom: '1px solid var(--ink-750)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: '700 14px var(--font-display)',
      color: '#fff'
    }
  }, "Pixel Art"), /*#__PURE__*/React.createElement("span", null, "Python / ", /*#__PURE__*/React.createElement("b", {
    style: {
      color: '#fff'
    }
  }, "Hello World")), /*#__PURE__*/React.createElement(ProgressBar, {
    value: 40,
    height: 8,
    style: {
      width: 100
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1.1fr',
      minHeight: 230
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 14,
      borderRight: '1px solid var(--ink-750)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      font: '700 16px var(--font-display)',
      color: '#fff',
      marginBottom: 8
    }
  }, "02. Hello World"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      lineHeight: 1.5
    }
  }, "The ", /*#__PURE__*/React.createElement("code", {
    style: {
      fontFamily: 'var(--font-mono)',
      background: 'var(--ink-750)',
      color: '#fff',
      padding: '0 3px'
    }
  }, "print()"), " function tells the computer to talk. We'll use it a lot.")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column'
    }
  }, /*#__PURE__*/React.createElement("pre", {
    style: {
      margin: 0,
      padding: 14,
      font: '400 11px/1.7 var(--font-mono)',
      color: 'var(--gray-100)',
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--gray-400)'
    }
  }, "# Write code below \uD83D\uDC96"), '\n', "print(\"Hello World!\")"), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 10,
      display: 'flex',
      flexDirection: 'column',
      gap: 6,
      alignItems: 'flex-end'
    }
  }, /*#__PURE__*/React.createElement(Toast, {
    tone: "xp",
    title: "+10 XP",
    message: "Nice work. Keep it up!",
    style: {
      minWidth: 0,
      maxWidth: 220,
      padding: '8px 10px'
    }
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '8px 14px',
      borderTop: '1px solid var(--ink-750)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      gap: 8,
      alignItems: 'center'
    }
  }, "Exercise 2 / 5 ", /*#__PURE__*/React.createElement(Badge, {
    tone: "success",
    variant: "solid"
  }, "Done!")), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "outline",
    size: "sm"
  }, "Back"), /*#__PURE__*/React.createElement(Button, {
    size: "sm"
  }, "Next"))));
}
function FeatureRow({
  id,
  title,
  body,
  media,
  flip
}) {
  return /*#__PURE__*/React.createElement("section", {
    id: id,
    style: {
      padding: '72px 0'
    }
  }, /*#__PURE__*/React.createElement(Container, {
    wide: true
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: flip ? '1fr 1.1fr' : '1.1fr 1fr',
      gap: 72,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      order: flip ? 2 : 1
    }
  }, media), /*#__PURE__*/React.createElement("div", {
    style: {
      order: flip ? 1 : 2,
      display: 'flex',
      flexDirection: 'column',
      gap: 24
    }
  }, /*#__PURE__*/React.createElement(SectionTitle, null, title), /*#__PURE__*/React.createElement("p", {
    style: {
      font: '400 var(--text-body-lg)/var(--lh-body-lg) var(--font-body)',
      color: 'var(--fg-2)',
      margin: 0
    }
  }, body)))));
}
function ChallengeCardDemo() {
  const {
    Card,
    Badge,
    CodeBlock,
    Icon
  } = NS;
  return /*#__PURE__*/React.createElement(Card, {
    variant: "gold",
    padding: 20,
    style: {
      maxWidth: 420,
      marginLeft: 'auto',
      transform: 'rotate(0deg)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      marginBottom: 12
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8,
      font: '800 20px var(--font-body)'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "grid",
    size: 20,
    color: "var(--green-500)"
  }), "Staircase"), /*#__PURE__*/React.createElement("span", {
    style: {
      font: '500 18px var(--font-body)'
    }
  }, "10 XP")), /*#__PURE__*/React.createElement("div", {
    style: {
      border: '2px solid var(--gold-500)',
      borderRadius: 999,
      padding: 4,
      marginBottom: 14
    }
  }, /*#__PURE__*/React.createElement(Badge, {
    tone: "warning"
  }, "Medium")), /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'rgba(255,255,255,.55)',
      borderRadius: 12,
      padding: 16
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      font: '700 16px var(--font-body)',
      marginBottom: 8
    }
  }, "Instructions"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '0 0 12px',
      fontSize: 15,
      lineHeight: 1.6
    }
  }, "Use a ", /*#__PURE__*/React.createElement("code", {
    style: {
      fontFamily: 'var(--font-mono)',
      background: 'rgba(0,0,0,.06)',
      padding: '0 4px'
    }
  }, "for"), " loop and ", /*#__PURE__*/React.createElement("code", {
    style: {
      fontFamily: 'var(--font-mono)',
      background: 'rgba(0,0,0,.06)',
      padding: '0 4px'
    }
  }, "print()"), " to build a staircase of asterisks:"), /*#__PURE__*/React.createElement(CodeBlock, {
    copyable: false,
    code: '*\n* *\n* * *\n* * * *\n# ... and so on'
  })));
}
function BuildPreview() {
  const {
    WindowFrame,
    Button
  } = NS;
  return /*#__PURE__*/React.createElement(WindowFrame, {
    tint: "lime",
    bodyStyle: {
      height: 300,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: 12,
      left: 12
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "danger",
    size: "sm"
  }, "Back")), /*#__PURE__*/React.createElement("div", {
    style: {
      font: '700 40px var(--font-display)',
      color: 'var(--orange-500)',
      textShadow: '0 3px 0 var(--orange-700)'
    }
  }, "MINESWEEPER"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(8,28px)'
    }
  }, Array.from({
    length: 32
  }).map((_, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      width: 28,
      height: 28,
      background: (i + Math.floor(i / 8)) % 2 ? '#F9D48A' : '#FCE7B0',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      font: '700 12px var(--font-pixel-caps)',
      color: [3, 11, 20].includes(i) ? 'var(--green-600)' : 'var(--blue-700)'
    }
  }, [3, 11, 20].includes(i) ? '2' : [5, 14].includes(i) ? '1' : ''))));
}
function Features() {
  const {
    WindowFrame
  } = NS;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(FeatureRow, {
    id: "level",
    title: "Level up your learning",
    body: "Create your character, earn XP, and unlock badges as you learn Python, HTML, JavaScript and more. Every exercise is a small quest with a clear finish line.",
    media: /*#__PURE__*/React.createElement(WindowFrame, {
      tint: "sky"
    }, /*#__PURE__*/React.createElement(EditorPreview, null))
  }), /*#__PURE__*/React.createElement(FeatureRow, {
    id: "practice",
    flip: true,
    title: "Practice your coding chops",
    body: "Sharpen your skills with bite-sized challenges. Test what you've learned with problems for beginners and seasoned coders alike.",
    media: /*#__PURE__*/React.createElement(ChallengeCardDemo, null)
  }), /*#__PURE__*/React.createElement(FeatureRow, {
    id: "build",
    title: "Build an awesome portfolio",
    body: "Make games, sites and tools right in the browser, then share them with the community. No setup, no downloads.",
    media: /*#__PURE__*/React.createElement(BuildPreview, null)
  }));
}
Object.assign(window, {
  Features
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Features.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Hero.jsx
try { (() => {
function SiteNav({
  onSignup
}) {
  const {
    Navbar,
    IconButton,
    Button
  } = NS;
  return /*#__PURE__*/React.createElement(Navbar, {
    links: [{
      label: 'Learn',
      hasMenu: true,
      href: '#learn'
    }, {
      label: 'Practice',
      hasMenu: true,
      href: '#practice'
    }, {
      label: 'Build',
      href: '#build'
    }, {
      label: 'Community',
      hasMenu: true,
      href: '#club'
    }, {
      label: 'Pricing',
      href: '#club'
    }],
    actions: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(IconButton, {
      icon: "search",
      label: "Search",
      variant: "ghost"
    }), /*#__PURE__*/React.createElement(IconButton, {
      icon: "moon",
      label: "Theme",
      variant: "ghost"
    }), /*#__PURE__*/React.createElement(Button, {
      size: "sm",
      onClick: onSignup
    }, "Sign up"))
  });
}
function Hero({
  onStart
}) {
  const {
    Button
  } = NS;
  return /*#__PURE__*/React.createElement(SceneSlot, {
    label: "Hero pixel landscape \u2014 artwork needed",
    style: {
      minHeight: 620,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      textAlign: 'center',
      padding: '80px 24px 120px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: 0,
      right: 0,
      bottom: 0,
      height: 180,
      background: 'var(--gradient-scene-fade)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: 20
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      font: '700 20px var(--font-pixel-caps)',
      letterSpacing: '.24em',
      color: '#1B2A4A',
      textTransform: 'uppercase'
    }
  }, "Start your"), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: 104,
      lineHeight: .95,
      color: 'var(--yellow-300)',
      margin: 0,
      textShadow: '3px 0 0 #5A2A6A,-3px 0 0 #5A2A6A,0 3px 0 #5A2A6A,0 -3px 0 #5A2A6A,0 9px 0 rgba(40,10,50,.55)'
    }
  }, "Coding", /*#__PURE__*/React.createElement("br", null), "Quest"), /*#__PURE__*/React.createElement("p", {
    style: {
      font: '500 20px var(--font-body)',
      color: '#fff',
      textShadow: 'var(--text-shadow-hero)',
      margin: '12px 0 8px'
    }
  }, "The friendliest way to learn to code, one pixel-sized win at a time."), /*#__PURE__*/React.createElement(Button, {
    size: "lg",
    onClick: onStart
  }, "Get started")));
}
function StatsBand() {
  const {
    Stat,
    Card
  } = NS;
  return /*#__PURE__*/React.createElement("section", {
    id: "learn",
    style: {
      padding: '72px 0 96px'
    }
  }, /*#__PURE__*/React.createElement(Container, null, /*#__PURE__*/React.createElement(SectionTitle, {
    align: "center",
    style: {
      fontSize: 44,
      maxWidth: 760,
      margin: '0 auto 48px'
    }
  }, "Explore hundreds of hours of free interactive lessons"), /*#__PURE__*/React.createElement(Card, {
    variant: "media",
    style: {
      aspectRatio: '16/9',
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement(SceneSlot, {
    label: "World map illustration \u2014 artwork needed",
    gradient: "var(--gradient-dusk)",
    labelColor: "#fff",
    style: {
      position: 'absolute',
      inset: 0
    }
  }, /*#__PURE__*/React.createElement(MapSigns, null))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(4,1fr)',
      marginTop: 64
    }
  }, /*#__PURE__*/React.createElement(Stat, {
    value: "1m+",
    label: "Learners",
    tone: "yellow"
  }), /*#__PURE__*/React.createElement(Stat, {
    value: "150+",
    label: "Countries",
    tone: "green"
  }), /*#__PURE__*/React.createElement(Stat, {
    value: "5m+",
    label: "Exercises",
    tone: "purple"
  }), /*#__PURE__*/React.createElement(Stat, {
    value: "90k+",
    label: "Builds",
    tone: "pink"
  }))));
}
function MapSigns() {
  const {
    Tag
  } = NS;
  const signs = [['CSS', '14%', '18%'], ['JS', '42%', '10%'], ['AI', '64%', '9%'], ['Python', '66%', '44%'], ['SQL', '40%', '56%'], ['HTML', '24%', '68%'], ['Game dev', '76%', '70%']];
  return signs.map(([t, x, y]) => /*#__PURE__*/React.createElement(Tag, {
    key: t,
    size: "lg",
    style: {
      position: 'absolute',
      left: x,
      top: y
    }
  }, t));
}
Object.assign(window, {
  SiteNav,
  Hero,
  StatsBand
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Hero.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Shared.jsx
try { (() => {
// Shared kit helpers — exported to window
const NS = window.PixelArtDesignSystem_d84aca;
function SceneSlot({
  label,
  gradient = 'var(--gradient-sky)',
  style,
  children,
  labelColor = 'rgba(10,42,74,.7)'
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      background: gradient,
      overflow: 'hidden',
      ...style
    }
  }, children, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      right: 12,
      bottom: 10,
      font: '700 10px var(--font-pixel-caps)',
      letterSpacing: '.12em',
      textTransform: 'uppercase',
      color: labelColor,
      background: 'rgba(255,255,255,.35)',
      padding: '3px 6px'
    }
  }, label));
}
function Container({
  children,
  style,
  wide
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: wide ? 'var(--container-wide)' : 'var(--container-max)',
      margin: '0 auto',
      padding: '0 var(--container-pad)',
      ...style
    }
  }, children);
}
function SectionTitle({
  children,
  style,
  align = 'left'
}) {
  return /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: 'var(--text-display-md)',
      lineHeight: 'var(--lh-display-md)',
      color: '#fff',
      letterSpacing: '.02em',
      textAlign: align,
      margin: 0,
      ...style
    }
  }, children);
}
Object.assign(window, {
  NS,
  SceneSlot,
  Container,
  SectionTitle
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Shared.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Button = __ds_scope.Button;

__ds_ns.ICON_NAMES = __ds_scope.ICON_NAMES;

__ds_ns.Icon = __ds_scope.Icon;

__ds_ns.IconButton = __ds_scope.IconButton;

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.CodeBlock = __ds_scope.CodeBlock;

__ds_ns.ProgressBar = __ds_scope.ProgressBar;

__ds_ns.Stat = __ds_scope.Stat;

__ds_ns.Tag = __ds_scope.Tag;

__ds_ns.WindowFrame = __ds_scope.WindowFrame;

__ds_ns.Dialog = __ds_scope.Dialog;

__ds_ns.Toast = __ds_scope.Toast;

__ds_ns.Tooltip = __ds_scope.Tooltip;

__ds_ns.Checkbox = __ds_scope.Checkbox;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.Radio = __ds_scope.Radio;

__ds_ns.Select = __ds_scope.Select;

__ds_ns.Switch = __ds_scope.Switch;

__ds_ns.Navbar = __ds_scope.Navbar;

__ds_ns.Tabs = __ds_scope.Tabs;

})();
