// File: src/pages/HostelPage.jsx
import React, { useState, useEffect } from "react";
import { useNavigate, useLocation, useParams } from "react-router-dom";
import "./HostelPage.css";
import {
  FaWifi,
  FaFan,
  FaBed,
  FaTv,
  FaLightbulb,
  FaDoorClosed,
  FaChevronLeft,
  FaChevronRight,
  FaStar,
  FaShower,
  FaLock,
  FaParking,
  FaBroom,
  FaStarHalfAlt,
  FaRegStar
} from "react-icons/fa";
import { MdOutlineSmokeFree, MdNoDrinks } from "react-icons/md";
import Popup from "../components/Popup";
import api from "../api";

// Fallback images
import pg1 from "../assets/pg1.jpg";
import pg2 from "../assets/pg2.jpg";
import pg3 from "../assets/pg3.jpg";
import pg4 from "../assets/pg4.jpg";
import pg5 from "../assets/pg5.png";


/* ⭐ Render Star Ratings */
const renderStars = (rating = 0) => {
  const stars = [];
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 !== 0;

  for (let i = 0; i < fullStars; i++) {
    stars.push(<FaStar key={`full-${i}`} className="review-star" />);
  }

  if (hasHalfStar) {
    stars.push(<FaStarHalfAlt key="half" className="review-star" />);
  }

  while (stars.length < 5) {
    stars.push(
      <FaRegStar key={`empty-${stars.length}`} className="review-star" />
    );
  }

  return <div className="stars-container">{stars}</div>;
};

const HostelPage = () => {
  const { hostelId } = useParams();
  const navigate = useNavigate();
  const location = useLocation();

  const [hostelData, setHostelData] = useState(null);
  const [foodMenu, setFoodMenu] = useState([]);
  const [loading, setLoading] = useState(true);
  const [menuLoading, setMenuLoading] = useState(true);
  const [mainImageIndex, setMainImageIndex] = useState(0);
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [currentReviewIndex, setCurrentReviewIndex] = useState(0);
  const [userId, setUserId] = useState(null);


  const dummyReviews = [
    {
      id: 1,
      name: "Rahul Sharma",
      avatar: "https://cdn-icons-png.flaticon.com/512/149/149071.png",
      rating: 4.5,
      comment: "Great PG, clean facilities and friendly staff. Food quality is excellent!",
      date: "2 weeks ago"
    },
    {
      id: 2,
      name: "Priya Patel",
      avatar: "https://cdn-icons-png.flaticon.com/512/149/149071.png",
      rating: 4.0,
      comment: "Good location and well-maintained rooms. WiFi could be better though.",
      date: "1 month ago"
    },
    {
      id: 3,
      name: "Amit Kumar",
      avatar: "https://cdn-icons-png.flaticon.com/512/149/149071.png",
      rating: 5.0,
      comment: "Best PG in the area! Owner is very cooperative and helpful.",
      date: "3 days ago"
    },
    {
      id: 4,
      name: "Sneha Reddy",
      avatar: "https://cdn-icons-png.flaticon.com/512/149/149071.png",
      rating: 3.5,
      comment: "Affordable price but need more parking space.",
      date: "2 months ago"
    },
    {
      id: 5,
      name: "Vikram Singh",
      avatar: "https://cdn-icons-png.flaticon.com/512/149/149071.png",
      rating: 4.0,
      comment: "Clean rooms and good food. Would recommend!",
      date: "1 week ago"
    }
  ];

  const avgRating = dummyReviews.reduce((sum, r) => sum + r.rating, 0) / dummyReviews.length;
  const totalReviews = dummyReviews.length;


  // Load Razorpay script
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://checkout.razorpay.com/v1/checkout.js";
    document.body.appendChild(script);
  }, []);

  // Fetch hostel data
  // Fetch hostel data
