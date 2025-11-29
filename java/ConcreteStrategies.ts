import { Strategies } from "./constants"
import { INotifer } from "./INotifer"
import { Notification } from "./Notification"

export class WhatsAppNotifer implements INotifer {
    id = Strategies.WHATSAPP
    
    async send(notification: Notification): Promise<{ success: boolean, info: string }> {
        return new Promise((resolve, reject) => {
            if (notification.title.trim().length === 0) {
                return reject("El titulo no puede estar vacío")
            }

            resolve({ success: true, info: "Mensaje envíado correctamente por Whatsapp" })            
       }) 
    }
}

export class PushNotifer implements INotifer {
    id = Strategies.PUSH
    
    async send(notification: Notification): Promise<{ success: boolean, info: string }> {
        return new Promise((resolve, reject) => {
            if (notification.title.trim().length === 0) {
                return reject("El titulo no puede estar vacío")
            }

            resolve({ success: true, info: "Mensaje envíado correctamente por Push" })            
       }) 
    }
}

export class EmailNotifer implements INotifer {
    id = Strategies.EMAIL
    
    async send(notification: Notification): Promise<{ success: boolean, info: string }> {
        return new Promise((resolve, reject) => {
            if (notification.title.trim().length === 0) {
                return reject("El titulo no puede estar vacío")
            }

            resolve({ success: true, info: "Mensaje envíado correctamente por Correo" })            
       }) 
    }
}