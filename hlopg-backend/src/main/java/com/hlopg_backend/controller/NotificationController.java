package com.hlopg_backend.controller;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.hlopg_backend.model.Notification;
import com.hlopg_backend.repository.NotificationRepository;

import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;

@RestController
@RequestMapping("/api/owner")
// @CrossOrigin(origins = "*")
public class NotificationController {
    
    @Autowired
    private NotificationRepository notificationRepository;
    
    @Value("${jwt.secret}")
    private String jwtSecret;
    
    @GetMapping("/notifications")
public ResponseEntity<Map<String, Object>> getOwnerNotifications(
        @RequestHeader(value = "Authorization", required = false) String authHeader) {
    
    Map<String, Object> response = new HashMap<>();
    
    try {
        System.out.println("🔔 Fetching owner notifications...");
        
        // Check if auth header exists
        if (authHeader == null || authHeader.trim().isEmpty()) {
            System.out.println("❌ Authorization header is missing");
            response.put("success", false);
            response.put("message", "Authorization header is required");
            return ResponseEntity.status(401).body(response);
        }
        
        // Check if it's a Bearer token
        if (!authHeader.startsWith("Bearer ")) {
            System.out.println("❌ Invalid Authorization format. Expected Bearer token");
            response.put("success", false);
            response.put("message", "Invalid Authorization format. Expected Bearer token");
            return ResponseEntity.status(401).body(response);
        }
        
        String token = authHeader.substring(7); // Remove "Bearer " prefix
        System.out.println("🔔 Token length: " + token.length());
        
        // Try to parse the token
        Claims claims;
        try {
            claims = Jwts.parserBuilder()
                .setSigningKey(jwtSecret.getBytes())
                .build()
                .parseClaimsJws(token)
                .getBody();
        } catch (Exception e) {
            System.out.println("❌ Token parsing error: " + e.getMessage());
            response.put("success", false);
            response.put("message", "Invalid token: " + e.getMessage());
            return ResponseEntity.status(401).body(response);
        }
        
        // Get owner ID from token
        String ownerIdStr = claims.getSubject();
        System.out.println("🔔 Owner ID from token: " + ownerIdStr);
        
        if (ownerIdStr == null || ownerIdStr.trim().isEmpty()) {
            response.put("success", false);
            response.put("message", "Token does not contain owner ID");
            return ResponseEntity.status(401).body(response);
        }
        
        Long ownerId;
        try {
            ownerId = Long.parseLong(ownerIdStr);
        } catch (NumberFormatException e) {
            System.out.println("❌ Invalid owner ID format: " + ownerIdStr);
            response.put("success", false);
            response.put("message", "Invalid owner ID format");
            return ResponseEntity.status(400).body(response);
        }
        
        System.out.println("🔔 Fetching notifications for owner ID: " + ownerId);
        
        // Get notifications for this owner, ordered by most recent first
        List<Notification> notifications = notificationRepository.findByOwnerIdOrderByCreatedAtDesc(ownerId);
        System.out.println("🔔 Found " + notifications.size() + " notifications");
        
        // Format response
        List<Map<String, Object>> formattedNotifications = new ArrayList<>();
        for (Notification notification : notifications) {
            Map<String, Object> notifMap = new HashMap<>();
            notifMap.put("id", notification.getId());
            notifMap.put("type", notification.getType());
            notifMap.put("title", notification.getTitle());
            notifMap.put("message", notification.getMessage());
            notifMap.put("hostel_id", notification.getHostelId());
            notifMap.put("hostel_name", notification.getHostelName());
            notifMap.put("hostel_address", notification.getHostelAddress());
            notifMap.put("user_id", notification.getUserId());
            notifMap.put("user_name", notification.getUserName());
            notifMap.put("user_email", notification.getUserEmail());
            notifMap.put("user_phone", notification.getUserPhone());
            notifMap.put("sharing_type", notification.getSharingType());
            notifMap.put("booking_id", notification.getBookingId());
            notifMap.put("read", notification.getRead() != null ? notification.getRead() : false);
            notifMap.put("created_at", notification.getCreatedAt());
            
            formattedNotifications.add(notifMap);
        }
        
        response.put("success", true);
        response.put("data", formattedNotifications);
        
        System.out.println("✅ Successfully returned " + formattedNotifications.size() + " notifications");
        return ResponseEntity.ok(response);
        
    } catch (Exception e) {
        System.err.println("❌ Unexpected error in getOwnerNotifications:");
        e.printStackTrace();
        response.put("success", false);
        response.put("message", "Internal server error: " + e.getMessage());
        return ResponseEntity.status(500).body(response);
    }
}
    // Get notifications for owner
    // @GetMapping("/notifications")
    // public ResponseEntity<Map<String, Object>> getOwnerNotifications(
    //         @RequestHeader("Authorization") String authHeader) {
        
    //     Map<String, Object> response = new HashMap<>();
        
    //     try {
    //         // Extract token and get owner ID
    //         String token = authHeader.replace("Bearer ", "");
            
    //         Claims claims = Jwts.parserBuilder()
    //             .setSigningKey(jwtSecret.getBytes())
    //             .build()
    //             .parseClaimsJws(token)
    //             .getBody();
            
