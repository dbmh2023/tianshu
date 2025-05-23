// 变量 ID , UUIID, TXT, PROXYIP, SOCKS5
// 我的优选TXT可以处理多个格式 
// https://...txt,https://...txt

import { connect } from 'cloudflare:sockets';
let 哎呀呀这是我的ID啊 = "";
let 哎呀呀这是我的VL密钥 = "8b508ee2-a0aa-4234-820b-065369cd9fc3";
let 私钥开关 = false;
let 咦这是我的私钥哎 = "";
let 隐藏订阅 = false;
let 嘲讽语 = "哎呀你找到了我，但是我就是不给你看，气不气，嘿嘿嘿";
let 我的优选 = [];
let 我的优选TXT = [];
let 启用反代功能 = true;
let 反代IP = 'ts.hpc.tw';
let 启用SOCKS5反代 = false;
let 启用SOCKS5全局反代 = false;
let 我的SOCKS5账号 = '';
let 我的节点名字 = '天书8.0';
let 伪装网页 = 'www.baidu.com';

export default {
  async fetch(访问请求, env) {
    
    const 读取我的请求标头 = 访问请求.headers.get('Upgrade');
    const url = new URL(访问请求.url);
    
    哎呀呀这是我的ID啊 = env.ID || 哎呀呀这是我的ID啊;
    哎呀呀这是我的VL密钥 = env.UUID || 哎呀呀这是我的VL密钥;
    我的优选TXT = env.TXT ? env.TXT.split(',') : 我的优选TXT;
    反代IP = env.PROXYIP || 反代IP;
    我的SOCKS5账号 = env.SOCKS5 || 我的SOCKS5账号;
    启用SOCKS5反代 = (env.SOCKS5OPEN === 'true') ? true : (env.SOCKS5OPEN === 'false' ? false : 启用SOCKS5反代);
    启用SOCKS5全局反代 = (env.SOCKS5GLOBAL === 'true') ? true : (env.SOCKS5GLOBAL === 'false' ? false : 启用SOCKS5全局反代);
    伪装网页 = env.URL || 伪装网页;
    
    if (!读取我的请求标头 || 读取我的请求标头 !== 'websocket') {
      
      if (我的优选TXT && 我的优选TXT.length > 0) {
        const 优选节点集合 = [];
        
        for (let txtURL of 我的优选TXT) {
          try {
            const 读取优选文本 = await fetch(txtURL);
            const 转换优选文本 = await 读取优选文本.text();
            const 优选节点 = 转换优选文本.split('\n').map(line => line.trim()).filter(line => line);
            优选节点集合.push(...优选节点);
          } catch (error) {
            console.error(`读取优选文本文件失败: ${txtURL}`, error);
          }
        }
        
        我的优选 = 优选节点集合;
      }

      switch (url.pathname) {
        case `/${哎呀呀这是我的ID啊}`: {
          const 订阅页面 = 给我订阅页面(哎呀呀这是我的ID啊, 访问请求.headers.get('Host'));
          return new Response(`${订阅页面}`, {
            status: 200,
            headers: { "Content-Type": "text/plain;charset=utf-8" }
          });
        }
        case `/${哎呀呀这是我的ID啊}/${转码}${转码2}`: {
          if (隐藏订阅) {
            return new Response (`${嘲讽语}`, {
              status: 200,
              headers: { "Content-Type": "text/plain;charset=utf-8" }
            });
          } else {
            const 通用配置文件 = 给我通用配置文件(访问请求.headers.get('Host'));
            return new Response(`${通用配置文件}`, {
              status: 200,
              headers: { "Content-Type": "text/plain;charset=utf-8" }
            });
          }
        }
        case `/${哎呀呀这是我的ID啊}/${小猫}${咪}`: {
          if (隐藏订阅) {
            return new Response (`${嘲讽语}`, {
              status: 200,
              headers: { "Content-Type": "text/plain;charset=utf-8" }
            });
          } else {
            const 小猫咪配置文件 = 给我小猫咪配置文件(访问请求.headers.get('Host'));
            return new Response(`${小猫咪配置文件}`, {
              status: 200,
              headers: { "Content-Type": "text/plain;charset=utf-8" }
            });
          }
        }
        default:
          url.hostname = 伪装网页;
          url.protocol = 'https:';
          访问请求 = new Request(url, 访问请求);
          return fetch(访问请求);
      }
    } else if (读取我的请求标头 === 'websocket') {
      // 处理 WebSocket 请求
      if (私钥开关) {
        const 验证我的私钥 = 访问请求.headers.get('my-key');
        if (验证我的私钥 === 咦这是我的私钥哎) {
          return await 升级WS请求(访问请求);
        }
      } else {
        return await 升级WS请求(访问请求);
      }
    }
  }
};

