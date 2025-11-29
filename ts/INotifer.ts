import { Strategies } from "./constants"
import { Notification } from "./Notification"

export interface INotifer {
    id: Strategies
    send(notification: Notification): Promise<{ success: boolean, info: string }>
}
