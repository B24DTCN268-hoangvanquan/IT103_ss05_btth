
const rawCode = " med-rhm-0815-bhyt ";

const cleanCode = rawCode.trim();

const normalizedCode = cleanCode.toUpperCase();

const isValid = normalizedCode.startsWith("MED-");

if (isValid) {
    const departmentCode = normalizedCode.slice(4, 7);

    const appointmentNumber = normalizedCode.slice(8, 12);

    const hasInsurance = normalizedCode.includes("BHYT");

    const originalPrice = 150000;
    const price = hasInsurance ? originalPrice * 0.2 : originalPrice;

    console.log("=".repeat(35));
    console.log("       PHIẾU KHÁM BỆNH");
    console.log("=".repeat(35));
    console.log(`Mã phiếu      : ${normalizedCode}`);
    console.log(`Chuyên khoa   : ${departmentCode}`);
    console.log(`Số thứ tự     : ${appointmentNumber}`);
    console.log(`BHYT          : ${hasInsurance ? "Có" : "Không"}`);
    console.log(`Giá khám      : ${price.toLocaleString("vi-VN")} VNĐ`);
    console.log("=".repeat(35));
} else {
    console.log("=".repeat(35));
    console.log("MÃ PHIẾU KHÔNG HỢP LỆ!");
    console.log(`Mã nhận được: ${normalizedCode}`);
    console.log("=".repeat(35));
}