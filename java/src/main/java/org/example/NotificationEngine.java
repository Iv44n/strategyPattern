package org.example;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

public class NotificationEngine {
    private final HashMap<Strategies, INotifier> notifiers = new HashMap<>();
    private final Map<Events, List<Strategies>> eventStrategies = Map.of(
            Events.PROMO, List.of(Strategies.WHATSAPP, Strategies.EMAIL),
            Events.STOCK_MINIMO, List.of(Strategies.PUSH),
            Events.MANTENIMIENTO, List.of(Strategies.PUSH, Strategies.EMAIL));

    void registerNotifier(INotifier notifier) {
        notifiers.put(notifier.getId(), notifier);
    }

    private INotifier getNotifier(Strategies strategy) {
        INotifier notifier = notifiers.get(strategy);
        if (notifier == null)
            throw new RuntimeException("Notifier not registered for strategy " + strategy);
        return notifier;
    }

    void dispatchEvent(Events event, Notification notification) {
        System.out.println("Evento " + event + " disparado");
        final List<Strategies> strategies = eventStrategies.get(event);

        strategies.forEach(strategy -> {
            final INotifier notifier = this.getNotifier(strategy);
            notifier.send(notification);
        });
    }

    void sendByStrategy(Strategies strategy, Notification notification) {
        final INotifier notifier = this.getNotifier(strategy);
        notifier.send(notification);
    }
}
