export const resolvers = {
  data: [
    {
      name: 'adfilter-adl',
      endpoint: {
        protocol: 'https:',
        host: 'adl.adfilter.net'
      },
      description: 'Hosted in Adelaide, Australia.\nBlocks ads, malware, trackers and more. No persistent logs. DNSSEC. No EDNS Client-Subnet.',
      country: 'Australia',
      location: {
        lat: -33.494,
        long: 143.2104
      },
      filter: true
    },
    {
      name: 'adfilter-per',
      endpoint: {
        protocol: 'https:',
        host: 'per.adfilter.net'
      },
      description: 'Hosted in Perth, Australia.\nBlocks ads, malware, trackers and more. No persistent logs. DNSSEC. No EDNS Client-Subnet.',
      country: 'Australia',
      location: {
        lat: -31.8575,
        long: 115.8913
      },
      filter: true
    },
    {
      name: 'adfilter-syd',
      endpoint: {
        protocol: 'https:',
        host: 'syd.adfilter.net'
      },
      description: 'Hosted in Sydney, Australia.\nBlocks ads, malware, trackers and more. No persistent logs. DNSSEC. No EDNS Client-Subnet.',
      country: 'Australia',
      location: {
        lat: -33.7806,
        long: 151.1181
      },
      filter: true
    },
    {
      name: 'adfree.usableprivacy.net',
      endpoint: {
        protocol: 'https:',
        host: 'adfree.usableprivacy.net'
      },
      description: 'Public updns DoH service with advertising, tracker and malware filters.\nHosted in Europe by @usableprivacy, details see: https://docs.usableprivacy.com',
      country: 'Germany',
      location: {
        lat: 51.2993,
        long: 9.491
      },
      filter: true
    },
    {
      name: 'adguard-dns-doh',
      endpoint: {
        protocol: 'https:',
        host: 'dns.adguard.com',
        ipv4: '94.140.15.15'
      },
      description: 'Remove ads and protect your computer from malware (over DoH)',
      country: 'France',
      location: {
        lat: 48.8582,
        long: 2.3387
      },
      filter: true
    },
    {
      name: 'adguard-dns-family-doh',
      endpoint: {
        protocol: 'https:',
        host: 'dns-family.adguard.com',
        ipv4: '94.140.15.16'
      },
      description: 'Adguard DNS with safesearch and adult content blocking (over DoH)',
      country: 'France',
      location: {
        lat: 48.8582,
        long: 2.3387
      },
      filter: true
    },
    {
      name: 'adguard-dns-unfiltered-doh',
      endpoint: {
        protocol: 'https:',
        host: 'dns-unfiltered.adguard.com',
        ipv4: '94.140.14.140'
      },
      description: 'AdGuard public DNS servers without filters (over DoH)',
      country: 'France',
      location: {
        lat: 48.8582,
        long: 2.3387
      }
    },
    {
      name: 'ahadns-doh-la',
      endpoint: {
        protocol: 'https:',
        host: 'doh.la.ahadns.net',
        cors: true
      },
      description: 'A zero logging DNS with support for DNS-over-HTTPS (DoH) & DNS-over-TLS (DoT). Blocks ads, malware, trackers, viruses, ransomware, telemetry and more. No persistent logs. DNSSEC. Hosted in Los Angeles, USA. By https://ahadns.com/\nServer statistics can be seen at: https://statistics.ahadns.com/?server=la',
      country: 'United States',
      location: {
        lat: 34.0549,
        long: -118.2578
      },
      filter: true,
      cors: true
    },
    {
      name: 'ahadns-doh-nl',
      endpoint: {
        protocol: 'https:',
        host: 'doh.nl.ahadns.net',
        cors: true
      },
      description: 'A zero logging DNS with support for DNS-over-HTTPS (DoH) & DNS-over-TLS (DoT). Blocks ads, malware, trackers, viruses, ransomware, telemetry and more. No persistent logs. DNSSEC. Hosted in Amsterdam, Netherlands. By https://ahadns.com/\nServer statistics can be seen at: https://statistics.ahadns.com/?server=nl',
      country: 'Netherlands',
      location: {
        lat: 52.3824,
        long: 4.8995
      },
      filter: true,
      cors: true
    },
    {
      name: 'alidns-doh',
      endpoint: {
        protocol: 'https:',
        host: 'dns.alidns.com',
        ipv4: '223.5.5.5',
        cors: true
      },
      description: 'A public DNS resolver that supports DoH/DoT in mainland China, provided by Alibaba-Cloud.\nWarning: GFW filtering rules are applied by that resolver.\nHomepage: https://alidns.com/',
      country: 'China',
      location: {
        lat: 34.7725,
        long: 113.7266
      },
      filter: true,
      log: true,
      cors: true
    },
    {
      name: 'ams-ads-doh-nl',
      endpoint: {
        protocol: 'https:',
        host: 'dnsnl-noads.alekberg.net',
        cors: true
      },
      description: 'Resolver in Amsterdam. HTTP3, DoH protocol. Non-logging. Blocks ads, malware and trackers. DNSSEC enabled.',
      country: 'Romania',
      location: {
        lat: 45.9968,
        long: 24.997
      },
      filter: true,
      cors: true
    },
    {
      name: 'ams-doh-nl',
      endpoint: {
        protocol: 'https:',
        host: 'dnsnl.alekberg.net',
        cors: true
      },
      description: 'Resolver in Amsterdam. HTTP3, DoH protocol. Non-logging, non-filtering, DNSSEC.',
      country: 'Romania',
      location: {
        lat: 45.9968,
        long: 24.997
      },
      cors: true
    },
    {
      name: 'bebasdns-unfiltered',
      endpoint: {
        protocol: 'https:',
        host: 'dns.bebasid.com',
        path: '/unfiltered'
      },
      description: "BebasDNS by BebasID. DNSSEC and OpenNIC supported. This variant doesn't block anything",
      country: 'Australia',
      location: {
        lat: -33.494,
        long: 143.2104
      }
    },
    {
      name: 'brahma-world',
      endpoint: {
        protocol: 'https:',
        host: 'dns.brahma.world'
      },
      description: 'DNS-over-HTTPS server. Non Logging, filters ads, trackers and malware. DNSSEC ready, QNAME Minimization, No EDNS Client-Subnet.\nHosted in Nuremberg, Germany. (https://dns.brahma.world)',
      country: 'Germany',
      location: {
        lat: 51.2993,
        long: 9.491
      },
      filter: true
    },
    {
      name: 'circl-doh',
      endpoint: {
        protocol: 'https:',
        host: 'dns.circl.lu'
      },
      description: 'DoH server operated by CIRCL, Computer Incident Response Center Luxembourg.\nHosted in Bettembourg, Luxembourg.',
      country: 'Luxembourg',
      location: {
        lat: 49.7498,
        long: 6.1661
      }
    },
    {
      name: 'cisco-doh',
      endpoint: {
        protocol: 'https:',
        host: 'doh.opendns.com',
        ipv4: '146.112.41.2'
      },
      description: 'Remove your DNS blind spot (DoH protocol)\nWarning: modifies your queries to include a copy of your network\naddress when forwarding them to a selection of companies and organizations.',
      country: 'United States',
      location: {
        lat: 37.751,
        long: -97.822
      },
      filter: true,
      log: true
    },
    {
      name: 'cloudflare',
      endpoint: {
        protocol: 'https:',
        host: 'dns.cloudflare.com',
        ipv4: '1.0.0.1',
        cors: true
      },
      description: 'Cloudflare DNS (anycast) - aka 1.1.1.1 / 1.0.0.1',
      country: 'Australia',
      location: {
        lat: -33.494,
        long: 143.2104
      },
      cors: true
    },
    {
      name: 'cloudflare-family',
      endpoint: {
        protocol: 'https:',
        host: 'family.cloudflare-dns.com',
        ipv4: '1.0.0.3',
        cors: true
      },
      description: 'Cloudflare DNS (anycast) with malware protection and parental control - aka 1.1.1.3 / 1.0.0.3',
      country: 'Australia',
      location: {
        lat: -33.494,
        long: 143.2104
      },
      filter: true,
      cors: true
    },
    {
      name: 'cloudflare-ipv6',
      endpoint: {
        protocol: 'https:',
        host: '1dot1dot1dot1.cloudflare-dns.com',
        cors: true
      },
      description: 'Cloudflare DNS over IPv6 (anycast)',
      country: 'United States',
      location: {
        lat: 37.751,
        long: -97.822
      },
      cors: true
    },
    {
      name: 'cloudflare-security',
      endpoint: {
        protocol: 'https:',
        host: 'security.cloudflare-dns.com',
        ipv4: '1.0.0.2',
        cors: true
      },
      description: 'Cloudflare DNS (anycast) with malware blocking - aka 1.1.1.2 / 1.0.0.2',
      country: 'Australia',
      location: {
        lat: -33.494,
        long: 143.2104
      },
      filter: true,
      cors: true
    },
    {
      name: 'controld-block-malware',
      endpoint: {
        protocol: 'https:',
        host: 'freedns.controld.com',
        path: '/p1'
      },
      description: 'ControlD Free DNS. Take CONTROL of your Internet. Block unwanted content, bypass geo-restrictions and be more productive. DoH protocol and No logging. - https://controld.com/free-dns\nThis DNS blocks Malware domains.',
      country: 'Canada',
      location: {
        lat: 43.6319,
        long: -79.3716
      },
      filter: true
    },
    {
      name: 'controld-block-malware-ad',
      endpoint: {
        protocol: 'https:',
        host: 'freedns.controld.com',
        path: '/p2'
      },
      description: 'ControlD Free DNS. Take CONTROL of your Internet. Block unwanted content, bypass geo-restrictions and be more productive. DoH protocol and No logging. - https://controld.com/free-dns\nThis DNS blocks Malware, Ads & Tracking domains.',
      country: 'Canada',
      location: {
        lat: 43.6319,
        long: -79.3716
      },
      filter: true
    },
    {
      name: 'controld-block-malware-ad-social',
      endpoint: {
        protocol: 'https:',
        host: 'freedns.controld.com',
        path: '/p3'
      },
      description: 'ControlD Free DNS. Take CONTROL of your Internet. Block unwanted content, bypass geo-restrictions and be more productive. DoH protocol and No logging. - https://controld.com/free-dns\nThis DNS blocks Malware, Ads & Tracking and Social Networks domains.',
      country: 'Canada',
      location: {
        lat: 43.6319,
        long: -79.3716
      },
      filter: true
    },
    {
      name: 'controld-family-friendly',
      endpoint: {
        protocol: 'https:',
        host: 'freedns.controld.com',
        path: '/family'
      },
      description: 'ControlD Free DNS. Take CONTROL of your Internet. Block unwanted content, bypass geo-restrictions and be more productive. DoH protocol and No logging. - https://controld.com/free-dns\nThis DNS blocks Malware, Ads & Tracking, Adult Content and Drugs domains.',
      country: 'Canada',
      location: {
        lat: 43.6319,
        long: -79.3716
      },
      filter: true
    },
    {
      name: 'controld-uncensored',
      endpoint: {
        protocol: 'https:',
        host: 'freedns.controld.com',
        path: '/uncensored'
      },
      description: 'ControlD Free DNS. Take CONTROL of your Internet. Block unwanted content, bypass geo-restrictions and be more productive. DoH protocol and No logging. - https://controld.com/free-dns\nThis DNS unblocks censored domains from various countries.',
      country: 'Canada',
      location: {
        lat: 43.6319,
        long: -79.3716
      }
    },
    {
      name: 'controld-unfiltered',
      endpoint: {
        protocol: 'https:',
        host: 'freedns.controld.com',
        path: '/p0'
      },
      description: 'ControlD Free DNS. Take CONTROL of your Internet. Block unwanted content, bypass geo-restrictions and be more productive. DoH protocol and No logging. - https://controld.com/free-dns\nThis is a Unfiltered DNS, no DNS record blocking or manipulation here, if you want to block Malware, Ads & Tracking or Social Network domains, use the other ControlD DNS configs.',
      country: 'Canada',
      location: {
        lat: 43.6319,
        long: -79.3716
      }
    },
    {
      name: 'dns.digitale-gesellschaft.ch',
      endpoint: {
        protocol: 'https:',
        host: 'dns.digitale-gesellschaft.ch'
      },
      description: 'Public DoH resolver operated by the Digital Society (https://www.digitale-gesellschaft.ch).\nHosted in Zurich, Switzerland.\nNon-logging, non-filtering, supports DNSSEC.',
      country: 'Switzerland',
      location: {
        lat: 47.1449,
        long: 8.1551
      }
    },
    {
      name: 'dns.digitalsize.net',
      endpoint: {
        protocol: 'https:',
        host: 'dns.digitalsize.net'
      },
      description: 'A public, non-tracking, non-filtering DNS resolver with DNSSEC enabled and hosted in Germany (https://dns.digitalsize.net)',
      country: 'Germany',
      location: {
        lat: 51.2993,
        long: 9.491
      }
    },
    {
      name: 'dns.ryan-palmer',
      endpoint: {
        protocol: 'https:',
        host: 'dns1.ryan-palmer.com'
      },
      description: 'Non-logging, non-filtering, DNSSEC DoH Server. Hosted in the UK.',
      country: 'United Kingdom',
      location: {
        lat: 51.5164,
        long: -0.093
      }
    },
    {
      name: 'dns.sb',
      endpoint: {
        protocol: 'https:',
        host: '45.11.45.11',
        ipv4: '45.11.45.11',
        cors: true
      },
      description: 'DoH server runned by xTom.com. No logs, no filtering, supports DNSSEC.\nHomepage: https://dns.sb',
      country: 'Netherlands',
      location: {
        lat: 52.3824,
        long: 4.8995
      },
      cors: true
    },
    {
      name: 'dns.therifleman.name',
      endpoint: {
        protocol: 'https:',
        host: 'dns.therifleman.name'
      },
      description: 'DNS-over-HTTPS DNS forwarder from Mumbai, India 🇮🇳.\nBlocks Web, Android trackers and Ads.\nDoes not log client IP addresses, but logs queries for 24 hours for debugging\nand delegates DNS resolution to the default Linode DNS server.\nReport issues, and send suggestions to joker349 on protonmail.\nAlso supports:\n* DoT @ dns.therifleman.name\n* plain DNS @ 172.104.206.174',
      country: 'United States',
      location: {
        lat: 37.751,
        long: -97.822
      },
      filter: true
    },
    {
      name: 'dns0',
      endpoint: {
        protocol: 'https:',
        host: 'dns0.eu'
      },
      description: 'A free, sovereign and GDPR-compliant recursive DNS resolver with a\nstrong focus on security to protect the citizens and organizations of\nthe European Union.\nBlocks new domains, dynamic DNS, parked domains, uncommon TLDs, etc.\nhttps://www.dns0.eu/',
      filter: true
    },
    {
      name: 'dns0-kids',
      endpoint: {
        protocol: 'https:',
        host: 'kids.dns0.eu'
      },
      description: 'A free, sovereign and GDPR-compliant recursive DNS resolver with a\nstrong focus on security to protect the citizens and organizations of\nthe European Union.\nThis version blocks content not suitable for children.\nAlso blocks new domains, dynamic DNS, parked domains, uncommon TLDs, etc.\nhttps://www.dns0.eu/',
      filter: true
    },
    {
      name: 'dns0-unfiltered',
      endpoint: {
        protocol: 'https:',
        host: 'open.dns0.eu'
      },
      description: 'The unfiltered version of dns0.eu.\nhttps://open.dns0.eu/'
    },
    {
      name: 'dnsforfamily-doh',
      endpoint: {
        protocol: 'https:',
        host: 'dns-doh.dnsforfamily.com'
      },
      description: '(DoH Protocol) (Now supports DNSSEC). Block adult websites, gambling websites, malwares and advertisements.\nIt also enforces safe search in: Google, YouTube, Bing, DuckDuckGo and Yandex.\nSocial websites like Facebook and Instagram are not blocked. No DNS queries are logged.\nAs of 26-May-2022 5.9 million websites are blocked and new websites are added to blacklist daily.\nCompletely free, no ads or any commercial motive. Operating for 4 years now.\nProvided by: https://dnsforfamily.com',
      country: 'Germany',
      location: {
        lat: 51.2993,
        long: 9.491
      },
      filter: true
    },
    {
      name: 'dnsforfamily-doh-no-safe-search',
      endpoint: {
        protocol: 'https:',
        host: 'dns-doh-no-safe-search.dnsforfamily.com'
      },
      description: '(DoH Protocol) (Now supports DNSSEC) Block adult websites, gambling websites, malwares and advertisements.\nUnlike other dnsforfamily servers, this one does not enforces safe search. So Google, YouTube, Bing, DuckDuckGo and Yandex are completely accessible without any restriction.\nSocial websites like Facebook and Instagram are not blocked. No DNS queries are logged.\nAs of 26-May-2022 5.9 million websites are blocked and new websites are added to blacklist daily.\nCompletely free, no ads or any commercial motive. Operating for 4 years now.\nWarning: This server is incompatible with anonymization.\nProvided by: https://dnsforfamily.com',
      country: 'Germany',
      location: {
        lat: 51.2993,
        long: 9.491
      },
      filter: true
    },
    {
      name: 'dnsforge.de',
      endpoint: {
        protocol: 'https:',
        host: 'dnsforge.de',
        cors: true
      },
      description: 'Public DoH resolver running with Pihole for Adblocking (https://dnsforge.de).\nNon-logging, AD-filtering, supports DNSSEC. Hosted in Germany.',
      country: 'Germany',
      location: {
        lat: 52.2998,
        long: 9.447
      },
      filter: true,
      cors: true
    },
    {
      name: 'dnslow.me',
      endpoint: {
        protocol: 'https:',
        host: 'dnslow.me'
      },
      description: 'dnslow.me is an open source project, also your advertisement and threat blocking, privacy-first, encrypted DNS.\nAll DNS requests will be protected with threat-intelligence feeds and randomly distributed to some other DNS resolvers.\nMore info on the [homepage](https://dnslow.me) and [GitHub](https://github.com/PeterDaveHello/dnslow.me)',
      filter: true,
      log: true
    },
    {
      name: 'dnspod',
      endpoint: {
        protocol: 'https:',
        host: 'doh.pub',
        ipv4: '1.12.12.12',
        cors: true
      },
      description: 'A public DNS resolver that supports DoH/DoT in mainland China, provided by dnspod/Tencent-cloud.\nWarning: GFW filtering rules are applied by that resolver.\nHomepage: https://dnspod.cn/',
      country: 'China',
      location: {
        lat: 34.7725,
        long: 113.7266
      },
      filter: true,
      log: true,
      cors: true
    },
    {
      name: 'doh-cleanbrowsing-adult',
      endpoint: {
        protocol: 'https:',
        host: 'doh.cleanbrowsing.org',
        path: '/doh/adult-filter/',
        cors: true
      },
      description: 'Blocks access to all adult, pornographic and explicit sites. It does\nnot block proxy or VPNs, nor mixed-content sites. Sites like Reddit\nare allowed. Google and Bing are set to the Safe Mode.\nBy https://cleanbrowsing.org/',
      filter: true,
      cors: true
    },
    {
      name: 'doh-cleanbrowsing-family',
      endpoint: {
        protocol: 'https:',
        host: 'doh.cleanbrowsing.org',
        path: '/doh/family-filter/',
        cors: true
      },
      description: 'Blocks access to all adult, pornographic and explicit sites. It also\nblocks proxy and VPN domains that are used to bypass the filters.\nMixed content sites (like Reddit) are also blocked. Google, Bing and\nYoutube are set to the Safe Mode.\nBy https://cleanbrowsing.org/',
      filter: true,
      cors: true
    },
    {
      name: 'doh-cleanbrowsing-security',
      endpoint: {
        protocol: 'https:',
        host: 'doh.cleanbrowsing.org',
        path: '/doh/security-filter/',
        cors: true
      },
      description: 'Block access to phishing, malware and malicious domains. It does not block adult content.\nBy https://cleanbrowsing.org/',
      filter: true,
      cors: true
    },
    {
      name: 'doh-crypto-sx',
      endpoint: {
        protocol: 'https:',
        host: 'doh.crypto.sx',
        cors: true
      },
      description: 'DNS-over-HTTPS server. Anycast, no logs, no censorship, DNSSEC.\nBackend hosted by Scaleway, globally cached via Cloudflare.\nMaintained by Frank Denis.',
      country: 'United States',
      location: {
        lat: 37.751,
        long: -97.822
      },
      cors: true
    },
    {
      name: 'doh-crypto-sx-ipv6',
      endpoint: {
        protocol: 'https:',
        host: 'doh-ipv6.crypto.sx',
        cors: true
      },
      description: 'DNS-over-HTTPS server accessible over IPv6. Anycast, no logs, no censorship, DNSSEC.\nBackend hosted by Scaleway, globally cached via Cloudflare.\nMaintained by Frank Denis.',
      country: 'United States',
      location: {
        lat: 37.751,
        long: -97.822
      },
      cors: true
    },
    {
      name: 'doh-ibksturm',
      endpoint: {
        protocol: 'https:',
        host: 'ibksturm.synology.me'
      },
      description: 'DoH & DoT Server, No Logging, No Filters, DNSSEC\nRunning privately by ibksturm in Thurgau, Switzerland',
      country: 'Switzerland',
      location: {
        lat: 47.4091,
        long: 9.0362
      }
    },
    {
      name: 'doh.ffmuc.net',
      endpoint: {
        protocol: 'https:',
        host: 'doh.ffmuc.net',
        cors: true
      },
      description: 'An open (non-logging, non-filtering, non-censoring) DoH resolver operated by Freifunk Munich with nodes in DE.\nhttps://ffmuc.net/',
      country: 'Germany',
      location: {
        lat: 51.2993,
        long: 9.491
      },
      cors: true
    },
    {
      name: 'doh.tiar.app-doh',
      endpoint: {
        protocol: 'https:',
        host: 'doh.tiar.app',
        cors: true
      },
      description: 'Non-Logging DNS-over-HTTPS (HTTP/2 & HTTP/3) server located in Singapore.\nFilters out ads, trackers and malware, supports DNSSEC, provided by id-gmail.',
      country: 'Singapore',
      location: {
        lat: 1.2929,
        long: 103.8547
      },
      filter: true,
      cors: true
    },
    {
      name: 'doh.tiarap.org',
      endpoint: {
        protocol: 'https:',
        host: 'doh.tiarap.org',
        cors: true
      },
      description: 'Non-Logging DNS-over-HTTPS server, cached via Cloudflare.\nFilters out ads, trackers and malware, NO ECS, supports DNSSEC.',
      country: 'United States',
      location: {
        lat: 37.751,
        long: -97.822
      },
      filter: true,
      cors: true
    },
    {
      name: 'easymosdns-doh',
      endpoint: {
        protocol: 'https:',
        host: 'doh.apad.pro'
      },
      description: "DoH forwarded runned personally, as a example server of the project [EasyMosdns](https://github.com/pmkol/easymosdns).\nNo filtering or logs (by the forwarder itself).\nNo DNSSEC support due to one of the upstream servers (AliDNS) that doesn't support it.\nUpstreams are AliDNS and DNSPod for resolving domains in mainland China, and GoogleDNS is for domains.\nCloudflare CDN is used as a front-end for non-China areas, and Mobile CDN is used in China.\nHomepage: https://apad.pro/dns-doh/",
      log: true
    },
    {
      name: 'google',
      endpoint: {
        protocol: 'https:',
        host: 'dns.google',
        ipv4: '8.8.8.8',
        cors: true
      },
      description: 'Google DNS (anycast)',
      country: 'United States',
      location: {
        lat: 37.751,
        long: -97.822
      },
      log: true,
      cors: true
    },
    {
      name: 'he',
      endpoint: {
        protocol: 'https:',
        host: 'ordns.he.net'
      },
      description: 'Hurricane Electric DoH server (anycast)\nUnknown logging policy.',
      country: 'United States',
      location: {
        lat: 37.751,
        long: -97.822
      },
      log: true
    },
    {
      name: 'iij',
      endpoint: {
        protocol: 'https:',
        host: 'public.dns.iij.jp'
      },
      description: 'DoH server operated by Internet Initiative Japan in Tokyo. Blocks child pornography.\nhttps://www.iij.ad.jp/',
      country: 'Japan',
      location: {
        lat: 35.69,
        long: 139.69
      },
      filter: true,
      log: true
    },
    {
      name: 'jp.tiar.app-doh',
      endpoint: {
        protocol: 'https:',
        host: 'jp.tiar.app',
        cors: true
      },
      description: 'Non-Logging, Non-Filtering DNS-over-HTTPS server in Japan.\nNo ECS, Support DNSSEC',
      country: 'Japan',
      location: {
        lat: 35.6882,
        long: 139.7532
      },
      cors: true
    },
    {
      name: 'jp.tiarap.org',
      endpoint: {
        protocol: 'https:',
        host: 'jp.tiarap.org',
        cors: true
      },
      description: 'DNS-over-HTTPS Server. Non-Logging, Non-Filtering, No ECS, Support DNSSEC.\nCached via Cloudflare.',
      cors: true
    },
    {
      name: 'libredns',
      endpoint: {
        protocol: 'https:',
        host: 'doh.libredns.gr'
      },
      description: 'DoH server in Germany. No logging, but no DNS padding and no DNSSEC support.\nhttps://libredns.gr/',
      country: 'Germany',
      location: {
        lat: 51.2993,
        long: 9.491
      }
    },
    {
      name: 'meganerd-doh-ipv4',
      endpoint: {
        protocol: 'https:',
        host: 'snoke.meganerd.nl',
        cors: true
      },
      description: 'DoH server by MegaNerd.nl (IPv4) - https://meganerd.nl/encrypted-dns-server\nHosted in Amsterdam (AMS1), The Netherlands.\nNon-logging, non-filtering, supports DNSSEC.',
      country: 'Netherlands',
      location: {
        lat: 52.3891,
        long: 4.6563
      },
      cors: true
    },
    {
      name: 'nextdns',
      endpoint: {
        protocol: 'https:',
        host: 'anycast.dns.nextdns.io'
      },
      description: 'NextDNS is a cloud-based private DNS service that gives you full control\nover what is allowed and what is blocked on the Internet.\nDNSSEC, Anycast, Non-logging, NoFilters\nhttps://www.nextdns.io/',
      country: 'United States',
      location: {
        lat: 37.751,
        long: -97.822
      }
    },
    {
      name: 'nextdns-ultralow',
      endpoint: {
        protocol: 'https:',
        host: 'dns.nextdns.io',
        path: '/dnscrypt-proxy'
      },
      description: 'NextDNS is a cloud-based private DNS service that gives you full control\nover what is allowed and what is blocked on the Internet.\nhttps://www.nextdns.io/\nTo select the server location, the "-ultralow" variant relies on bootstrap servers\ninstead of anycast.'
    },
    {
      name: 'njalla-doh',
      endpoint: {
        protocol: 'https:',
        host: 'dns.njal.la'
      },
      description: 'Non-logging DoH server in Sweden operated by Njalla.\nhttps://dns.njal.la/',
      country: 'Sweden',
      location: {
        lat: 59.3247,
        long: 18.056
      }
    },
    {
      name: 'odoh-cloudflare',
      endpoint: {
        protocol: 'https:',
        host: 'odoh.cloudflare-dns.com',
        cors: true
      },
      description: 'Cloudflare ODoH server.\nhttps://cloudflare.com',
      cors: true
    },
    {
      name: 'odoh-crypto-sx',
      endpoint: {
        protocol: 'https:',
        host: 'odoh.crypto.sx',
        cors: true
      },
      description: 'ODoH target server. Anycast, no logs.\nBackend hosted by Scaleway. Maintained by Frank Denis.',
      cors: true
    },
    {
      name: 'odoh-id-gmail',
      endpoint: {
        protocol: 'https:',
        host: 'doh.tiar.app',
        path: '/odoh',
        cors: true
      },
      description: 'ODoH target server. Based in Singapore, no logs.\nFilter ads, trackers and malware.',
      filter: true,
      cors: true
    },
    {
      name: 'odoh-jp.tiar.app',
      endpoint: {
        protocol: 'https:',
        host: 'jp.tiar.app',
        path: '/odoh',
        cors: true
      },
      description: 'ODoH target server. no logs.',
      cors: true
    },
    {
      name: 'odoh-jp.tiarap.org',
      endpoint: {
        protocol: 'https:',
        host: 'jp.tiarap.org',
        path: '/odoh',
        cors: true
      },
      description: 'ODoH target server via Cloudflare, no logs.',
      cors: true
    },
    {
      name: 'odoh-koki-ams',
      endpoint: {
        protocol: 'https:',
        host: 'odoh-target.alekberg.net',
        cors: true
      },
      description: 'Oblivious DoH target server in The Netherlands. No logs, No filter, DNSSEC.',
      cors: true
    },
    {
      name: 'odoh-koki-noads-ams',
      endpoint: {
        protocol: 'https:',
        host: 'odoh-target-noads.alekberg.net',
        cors: true
      },
      description: 'Oblivious DoH target server in The Netherlands. No logs, filter ads and malware, DNSSEC.',
      filter: true,
      cors: true
    },
    {
      name: 'odoh-koki-noads-se',
      endpoint: {
        protocol: 'https:',
        host: 'odoh-target-noads-se.alekberg.net',
        cors: true
      },
      description: 'Oblivious DoH target server in Sweden. No logs, filter ads and malware, DNSSEC.',
      filter: true,
      cors: true
    },
    {
      name: 'odoh-koki-se',
      endpoint: {
        protocol: 'https:',
        host: 'odoh-target-se.alekberg.net',
        cors: true
      },
      description: 'Oblivious DoH target server in Sweden. No logs, No filter, DNSSEC.',
      cors: true
    },
    {
      name: 'odoh-tiarap.org',
      endpoint: {
        protocol: 'https:',
        host: 'doh.tiarap.org',
        path: '/odoh',
        cors: true
      },
      description: 'ODoH target server via Cloudflare, no logs.\nFilter ads, trackers and malware.',
      filter: true,
      cors: true
    },
    {
      name: 'plan9dns-fl-doh',
      endpoint: {
        protocol: 'https:',
        host: 'pluton.plan9-dns.com'
      },
      description: 'Miami Florida, US No-logs, no-filters, DNSSEC -info https://jlongua.github.io/plan9-dns',
      country: 'United States',
      location: {
        lat: 25.8119,
        long: -80.2318
      }
    },
    {
      name: 'plan9dns-mx-doh',
      endpoint: {
        protocol: 'https:',
        host: 'helios.plan9-dns.com'
      },
      description: 'Mexico City, Mexico No-logs, no-filters, DNSSEC -info https://jlongua.github.io/plan9-dns',
      country: 'United States',
      location: {
        lat: 39.9668,
        long: -75.1512
      }
    },
    {
      name: 'plan9dns-nj-doh',
      endpoint: {
        protocol: 'https:',
        host: 'kronos.plan9-dns.com'
      },
      description: 'Piscataway New Jersey, US No-logs, no-filters, DNSSEC -info https://jlongua.github.io/plan9-dns',
      country: 'United States',
      location: {
        lat: 40.5511,
        long: -74.4606
      }
    },
    {
      name: 'puredns-doh',
      endpoint: {
        protocol: 'https:',
        host: 'puredns.org'
      },
      description: 'DNSSEC, No-log, No-filter by https://upset.dev\nServers in Singapore and Indonesia\nHomepage: https://puredns.org',
      country: 'Singapore',
      location: {
        lat: 1.2929,
        long: 103.8547
      }
    },
    {
      name: 'puredns-family-doh',
      endpoint: {
        protocol: 'https:',
        host: 'family.puredns.org'
      },
      description: 'DNSSEC, No-log, with malware, adware, gambling, fakenews, and NSFW blocking by https://upset.dev\nServers in Singapore and Indonesia\nHomepage: https://puredns.org/family',
      country: 'United States',
      location: {
        lat: 37.751,
        long: -97.822
      },
      filter: true
    },
    {
      name: 'qihoo360-doh',
      endpoint: {
        protocol: 'https:',
        host: 'doh.360.cn'
      },
      description: 'DoH server runned by Qihoo 360, has logs, supports DNSSEC. GFW filtering rules are applied.\nHomepage: https://sdns.360.net/',
      filter: true,
      log: true
    },
    {
      name: 'quad101',
      endpoint: {
        protocol: 'https:',
        host: 'dns.twnic.tw',
        cors: true
      },
      description: 'DNSSEC-aware public resolver by the Taiwan Network Information Center (TWNIC)\nhttps://101.101.101.101/index_en.html',
      cors: true
    },
    {
      name: 'quad9-doh-ip4-port443-filter-ecs-pri',
      endpoint: {
        protocol: 'https:',
        host: 'dns11.quad9.net',
        ipv4: '149.112.112.11'
      },
      description: 'Quad9 (anycast) dnssec/no-log/filter/ecs 9.9.9.11 - 149.112.112.11',
      country: 'United States',
      location: {
        lat: 37.751,
        long: -97.822
      },
      filter: true
    },
    {
      name: 'quad9-doh-ip4-port443-filter-pri',
      endpoint: {
        protocol: 'https:',
        host: 'dns.quad9.net',
        ipv4: '149.112.112.112'
      },
      description: 'Quad9 (anycast) dnssec/no-log/filter 9.9.9.9 - 149.112.112.9 - 149.112.112.112',
      country: 'United States',
      location: {
        lat: 37.751,
        long: -97.822
      },
      filter: true
    },
    {
      name: 'quad9-doh-ip4-port443-nofilter-ecs-pri',
      endpoint: {
        protocol: 'https:',
        host: 'dns12.quad9.net',
        ipv4: '9.9.9.12'
      },
      description: 'Quad9 (anycast) no-dnssec/no-log/no-filter/ecs 9.9.9.12 - 149.112.112.12',
      country: 'United States',
      location: {
        lat: 37.751,
        long: -97.822
      }
    },
    {
      name: 'quad9-doh-ip4-port443-nofilter-pri',
      endpoint: {
        protocol: 'https:',
        host: 'dns10.quad9.net',
        ipv4: '149.112.112.10'
      },
      description: 'Quad9 (anycast) no-dnssec/no-log/no-filter 9.9.9.10 - 149.112.112.10',
      country: 'United States',
      location: {
        lat: 37.751,
        long: -97.822
      }
    },
    {
      name: 'quad9-doh-ip4-port5053-filter-pri',
      endpoint: {
        protocol: 'https:',
        host: 'dns9.quad9.net',
        ipv4: '149.112.112.9'
      },
      description: 'Quad9 (anycast) dnssec/no-log/filter 9.9.9.9 - 149.112.112.9 - 149.112.112.112',
      country: 'United States',
      location: {
        lat: 37.751,
        long: -97.822
      },
      filter: true
    },
    {
      name: 'rethinkdns-doh',
      endpoint: {
        protocol: 'https:',
        host: 'sky.rethinkdns.com',
        cors: true
      },
      description: 'DNSSEC, No-log, No-filter\nRethinkDNS, a stub (sky.rethinkdns.com hosted on Cloudflare) and recursive (max.rethinkdns.com hosted on fly.io) resolver\nThe stub server strips identification parameters from the request and acts as a proxy to another recursive resolver.',
      cors: true
    },
    {
      name: 'safesurfer-doh',
      endpoint: {
        protocol: 'https:',
        host: 'doh.safesurfer.io'
      },
      description: 'Family safety focused blocklist for over 2 million adult sites, as well as phishing and malware and more.\nFree to use, paid for customizing blocking for more categories+sites and viewing usage at my.safesurfer.io. Logs taken for viewing\nusage, data never sold - https://safesurfer.io',
      filter: true,
      log: true
    },
    {
      name: 'sth-ads-doh-se',
      endpoint: {
        protocol: 'https:',
        host: 'dnsse-noads.alekberg.net',
        cors: true
      },
      description: 'Resolver in Stockholm, Sweden. DoH server. Non-logging, remove ads and malware, DNSSEC.',
      country: 'Bulgaria',
      location: {
        lat: 42.696,
        long: 23.332
      },
      filter: true,
      cors: true
    },
    {
      name: 'sth-doh-se',
      endpoint: {
        protocol: 'https:',
        host: 'dnsse.alekberg.net',
        cors: true
      },
      description: 'Resolver in Stockholm, Sweden. DoH server. Non-logging, non-filtering, DNSSEC.',
      country: 'Bulgaria',
      location: {
        lat: 42.696,
        long: 23.332
      },
      cors: true
    },
    {
      name: 'switch',
      endpoint: {
        protocol: 'https:',
        host: 'dns.switch.ch'
      },
      description: 'Public DoH service provided by SWITCH in Switzerland\nhttps://www.switch.ch\nProvides protection against malware, but does not block ads.',
      filter: true
    },
    {
      name: 'uncensoreddns-dk-ipv4',
      endpoint: {
        protocol: 'https:',
        host: 'unicast.uncensoreddns.org'
      },
      description: 'Also known as censurfridns.\nDoH, no logs, no filter, DNSSEC, unicast hosted in Denmark - https://blog.uncensoreddns.org',
      country: 'Denmark',
      location: {
        lat: 55.7123,
        long: 12.0564
      }
    },
    {
      name: 'uncensoreddns-ipv4',
      endpoint: {
        protocol: 'https:',
        host: 'anycast.uncensoreddns.org'
      },
      description: 'Also known as censurfridns.\nDoH, no logs, no filter, DNSSEC, anycast - https://blog.uncensoreddns.org',
      country: 'Denmark',
      location: {
        lat: 55.7123,
        long: 12.0564
      }
    },
    {
      name: 'wikimedia',
      endpoint: {
        protocol: 'https:',
        host: 'wikimedia-dns.org'
      },
      description: 'Wikimedia DNS (formerly called Wikidough), is a caching, recursive,\npublic resolver service that is run and managed by the Site\nReliability Engineering (Traffic) team at the Foundation.\nWikimedia DNS helps prevent some surveillance and censorship of our\nwikis and other websites by securing DNS lookups.'
    }
  ],
  time: 1699287681062
}
