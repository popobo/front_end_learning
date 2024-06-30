## 20240630

- Error: Invalid src prop (https://utfs.io/f/98ce5a37-1cce-4102-8dde-8ee077780288-xha65v.jpeg) on next/image, hostname "utfs.io" is not configured under images in your next.config.js
  See more info: https://nextjs.org/docs/messages/next-image-unconfigured-host

这个报错是什么意思

这个错误提示意味着你在使用 `next/image` 组件时，指定了一个未在 `next.config.js` 中配置的图片源主机名。具体来说：

1. 错误原因：
   你使用了 `src="https://utfs.io/f/98ce5a37-1cce-4102-8dde-8ee077780288-xha65v.jpeg"` 这样的图片链接，但是 `utfs.io` 这个域名没有在你的 Next.js 配置中被允许。

2. 解决方法：
   你需要在 `next.config.js` 文件中添加对 `utfs.io` 的配置。有两种方式：

   a. 对于 Next.js 12.3.0 及以上版本，使用 `remotePatterns`：

   ```javascript
   module.exports = {
     images: {
       remotePatterns: [
         {
           protocol: "https",
           hostname: "utfs.io",
           port: "",
           pathname: "/f/**",
         },
       ],
     },
   };
   ```

   b. 对于较旧的 Next.js 版本，使用 `domains`：

   ```javascript
   module.exports = {
     images: {
       domains: ["utfs.io"],
     },
   };
   ```

3. 原因解释：
   Next.js 的图片优化功能出于安全考虑，默认只允许从配置的域名加载图片。这可以防止恶意用户滥用你的服务器资源来优化任意外部图片。

4. 注意事项：
   - 确保在添加域名到配置中时，你信任该域名不会被用来加载恶意内容。
   - 如果你使用的是动态图片源，可能需要考虑使用更灵活的配置方式。

通过正确配置 `next.config.js`，你应该能够解决这个错误，并成功使用 `next/image` 组件加载来自 `utfs.io` 的图片。
