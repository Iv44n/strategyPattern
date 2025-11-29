import { Strategies } from "./constants"
import { INotifer } from "./INotifer"
import { Notification } from "./Notification"

export class EmailNotifer implements INotifer {
    id: Strategies = Strategies.EMAIL
  send(notification: Notification): Promise<{ success: boolean; info: string; }> {
        console.log(notification)
        return Promise.resolve({ success: true, info: `Enviando por ${this.id}` })
    }
}

export class WhatsAppNotifer implements INotifer {
    id: Strategies = Strategies.WHATSAPP
    send(notification: Notification): Promise<{ success: boolean; info: string; }> {
        console.log(notification)
        return Promise.resolve({ success: true, info: `Enviando por ${this.id}` })
    }
}

export class PushNotifer implements INotifer {
    id: Strategies = Strategies.PUSH
    send(notification: Notification): Promise<{ success: boolean; info: string; }> {
        console.log(notification)
        return Promise.resolve({ success: true, info: `Enviando por ${this.id}` })
    }
}
