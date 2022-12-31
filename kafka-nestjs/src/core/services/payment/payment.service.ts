export interface PaymentService {
    getTax(): Promise<number>;
}
