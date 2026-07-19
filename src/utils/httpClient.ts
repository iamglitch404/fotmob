import { BASE_URL } from '../constants/endpoints';

/**
 * Generates a random, highly realistic User-Agent string to bypass basic bot protections.
 * Simulates different browsers (Chrome, Firefox, Safari, Edge) across different OS (Windows, Mac, Linux).
 */
const getRandomUserAgent = (): string => {
  const osList = [
    'Windows NT 10.0; Win64; x64',
    'Macintosh; Intel Mac OS X 10_15_7',
    'X11; Linux x86_64',
    'Windows NT 11.0; Win64; x64'
  ];
  const browserList = [
    { name: 'Chrome', ver: Math.floor(Math.random() * 20) + 100 }, 
    { name: 'Firefox', ver: Math.floor(Math.random() * 20) + 110 },
    { name: 'Safari', ver: '16.5' },
    { name: 'Edge', ver: Math.floor(Math.random() * 20) + 110 }
  ];

  const os = osList[Math.floor(Math.random() * osList.length)];
  const browser = browserList[Math.floor(Math.random() * browserList.length)];
  const webkitVer = `537.36`;

  if (browser.name === 'Firefox') {
    return `Mozilla/5.0 (${os}; rv:${browser.ver}.0) Gecko/20100101 Firefox/${browser.ver}.0`;
  } else if (browser.name === 'Safari') {
    return `Mozilla/5.0 (${os}) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/${browser.ver} Safari/605.1.15`;
  } else if (browser.name === 'Edge') {
    return `Mozilla/5.0 (${os}) AppleWebKit/${webkitVer} (KHTML, like Gecko) Chrome/${browser.ver}.0.0.0 Safari/${webkitVer} Edg/${browser.ver}.0.0.0`;
  } else {
    // Default Chrome
    return `Mozilla/5.0 (${os}) AppleWebKit/${webkitVer} (KHTML, like Gecko) Chrome/${browser.ver}.0.0.0 Safari/${webkitVer}`;
  }
};

export class HttpClient {
  /**
   * Performs a GET request to the Fotmob API.
   * @param path The endpoint path.
   * @param params Optional query parameters.
   */
  static async get<T>(path: string, params?: Record<string, string>): Promise<T> {
    const url = new URL(`${BASE_URL}${path}`);
    
    if (params) {
      Object.entries(params).forEach(([key, value]) => {
        if (value) url.searchParams.append(key, value);
      });
    }

    const response = await fetch(url.toString(), {
      headers: {
        'User-Agent': getRandomUserAgent(),
        'Accept': 'application/json, text/plain, */*',
        'Accept-Language': 'en-US,en;q=0.9',
        'Cache-Control': 'no-cache',
      },
    });

    if (!response.ok) {
      throw new Error(`Fotmob API Request Failed: ${response.status} ${response.statusText}`);
    }

    return response.json() as Promise<T>;
  }
}