async function 升级WS请求(访问请求) {
  const 创建WS接口 = new WebSocketPair();
  const [客户端, WS接口] = Object.values(创建WS接口);
  WS接口.accept();
  const 读取我的加密访问内容数据头 = 访问请求.headers.get('sec-websocket-protocol');
  const 解密数据 = 使用64位加解密(读取我的加密访问内容数据头);
  const { TCP接口, 写入初始数据 } = await 解析VL标头(解密数据);
  建立传输管道(WS接口, TCP接口, 写入初始数据);
  return new Response(null, { status: 101, webSocket: 客户端 });
}
function 使用64位加解密(还原混淆字符) {
  还原混淆字符 = 还原混淆字符.replace(/-/g, '+').replace(/_/g, '/');
  const 解密数据 = atob(还原混淆字符);
  const 解密_你_个_丁咚_咙_咚呛 = Uint8Array.from(解密数据, (c) => c.charCodeAt(0));
  return 解密_你_个_丁咚_咙_咚呛.buffer;
}

async function 解析VL标头(VL数据, TCP接口) {
  if (!私钥开关 && 验证VL的密钥(new Uint8Array(VL数据.slice(1, 17))) !== 哎呀呀这是我的VL密钥) {
    return null;
  }
  const 获取数据定位 = new Uint8Array(VL数据)[17];
  const 提取端口索引 = 18 + 获取数据定位 + 1;
  const 建立端口缓存 = VL数据.slice(提取端口索引, 提取端口索引 + 2);
  const 访问端口 = new DataView(建立端口缓存).getUint16(0);
  const 提取地址索引 = 提取端口索引 + 2;
  const 建立地址缓存 = new Uint8Array(VL数据.slice(提取地址索引, 提取地址索引 + 1));
  const 识别地址类型 = 建立地址缓存[0];
  let 地址长度 = 0;
  let 访问地址 = '';
  let 地址信息索引 = 提取地址索引 + 1;
  switch (识别地址类型) {
    case 1:
      地址长度 = 4;
      访问地址 = new Uint8Array( VL数据.slice(地址信息索引, 地址信息索引 + 地址长度) ).join('.');
      break;
    case 2:
      地址长度 = new Uint8Array( VL数据.slice(地址信息索引, 地址信息索引 + 1) )[0];
      地址信息索引 += 1;
      访问地址 = new TextDecoder().decode( VL数据.slice(地址信息索引, 地址信息索引 + 地址长度) );
      break;
    case 3:
      地址长度 = 16;
      const dataView = new DataView( VL数据.slice(地址信息索引, 地址信息索引 + 地址长度) );
      const ipv6 = [];
      for (let i = 0; i < 8; i++) { ipv6.push(dataView.getUint16(i * 2).toString(16)); }
      访问地址 = ipv6.join(':');
      break;
  }
  const 写入初始数据 = VL数据.slice(地址信息索引 + 地址长度);
  if (启用反代功能 && 启用SOCKS5反代 && 启用SOCKS5全局反代) {
    TCP接口 = await 创建SOCKS5接口(识别地址类型, 访问地址, 访问端口);
    return { TCP接口, 写入初始数据 };
  } else {
    try {
    TCP接口 = connect({ hostname: 访问地址, port: 访问端口 });
    await TCP接口.opened;
    } catch {
      if (启用反代功能) {
        if (启用SOCKS5反代) {
          TCP接口 = await 创建SOCKS5接口(识别地址类型, 访问地址, 访问端口);
        } else {
          let [反代IP地址, 反代IP端口] = 反代IP.split(':');
          TCP接口 = connect({ hostname: 反代IP地址, port: 反代IP端口 || 访问端口 });
        }
      }
    } finally {
      return { TCP接口, 写入初始数据 };
    }
  }
}
function 验证VL的密钥(arr, offset = 0) {
  const uuid = (转换密钥格式[arr[offset + 0]] + 转换密钥格式[arr[offset + 1]] + 转换密钥格式[arr[offset + 2]] + 转换密钥格式[arr[offset + 3]] + "-" + 转换密钥格式[arr[offset + 4]] + 转换密钥格式[arr[offset + 5]] + "-" + 转换密钥格式[arr[offset + 6]] + 转换密钥格式[arr[offset + 7]] + "-" + 转换密钥格式[arr[offset + 8]] + 转换密钥格式[arr[offset + 9]] + "-" + 转换密钥格式[arr[offset + 10]] + 转换密钥格式[arr[offset + 11]] + 转换密钥格式[arr[offset + 12]] + 转换密钥格式[arr[offset + 13]] + 转换密钥格式[arr[offset + 14]] + 转换密钥格式[arr[offset + 15]]).toLowerCase();
  return uuid;
}
const 转换密钥格式 = [];
for (let i = 0; i < 256; ++i) { 转换密钥格式.push((i + 256).toString(16).slice(1)); }