useEffect(() => {
  const fetchHostel = async () => {
    try {
      console.log("Fetching hostel with ID:", hostelId);
      const res = await api.get(`/hostel/${hostelId}`);
      console.log("Full API Response:", res.data);
      console.log("Hostel Data:", res.data.data);
      
      if (res.data.success) {
        const data = res.data.data;
        
        // Fix image URLs
        if (data.images && Array.isArray(data.images)) {
          // Process images to ensure they have full URLs
          data.images = data.images.map(img => {
            if (!img) return pg1;
            if (img.startsWith('http')) return img;
            if (img.startsWith('/uploads')) return `http://localhost:8080${img}`;
            return `http://localhost:8080/uploads/${img}`;
          });
        } else if (data.img) {
          // Fallback to single image
          const mainImg = data.img.startsWith('http') ? data.img : 
                         data.img.startsWith('/uploads') ? `http://localhost:8080${data.img}` :
                         `http://localhost:8080/uploads/${data.img}`;
          data.images = [mainImg];
        } else {
          data.images = [pg1, pg2, pg3, pg4, pg5];
        }
        
        // Check sharing data format
        console.log("Sharing data:", data.sharing_data || data.sharing);
        
        setHostelData(data);
      } else {
        console.error("API returned error:", res.data.message);
      }
    } catch (err) {
      console.error("Error fetching hostel:", err);
      console.error("Error details:", err.response?.data);
    } finally {
      setLoading(false);
    }
  };
  fetchHostel();
}, [hostelId]);

  // Fetch reviews
  useEffect(() => {
    if (isPopupOpen) return;

    const fetchReviews = async () => {
      try {
        const res = await api.get(`/reviews/${hostelId}`);
        if (res.data.ok) {
          setHostelData((prev) => ({
            ...prev,
            reviews: res.data.data.reviews,
            avgRating: res.data.data.avgRating,
            totalReviews: res.data.data.totalReviews,
          }));
        }
      } catch (err) {
        console.error("Error fetching reviews:", err);
      }
    };
    fetchReviews();
  }, [hostelId, isPopupOpen]);

   
  // Fetch food menu
// useEffect(() => {
//   const fetchFoodMenu = async () => {
//     try {
//       console.log("🔄 Fetching food menu for hostel:", hostelId);
      
//       // First check if food menu is already in hostel data
//       if (hostelData?.food_menu) {
//         console.log("📦 Food menu found in hostel data:", hostelData.food_menu);
        
//         let foodData = hostelData.food_menu;
        
//         // Parse if it's a string
//         if (typeof foodData === 'string') {
//           try {
//             foodData = JSON.parse(foodData);
//             console.log("✅ Parsed food menu JSON:", foodData);
//           } catch (parseError) {
//             console.error("❌ Failed to parse food menu JSON:", parseError);
//           }
//         }
        
//         // Process the food data
//         processFoodData(foodData);
//         return;
//       }
      
//       // If not in hostel data, try to fetch from API
//       console.log("🌐 Trying to fetch food menu from API...");
      
//       // Try different endpoints
//       const endpoints = [
//         `/food_menu/${hostelId}`,
//         `/hostel/food_menu/${hostelId}`,
//         `/hostel/${hostelId}/food_menu`,
//         `/hostel/${hostelId}/menu`,
//         `/menu/${hostelId}`
//       ];
      
//       let foodData = null;
      
//       for (const endpoint of endpoints) {
//         try {
//           console.log(`🔍 Trying endpoint: ${endpoint}`);
//           const res = await api.get(endpoint);
//           console.log(`📡 Response from ${endpoint}:`, res.data);
          
//           if (res.data.success || res.data.ok || res.data.data) {
//             foodData = res.data.data || res.data.menu || res.data.food_menu || res.data;
//             console.log("✅ Food data found from API:", foodData);
//             break;
//           }
//         } catch (err) {
//           console.log(`❌ Endpoint ${endpoint} failed:`, err.message);
//         }
//       }
      
//       if (foodData) {
//         processFoodData(foodData);
//       } else {
//         console.log("⚠️ No food menu data found from any endpoint");
//         setFoodMenu([]);
//       }
      
