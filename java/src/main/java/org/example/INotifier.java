package org.example;

public interface INotifier {
    Strategies getId();

    void send(Notification notification);
}