async function 建立传输管道(WS接口, TCP接口, 写入初始数据, TCP缓存 = [], WS缓存 = []) {
  const 传输数据 = TCP接口.writable.getWriter();
  await WS接口.send(new Uint8Array([0, 0]).buffer);
  TCP接口.readable.pipeTo(new WritableStream({
    async write(VL数据) {
      WS缓存.push(VL数据);
      const WS数据块 = WS缓存.shift();
      WS接口.send(WS数据块)
    }
  }));
  const 数据流 = new ReadableStream({
    async start(控制器) {
      if (写入初始数据) { 控制器.enqueue(写入初始数据); 写入初始数据 = null };
      WS接口.addEventListener('message', (event) => { 控制器.enqueue(event.data) });
      WS接口.addEventListener('close', () => { 控制器.close() });
      WS接口.addEventListener('error', () => { 控制器.close() });
    }
  });
  数据流.pipeTo(new WritableStream({
    async write(VL数据) {
      TCP缓存.push(VL数据);
      const TCP数据块 = TCP缓存.shift();
      传输数据.write(TCP数据块);
    },
  }));
}

async function 创建SOCKS5接口(识别地址类型, 访问地址, 访问端口) {
  const { username, password, hostname, port } = await 获取SOCKS5账号(我的SOCKS5账号);
  const SOCKS5接口 = connect({ hostname, port });
  try {
    await SOCKS5接口.opened;
  } catch {
    return new Response('SOCKS5未连通', { status: 400 });
  }
  const writer = SOCKS5接口.writable.getWriter();
  const reader = SOCKS5接口.readable.getReader();
  const encoder = new TextEncoder();
  const socksGreeting = new Uint8Array([5, 2, 0, 2]);
  await writer.write(socksGreeting);
  let res = (await reader.read()).value;
  if (res[1] === 0x02) {
    if (!username || !password) {
      return 关闭接口并退出();
    }
    const authRequest = new Uint8Array([ 1, username.length, ...encoder.encode(username), password.length, ...encoder.encode(password) ]);
    await writer.write(authRequest);
    res = (await reader.read()).value;
    if (res[0] !== 0x01 || res[1] !== 0x00) {
      return 关闭接口并退出();
    }
  }
  let 转换访问地址;
  switch (识别地址类型) {
    case 1:
      转换访问地址 = new Uint8Array( [1, ...访问地址.split('.').map(Number)] );
      break;
    case 2:
      转换访问地址 = new Uint8Array( [3, 访问地址.length, ...encoder.encode(访问地址)] );
      break;
    case 3:
      转换访问地址 = new Uint8Array( [4, ...访问地址.split(':').flatMap(x => [parseInt(x.slice(0, 2), 16), parseInt(x.slice(2), 16)])] );
      break;
    default:
      return 关闭接口并退出();
  }
  const socksRequest = new Uint8Array([ 5, 1, 0, ...转换访问地址, 访问端口 >> 8, 访问端口 & 0xff ]);
  await writer.write(socksRequest);
  res = (await reader.read()).value;
  if (res[0] !== 0x05 || res[1] !== 0x00) {
    return 关闭接口并退出();
  }
  writer.releaseLock();
  reader.releaseLock();
  return SOCKS5接口;
  function 关闭接口并退出() {
    writer.releaseLock();
    reader.releaseLock();
    SOCKS5接口.close();
    return new Response('SOCKS5握手失败', { status: 400 });
  }
}
async function 获取SOCKS5账号(SOCKS5) {
  const [latter, former] = SOCKS5.split("@").reverse();
  let username, password, hostname, port;
  if (former) {
    const formers = former.split(":");
    username = formers[0];
    password = formers[1];
  }
  const latters = latter.split(":");
  port = Number(latters.pop());
  hostname = latters.join(":");
  return { username, password, hostname, port };
}

