package com.example.notificationservice;

import org.springframework.context.annotation.Primary;
import org.springframework.stereotype.Component;

@Component
@Primary
public class WhatsappService implements NotificationService {

    @Override
    public void sendMsg(String message) {
        System.out.println("whatsapp service " + message);
    }
}
