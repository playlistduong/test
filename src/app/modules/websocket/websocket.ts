import { Observable } from 'rxjs';

export interface IWebSocket {
    on<T>(event: string): Observable<T>;
    send<T>(event: string, data: T): void;
    status: Observable<boolean>;
}

export interface WebSocketConfig {
    url: string;
    reconnectInterval?: number;
    reconnectAttempts?: number;
}

export interface IWsMessage<T> {
    event: string;
    data: T;
}