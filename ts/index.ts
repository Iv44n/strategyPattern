import { EmailNotifer, PushNotifer, WhatsAppNotifer } from './ConcreteStrategies'
import { Events, EventStrategies, Strategies } from './constants'
import { INotifer } from './INotifer'
import { Notification } from './Notification'

class NotificationEngine {
    private notifiers = new Map<Strategies, INotifer>()

    registerNotifer(n: INotifer) {
        this.notifiers.set(n.id, n)
    }

    getNotifier(strategy: Strategies): INotifer {
        const n = this.notifiers.get(strategy)
        if (!n) throw new Error(`Notifier not registered for strategy ${strategy}`)
        return n
    }

    async dispatchEvent({ event, notification }: { event: Events, notification: Notification }) {
        console.log(`Evento ${event} disparado`)
        const strategies = EventStrategies[event]

        for (const strategy of strategies) {
            console.log(`notificando por ${strategy}`)
            const notifier = this.getNotifier(strategy)
            await notifier.send(notification).then(rs => console.log(rs))
        }
    }

    async sendByStrategy(strategy: Strategies, notification: Notification) {
        const notifier = this.getNotifier(strategy)
        console.log(`Envíando por ${notifier.id}`)
        await notifier.send(notification).then(rs => console.log(rs))
    }
}

const engine = new NotificationEngine()
engine.registerNotifer(new EmailNotifer());
engine.registerNotifer(new WhatsAppNotifer());
engine.registerNotifer(new PushNotifer());


// Por evento
console.log("POR EVENTO")
await engine.dispatchEvent({
    event: Events.PROMO,
    notification: {
        id: "1",
        title: "Promo",
        message: "holaaaa",
        type: "info",
        createdAt: new Date(),
    }
})

// Por estrategia en concreta
console.log("POR ESTRATEGIA CONCRETA")
await engine.sendByStrategy(Strategies.WHATSAPP, {
    id: "1",
    title: "Promo",
    message: "holaaaa",
    type: "info",
    createdAt: new Date(),
})
