export type message = 'success' | 'error' | 'cancel';

// message.type.ts
export interface IValidationResponse {
    message: string;          // Thông điệp tổng quát
    errors: IErrorDetail[];   // Mảng các lỗi
    status: string; // Trạng thái, có thể là 'FAIL' hoặc 'SUCCESS'
}

export interface IErrorDetail {
    target: string;   // Tên trường gây ra lỗi
    detail: string;   // Chi tiết lỗi
}


