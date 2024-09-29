// export function getImageUrl(person) {
//     return (
//       'https://i.imgur.com/' +
//       person.imageId +
//       's.jpg'
//     );
//   }
  
// ฟังก์ชันเพื่อสร้าง URL รูปภาพ
export function getImageUrl(product) {
  return `https://i.imgur.com/${product.imageId}s.jpg`;
}
