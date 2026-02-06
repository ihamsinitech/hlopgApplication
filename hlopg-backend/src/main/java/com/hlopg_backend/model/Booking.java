
package com.hlopg_backend.model;

import java.util.Date;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.PrePersist;
import jakarta.persistence.Table;
import jakarta.persistence.Temporal;
import jakarta.persistence.TemporalType;
import lombok.Data;

@Entity
@Table(name = "bookings")
@Data
public class Booking {
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    
    @Column(name = "booking_id", unique = true, nullable = false)
    private String bookingId;
    
    @Column(name = "hostel_id", nullable = false)
    private Long hostelId;
    
    @Column(name = "user_id", nullable = false)
    private Long userId;
    
    @Column(name = "user_name", nullable = false)
    private String userName;
    
    @Column(name = "user_email", nullable = false)
    private String userEmail;
    
    @Column(name = "user_phone", nullable = false)
    private String userPhone;
    
    @Column(name = "sharing_type", nullable = false)
    private String sharingType;
    
    @Column(name = "booking_date", nullable = false)
    @Temporal(TemporalType.TIMESTAMP)
    private Date bookingDate;
    
    @Column(name = "status", nullable = false)
    private String status; // pending, confirmed, cancelled, completed
    
    @Column(name = "created_at", nullable = false)
    @Temporal(TemporalType.TIMESTAMP)
    private Date createdAt;
    
    // PrePersist to set createdAt
    @PrePersist
    protected void onCreate() {
        if (createdAt == null) {
            createdAt = new Date();
        }
        if (bookingDate == null) {
            bookingDate = new Date();
        }
        if (status == null) {
            status = "pending";
        }
    }
}