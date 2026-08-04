export interface ApiResponse<T> {
  success: boolean;
  message: string;
  data?: T;
}

export interface BookingPayload {
  service: string;
  location: string;
  date: string;
  guards: number;
  duration: string;
}
