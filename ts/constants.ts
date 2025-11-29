export enum Strategies {
    WHATSAPP = "whatsapp",
    EMAIL = "email",
    PUSH = "push"
}

export enum Events {
    PROMO = "promo",
    STOCK_MINIMO = "stock_minimo",
    MANTENIMIENTO = "mantinimiento"
}

export const EventStrategies: Record<Events, Strategies[]> = {
    [Events.PROMO]: [Strategies.WHATSAPP, Strategies.EMAIL],
    [Events.STOCK_MINIMO]: [Strategies.PUSH],
    [Events.MANTENIMIENTO]: [Strategies.PUSH, Strategies.EMAIL]
} as const