//     } catch (err) {
//       console.error("❌ Error in fetchFoodMenu:", err);
//       console.error("Error response:", err.response?.data);
//       setFoodMenu([]);
//     } finally {
//       setMenuLoading(false);
//     }
//   };
  
//   // Helper function to process food data
//   const processFoodData = (foodData) => {
//     console.log("🔧 Processing food data:", foodData);
    
//     try {
//       // Case 1: Object with breakfast, lunch, dinner properties
//       if (foodData.breakfast || foodData.lunch || foodData.dinner) {
//         const days = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday'];
        
//         const menuDays = days.map(day => ({
//           day: day.charAt(0).toUpperCase() + day.slice(1),
//           breakfast: foodData.breakfast?.[day] || foodData.breakfast?.[day.toUpperCase()] || "-",
//           lunch: foodData.lunch?.[day] || foodData.lunch?.[day.toUpperCase()] || "-",
//           dinner: foodData.dinner?.[day] || foodData.dinner?.[day.toUpperCase()] || "-"
//         }));
        
//         console.log("📅 Processed weekly menu:", menuDays);
//         setFoodMenu(menuDays);
//       }
//       // Case 2: Array format
//       else if (Array.isArray(foodData)) {
//         const menuDays = foodData.map(item => ({
//           day: item.day || item.Day || "Day " + (item.id || ""),
//           breakfast: item.breakfast || item.Breakfast || "-",
//           lunch: item.lunch || item.Lunch || "-",
//           dinner: item.dinner || item.Dinner || "-"
//         }));
        
//         console.log("📅 Processed array menu:", menuDays);
//         setFoodMenu(menuDays);
//       }
//       // Case 3: Object with day keys
//       else if (typeof foodData === 'object' && foodData !== null) {
//         const menuDays = Object.entries(foodData).map(([day, menu]) => ({
//           day: day.charAt(0).toUpperCase() + day.slice(1),
//           breakfast: menu.breakfast || menu.Breakfast || "-",
//           lunch: menu.lunch || menu.Lunch || "-",
//           dinner: menu.dinner || menu.Dinner || "-"
//         }));
        
//         console.log("📅 Processed object menu:", menuDays);
//         setFoodMenu(menuDays);
//       }
//       else {
//         console.log("⚠️ Unknown food data format:", foodData);
//         setFoodMenu([]);
//       }
//     } catch (error) {
//       console.error("❌ Error processing food data:", error);
//       setFoodMenu([]);
//     }
//   };
  
//   if (hostelId) {
//     fetchFoodMenu();
//   }
// }, [hostelId, hostelData]);

