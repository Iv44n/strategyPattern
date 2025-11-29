package org.example;

import lombok.Getter;

@Getter
class WhatsAppNotifier implements INotifier {
    private final Strategies id = Strategies.WHATSAPP;

    @Override
    public void send(Notification notification) {
        System.out.println("notificación enviada por " + this.id);
        System.out.println(notification);
    }
}

@Getter
class EmailNotifier implements INotifier {
    private final Strategies id = Strategies.EMAIL;

    @Override
    public void send(Notification notification) {
        System.out.println("notificación enviada por " + this.id);
        System.out.println(notification);
    }
}

@Getter
class PushNotifier implements INotifier {
    private final Strategies id = Strategies.PUSH;

    @Override
    public void send(Notification notification) {
        System.out.println("notificación enviada por " + this.id);
        System.out.println(notification);
    }
}
