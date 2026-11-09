import axios from 'axios';
import { Capacitor } from '@capacitor/core';
import { App as CapApp } from '@capacitor/app';
import { StatusBar, Style } from '@capacitor/status-bar';

/**
 * Mobile Native Adapter for Tường Tận TOEIC (Capacitor Android)
 * Enables seamless connection between local native webview and production VPS backend.
 */
export function initMobileAdapter() {
  const isNative = Capacitor.isNativePlatform();
  // Capacitor Android WebView typically serves from https://localhost (without port 3000)
  const isCapacitorLocalhost = window.location.hostname === 'localhost' && (!window.location.port || window.location.port === '80');
  const shouldRouteToRemote = isNative || isCapacitorLocalhost;

  const REMOTE_ORIGIN = 'https://toeic.danganhtuong.dev';

  if (shouldRouteToRemote) {
    console.log('[MobileAdapter] Initializing native Android bridge with remote backend:', REMOTE_ORIGIN);

    // 1. Configure Axios baseURL for all API endpoints
    axios.defaults.baseURL = REMOTE_ORIGIN;

    // 2. Patch window.fetch for any relative /api/ or /media/ requests
    const originalFetch = window.fetch;
    window.fetch = function (input, init) {
      if (typeof input === 'string') {
        if (input.startsWith('/api/') || input.startsWith('/media/')) {
          input = REMOTE_ORIGIN + input;
        }
      } else if (input instanceof Request) {
        const url = input.url;
        if (url.startsWith('/api/') || url.startsWith('/media/')) {
          input = new Request(REMOTE_ORIGIN + url, input);
        }
      }
      return originalFetch.call(this, input, init);
    };

    // 3. Patch Image element src descriptor for /media/ assets
    try {
      const origImgDescriptor = Object.getOwnPropertyDescriptor(HTMLImageElement.prototype, 'src');
      if (origImgDescriptor && origImgDescriptor.set) {
        Object.defineProperty(HTMLImageElement.prototype, 'src', {
          set: function (val) {
            if (typeof val === 'string' && val.startsWith('/media/')) {
              val = REMOTE_ORIGIN + val;
            }
            return origImgDescriptor.set.call(this, val);
          },
          get: origImgDescriptor.get,
          configurable: true,
          enumerable: true
        });
      }
    } catch (e) {
      console.warn('[MobileAdapter] Image src patch warning:', e);
    }

    // 4. Patch Audio & Video element src descriptor for /media/, /videos/, and /api/ TTS audio
    try {
      const origAudioDescriptor = Object.getOwnPropertyDescriptor(HTMLAudioElement.prototype, 'src');
      if (origAudioDescriptor && origAudioDescriptor.set) {
        Object.defineProperty(HTMLAudioElement.prototype, 'src', {
          set: function (val) {
            if (typeof val === 'string' && (val.startsWith('/media/') || val.startsWith('/api/'))) {
              val = REMOTE_ORIGIN + val;
            }
            return origAudioDescriptor.set.call(this, val);
          },
          get: origAudioDescriptor.get,
          configurable: true,
          enumerable: true
        });
      }
    } catch (e) {
      console.warn('[MobileAdapter] Audio src patch warning:', e);
    }

    try {
      const origVideoDescriptor = Object.getOwnPropertyDescriptor(HTMLVideoElement.prototype, 'src');
      if (origVideoDescriptor && origVideoDescriptor.set) {
        Object.defineProperty(HTMLVideoElement.prototype, 'src', {
          set: function (val) {
            if (typeof val === 'string' && (val.startsWith('/videos/') || val.startsWith('/media/'))) {
              val = REMOTE_ORIGIN + val;
            }
            return origVideoDescriptor.set.call(this, val);
          },
          get: origVideoDescriptor.get,
          configurable: true,
          enumerable: true
        });
      }
    } catch (e) {
      console.warn('[MobileAdapter] Video src patch warning:', e);
    }
  }

  // 5. Native Hardware Back Button Handler & Status Bar (Capacitor Native only)
  if (isNative) {
    // Configure dark status bar matching Slate-950 theme
    StatusBar.setBackgroundColor({ color: '#020617' }).catch(() => {});
    StatusBar.setStyle({ style: Style.Dark }).catch(() => {});

    // Listen to Android hardware back button
    CapApp.addListener('backButton', ({ canGoBack }) => {
      const pathname = window.location.pathname;
      if (pathname === '/' || pathname === '/hub') {
        CapApp.exitApp();
      } else if (canGoBack || window.history.length > 1) {
        window.history.back();
      } else {
        CapApp.exitApp();
      }
    });

    console.log('[MobileAdapter] Native hardware back button & dark status bar registered.');
  }
}

