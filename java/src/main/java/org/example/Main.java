package org.example;

import java.util.Date;

public class Main {
    public static void main(String[] args) {
        NotificationEngine engine = new NotificationEngine();
        engine.registerNotifier(new EmailNotifier());
        engine.registerNotifier(new WhatsAppNotifier());
        engine.registerNotifier(new PushNotifier());

        System.out.println("============= POR EVENTO =============");
        engine.dispatchEvent(Events.PROMO,
                Notification.builder()
                        .id("1")
                        .title("Promo")
                        .message("Nueva Promo")
                        .type("info")
                        .createdAt(new Date())
                        .build());

        System.out.println("=============");

        engine.dispatchEvent(Events.MANTENIMIENTO,
                Notification.builder()
                        .id("2")
                        .title("Mantenimiento")
                        .message("Estamos en mantenimiento")
                        .type("info")
                        .createdAt(new Date())
                        .build());

        System.out.println();
        System.out.println("============= POR STRATEGIA =============");

        engine.sendByStrategy(Strategies.WHATSAPP,
                Notification.builder()
                        .id("3")
                        .title("Hola")
                        .message("Notificación por whatsapp")
                        .type("saludo")
                        .createdAt(new Date())
                        .build());

        System.out.println("=============");

        engine.sendByStrategy(Strategies.EMAIL,
                Notification.builder()
                        .id("4")
                        .title("Hola")
                        .message("Notificación por correo")
                        .type("saludo")
                        .createdAt(new Date())
                        .build());
    }
}