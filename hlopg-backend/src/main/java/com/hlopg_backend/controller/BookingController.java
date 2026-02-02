package com.hlopg_backend.controller;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/booking")
// @CrossOrigin(origins = "*")
public class BookingController {
    
    @GetMapping("/user-bookings")
    public ResponseEntity<?> getUserBookings(@RequestHeader(value = "Authorization", required = false) String authHeader) {
        System.out.println("📅 GET /api/booking/user-bookings");
        
        // Return dummy data for now
        List<Map<String, Object>> bookings = new ArrayList<>();
        
        Map<String, Object> booking = new HashMap<>();
        booking.put("bookingId", "BKG001");
        booking.put("hostelName", "Luxury PG");
        booking.put("area", "Hitech City");
        booking.put("city", "Hyderabad");
        booking.put("sharing", "2-Sharing");
        booking.put("date", "2024-01-30");
        booking.put("rentAmount", 8000);
        booking.put("deposit", 10000);
        booking.put("totalAmount", 18000);
        booking.put("status", "Confirmed");
        
        bookings.add(booking);
        
        Map<String, Object> response = new HashMap<>();
        response.put("success", true);
        response.put("bookings", bookings);
        
        return ResponseEntity.ok(response);
    }
}