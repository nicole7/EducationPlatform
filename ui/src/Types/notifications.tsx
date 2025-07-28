export type Notification = {
    id: string;
    type: string;
    subject: string;
    sender: string;
    message: string;
    timestamp: Date;
    read: boolean;
}