let 转码 = 'vl', 转码2 = 'ess', 符号 = '://', 小猫 = 'cla', 咪 = 'sh', 我的私钥;
if (私钥开关) {
  我的私钥 = `my-key: ${咦这是我的私钥哎}`
} else {
  我的私钥 = ""
}
function 给我订阅页面(哎呀呀这是我的ID啊, hostName) {
return `
1、本worker的私钥功能只支持${小猫}${咪}，仅open${小猫}${咪}和${小猫}${咪} meta测试过，其他${小猫}${咪}类软件自行测试
2、若使用通用订阅请关闭私钥功能
3、其他需求自行研究
通用的：https${符号}${hostName}/${哎呀呀这是我的ID啊}/${转码}${转码2}
猫咪的：https${符号}${hostName}/${哎呀呀这是我的ID啊}/${小猫}${咪}
`;
}
function 给我通用配置文件(hostName) {
if (我的优选.length === 0){
  我的优选 = [`${hostName}:443`]
}
if (私钥开关) {
  return `请先关闭私钥功能`
}else {
  return 我的优选.map(获取优选 => {
    const [主内容,tls] = 获取优选.split("@");
    const [地址端口, 节点名字 = 我的节点名字] = 主内容.split("#");
    const 拆分地址端口 = 地址端口.split(":");
    const 端口 =拆分地址端口.length > 1 ? Number(拆分地址端口.pop()) : 443;
    const 地址 = 拆分地址端口.join(":");
    const TLS开关 = tls === 'notls' ? 'security=none' : 'security=tls';
    return `${转码}${转码2}${符号}${哎呀呀这是我的VL密钥}@${地址}:${端口}?encryption=none&${TLS开关}&sni=${hostName}&type=ws&host=${hostName}&path=%2F%3Fed%3D2560#${节点名字}`;
  }).join("\n");
}
}
function 给我小猫咪配置文件(hostName) {
if (我的优选.length === 0){
  我的优选 = [`${hostName}:443`]
}
const 生成节点 = (我的优选) => {
  return 我的优选.map(获取优选 => {
    const [主内容,tls] = 获取优选.split("@");
    const [地址端口, 节点名字 = 我的节点名字] = 主内容.split("#");
    const 拆分地址端口 = 地址端口.split(":");
    const 端口 =拆分地址端口.length > 1 ? Number(拆分地址端口.pop()) : 443;
    const 地址 = 拆分地址端口.join(":").replace(/^\[(.+)\]$/, '$1');
    const TLS开关 = tls === 'notls' ? 'false' : 'true';
  return {
    nodeConfig: `- name: ${节点名字}-${地址}-${端口}
  type: ${转码}${转码2}
  server: ${地址}
  port: ${端口}
  uuid: ${哎呀呀这是我的VL密钥}
  udp: false
  tls: ${TLS开关}
  sni: ${hostName}
  network: ws
  ws-opts:
    path: "/?ed=2560"
    headers:
      Host: ${hostName}
      ${我的私钥}`,
    proxyConfig: `    - ${节点名字}-${地址}-${端口}`
    };
  });
};
const 节点配置 = 生成节点(我的优选).map(node => node.nodeConfig).join("\n");
const 代理配置 = 生成节点(我的优选).map(node => node.proxyConfig).join("\n");
return `
proxies:
${节点配置}
proxy-groups:
- name: ✈️ 起飞
  type: select
  proxies:
    - ⚡ 低延迟
    - DIRECT    
${代理配置}
- name: ⚡ 低延迟
  type: url-test
  url: http://www.gstatic.com/generate_204
  interval: 60
  tolerance: 30
  proxies:
${代理配置}
- name: 🐟 漏网之鱼
  type: select
  proxies:
    - ✈️ 起飞
    - DIRECT

    
rules:
  - GEOSITE,category-ads-all,REJECT
  - GEOSITE,cn,DIRECT,no-resolve
  - GEOIP,CN,DIRECT,no-resolve
  - GEOSITE,cloudflare,DIRECT,no-resolve
  - GEOIP,CLOUDFLARE,DIRECT,no-resolve
  - GEOSITE,gfw,✈️ 起飞,no-resolve
  - GEOSITE,google,✈️ 起飞,no-resolve
  - GEOIP,GOOGLE,✈️ 起飞,no-resolve
  - GEOSITE,netflix,✈️ 起飞,no-resolve
  - GEOIP,NETFLIX,✈️ 起飞,no-resolve
  - GEOSITE,telegram,✈️ 起飞,no-resolve
  - GEOIP,TELEGRAM,✈️ 起飞,no-resolve
  - GEOSITE,openai,✈️ 起飞,no-resolve
  - PROCESS-NAME-REGEX,(?i)Telegram,✈️ 起飞
  - PROCESS-NAME-REGEX,.*telegram.*,✈️ 起飞
  - MATCH, 🐟 漏网之鱼
`
}