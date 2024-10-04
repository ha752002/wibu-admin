export type message = 'success' | 'error' | 'cancel';

export interface IValidationResponse {
    message: string;          
    errors: IErrorDetail[];  
    status: string; 
}

export interface IErrorDetail {
    target: string;  
    detail: string;  
}
