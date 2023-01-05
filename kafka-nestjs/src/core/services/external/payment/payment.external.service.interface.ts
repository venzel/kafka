export interface PaymentExternalServiceInterface {
    getTax(): Promise<number>;
}