    //         String ownerIdStr = claims.getSubject();
    //         Long ownerId = Long.parseLong(ownerIdStr);
            
    //         // Get notifications for this owner, ordered by most recent first
    //         List<Notification> notifications = notificationRepository.findByOwnerIdOrderByCreatedAtDesc(ownerId);
            
    //         // Format response
    //         List<Map<String, Object>> formattedNotifications = new ArrayList<>();
    //         for (Notification notification : notifications) {
    //             Map<String, Object> notifMap = new HashMap<>();
    //             notifMap.put("id", notification.getId());
    //             notifMap.put("type", notification.getType());
    //             notifMap.put("title", notification.getTitle());
    //             notifMap.put("message", notification.getMessage());
    //             notifMap.put("hostel_id", notification.getHostelId());
    //             notifMap.put("hostel_name", notification.getHostelName());
    //             notifMap.put("hostel_address", notification.getHostelAddress());
    //             notifMap.put("user_id", notification.getUserId());
    //             notifMap.put("user_name", notification.getUserName());
    //             notifMap.put("user_email", notification.getUserEmail());
    //             notifMap.put("user_phone", notification.getUserPhone());
    //             notifMap.put("sharing_type", notification.getSharingType());
    //             notifMap.put("booking_id", notification.getBookingId());
    //             notifMap.put("read", notification.getRead());
    //             notifMap.put("created_at", notification.getCreatedAt());
                
    //             formattedNotifications.add(notifMap);
    //         }
            
    //         response.put("success", true);
    //         response.put("data", formattedNotifications);
            
    //         return ResponseEntity.ok(response);
            
    //     } catch (Exception e) {
    //         e.printStackTrace();
    //         response.put("success", false);
    //         response.put("message", "Failed to fetch notifications: " + e.getMessage());
    //         return ResponseEntity.badRequest().body(response);
    //     }
    // }

    // Mark notification as read
    @PutMapping("/notifications/{id}/read")
    public ResponseEntity<Map<String, Object>> markNotificationAsRead(
            @PathVariable Long id,
            @RequestHeader("Authorization") String authHeader) {
        
        Map<String, Object> response = new HashMap<>();
        
        try {
            Optional<Notification> notificationOptional = notificationRepository.findById(id);
            if (!notificationOptional.isPresent()) {
                response.put("success", false);
                response.put("message", "Notification not found");
                return ResponseEntity.badRequest().body(response);
            }
            
            Notification notification = notificationOptional.get();
            notification.setRead(true);
            notificationRepository.save(notification);
            
            response.put("success", true);
            response.put("message", "Notification marked as read");
            
            return ResponseEntity.ok(response);
            
        } catch (Exception e) {
            e.printStackTrace();
            response.put("success", false);
            response.put("message", "Failed to mark notification as read");
            return ResponseEntity.badRequest().body(response);
        }
    }

    // Mark all notifications as read for owner
    @PutMapping("/notifications/read-all")
    public ResponseEntity<Map<String, Object>> markAllNotificationsAsRead(
            @RequestHeader("Authorization") String authHeader) {
        
        Map<String, Object> response = new HashMap<>();
        
        try {
            // Extract token and get owner ID
            String token = authHeader.replace("Bearer ", "");
            
            Claims claims = Jwts.parserBuilder()
                .setSigningKey(jwtSecret.getBytes())
                .build()
                .parseClaimsJws(token)
                .getBody();
            
            String ownerIdStr = claims.getSubject();
            Long ownerId = Long.parseLong(ownerIdStr);
            
            // Get all unread notifications for this owner
            List<Notification> unreadNotifications = notificationRepository.findByOwnerIdAndReadFalse(ownerId);
            
            // Mark all as read
            for (Notification notification : unreadNotifications) {
                notification.setRead(true);
            }
            notificationRepository.saveAll(unreadNotifications);
            
            response.put("success", true);
            response.put("message", "All notifications marked as read");
            response.put("count", unreadNotifications.size());
            
            return ResponseEntity.ok(response);
            
        } catch (Exception e) {
            e.printStackTrace();
            response.put("success", false);
            response.put("message", "Failed to mark all notifications as read");
            return ResponseEntity.badRequest().body(response);
        }
    }

    // Count unread notifications
    @GetMapping("/notifications/unread-count")
    public ResponseEntity<Map<String, Object>> getUnreadCount(
            @RequestHeader("Authorization") String authHeader) {
        
        Map<String, Object> response = new HashMap<>();
        
        try {
            // Extract token and get owner ID
            String token = authHeader.replace("Bearer ", "");
            
            Claims claims = Jwts.parserBuilder()
                .setSigningKey(jwtSecret.getBytes())
                .build()
                .parseClaimsJws(token)
                .getBody();
            
            String ownerIdStr = claims.getSubject();
            Long ownerId = Long.parseLong(ownerIdStr);
            
            Long unreadCount = notificationRepository.countUnreadByOwnerId(ownerId);
            
            response.put("success", true);
            response.put("unread_count", unreadCount);
            
            return ResponseEntity.ok(response);
            
        } catch (Exception e) {
            e.printStackTrace();
            response.put("success", false);
            response.put("message", "Failed to get unread count");
            return ResponseEntity.badRequest().body(response);
        }
    }
}