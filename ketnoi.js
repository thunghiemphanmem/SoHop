// =========================================================================
// BẢNG CẤU HÌNH TRUNG TÂM HỆ THỐNG (Mọi tùy chỉnh thay đổi tại đây)
// =========================================================================
const KET_NOI = {
  // 1. THÔNG SỐ KẾT NỐI (BACKEND)
  URL_API_BACKEND: 'https://script.google.com/macros/s/AKfycbw6JYOuithvUH64LxH2pc4d54BOSqdeEtquKCnCCxzzDhJIRoMZhqgaU9r7xcAmzQ5y/exec',
  
  // 2. THÔNG TIN THỂ THỨC VĂN BẢN (NĐ 30)
  CQ_CHU_QUAN: 'UBND XÃ HỢP THÀNH',
  TEN_TO_CHUC: 'TRƯỜNG TH&THCS HỢP THÀNH',
  NOI_BAN_HANH: 'Hợp Thành',
  MA_SO_VAN_BAN: '/ BB-THHT',
  
  // 3. CẤU HÌNH GIAO DIỆN HIỂN THỊ
  TIEU_DE_PHAN_MEM: 'SỔ HỌP THÔNG MINH',
  LOGO_TRUONG: 'https://i.ibb.co/d0JNW94Z/logo-l-a-ch-n6.png', 
  CAN_BO_THAO_TAC: 'Cán bộ Hành chính',

  // 4. XÁC THỰC BẢO MẬT (ĐĂNG NHẬP GOOGLE) VÀ PHÂN QUYỀN ĐỘNG
  CLIENT_ID: '95180316485-a577mlt4a1ve3u52pd0t4rkm6bnljuns.apps.googleusercontent.com',
  
  // CẤU TRÚC NÂNG CẤP: Phân luồng Sổ và Thư mục theo định danh Account
  PHAN_QUYEN_TAI_KHOAN: {
      'hoangngoclamlc@gmail.com': {
          ID_SO_HOP: '14FPOA5brR6gUyz5gkvovE87fZkpWkQSrrtC-dJs_EqY', // Sổ của Account A
          ID_THU_MUC_LUU: '1imdsuJvIM1u2hyItdnxoUkJPCpvFaRdG'
      },
      'tulieuhopthanh@gmail.com': {
          ID_SO_HOP: 'ID_CUA_FILE_DOCX_B_DIEN_VAO_DAY', // Sổ của Account B
          ID_THU_MUC_LUU: 'ID_THU_MUC_LUU_CUA_B_DIEN_VAO_DAY' 
      }
      // Khai báo thêm các Account khác tương tự khi mở rộng...
  }
};
