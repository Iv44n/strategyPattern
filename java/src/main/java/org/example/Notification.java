package org.example;

import java.util.Date;

import lombok.Builder;
import lombok.Data;
import lombok.ToString;

@Data
@Builder
@ToString
public class Notification {
    private String id;
    private String title;
    private String message;
    private String type;
    private Date createdAt;
}