// Fetch food menu - FIXED VERSION
useEffect(() => {
  const fetchFoodMenu = async () => {
    try {
      console.log("🔄 Fetching food menu for hostel:", hostelId);
      
      if (!hostelId) {
        console.log("⚠️ No hostel ID available");
        setFoodMenu([]);
        setMenuLoading(false);
        return;
      }

      // Try to fetch from API endpoints first
      console.log("🌐 Trying to fetch food menu from API...");
      
      const endpoints = [
        `/food_menu/${hostelId}`,
        `/hostel/food_menu/${hostelId}`,
        `/hostel/${hostelId}/food_menu`,
        `/hostel/${hostelId}/menu`,
        `/menu/${hostelId}`
      ];
      
      let foodData = null;
      let found = false;
      
      for (const endpoint of endpoints) {
        try {
          console.log(`🔍 Trying endpoint: ${endpoint}`);
          const res = await api.get(endpoint);
          console.log(`📡 Response from ${endpoint}:`, res.data);
          
          if (res.data.success || res.data.ok || res.data.data || res.data.menu) {
            foodData = res.data.data || res.data.menu || res.data.food_menu || res.data;
            console.log("✅ Food data found from API:", foodData);
            found = true;
            break;
          }
        } catch (err) {
          console.log(`❌ Endpoint ${endpoint} failed:`, err.message);
        }
      }
      
      // If no API data found, check if it's in hostelData (which might be fetched later)
      if (!found && hostelData?.food_menu) {
        console.log("📦 Food menu found in hostel data:", hostelData.food_menu);
        foodData = hostelData.food_menu;
        found = true;
      }
      
      if (found && foodData) {
        processFoodData(foodData);
      } else {
        console.log("⚠️ No food menu data found");
        setFoodMenu([]);
      }
      
    } catch (err) {
      console.error("❌ Error in fetchFoodMenu:", err);
      console.error("Error response:", err.response?.data);
      setFoodMenu([]);
    } finally {
      setMenuLoading(false);
    }
  };
  
  // Helper function to process food data
  const processFoodData = (foodData) => {
    console.log("🔧 Processing food data:", foodData);
    
    try {
      let processedMenu = [];
      
      // Parse if it's a string
      if (typeof foodData === 'string') {
        try {
          foodData = JSON.parse(foodData);
          console.log("✅ Parsed food menu JSON:", foodData);
        } catch (parseError) {
          console.error("❌ Failed to parse food menu JSON:", parseError);
          setFoodMenu([]);
          return;
        }
      }
      
      // Case 1: Object with breakfast, lunch, dinner properties
      if (foodData.breakfast || foodData.lunch || foodData.dinner) {
        const days = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday'];
        
        processedMenu = days.map(day => ({
          day: day.charAt(0).toUpperCase() + day.slice(1),
          breakfast: foodData.breakfast?.[day] || foodData.breakfast?.[day.toUpperCase()] || foodData.breakfast || "-",
          lunch: foodData.lunch?.[day] || foodData.lunch?.[day.toUpperCase()] || foodData.lunch || "-",
          dinner: foodData.dinner?.[day] || foodData.dinner?.[day.toUpperCase()] || foodData.dinner || "-"
        }));
        
        console.log("📅 Processed weekly menu:", processedMenu);
      }
      // Case 2: Array format
      else if (Array.isArray(foodData)) {
        processedMenu = foodData.map(item => ({
          day: item.day || item.Day || "Day " + (item.id || ""),
          breakfast: item.breakfast || item.Breakfast || "-",
          lunch: item.lunch || item.Lunch || "-",
          dinner: item.dinner || item.Dinner || "-"
        }));
        
        console.log("📅 Processed array menu:", processedMenu);
      }
      // Case 3: Object with day keys
      else if (typeof foodData === 'object' && foodData !== null) {
        processedMenu = Object.entries(foodData).map(([day, menu]) => ({
          day: day.charAt(0).toUpperCase() + day.slice(1),
          breakfast: menu.breakfast || menu.Breakfast || "-",
          lunch: menu.lunch || menu.Lunch || "-",
          dinner: menu.dinner || menu.Dinner || "-"
        }));
        
        console.log("📅 Processed object menu:", processedMenu);
      }
      else {
        console.log("⚠️ Unknown food data format:", foodData);
        processedMenu = [];
      }
      
      setFoodMenu(processedMenu);
      
    } catch (error) {
      console.error("❌ Error processing food data:", error);
      setFoodMenu([]);
    }
  };
  
  // Only fetch when we have hostelId AND hostelData is loaded
  if (hostelId) {
    console.log("🚀 Starting food menu fetch...");
    fetchFoodMenu();
  }
}, [hostelId]); // REMOVED hostelData from dependencies to prevent infinite loop

  // Image carousel
  const images = hostelData?.images?.length
    ? hostelData.images
    : [pg1, pg2, pg3, pg4, pg5];
  const prevImage = () =>
    setMainImageIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  const nextImage = () =>
    setMainImageIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));

  // Continue Booking
  const handleContinue = async (data) => {
    try {
      if (!userId) {
        alert("User not authenticated");
        return;
      }
      const {
      sharing,
      priceType,
      numDays,
      date,
      rentAmount,
      deposit,
      totalAmount,
    } = data;

     if (
      !sharing ||
      !priceType ||
      !numDays ||
      !date ||
      !rentAmount ||
      totalAmount == null
    ) {
      alert("Please fill all booking details");
      return;
    }
const token = localStorage.getItem("hlopgToken");

     const payload = {
       hostelId,
      sharing,
      priceType,
      numDays,
      date,
      rentAmount,
      deposit,
      totalAmount,
    };

      const res = await api.post("/booking/newbooking", payload, {
          headers: { Authorization: `Bearer ${token}` }  }
 );

      if (res.data.success) {
        alert(`Booking Successful! Booking ID: ${res.data.bookingId}`);
        setIsPopupOpen(false);
        navigate("/MyBookings");
      } else {
        alert("Booking failed. Please try again.");
      }
    } catch (err) {
      console.error("Booking error:", err);
      alert("Something went wrong while booking.");
    }
  };

  // Book Now Button
  const handleBookNow = async () => {
    try {
      const token = localStorage.getItem("hlopgToken");
      const owner = localStorage.getItem("hlopgOwner");

      if (owner) {
        alert("You are logged in as Hostel Owner. Not authorized to book.");
        return;
      }

      if (!token) {
        alert("Please log in to continue booking.");
        navigate("/StudentLogin", { state: { from: location.pathname } });
        return;
      }

      const res = await api.get("/auth/user", {
        headers: { Authorization: `Bearer ${token}` },
      });

      if (res.data.success) {
        setUserId(res.data.user.id || res.data.user.user_id);
        setIsPopupOpen(true);
      } else {
        alert("Not authorized. Please log in again.");
        localStorage.removeItem("hlopgToken");
        navigate("/StudentLogin");
      }
    } catch (err) {
      console.error("Auth verification failed:", err);
      alert("Session expired. Please log in again.");
      localStorage.removeItem("hlopgToken");
      navigate("/StudentLogin", { state: { from: location.pathname } });
    }
  };

  if (loading) return <div className="loading">Loading hostel details...</div>;
  if (!hostelData) return <div className="error">No hostel found.</div>;

  return (
    <div className="hostel-page">
      {/* Hostel UI */}
      <div className="hostel-main">
        {/* Left Images */}
        <div className="hostel-images">
          <div className="main-img">
            <button className="arrow-left" onClick={prevImage}>
              <FaChevronLeft />
            </button>
            <img src={images[mainImageIndex]} alt="Room" />
            <button className="arrow-right" onClick={nextImage}>
              <FaChevronRight />
            </button>
          </div>

          <div className="thumbnail-container">
            {images.map((img, idx) => (
              <img
                key={idx}
                src={img}
                alt={`Thumb ${idx}`}
                className={mainImageIndex === idx ? "active-thumb" : ""}
                onClick={() => setMainImageIndex(idx)}
              />
            ))}
          </div>
        </div>

        {/* Right Details */}
        <div className="hostel-details">
          <h2 className="black-text">{hostelData.hostel_name}</h2>
          <p className="black-text">{hostelData.address}</p>
          <p className="black-text">
            <b>Type of Living:</b> {hostelData.pg_type}'s PG
          </p>

          {/* Pricing */}
          {/* Pricing */}
<div className="stats">
  {hostelData.sharing_data ? (
    // If sharing_data exists (from backend format)
    Object.entries(hostelData.sharing_data).map(([sharing, price], idx) => (
      <div key={idx} className="stat-container">
        <span className="stat-btn black-text">
          {sharing === 'single' ? '1-Sharing' : 
           sharing === 'double' ? '2-Sharing' : 
           sharing === 'triple' ? '3-Sharing' : 
           sharing === 'four' ? '4-Sharing' : 
           sharing === 'five' ? '5-Sharing' : 
           sharing === 'six' ? '6-Sharing' : 
           `${sharing}-Sharing`}  ₹{price}
        </span>
      </div>
    ))
  ) : hostelData.sharing ? (
    // If sharing exists (alternative format)
    Object.entries(hostelData.sharing).map(([sharing, price], idx) => (
      <div key={idx} className="stat-container">
        <span className="stat-btn black-text">
          {sharing} ₹{price}
        </span>
      </div>
    ))
  ) : (
    <div className="stat-container">
      <span className="stat-btn black-text">
        Price not specified
      </span>
    </div>
  )}
</div>

          {/* Amenities */}
<h3 className="black-text">Amenities</h3>
<div className="furnished-icons">
  {hostelData.facilities ? (
    // Check facilities object
    <>
      {hostelData.facilities.wifi && (
        <span>
          <FaWifi /> Free WiFi
        </span>
      )}
      {hostelData.facilities.parking && (
        <span>
          <FaParking /> Parking
        </span>
      )}
      {hostelData.facilities.ac && (
        <span>
          <FaFan /> AC
        </span>
      )}
      {hostelData.facilities.tv && (
        <span>
          <FaTv /> TV
        </span>
      )}
      {hostelData.facilities.gym && (
        <span>
          <FaDoorClosed /> Gym
        </span>
      )}
      {hostelData.facilities.geyser && (
        <span>
          <FaShower /> Hot Water
        </span>
      )}
      {hostelData.facilities.fan && (
        <span>
          <FaFan /> Fan
        </span>
      )}
      {hostelData.facilities.bed && (
        <span>
          <FaBed /> Bed
        </span>
      )}
      {hostelData.facilities.lights && (
        <span>
          <FaLightbulb /> Lights
        </span>
      )}
      {hostelData.facilities.cupboard && (
        <span>
          <FaDoorClosed /> Cupboard
        </span>
      )}
      {hostelData.facilities.food && (
        <span>
          <FaLightbulb /> Food Included
        </span>
      )}
      {hostelData.facilities.water && (
        <span>
          <FaShower /> 24/7 Water
        </span>
      )}
      {hostelData.facilities.clean && (
        <span>
          <FaBroom /> Cleaning
        </span>
      )}
    </>
  ) : hostelData.amenities ? (
    // Fallback to amenities object
    Object.entries(hostelData.amenities).map(([amenity, available], idx) => (
      available && (
        <span key={idx}>
          {amenity === 'wifi' && <FaWifi />}
          {amenity === 'parking' && <FaParking />}
          {amenity === 'ac' && <FaFan />}
          {amenity === 'tv' && <FaTv />}
          {amenity === 'gym' && <FaDoorClosed />}
          {amenity === 'geyser' && <FaShower />}
          {amenity === 'fan' && <FaFan />}
          {amenity === 'bed' && <FaBed />}
          {amenity === 'lights' && <FaLightbulb />}
          {amenity === 'cupboard' && <FaDoorClosed />}
          {amenity === 'food' && <FaLightbulb />}
          {amenity === 'water' && <FaShower />}
          {amenity === 'clean' && <FaBroom />}
          {amenity === 'wifi' && 'WiFi'}
          {amenity === 'parking' && 'Parking'}
          {amenity === 'ac' && 'AC'}
          {amenity === 'tv' && 'TV'}
          {amenity === 'gym' && 'Gym'}
          {amenity === 'geyser' && 'Hot Water'}
          {amenity === 'fan' && 'Fan'}
          {amenity === 'bed' && 'Bed'}
          {amenity === 'lights' && 'Lights'}
          {amenity === 'cupboard' && 'Cupboard'}
          {amenity === 'food' && 'Food'}
          {amenity === 'water' && 'Water'}
          {amenity === 'clean' && 'Cleaning'}
        </span>
      )
    ))
  ) : (
    <span className="black-text">No amenities listed</span>
  )}
</div>

          {/* Reviews */}
          {/* <div className="reviews-section">
            <h2 className="black-text">PG Reviews</h2>
            <div className="rating">
              <span>Overall Rating: {hostelData.rating || "N/A"}</span>
              <FaStar color="#FFD700" />
            </div>

            {hostelData.reviews?.length ? (
              hostelData.reviews.map((review, idx) => (
                <div
                  key={idx}
                  className={`review-card ${
                    currentReviewIndex === idx ? "active" : ""
                  }`}
                >
                  <p className="black-text">
                    ⭐ {review.rating || "No rating"}{" "}
                    {review.review_text || "No review text."}
                  </p>
                </div>
              ))
            ) : (
              <p className="black-text">No reviews available yet.</p>
            )}
          </div>
        </div>
      </div> */}

       <div className="reviews-section">
            <h2 className="black-text">PG Reviews</h2>
            <div className="rating-overviews">
              <div className="avg-rating">
                <span className="rating-number">{avgRating.toFixed(1)}</span>
                {renderStars(avgRating)}
                <span className="total-reviews">({totalReviews} reviews)</span>
              </div>
            </div>

            <div className="reviews-list">
              {dummyReviews.slice(0, 1).map((review) => (
                <div key={review.id} className="review-item">
                  <div className="reviewer-info">
                    <img
                      src={review.avatar}
                      alt={review.name}
                      className="reviewer-avatar"
                    />
                    <div>
                      <h4 className="reviewer-name">{review.name}</h4>
                      <p className="review-date">{review.date}</p>
                    </div>
                  </div>
                  <div className="review-content">
                    {renderStars(review.rating)}
                    <p className="review-text">{review.comment}</p>
                  </div>
                </div>
              ))}
              {/* {dummyReviews.length > 3 && (
                <button 
                  className="view-all-reviews"
                  onClick={() => alert("View all reviews feature coming soon!")}
                >
                  View All Reviews ({dummyReviews.length})
                </button>
              )} */}
            </div>
          </div>
        </div>
      </div>

      {/* Food Menu */}
<div className="food-menu">
  <h2 className="black-text">Food Menu</h2>
  
  {/* Debug info - you can remove this after fixing */}
  <div style={{ fontSize: '12px', color: '#666', marginBottom: '10px' }}>
    Debug: Hostel ID: {hostelId} | Menu Items: {foodMenu.length} | Loading: {menuLoading ? 'Yes' : 'No'}
  </div>
  
  {menuLoading ? (
    <div className="loading-food">
      <p>Loading food menu...</p>
      <p style={{ fontSize: '14px', color: '#888' }}>Please wait while we fetch the meal details</p>
    </div>
  ) : foodMenu.length > 0 ? (
    <>
      <table className="food-table">
        <thead>
          <tr>
            <th>DAY</th>
            <th>BREAKFAST</th>
            <th>LUNCH</th>
            <th>DINNER</th>
          </tr>
        </thead>
        <tbody>
          {foodMenu.map((day, idx) => (
            <tr key={idx} className="food-row">
              <td className="day-cell">
                <strong>{day.day}</strong>
              </td>
              <td className="meal-cell">
                {typeof day.breakfast === 'string' ? day.breakfast : 
                 Array.isArray(day.breakfast) ? day.breakfast.join(', ') : 
                 JSON.stringify(day.breakfast)}
              </td>
              <td className="meal-cell">
                {typeof day.lunch === 'string' ? day.lunch : 
                 Array.isArray(day.lunch) ? day.lunch.join(', ') : 
                 JSON.stringify(day.lunch)}
              </td>
              <td className="meal-cell">
                {typeof day.dinner === 'string' ? day.dinner : 
                 Array.isArray(day.dinner) ? day.dinner.join(', ') : 
                 JSON.stringify(day.dinner)}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <p className="food-menu-note">Menu is subject to change based on availability and season</p>
    </>
  ) : (
    <div className="no-food-menu">
      <p>🍽️ No food menu available for this hostel</p>
      <p className="small-text">
        The hostel hasn't provided a food menu yet. 
        You can contact them directly for meal information.
      </p>
      <button 
        className="contact-hostel-btn"
        onClick={() => alert("Contact feature coming soon!")}
      >
        Contact Hostel
      </button>
    </div>
  )}
</div>

      {/* Book Now */}
      <div className="book-now">
        <button className="book-now-btn" onClick={handleBookNow}>
          Book Now
        </button>{" "}
      </div>

      {isPopupOpen && (
        <Popup
          hostel={hostelData}
          onClose={() => setIsPopupOpen(false)}
          onContinue={handleContinue}
        />
      )}
    </div>
  );
};

export default HostelPage;
