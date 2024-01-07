/* global XMLHttpRequest, localStorage */
import * as utf8Codec from 'utf8-codec'
import { base64URL } from '@leichtgewicht/base64-codec'
import {
  AbortError,
  HTTPStatusError,
  TimeoutError,
  URL
} from './common.mjs'
const contentType = 'application/dns-message'

function noop () { }

export function queryDns () {
  throw new Error('Only "doh" endpoints are supported in the browser')
}

export async function loadJSON (url, cache, timeout, abortSignal) {
  const cacheKey = cache ? cache.localStoragePrefix + cache.name : null
  if (cacheKey) {
    try {
      const cached = JSON.parse(localStorage.getItem(cacheKey))
      if (cached && cached.time > cache.maxTime) {
        return cached
      }
    } catch (err) {}
  }
  const { data } = await requestRaw(url, 'GET', null, timeout, abortSignal)
  const result = {
    time: Date.now(),
    data: JSON.parse(utf8Codec.decode(data))
  }
  if (cacheKey) {
    try {
      localStorage.setItem(cacheKey, JSON.stringify(result))
    } catch (err) {
      result.time = null
    }
  }
  return result
}

function requestRaw(url, method, data, timeout, abortSignal) {
  return new Promise(async (resolve, reject) => {
    try {
      const target = new URL(url);
      if (method === 'GET' && data) {
        target.search = '?dns=' + base64URL.decode(data);
      }
      const uri = target.toString();

      const headers = new Headers();
      headers.append('Accept', contentType);
      if (method === 'POST') {
        headers.append('Content-Type', contentType);
      }

      const init = {
        method: method,
        headers: headers,
        body: method === 'POST' ? data : null,
        signal: abortSignal
      };

      const response = await fetch(uri, init);

      if (response.ok) {
        const buf = await response.arrayBuffer();
        resolve({ data: new Uint8Array(buf), response });
      } else {
        reject(new HTTPStatusError(uri, response.status, method));
      }
    } catch (error) {
      reject(error);
    }
  });
}

export function request (url, method, packet, timeout, abortSignal) {
  return requestRaw(url, method, packet, timeout, abortSignal)
}

export function processResolvers (resolvers) {
  return resolvers.filter(resolver => resolver.cors || resolver.endpoint.cors)
}
