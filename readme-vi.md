[![Triển khai với Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fnguyenthuongvo%2Fnextjs-notion-starter-kit.git&project-name=free-website-notion&repository-name=free-website-notion)

<p align="center">
  <a href="https://transitivebullsh.it/nextjs-notion-starter-kit">
    <img alt="Trang bài viết ví dụ" src="https://user-images.githubusercontent.com/552829/160132094-12875e09-41ec-450a-80fc-ae8cd488129d.jpg" width="689">
  </a>
</p>

# Next.js Notion Starter Kit

> Bộ khởi động hoàn hảo để xây dựng website với Next.js và Notion.

[![Trạng thái Build](https://github.com/transitive-bullshit/nextjs-notion-starter-kit/actions/workflows/build.yml/badge.svg)](https://github.com/transitive-bullshit/nextjs-notion-starter-kit/actions/workflows/build.yml) [![Định dạng mã Prettier](https://img.shields.io/badge/code_style-prettier-brightgreen.svg)](https://prettier.io)

## Giới thiệu

Repo này là những gì tôi sử dụng để vận hành blog cá nhân và trang portfolio của mình tại [transitivebullsh.it](https://transitivebullsh.it).

Nó sử dụng Notion làm CMS, [react-notion-x](https://github.com/NotionX/react-notion-x), [Next.js](https://nextjs.org/) và [Vercel](https://vercel.com).

## Tính năng

- Thiết lập chỉ mất vài phút ([chỉ cần cấu hình 1 file](./site.config.ts)) 💪
- Hỗ trợ mạnh mẽ nội dung Notion qua [react-notion-x](https://github.com/NotionX/react-notion-x)
- Xây dựng với Next.js, TS và React
- Tốc độ tải trang xuất sắc
- Xem trước hình ảnh mượt mà
- Tự động tạo ảnh chia sẻ mạng xã hội
- Tự động tạo URL đẹp
- Tự động tạo mục lục
- Hỗ trợ đầy đủ chế độ tối
- Tìm kiếm nhanh với CMD+K / CMD+P
- Giao diện đáp ứng trên nhiều thiết bị
- Tối ưu hóa cho Next.js và Vercel

## Demo

- [Demo mặc định](https://nextjs-notion-starter-kit.transitivebullsh.it) - Triển khai từ nhánh `main`
- [Trang của tôi](https://transitivebullsh.it) - Triển khai từ nhánh `transitive-bullshit`

## Thiết lập

**Toàn bộ cấu hình nằm trong [site.config.ts](./site.config.ts).**

Dự án này yêu cầu Node.js phiên bản mới (khuyến nghị >= 16).

1. Fork / clone repo này
2. Thay đổi một vài giá trị trong [site.config.ts](./site.config.ts)
3. `npm install`
4. `npm run dev` để chạy thử trên máy
5. `npm run deploy` để triển khai lên vercel 💪

Tôi đã cố gắng làm cho việc cấu hình trở nên dễ dàng nhất — Bạn chỉ cần sửa `rootNotionPageId` là đủ để bắt đầu.

Chúng tôi khuyến nghị bạn nhân bản [trang mặc định](https://notion.so/7875426197cf461698809def95960ebf) làm điểm khởi đầu, nhưng bạn có thể dùng bất cứ trang notion công khai nào.

Hãy chắc rằng trang Notion gốc của bạn là **công khai** rồi sao chép liên kết vào clipboard. Lấy phần cuối của URL trông như `7875426197cf461698809def95960ebf`, đó là Notion ID của trang bạn.

Để tìm workspace ID của Notion (tùy chọn), chỉ cần tải bất kỳ trang nào của bạn lên trình duyệt và mở bảng điều khiển lập trình viên. Sẽ có biến toàn cục tên là `block` chứa dữ liệu Notion của trang hiện tại. Nhập `block.space_id` để lấy workspace ID.

Tôi khuyên bạn nên tạo một collection trên trang chủ để chứa tất cả bài viết / dự án / nội dung. Không có ràng buộc cấu trúc nào cho workspace Notion, bạn cứ thêm nội dung như bình thường.

## Đường dẫn URL

Ứng dụng mặc định sử dụng đường dẫn URL hơi khác giữa môi trường dev và prod (nhưng bạn có thể dán bất kỳ đường dẫn dev nào lên prod và ngược lại).

Trong phát triển, nó sẽ dùng `/nextjs-notion-blog-d1b5dcf8b9ff425b8aef5ce6f0730202` là bản slug hóa của tiêu đề trang cộng với Notion ID. Tôi thấy việc này rất hữu ích để luôn thấy rõ Notion Page ID khi phát triển.

Khi lên production, nó sẽ dùng `/nextjs-notion-blog` gọn gàng hơn vì bỏ phần ID dư thừa.

Việc ánh xạ Notion ID sang tiêu đề slug được thực hiện tự động khi build. Lưu ý nếu bạn định đổi tiêu đề trang, hãy đảm bảo các liên kết cũ vẫn hoạt động, hiện tại app chưa hỗ trợ phát hiện liên kết cũ ngoài [redirects của Next.js](https://nextjs.org/docs/api-reference/next.config.js/redirects).

Xem [mapPageUrl](./lib/map-page-url.ts) và [getCanonicalPageId](https://github.com/NotionX/react-notion-x/blob/master/packages/notion-utils/src/get-canonical-page-id.ts) để biết thêm chi tiết.

Bạn có thể ghi đè slug mặc định cho từng trang bằng cách thêm thuộc tính text `Slug` vào database. Trang nào có thuộc tính `Slug` sẽ dùng làm slug.

LƯU Ý: nếu có nhiều trang trong workspace cùng tên slug, app sẽ báo lỗi trùng đường dẫn URL.

## Ảnh xem trước

<p align="center">
  <img alt="Ảnh xem trước ví dụ" src="https://user-images.githubusercontent.com/552829/160142320-35343317-aa9e-4710-bcf7-67e5cdec586d.gif" width="458">
</p>

Chúng tôi dùng [next/image](https://nextjs.org/docs/api-reference/next/image) để phục vụ ảnh hiệu quả, với ảnh xem trước tạo qua [lqip-modern](https://github.com/transitive-bullshit/lqip-modern). Điều này giúp tối ưu hóa ảnh cho trải nghiệm mượt mà.

Ảnh xem trước **bật mặc định**, nhưng có thể tạo chậm, nếu muốn tắt hãy đặt `isPreviewImageSupportEnabled` thành `false` trong `site.config.ts`.

### Redis

Nếu muốn cache ảnh xem trước để tăng tốc build sau, bạn cần thiết lập [Redis](https://redis.io) bên ngoài. Để bật cache redis, đặt `isRedisEnabled` thành `true` trong `site.config.ts` rồi thiết lập biến môi trường `REDIS_HOST` và `REDIS_PASSWORD` trỏ tới instance redis của bạn.

Bạn có thể làm điều này trên máy bằng file `.env`:

```bash
REDIS_HOST='TODO'
REDIS_PASSWORD='TODO'
```

Nếu chưa biết chọn nhà cung cấp Redis nào, hãy thử [Redis Labs](https://redis.com), có gói miễn phí.

Lưu ý: ảnh xem trước và cache redis đều là tính năng tùy chọn. Nếu không muốn, chỉ cần tắt trong cấu hình.

## Styles

Tất cả CSS tùy chỉnh cho nội dung Notion nằm ở [styles/notion.css](./styles/notion.css). Chủ yếu nhắm vào các class toàn cục do react-notion-x [styles.css](https://github.com/NotionX/react-notion-x/blob/master/packages/react-notion-x/src/styles.css) xuất ra.

Mỗi block notion đều có class riêng, bạn có thể nhắm tới từng block như sau:

```css
.notion-block-260baa77f1e1428b97fb14ac99c7c385 {
  display: none;
}
```

## Chế độ tối

<p align="center">
  <img alt="Chế độ sáng" src="https://transitive-bs.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F83ea9f0f-4761-4c0b-b53e-1913627975fc%2Ftransitivebullsh.it_-opt.jpg?table=block&id=ed7e8f60-c6d1-449e-840b-5c7762505c44&spaceId=fde5ac74-eea3-4527-8f00-4482710e1af3&width=2000&userId=&cache=v2" width="45%">
&nbsp; &nbsp; &nbsp; &nbsp;
