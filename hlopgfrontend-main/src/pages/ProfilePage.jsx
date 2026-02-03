// // // // // src/pages/ProfilePage.jsx
// // // // import React, { useState, useEffect } from "react";
// // // // import { useNavigate } from "react-router-dom";
// // // // import { 
// // // //   FaArrowLeft, 
// // // //   FaUser, 
// // // //   FaBell, 
// // // //   FaKey, 
// // // //   FaFileAlt, 
// // // //   FaSignOutAlt,
// // // //   FaEdit,
// // // //   FaPhone,
// // // //   FaVenusMars,
// // // //   FaMapMarkerAlt,
// // // //   FaEnvelope,
// // // //   FaList
// // // // } from "react-icons/fa";
// // // // import api from "../api";
// // // // import "./ProfilePage.css";

// // // // const ProfilePage = () => {
// // // //   const navigate = useNavigate();
// // // //   const [user, setUser] = useState(null);
// // // //   const [loading, setLoading] = useState(true);
// // // //   const [activeSection, setActiveSection] = useState("basic-info"); // Default to Basic Information

// // // //   useEffect(() => {
// // // //     const fetchUserData = async () => {
// // // //       const token = localStorage.getItem("hlopgToken");
// // // //       const cachedOwner = localStorage.getItem("hlopgOwner");

// // // //       if (cachedOwner) {
// // // //         try {
// // // //           setUser(JSON.parse(cachedOwner));
// // // //         } catch (e) {
// // // //           console.error("Error parsing cached owner:", e);
// // // //         }
// // // //       }

// // // //       try {
// // // //         if (token) {
// // // //           const ownerRes = await api.get("/auth/ownerid", {
// // // //             headers: { Authorization: `Bearer ${token}` },
// // // //           });
          
// // // //           if (ownerRes.status === 200 && ownerRes.data) {
// // // //             const ownerData = {
// // // //               id: ownerRes.data.id,
// // // //               name: ownerRes.data.name,
// // // //               email: ownerRes.data.email,
// // // //               phone: ownerRes.data.phone,
// // // //               userType: ownerRes.data.userType,
// // // //               owner_id: ownerRes.data.id,
// // // //               gender: ownerRes.data.gender || "Male",
// // // //               city: ownerRes.data.city || "Hyderabad",
// // // //               profileInitial: ownerRes.data.name ? ownerRes.data.name.charAt(0).toUpperCase() : "O"
// // // //             };
            
// // // //             setUser(ownerData);
// // // //             localStorage.setItem("hlopgOwner", JSON.stringify(ownerData));
// // // //           }
// // // //         }
// // // //       } catch (error) {
// // // //         console.error("Error fetching user data:", error);
// // // //       } finally {
// // // //         setLoading(false);
// // // //       }
// // // //     };

// // // //     fetchUserData();
// // // //   }, []);

// // // //   const handleLogout = () => {
// // // //     localStorage.removeItem("hlopgToken");
// // // //     localStorage.removeItem("hlopgUser");
// // // //     localStorage.removeItem("hlopgOwner");
// // // //     alert("Logged out successfully!");
// // // //     navigate("/");
// // // //   };

// // // //   const handleBack = () => {
// // // //     navigate("/owner-dashboard");
// // // //   };

// // // //   const handleEditProfile = () => {
// // // //     alert("Edit profile feature coming soon!");
// // // //   };

// // // //   const handleMyPGsInfo = () => {
// // // //     setActiveSection("my-pgs");
// // // //   };

// // // //   const handleNotifications = () => {
// // // //     setActiveSection("notifications");
// // // //   };

// // // //   const handleChangePassword = () => {
// // // //     setActiveSection("change-password");
// // // //   };

// // // //   const handleTerms = () => {
// // // //     setActiveSection("terms");
// // // //   };

// // // //   const renderContent = () => {
// // // //     switch (activeSection) {
// // // //       case "basic-info":
// // // //         return (
// // // //           <div className="content-section">
// // // //             <div className="content-header">
// // // //               <h2>BASIC INFORMATION</h2>
// // // //               <button className="change-btn" onClick={handleEditProfile}>
// // // //                 Change
// // // //               </button>
// // // //             </div>
            
// // // //             <div className="info-content">
// // // //               <div className="info-item">
// // // //                 <div className="info-label">First Name</div>
// // // //                 <div className="info-value">
// // // //                   {user?.name ? user.name.split(' ')[0] : "Thota"}
// // // //                 </div>
// // // //               </div>
              
// // // //               <div className="info-item">
// // // //                 <div className="info-label">Mobile Number</div>
// // // //                 <div className="info-value">
// // // //                   {user?.phone || "1234567890"}
// // // //                 </div>
// // // //               </div>
              
// // // //               <div className="info-item">
// // // //                 <div className="info-label">Gender</div>
// // // //                 <div className="info-value">
// // // //                   {user?.gender || "Male"}
// // // //                 </div>
// // // //               </div>
              
// // // //               <div className="info-item">
// // // //                 <div className="info-label">City</div>
// // // //                 <div className="info-value">
// // // //                   {user?.city || "Hyderabad"}
// // // //                 </div>
// // // //               </div>
// // // //             </div>
// // // //           </div>
// // // //         );

// // // //       case "my-pgs":
// // // //         return (
// // // //           <div className="content-section">
// // // //             <div className="content-header">
// // // //               <h2>MY PG'S INFO</h2>
// // // //             </div>
// // // //             <div className="placeholder-content">
// // // //               <p>My PG's Information will be displayed here.</p>
// // // //               <p>Feature coming soon!</p>
// // // //             </div>
// // // //           </div>
// // // //         );

// // // //       case "notifications":
// // // //         return (
// // // //           <div className="content-section">
// // // //             <div className="content-header">
// // // //               <h2>NOTIFICATIONS</h2>
// // // //               <span className="badge">3 new</span>
// // // //             </div>
// // // //             <div className="placeholder-content">
// // // //               <p>No new notifications</p>
// // // //               <p>You're all caught up!</p>
// // // //             </div>
// // // //           </div>
// // // //         );

// // // //       case "change-password":
// // // //         return (
// // // //           <div className="content-section">
// // // //             <div className="content-header">
// // // //               <h2>CHANGE PASSWORD</h2>
// // // //             </div>
// // // //             <div className="placeholder-content">
// // // //               <p>Change Password form will be here.</p>
// // // //               <p>Feature coming soon!</p>
// // // //             </div>
// // // //           </div>
// // // //         );

// // // //       case "terms":
// // // //         return (
// // // //           <div className="content-section">
// // // //             <div className="content-header">
// // // //               <h2>TERMS AND CONDITIONS</h2>
// // // //             </div>
// // // //             <div className="placeholder-content">
// // // //               <p>Terms and Conditions content will be displayed here.</p>
// // // //               <p>Coming soon!</p>
// // // //             </div>
// // // //           </div>
// // // //         );

// // // //       default:
// // // //         return (
// // // //           <div className="content-section">
// // // //             <div className="content-header">
// // // //               <h2>BASIC INFORMATION</h2>
// // // //               <button className="change-btn" onClick={handleEditProfile}>
// // // //                 Change
// // // //               </button>
// // // //             </div>
// // // //             <div className="info-content">
// // // //               <div className="info-item">
// // // //                 <div className="info-label">First Name</div>
// // // //                 <div className="info-value">
// // // //                   {user?.name ? user.name.split(' ')[0] : "Thota"}
// // // //                 </div>
// // // //               </div>
              
// // // //               <div className="info-item">
// // // //                 <div className="info-label">Mobile Number</div>
// // // //                 <div className="info-value">
// // // //                   {user?.phone || "1234567890"}
// // // //                 </div>
// // // //               </div>
              
// // // //               <div className="info-item">
// // // //                 <div className="info-label">Gender</div>
// // // //                 <div className="info-value">
// // // //                   {user?.gender || "Male"}
// // // //                 </div>
// // // //               </div>
              
// // // //               <div className="info-item">
// // // //                 <div className="info-label">City</div>
// // // //                 <div className="info-value">
// // // //                   {user?.city || "Hyderabad"}
// // // //                 </div>
// // // //               </div>
// // // //             </div>
// // // //           </div>
// // // //         );
// // // //     }
// // // //   };

// // // //   if (loading) {
// // // //     return (
// // // //       <div className="profile-loading">
// // // //         <div className="loading-spinner"></div>
// // // //         <p>Loading profile...</p>
// // // //       </div>
// // // //     );
// // // //   }

// // // //   return (
// // // //     <div className="profile-page-container">
// // // //       {/* No header - clean layout */}
      
// // // //       <div className="profile-layout">
// // // //         {/* Left Sidebar with Back Button at top */}
// // // //         <div className="profile-sidebar">
// // // //           {/* Back Button at top of sidebar */}
// // // //           <button className="sidebar-back-btn" onClick={handleBack}>
// // // //             <FaArrowLeft /> Back
// // // //           </button>
          
// // // //           <div className="sidebar-content">
// // // //             <h3>My Profile</h3>
// // // //             <nav className="sidebar-nav">
// // // //               <button 
// // // //                 className={`sidebar-nav-item ${activeSection === "basic-info" ? "active" : ""}`}
// // // //                 onClick={() => setActiveSection("basic-info")}
// // // //               >
// // // //                 <span className="nav-icon"><FaUser /></span>
// // // //                 <span className="nav-text">Basic Information</span>
// // // //               </button>
              
// // // //               <button 
// // // //                 className={`sidebar-nav-item ${activeSection === "my-pgs" ? "active" : ""}`}
// // // //                 onClick={handleMyPGsInfo}
// // // //               >
// // // //                 <span className="nav-icon"><FaList /></span>
// // // //                 <span className="nav-text">My PG's Info</span>
// // // //               </button>
              
// // // //               <button 
// // // //                 className={`sidebar-nav-item ${activeSection === "notifications" ? "active" : ""}`}
// // // //                 onClick={handleNotifications}
// // // //               >
// // // //                 <span className="nav-icon"><FaBell /></span>
// // // //                 <span className="nav-text">Notifications</span>
// // // //                 <span className="nav-badge">3</span>
// // // //               </button>
              
// // // //               <button 
// // // //                 className={`sidebar-nav-item ${activeSection === "change-password" ? "active" : ""}`}
// // // //                 onClick={handleChangePassword}
// // // //               >
// // // //                 <span className="nav-icon"><FaKey /></span>
// // // //                 <span className="nav-text">Change Password</span>
// // // //               </button>
              
// // // //               <button 
// // // //                 className={`sidebar-nav-item ${activeSection === "terms" ? "active" : ""}`}
// // // //                 onClick={handleTerms}
// // // //               >
// // // //                 <span className="nav-icon"><FaFileAlt /></span>
// // // //                 <span className="nav-text">Terms And Conditions</span>
// // // //               </button>
              
// // // //               <button 
// // // //                 className="sidebar-nav-item logout-item"
// // // //                 onClick={handleLogout}
// // // //               >
// // // //                 <span className="nav-icon"><FaSignOutAlt /></span>
// // // //                 <span className="nav-text">Logout</span>
// // // //               </button>
// // // //             </nav>
// // // //           </div>
// // // //         </div>

// // // //         {/* Right Content Area */}
// // // //         <div className="profile-content-area">
// // // //           {/* User Info Header - Purple Section */}
// // // //           <div className="profile-user-header">
// // // //             <div className="user-avatar-circle">
// // // //               {user?.profileInitial || "O"}
// // // //             </div>
// // // //             <div className="user-header-info">
// // // //               <h2>{user?.name || "Owner"}</h2>
// // // //               <p>{user?.email || "owner@example.com"}</p>
// // // //             </div>
// // // //           </div>

// // // //           {/* Main Content */}
// // // //           <div className="profile-main-content">
// // // //             {renderContent()}
// // // //           </div>
// // // //         </div>
// // // //       </div>
// // // //     </div>
// // // //   );
// // // // };

// // // // export default ProfilePage;

// // // // src/pages/ProfilePage.jsx
// // // import React, { useState, useEffect } from "react";
// // // import { useNavigate } from "react-router-dom";
// // // import { 
// // //   FaArrowLeft, 
// // //   FaUser, 
// // //   FaBell, 
// // //   FaKey, 
// // //   FaFileAlt, 
// // //   FaSignOutAlt,
// // //   FaEdit,
// // //   FaList
// // // } from "react-icons/fa";
// // // import api from "../api";
// // // import "./ProfilePage.css";

// // // const ProfilePage = () => {
// // //   const navigate = useNavigate();
// // //   const [user, setUser] = useState(null);
// // //   const [loading, setLoading] = useState(true);
// // //   const [activeSection, setActiveSection] = useState("basic-info");

// // //   useEffect(() => {
// // //     const fetchUserData = async () => {
// // //       const token = localStorage.getItem("hlopgToken");
// // //       const cachedOwner = localStorage.getItem("hlopgOwner");

// // //       if (cachedOwner) {
// // //         try {
// // //           setUser(JSON.parse(cachedOwner));
// // //         } catch (e) {
// // //           console.error("Error parsing cached owner:", e);
// // //         }
// // //       }

// // //       try {
// // //         if (token) {
// // //           const ownerRes = await api.get("/auth/ownerid", {
// // //             headers: { Authorization: `Bearer ${token}` },
// // //           });
          
// // //           if (ownerRes.status === 200 && ownerRes.data) {
// // //             const ownerData = {
// // //               id: ownerRes.data.id,
// // //               name: ownerRes.data.name,
// // //               email: ownerRes.data.email,
// // //               phone: ownerRes.data.phone,
// // //               userType: ownerRes.data.userType,
// // //               owner_id: ownerRes.data.id,
// // //               gender: ownerRes.data.gender || "Male",
// // //               city: ownerRes.data.city || "Hyderabad",
// // //               profileInitial: ownerRes.data.name ? ownerRes.data.name.charAt(0).toUpperCase() : "O"
// // //             };
            
// // //             setUser(ownerData);
// // //             localStorage.setItem("hlopgOwner", JSON.stringify(ownerData));
// // //           }
// // //         }
// // //       } catch (error) {
// // //         console.error("Error fetching user data:", error);
// // //       } finally {
// // //         setLoading(false);
// // //       }
// // //     };

// // //     fetchUserData();
// // //   }, []);

// // //   const handleLogout = () => {
// // //     localStorage.removeItem("hlopgToken");
// // //     localStorage.removeItem("hlopgUser");
// // //     localStorage.removeItem("hlopgOwner");
// // //     alert("Logged out successfully!");
// // //     navigate("/");
// // //   };

// // //   const handleBack = () => {
// // //     navigate("/owner-dashboard");
// // //   };

// // //   const handleEditProfile = () => {
// // //     alert("Edit profile feature coming soon!");
// // //   };

// // //   const renderContent = () => {
// // //     switch (activeSection) {
// // //       case "basic-info":
// // //         return (
// // //           <>
// // //             <div className="section-header">
// // //               <h2>BASIC INFORMATION</h2>
// // //               <button className="change-btn" onClick={handleEditProfile}>
// // //                 Change
// // //               </button>
// // //             </div>
            
// // //             <div className="info-list">
// // //               <div className="info-row">
// // //                 <div className="info-label">First Name</div>
// // //                 <div className="info-value">
// // //                   {user?.name ? user.name.split(' ')[0] : "Thota"}
// // //                 </div>
// // //               </div>
              
// // //               <div className="info-row">
// // //                 <div className="info-label">Mobile Number</div>
// // //                 <div className="info-value">
// // //                   {user?.phone || "1234567890"}
// // //                 </div>
// // //               </div>
              
// // //               <div className="info-row">
// // //                 <div className="info-label">Gender</div>
// // //                 <div className="info-value">
// // //                   {user?.gender || "Male"}
// // //                 </div>
// // //               </div>
              
// // //               <div className="info-row">
// // //                 <div className="info-label">City</div>
// // //                 <div className="info-value">
// // //                   {user?.city || "Hyderabad"}
// // //                 </div>
// // //               </div>
// // //             </div>
// // //           </>
// // //         );

// // //       case "my-pgs":
// // //         return (
// // //           <>
// // //             <div className="section-header">
// // //               <h2>MY PG'S INFO</h2>
// // //             </div>
// // //             <div className="placeholder-content">
// // //               <p>My PG's Information will be displayed here.</p>
// // //             </div>
// // //           </>
// // //         );

// // //       case "notifications":
// // //         return (
// // //           <>
// // //             <div className="section-header">
// // //               <h2>NOTIFICATIONS</h2>
// // //               <span className="badge">3</span>
// // //             </div>
// // //             <div className="placeholder-content">
// // //               <p>No new notifications</p>
// // //             </div>
// // //           </>
// // //         );

// // //       case "change-password":
// // //         return (
// // //           <>
// // //             <div className="section-header">
// // //               <h2>CHANGE PASSWORD</h2>
// // //             </div>
// // //             <div className="placeholder-content">
// // //               <p>Change Password form will be here.</p>
// // //             </div>
// // //           </>
// // //         );

// // //       case "terms":
// // //         return (
// // //           <>
// // //             <div className="section-header">
// // //               <h2>TERMS AND CONDITIONS</h2>
// // //             </div>
// // //             <div className="placeholder-content">
// // //               <p>Terms and Conditions content will be displayed here.</p>
// // //             </div>
// // //           </>
// // //         );

// // //       default:
// // //         return (
// // //           <>
// // //             <div className="section-header">
// // //               <h2>BASIC INFORMATION</h2>
// // //               <button className="change-btn" onClick={handleEditProfile}>
// // //                 Change
// // //               </button>
// // //             </div>
            
// // //             <div className="info-list">
// // //               <div className="info-row">
// // //                 <div className="info-label">First Name</div>
// // //                 <div className="info-value">
// // //                   {user?.name ? user.name.split(' ')[0] : "Thota"}
// // //                 </div>
// // //               </div>
              
// // //               <div className="info-row">
// // //                 <div className="info-label">Mobile Number</div>
// // //                 <div className="info-value">
// // //                   {user?.phone || "1234567890"}
// // //                 </div>
// // //               </div>
              
// // //               <div className="info-row">
// // //                 <div className="info-label">Gender</div>
// // //                 <div className="info-value">
// // //                   {user?.gender || "Male"}
// // //                 </div>
// // //               </div>
              
// // //               <div className="info-row">
// // //                 <div className="info-label">City</div>
// // //                 <div className="info-value">
// // //                   {user?.city || "Hyderabad"}
// // //                 </div>
// // //               </div>
// // //             </div>
// // //           </>
// // //         );
// // //     }
// // //   };

// // //   if (loading) {
// // //     return (
// // //       <div className="profile-loading">
// // //         <div className="loading-spinner"></div>
// // //         <p>Loading...</p>
// // //       </div>
// // //     );
// // //   }

// // //   return (
// // //     <div className="profile-container">
// // //       {/* Back Button at Top */}
// // //       <div className="back-button-container">
// // //         <button className="back-btn" onClick={handleBack}>
// // //           <FaArrowLeft /> Back
// // //         </button>
// // //       </div>

// // //       <div className="profile-layout">
// // //         {/* Left Sidebar */}
// // //         <div className="profile-sidebar">
// // //           <div className="sidebar-menu">
// // //             <div 
// // //               className={`menu-item ${activeSection === "basic-info" ? "active" : ""}`}
// // //               onClick={() => setActiveSection("basic-info")}
// // //             >
// // //               <span className="menu-icon"><FaUser /></span>
// // //               <span className="menu-text">Basic Information</span>
// // //             </div>
            
// // //             <div 
// // //               className={`menu-item ${activeSection === "my-pgs" ? "active" : ""}`}
// // //               onClick={() => setActiveSection("my-pgs")}
// // //             >
// // //               <span className="menu-icon"><FaList /></span>
// // //               <span className="menu-text">My PG's Info</span>
// // //             </div>
            
// // //             <div 
// // //               className={`menu-item ${activeSection === "notifications" ? "active" : ""}`}
// // //               onClick={() => setActiveSection("notifications")}
// // //             >
// // //               <span className="menu-icon"><FaBell /></span>
// // //               <span className="menu-text">Notifications</span>
// // //               <span className="menu-badge">3</span>
// // //             </div>
            
// // //             <div 
// // //               className={`menu-item ${activeSection === "change-password" ? "active" : ""}`}
// // //               onClick={() => setActiveSection("change-password")}
// // //             >
// // //               <span className="menu-icon"><FaKey /></span>
// // //               <span className="menu-text">Change Password</span>
// // //             </div>
            
// // //             <div 
// // //               className={`menu-item ${activeSection === "terms" ? "active" : ""}`}
// // //               onClick={() => setActiveSection("terms")}
// // //             >
// // //               <span className="menu-icon"><FaFileAlt /></span>
// // //               <span className="menu-text">Terms And Conditions</span>
// // //             </div>
            
// // //             <div className="menu-divider"></div>
            
// // //             <div className="menu-item logout-item" onClick={handleLogout}>
// // //               <span className="menu-icon"><FaSignOutAlt /></span>
// // //               <span className="menu-text">Logout</span>
// // //             </div>
// // //           </div>
// // //         </div>

// // //         {/* Right Content Area */}
// // //         <div className="profile-content">
// // //           {renderContent()}
// // //         </div>
// // //       </div>
// // //     </div>
// // //   );
// // // };

// // // export default ProfilePage;
// // // src/pages/ProfilePage.jsx
// // import React, { useState, useEffect } from "react";
// // import { useNavigate } from "react-router-dom";
// // import { 
// //   FaArrowLeft, 
// //   FaUser, 
// //   FaBell, 
// //   FaKey, 
// //   FaFileAlt, 
// //   FaSignOutAlt,
// //   FaEdit,
// //   FaPhone,
// //   FaVenusMars,
// //   FaMapMarkerAlt,
// //   FaEnvelope,
// //   FaList
// // } from "react-icons/fa";
// // import api from "../api";
// // import "./ProfilePage.css";

// // const ProfilePage = () => {
// //   const navigate = useNavigate();
// //   const [user, setUser] = useState(null);
// //   const [loading, setLoading] = useState(true);
// //   const [activeSection, setActiveSection] = useState("basic-info");

// //   useEffect(() => {
// //     const fetchUserData = async () => {
// //       const token = localStorage.getItem("hlopgToken");
// //       const cachedOwner = localStorage.getItem("hlopgOwner");

// //       if (cachedOwner) {
// //         try {
// //           setUser(JSON.parse(cachedOwner));
// //         } catch (e) {
// //           console.error("Error parsing cached owner:", e);
// //         }
// //       }

// //       try {
// //         if (token) {
// //           const ownerRes = await api.get("/auth/ownerid", {
// //             headers: { Authorization: `Bearer ${token}` },
// //           });
          
// //           if (ownerRes.status === 200 && ownerRes.data) {
// //             // Split full name into first and last name
// //             const fullName = ownerRes.data.name || "Thota Chaitanya";
// //             const nameParts = fullName.split(' ');
// //             const firstName = nameParts[0] || "Thota";
// //             // const lastName = nameParts.slice(1).join(' ') || "Chaitanya";
            
// //             const ownerData = {
// //               id: ownerRes.data.id,
// //               name: fullName,
// //               firstName: firstName,
// //             //   lastName: lastName,
// //               email: ownerRes.data.email || "hlopg123@gmail.com",
// //               phone: ownerRes.data.phone || "1234567890",
// //               userType: ownerRes.data.userType,
// //               owner_id: ownerRes.data.id,
// //               gender: ownerRes.data.gender || "Male",
// //               city: ownerRes.data.city || "Hyderabad",
// //               profileInitial: fullName ? fullName.charAt(0).toUpperCase() : "T"
// //             };
            
// //             setUser(ownerData);
// //             localStorage.setItem("hlopgOwner", JSON.stringify(ownerData));
// //           }
// //         }
// //       } catch (error) {
// //         console.error("Error fetching user data:", error);
// //       } finally {
// //         setLoading(false);
// //       }
// //     };

// //     fetchUserData();
// //   }, []);

// //   const handleLogout = () => {
// //     localStorage.removeItem("hlopgToken");
// //     localStorage.removeItem("hlopgUser");
// //     localStorage.removeItem("hlopgOwner");
// //     alert("Logged out successfully!");
// //     navigate("/");
// //   };

// //   const handleBack = () => {
// //     navigate("/owner-dashboard");
// //   };

// //   const handleEditProfile = () => {
// //     alert("Edit profile feature coming soon!");
// //   };

// //   const renderContent = () => {
// //     switch (activeSection) {
// //       case "basic-info":
// //         return (
// //           <>
// //             <div className="section-header">
// //               <h2>BASIC INFORMATION</h2>
// //               <button className="change-btn" onClick={handleEditProfile}>
// //                 Change
// //               </button>
// //             </div>
            
// //             <div className="info-grid">
// //               {/* Row 1: First Name & Last Name */}
// //               <div className="info-row">
// //                 <div className="info-group">
// //                   <div className="info-label">First Name</div>
// //                   <div className="info-value">
// //                     {user?.firstName || "Thota"}
// //                   </div>
// //                 </div>
// //                 {/* <div className="info-group">
// //                   <div className="info-label">Last Name</div>
// //                   <div className="info-value">
// //                     {user?.lastName || "Chaitanya"}
// //                   </div>
// //                 </div> */}
// //               </div>
              
// //               {/* Row 2: Mobile Number & Gender */}
// //               <div className="info-row">
// //                 <div className="info-group">
// //                   <div className="info-label">Mobile Number</div>
// //                   <div className="info-value">
// //                     {user?.phone || "1234567890"}
// //                   </div>
// //                 </div>
// //                 <div className="info-group">
// //                   <div className="info-label">Gender</div>
// //                   <div className="info-value">
// //                     {user?.gender || "Male"}
// //                   </div>
// //                 </div>
// //               </div>
              
// //               {/* Row 3: City & Mail */}
// //               <div className="info-row">
// //                 <div className="info-group">
// //                   <div className="info-label">City</div>
// //                   <div className="info-value">
// //                     {user?.city || "Hyderabad"}
// //                   </div>
// //                 </div>
// //                 <div className="info-group">
// //                   <div className="info-label">Mail</div>
// //                   <div className="info-value">
// //                     {user?.email || "hlopg123@gmail.com"}
// //                   </div>
// //                 </div>
// //               </div>
// //             </div>
// //           </>
// //         );

// //       case "my-pgs":
// //         return (
// //           <>
// //             <div className="section-header">
// //               <h2>MY PG'S INFO</h2>
// //             </div>
// //             <div className="placeholder-content">
// //               <p>My PG's Information will be displayed here.</p>
// //             </div>
// //           </>
// //         );

// //       case "notifications":
// //         return (
// //           <>
// //             <div className="section-header">
// //               <h2>NOTIFICATIONS</h2>
// //               <span className="badge">3</span>
// //             </div>
// //             <div className="placeholder-content">
// //               <p>No new notifications</p>
// //             </div>
// //           </>
// //         );

// //       case "change-password":
// //         return (
// //           <>
// //             <div className="section-header">
// //               <h2>CHANGE PASSWORD</h2>
// //             </div>
// //             <div className="placeholder-content">
// //               <p>Change Password form will be here.</p>
// //             </div>
// //           </>
// //         );

// //       case "terms":
// //         return (
// //           <>
// //             <div className="section-header">
// //               <h2>TERMS AND CONDITIONS</h2>
// //             </div>
// //             <div className="placeholder-content">
// //               <p>Terms and Conditions content will be displayed here.</p>
// //             </div>
// //           </>
// //         );

// //       default:
// //         return (
// //           <>
// //             <div className="section-header">
// //               <h2>BASIC INFORMATION</h2>
// //               <button className="change-btn" onClick={handleEditProfile}>
// //                 Change
// //               </button>
// //             </div>
            
// //             <div className="info-grid">
// //               {/* Row 1: First Name & Last Name */}
// //               <div className="info-row">
// //                 <div className="info-group">
// //                   <div className="info-label">First Name</div>
// //                   <div className="info-value">
// //                     {user?.name || ""}
// //                   </div>
// //                 </div>
// //                 {/* <div className="info-group">
// //                   <div className="info-label">Last Name</div>
// //                   <div className="info-value">
// //                     {user?.lastName || "Chaitanya"}
// //                   </div>
// //                 </div> */}
// //               </div>
              
// //               {/* Row 2: Mobile Number & Gender */}
// //               <div className="info-row">
// //                 <div className="info-group">
// //                   <div className="info-label">Mobile Number</div>
// //                   <div className="info-value">
// //                     {user?.phone || "1234567890"}
// //                   </div>
// //                 </div>
// //                 <div className="info-group">
// //                   <div className="info-label">Gender</div>
// //                   <div className="info-value">
// //                     {user?.gender || "Male"}
// //                   </div>
// //                 </div>
// //               </div>
              
// //               {/* Row 3: City & Mail */}
// //               <div className="info-row">
// //                 <div className="info-group">
// //                   <div className="info-label">City</div>
// //                   <div className="info-value">
// //                     {user?.city || "Hyderabad"}
// //                   </div>
// //                 </div>
// //                 <div className="info-group">
// //                   <div className="info-label">Mail</div>
// //                   <div className="info-value">
// //                     {user?.email || "hlopg123@gmail.com"}
// //                   </div>
// //                 </div>
// //               </div>
// //             </div>
// //           </>
// //         );
// //     }
// //   };

// //   if (loading) {
// //     return (
// //       <div className="profile-loading">
// //         <div className="loading-spinner"></div>
// //         <p>Loading...</p>
// //       </div>
// //     );
// //   }

// //   return (
// //     <div className="profile-container">
// //       {/* Back Button at Top */}
// //       <div className="back-button-container">
// //         <button className="back-btn" onClick={handleBack}>
// //           <FaArrowLeft /> Back
// //         </button>
// //       </div>

// //       <div className="profile-layout">
// //         {/* Left Sidebar */}
// //         <div className="profile-sidebar">
// //           <div className="sidebar-menu">
// //             <div 
// //               className={`menu-item ${activeSection === "basic-info" ? "active" : ""}`}
// //               onClick={() => setActiveSection("basic-info")}
// //             >
// //               <span className="menu-icon"><FaUser /></span>
// //               <span className="menu-text">Basic Information</span>
// //             </div>
            
// //             <div 
// //               className={`menu-item ${activeSection === "my-pgs" ? "active" : ""}`}
// //               onClick={() => setActiveSection("my-pgs")}
// //             >
// //               <span className="menu-icon"><FaList /></span>
// //               <span className="menu-text">My PG's Info</span>
// //             </div>
            
// //             <div 
// //               className={`menu-item ${activeSection === "notifications" ? "active" : ""}`}
// //               onClick={() => setActiveSection("notifications")}
// //             >
// //               <span className="menu-icon"><FaBell /></span>
// //               <span className="menu-text">Notifications</span>
// //               <span className="menu-badge">3</span>
// //             </div>
            
// //             <div 
// //               className={`menu-item ${activeSection === "change-password" ? "active" : ""}`}
// //               onClick={() => setActiveSection("change-password")}
// //             >
// //               <span className="menu-icon"><FaKey /></span>
// //               <span className="menu-text">Change Password</span>
// //             </div>
            
// //             <div 
// //               className={`menu-item ${activeSection === "terms" ? "active" : ""}`}
// //               onClick={() => setActiveSection("terms")}
// //             >
// //               <span className="menu-icon"><FaFileAlt /></span>
// //               <span className="menu-text">Terms And Conditions</span>
// //             </div>
            
// //             <div className="menu-divider"></div>
            
// //             <div className="menu-item logout-item" onClick={handleLogout}>
// //               <span className="menu-icon"><FaSignOutAlt /></span>
// //               <span className="menu-text">Logout</span>
// //             </div>
// //           </div>
// //         </div>

// //         {/* Right Content Area */}
// //         <div className="profile-content">
// //           {renderContent()}
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default ProfilePage;

// // src/pages/ProfilePage.jsx
// import React, { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import { 
//   FaArrowLeft, 
//   FaUser, 
//   FaBell, 
//   FaKey, 
//   FaFileAlt, 
//   FaSignOutAlt,
//   FaEdit,
//   FaPhone,
//   FaVenusMars,
//   FaMapMarkerAlt,
//   FaEnvelope,
//   FaList,
//   FaEye,
//   FaEyeSlash
// } from "react-icons/fa";
// import api from "../api";
// import "./ProfilePage.css";

// const ProfilePage = () => {
//   const navigate = useNavigate();
//   const [user, setUser] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [activeSection, setActiveSection] = useState("basic-info");
  
//   // Password change states
//   const [passwordData, setPasswordData] = useState({
//     currentPassword: "",
//     newPassword: "",
//     confirmPassword: ""
//   });
//   const [showPassword, setShowPassword] = useState({
//     current: false,
//     new: false,
//     confirm: false
//   });
//   const [passwordError, setPasswordError] = useState("");
//   const [passwordSuccess, setPasswordSuccess] = useState("");
//   const [changingPassword, setChangingPassword] = useState(false);
  
//   // Notifications state
//   const [notifications, setNotifications] = useState([
//     { id: 1, title: "New Booking", message: "Room 101 has been booked by Ravi Kumar", time: "2 hours ago", read: false },
//     { id: 2, title: "Payment Received", message: "₹15,000 received from Mohit Sharma", time: "1 day ago", read: true },
//     { id: 3, title: "Maintenance Alert", message: "Water heater in room 203 needs attention", time: "2 days ago", read: false },
//     { id: 4, title: "Review Received", message: "New review from Priya Patel (4.5 stars)", time: "3 days ago", read: true },
//     { id: 5, title: "PG Approval", message: "Your PG 'Sunrise Hostel' has been approved", time: "1 week ago", read: true }
//   ]);

//   // Terms and conditions
//   const termsContent = [
//     "1. Owner Responsibilities: PG owners are responsible for maintaining clean and safe living conditions.",
//     "2. Booking Policy: All bookings are subject to availability and verification.",
//     "3. Payment Terms: Payments must be made in advance as per the agreed terms.",
//     "4. Cancellation Policy: Cancellations must be made at least 7 days before check-in for full refund.",
//     "5. Guest Behavior: PG owners reserve the right to evict guests violating house rules.",
//     "6. Maintenance: Regular maintenance of facilities is mandatory.",
//     "7. Privacy: We respect your privacy and protect all personal information.",
//     "8. Updates: Terms may be updated periodically. Continued use implies acceptance."
//   ];

//   useEffect(() => {
//     const fetchUserData = async () => {
//       const token = localStorage.getItem("hlopgToken");
//       const cachedOwner = localStorage.getItem("hlopgOwner");

//       if (cachedOwner) {
//         try {
//           setUser(JSON.parse(cachedOwner));
//         } catch (e) {
//           console.error("Error parsing cached owner:", e);
//         }
//       }

//       try {
//         if (token) {
//           const ownerRes = await api.get("/auth/ownerid", {
//             headers: { Authorization: `Bearer ${token}` },
//           });
          
//           if (ownerRes.status === 200 && ownerRes.data) {
//             const fullName = ownerRes.data.name || "Thota Chaitanya";
//             const nameParts = fullName.split(' ');
//             const firstName = nameParts[0] || "Thota";
            
//             const ownerData = {
//               id: ownerRes.data.id,
//               name: fullName,
//               firstName: firstName,
//               email: ownerRes.data.email || "hlopg123@gmail.com",
//               phone: ownerRes.data.phone || "1234567890",
//               userType: ownerRes.data.userType,
//               owner_id: ownerRes.data.id,
//               gender: ownerRes.data.gender || "Male",
//               city: ownerRes.data.city || "Hyderabad",
//               profileInitial: fullName ? fullName.charAt(0).toUpperCase() : "T"
//             };
            
//             setUser(ownerData);
//             localStorage.setItem("hlopgOwner", JSON.stringify(ownerData));
//           }
//         }
//       } catch (error) {
//         console.error("Error fetching user data:", error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchUserData();
//   }, []);

//   const handleLogout = () => {
//     localStorage.removeItem("hlopgToken");
//     localStorage.removeItem("hlopgUser");
//     localStorage.removeItem("hlopgOwner");
//     alert("Logged out successfully!");
//     navigate("/");
//   };

//   const handleBack = () => {
//     navigate("/owner-dashboard");
//   };

//   const handleEditProfile = () => {
//     alert("Edit profile feature coming soon!");
//   };

//   const handlePasswordChange = (e) => {
//     const { name, value } = e.target;
//     setPasswordData(prev => ({
//       ...prev,
//       [name]: value
//     }));
//     // Clear errors when user starts typing
//     if (passwordError) setPasswordError("");
//     if (passwordSuccess) setPasswordSuccess("");
//   };

//   const togglePasswordVisibility = (field) => {
//     setShowPassword(prev => ({
//       ...prev,
//       [field]: !prev[field]
//     }));
//   };

//   const handleChangePasswordSubmit = async (e) => {
//     e.preventDefault();
    
//     // Validate passwords
//     if (!passwordData.currentPassword || !passwordData.newPassword || !passwordData.confirmPassword) {
//       setPasswordError("All fields are required");
//       return;
//     }
    
//     if (passwordData.newPassword.length < 6) {
//       setPasswordError("New password must be at least 6 characters long");
//       return;
//     }
    
//     if (passwordData.newPassword !== passwordData.confirmPassword) {
//       setPasswordError("New password and confirm password do not match");
//       return;
//     }
    
//     if (passwordData.currentPassword === passwordData.newPassword) {
//       setPasswordError("New password must be different from current password");
//       return;
//     }
    
//     try {
//       setChangingPassword(true);
//       setPasswordError("");
      
//       const token = localStorage.getItem("hlopgToken");
//       const response = await api.put("/auth/change-password", {
//         currentPassword: passwordData.currentPassword,
//         newPassword: passwordData.newPassword
//       }, {
//         headers: { Authorization: `Bearer ${token}` }
//       });
      
//       if (response.data.success) {
//         setPasswordSuccess("Password changed successfully!");
        
//         // Reset form
//         setPasswordData({
//           currentPassword: "",
//           newPassword: "",
//           confirmPassword: ""
//         });
        
//         // Clear success message after 3 seconds
//         setTimeout(() => {
//           setPasswordSuccess("");
//         }, 3000);
//       } else {
//         setPasswordError(response.data.message || "Failed to change password");
//       }
//     } catch (error) {
//       console.error("Error changing password:", error);
//       if (error.response?.status === 401) {
//         setPasswordError("Current password is incorrect");
//       } else if (error.response?.data?.message) {
//         setPasswordError(error.response.data.message);
//       } else {
//         setPasswordError("An error occurred. Please try again.");
//       }
//     } finally {
//       setChangingPassword(false);
//     }
//   };

//   const markNotificationAsRead = (id) => {
//     setNotifications(prev => 
//       prev.map(notification => 
//         notification.id === id ? { ...notification, read: true } : notification
//       )
//     );
//   };

//   const markAllAsRead = () => {
//     setNotifications(prev => 
//       prev.map(notification => ({ ...notification, read: true }))
//     );
//   };

//   const getUnreadCount = () => {
//     return notifications.filter(n => !n.read).length;
//   };

//   const renderContent = () => {
//     switch (activeSection) {
//       case "basic-info":
//         return (
//           <>
//             <div className="section-header">
//               <h2>BASIC INFORMATION</h2>
//               <button className="change-btn" onClick={handleEditProfile}>
//                 Change
//               </button>
//             </div>
            
//             <div className="info-grid">
//               {/* Row 1: First Name & Last Name */}
//               <div className="info-row">
//                 <div className="info-group">
//                   <div className="info-label">First Name</div>
//                   <div className="info-value">
//                     {user?.firstName || "Thota"}
//                   </div>
//                 </div>
//                 <div className="info-group">
//                   <div className="info-label">Last Name</div>
//                   <div className="info-value">
//                     {user?.name?.split(' ').slice(1).join(' ') || "Chaitanya"}
//                   </div>
//                 </div>
//               </div>
              
//               {/* Row 2: Mobile Number & Gender */}
//               <div className="info-row">
//                 <div className="info-group">
//                   <div className="info-label">Mobile Number</div>
//                   <div className="info-value">
//                     {user?.phone || "1234567890"}
//                   </div>
//                 </div>
//                 <div className="info-group">
//                   <div className="info-label">Gender</div>
//                   <div className="info-value">
//                     {user?.gender || "Male"}
//                   </div>
//                 </div>
//               </div>
              
//               {/* Row 3: City & Mail */}
//               <div className="info-row">
//                 <div className="info-group">
//                   <div className="info-label">City</div>
//                   <div className="info-value">
//                     {user?.city || "Hyderabad"}
//                   </div>
//                 </div>
//                 <div className="info-group">
//                   <div className="info-label">Mail</div>
//                   <div className="info-value">
//                     {user?.email || "hlopg123@gmail.com"}
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </>
//         );

//       case "my-pgs":
//         return (
//           <>
//             <div className="section-header">
//               <h2>MY PG'S INFO</h2>
//             </div>
//             <div className="pgs-info-content">
//               <div className="info-message">
//                 <p>This section will display detailed information about all your PGs.</p>
//                 <p>You can view occupancy rates, revenue, and manage individual PG settings.</p>
//               </div>
//               {/* <div className="coming-soon">
//                 <h3>Coming Soon!</h3>
//                 <p>Advanced PG management features are under development.</p>
//               </div> */}
//             </div>
//           </>
//         );

//       case "notifications":
//         return (
//           <>
//             <div className="section-header">
//               <h2>NOTIFICATIONS</h2>
//               <div className="header-actions">
//                 {getUnreadCount() > 0 && (
//                   <span className="badge">{getUnreadCount()} unread</span>
//                 )}
//                 <button className="mark-all-btn" onClick={markAllAsRead}>
//                   Mark all as read
//                 </button>
//               </div>
//             </div>
            
//             <div className="notifications-list">
//               {notifications.length === 0 ? (
//                 <div className="no-notifications">
//                   <p>No notifications yet</p>
//                 </div>
//               ) : (
//                 notifications.map(notification => (
//                   <div 
//                     key={notification.id} 
//                     className={`notification-item ${notification.read ? 'read' : 'unread'}`}
//                     onClick={() => markNotificationAsRead(notification.id)}
//                   >
//                     <div className="notification-content">
//                       <h4 className="notification-title">{notification.title}</h4>
//                       <p className="notification-message">{notification.message}</p>
//                       <span className="notification-time">{notification.time}</span>
//                     </div>
//                     {!notification.read && (
//                       <div className="notification-status">
//                         <span className="unread-dot"></span>
//                       </div>
//                     )}
//                   </div>
//                 ))
//               )}
//             </div>
//           </>
//         );

//       case "change-password":
//         return (
//           <>
//             <div className="section-header">
//               <h2>CHANGE PASSWORD</h2>
//             </div>
            
//             <form className="password-form" onSubmit={handleChangePasswordSubmit}>
//               {passwordSuccess && (
//                 <div className="success-message">
//                   <span>{passwordSuccess}</span>
//                 </div>
//               )}
              
//               {passwordError && (
//                 <div className="error-message">
//                   <span>{passwordError}</span>
//                 </div>
//               )}
              
//               <div className="form-group">
//                 <label htmlFor="currentPassword">
//                   Current Password <span className="required">*</span>
//                 </label>
//                 <div className="password-input-wrapper">
//                   <input
//                     type={showPassword.current ? "text" : "password"}
//                     id="currentPassword"
//                     name="currentPassword"
//                     value={passwordData.currentPassword}
//                     onChange={handlePasswordChange}
//                     placeholder="Enter your current password"
//                     required
//                   />
//                   <button 
//                     type="button"
//                     className="toggle-password"
//                     onClick={() => togglePasswordVisibility("current")}
//                   >
//                     {showPassword.current ? <FaEyeSlash /> : <FaEye />}
//                   </button>
//                 </div>
//               </div>
              
//               <div className="form-group">
//                 <label htmlFor="newPassword">
//                   New Password <span className="required">*</span>
//                 </label>
//                 <div className="password-input-wrapper">
//                   <input
//                     type={showPassword.new ? "text" : "password"}
//                     id="newPassword"
//                     name="newPassword"
//                     value={passwordData.newPassword}
//                     onChange={handlePasswordChange}
//                     placeholder="Enter new password (min. 6 characters)"
//                     required
//                     minLength="6"
//                   />
//                   <button 
//                     type="button"
//                     className="toggle-password"
//                     onClick={() => togglePasswordVisibility("new")}
//                   >
//                     {showPassword.new ? <FaEyeSlash /> : <FaEye />}
//                   </button>
//                 </div>
//                 <div className="password-hint">
//                   Password must be at least 6 characters long
//                 </div>
//               </div>
              
//               <div className="form-group">
//                 <label htmlFor="confirmPassword">
//                   Confirm New Password <span className="required">*</span>
//                 </label>
//                 <div className="password-input-wrapper">
//                   <input
//                     type={showPassword.confirm ? "text" : "password"}
//                     id="confirmPassword"
//                     name="confirmPassword"
//                     value={passwordData.confirmPassword}
//                     onChange={handlePasswordChange}
//                     placeholder="Confirm your new password"
//                     required
//                   />
//                   <button 
//                     type="button"
//                     className="toggle-password"
//                     onClick={() => togglePasswordVisibility("confirm")}
//                   >
//                     {showPassword.confirm ? <FaEyeSlash /> : <FaEye />}
//                   </button>
//                 </div>
//               </div>
              
//               <div className="form-actions">
//                 <button 
//                   type="button" 
//                   className="cancel-btn"
//                   onClick={() => {
//                     setPasswordData({
//                       currentPassword: "",
//                       newPassword: "",
//                       confirmPassword: ""
//                     });
//                     setPasswordError("");
//                     setPasswordSuccess("");
//                   }}
//                 >
//                   Cancel
//                 </button>
//                 <button 
//                   type="submit" 
//                   className="submit-btn"
//                   disabled={changingPassword}
//                 >
//                   {changingPassword ? "Changing..." : "Change Password"}
//                 </button>
//               </div>
//             </form>
//           </>
//         );

//       case "terms":
//         return (
//           <>
//             <div className="section-header">
//               <h2>TERMS AND CONDITIONS</h2>
//             </div>
            
//             <div className="terms-content">
//               <div className="terms-intro">
//                 <p>Please read these terms and conditions carefully before using our services as a PG Owner.</p>
//               </div>
              
//               <div className="terms-list">
//                 {termsContent.map((term, index) => (
//                   <div key={index} className="term-item">
//                     <span className="term-number">{index + 1}.</span>
//                     <span className="term-text">{term}</span>
//                   </div>
//                 ))}
//               </div>
              
//               <div className="terms-footer">
//                 <h4>Acceptance of Terms</h4>
//                 <p>By using our platform, you acknowledge that you have read, understood, and agree to be bound by these Terms and Conditions. If you do not agree to these terms, please do not use our services.</p>
                
//                 <h4>Contact Information</h4>
//                 <p>If you have any questions about these Terms, please contact us at:</p>
//                 <div className="contact-info">
//                   <p><strong>Email:</strong> support@hlopg.com</p>
//                   <p><strong>Phone:</strong> +91 9876543210</p>
//                   <p><strong>Address:</strong> 123 Tech Park, Hyderabad, Telangana</p>
//                 </div>
//               </div>
//             </div>
//           </>
//         );

//       default:
//         return (
//           <>
//             <div className="section-header">
//               <h2>BASIC INFORMATION</h2>
//               <button className="change-btn" onClick={handleEditProfile}>
//                 Change
//               </button>
//             </div>
            
//             <div className="info-grid">
//               <div className="info-row">
//                 <div className="info-group">
//                   <div className="info-label">First Name</div>
//                   <div className="info-value">
//                     {user?.firstName || "Thota"}
//                   </div>
//                 </div>
//                 <div className="info-group">
//                   <div className="info-label">Last Name</div>
//                   <div className="info-value">
//                     {user?.name?.split(' ').slice(1).join(' ') || "Chaitanya"}
//                   </div>
//                 </div>
//               </div>
              
//               <div className="info-row">
//                 <div className="info-group">
//                   <div className="info-label">Mobile Number</div>
//                   <div className="info-value">
//                     {user?.phone || "1234567890"}
//                   </div>
//                 </div>
//                 <div className="info-group">
//                   <div className="info-label">Gender</div>
//                   <div className="info-value">
//                     {user?.gender || "Male"}
//                   </div>
//                 </div>
//               </div>
              
//               <div className="info-row">
//                 <div className="info-group">
//                   <div className="info-label">City</div>
//                   <div className="info-value">
//                     {user?.city || "Hyderabad"}
//                   </div>
//                 </div>
//                 <div className="info-group">
//                   <div className="info-label">Mail</div>
//                   <div className="info-value">
//                     {user?.email || "hlopg123@gmail.com"}
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </>
//         );
//     }
//   };

//   if (loading) {
//     return (
//       <div className="profile-loading">
//         <div className="loading-spinner"></div>
//         <p>Loading...</p>
//       </div>
//     );
//   }

//   return (
//     <div className="profile-container">
//       <div className="back-button-container">
//         <button className="back-btn" onClick={handleBack}>
//           <FaArrowLeft /> Back
//         </button>
//       </div>

//       <div className="profile-layout">
//         <div className="profile-sidebar">
//           <div className="sidebar-menu">
//             <div 
//               className={`menu-item ${activeSection === "basic-info" ? "active" : ""}`}
//               onClick={() => setActiveSection("basic-info")}
//             >
//               <span className="menu-icon"><FaUser /></span>
//               <span className="menu-text">Basic Information</span>
//             </div>
            
//             <div 
//               className={`menu-item ${activeSection === "my-pgs" ? "active" : ""}`}
//               onClick={() => setActiveSection("my-pgs")}
//             >
//               <span className="menu-icon"><FaList /></span>
//               <span className="menu-text">My PG's Info</span>
//             </div>
            
//             <div 
//               className={`menu-item ${activeSection === "notifications" ? "active" : ""}`}
//               onClick={() => setActiveSection("notifications")}
//             >
//               <span className="menu-icon"><FaBell /></span>
//               <span className="menu-text">Notifications</span>
//               {getUnreadCount() > 0 && (
//                 <span className="menu-badge">{getUnreadCount()}</span>
//               )}
//             </div>
            
//             <div 
//               className={`menu-item ${activeSection === "change-password" ? "active" : ""}`}
//               onClick={() => setActiveSection("change-password")}
//             >
//               <span className="menu-icon"><FaKey /></span>
//               <span className="menu-text">Change Password</span>
//             </div>
            
//             <div 
//               className={`menu-item ${activeSection === "terms" ? "active" : ""}`}
//               onClick={() => setActiveSection("terms")}
//             >
//               <span className="menu-icon"><FaFileAlt /></span>
//               <span className="menu-text">Terms And Conditions</span>
//             </div>
            
//             <div className="menu-divider"></div>
            
//             <div className="menu-item logout-item" onClick={handleLogout}>
//               <span className="menu-icon"><FaSignOutAlt /></span>
//               <span className="menu-text">Logout</span>
//             </div>
//           </div>
//         </div>

//         <div className="profile-content">
//           {renderContent()}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ProfilePage;

// src/pages/ProfilePage.jsx
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { 
  FaArrowLeft, 
  FaUser, 
  FaBell, 
  FaKey, 
  FaFileAlt, 
  FaSignOutAlt,
  FaEdit,
  FaPhone,
  FaVenusMars,
  FaMapMarkerAlt,
  FaEnvelope,
  FaList,
  FaEye,
  FaEyeSlash
} from "react-icons/fa";
import api from "../api";
import "./ProfilePage.css";

const ProfilePage = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [activeSection, setActiveSection] = useState("basic-info");
  
  // Password change states
  const [passwordData, setPasswordData] = useState({
    currentPassword: "",
    newPassword: "",
    confirmPassword: ""
  });
  const [showPassword, setShowPassword] = useState({
    current: false,
    new: false,
    confirm: false
  });
  const [passwordError, setPasswordError] = useState("");
  const [passwordSuccess, setPasswordSuccess] = useState("");
  const [changingPassword, setChangingPassword] = useState(false);
  
  // Notifications state
  const [notifications, setNotifications] = useState([]);
  const [loadingNotifications, setLoadingNotifications] = useState(true);
  
  // My PGs Info state
  const [myPGs, setMyPGs] = useState([]);
  const [loadingPGs, setLoadingPGs] = useState(false);

  // Terms and conditions
  const termsContent = [
    "1. Owner Responsibilities: PG owners are responsible for maintaining clean and safe living conditions.",
    "2. Booking Policy: All bookings are subject to availability and verification.",
    "3. Payment Terms: Payments must be made in advance as per the agreed terms.",
    "4. Cancellation Policy: Cancellations must be made at least 7 days before check-in for full refund.",
    "5. Guest Behavior: PG owners reserve the right to evict guests violating house rules.",
    "6. Maintenance: Regular maintenance of facilities is mandatory.",
    "7. Privacy: We respect your privacy and protect all personal information.",
    "8. Updates: Terms may be updated periodically. Continued use implies acceptance."
  ];

  useEffect(() => {
    const fetchUserData = async () => {
      const token = localStorage.getItem("hlopgToken");
      const cachedOwner = localStorage.getItem("hlopgOwner");

      if (cachedOwner) {
        try {
          setUser(JSON.parse(cachedOwner));
        } catch (e) {
          console.error("Error parsing cached owner:", e);
        }
      }

      try {
        if (token) {
          const ownerRes = await api.get("/auth/ownerid", {
            headers: { Authorization: `Bearer ${token}` },
          });
          
          if (ownerRes.status === 200 && ownerRes.data) {
            const fullName = ownerRes.data.name || "Thota Chaitanya";
            const nameParts = fullName.split(' ');
            const firstName = nameParts[0] || "Thota";
            
            const ownerData = {
              id: ownerRes.data.id,
              name: fullName,
              firstName: firstName,
              email: ownerRes.data.email || "hlopg123@gmail.com",
              phone: ownerRes.data.phone || "1234567890",
              userType: ownerRes.data.userType,
              owner_id: ownerRes.data.id,
              gender: ownerRes.data.gender || "Male",
              city: ownerRes.data.city || "Hyderabad",
              profileInitial: fullName ? fullName.charAt(0).toUpperCase() : "T"
            };
            
            setUser(ownerData);
            localStorage.setItem("hlopgOwner", JSON.stringify(ownerData));
          }
        }
      } catch (error) {
        console.error("Error fetching user data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchUserData();
  }, []);

  // Fetch notifications when section is active
  useEffect(() => {
    if (activeSection === "notifications") {
      fetchNotifications();
    }
  }, [activeSection]);

  // Fetch My PGs when section is active
  useEffect(() => {
    if (activeSection === "my-pgs") {
      fetchMyPGs();
    }
  }, [activeSection]);

  // const fetchNotifications = async () => {
  //   try {
  //     setLoadingNotifications(true);
  //     const token = localStorage.getItem("hlopgToken");
  //     const res = await api.get("/owner/notifications", {
  //       headers: { Authorization: `Bearer ${token}` },
  //     });
      
  //     if (res.data.success) {
  //       setNotifications(res.data.data || []);
  //     } else {
  //       // Sample notifications if API fails
  //       setNotifications([
  //         { 
  //           id: 1, 
  //           type: "booking_request", 
  //           title: "New Booking Request", 
  //           message: "John Doe wants to book RGV PG Hyderabad, KPHB", 
  //           hostel_name: "RGV PG Hyderabad, KPHB",
  //           user_name: "John Doe",
  //           user_phone: "9876543210",
  //           created_at: new Date().toISOString(),
  //           read: false 
  //         },
  //         { 
  //           id: 2, 
  //           type: "payment_received", 
  //           title: "Payment Received", 
  //           message: "₹15,000 received from Mohit Sharma for Sunrise Hostel", 
  //           amount: "15000",
  //           hostel_name: "Sunrise Hostel",
  //           user_name: "Mohit Sharma",
  //           created_at: new Date(Date.now() - 86400000).toISOString(),
  //           read: true 
  //         },
  //         { 
  //           id: 3, 
  //           type: "maintenance_alert", 
  //           title: "Maintenance Alert", 
  //           message: "Water heater in room 203 needs attention at Green Valley PG", 
  //           hostel_name: "Green Valley PG",
  //           room_number: "203",
  //           created_at: new Date(Date.now() - 172800000).toISOString(),
  //           read: false 
  //         },
  //         { 
  //           id: 4, 
  //           type: "review_received", 
  //           title: "New Review Received", 
  //           message: "Priya Patel gave 4.5 stars to City Stay PG", 
  //           hostel_name: "City Stay PG",
  //           user_name: "Priya Patel",
  //           rating: 4.5,
  //           created_at: new Date(Date.now() - 259200000).toISOString(),
  //           read: true 
  //         },
  //         { 
  //           id: 5, 
  //           type: "pg_approval", 
  //           title: "PG Approved", 
  //           message: "Your PG 'Sunrise Hostel' has been approved and is now live", 
  //           hostel_name: "Sunrise Hostel",
  //           created_at: new Date(Date.now() - 604800000).toISOString(),
  //           read: true 
  //         }
  //       ]);
  //     }
  //   } catch (error) {
  //     console.error("Error fetching notifications:", error);
  //     // Use sample data if API fails
  //     setNotifications([
  //       { id: 1, title: "New Booking Request", message: "John Doe wants to book RGV PG Hyderabad, KPHB", created_at: new Date().toISOString(), read: false, type: "booking_request" },
  //       { id: 2, title: "Payment Received", message: "₹15,000 received from Mohit Sharma", created_at: new Date(Date.now() - 86400000).toISOString(), read: true, type: "payment_received" },
  //       { id: 3, title: "Maintenance Alert", message: "Water heater in room 203 needs attention", created_at: new Date(Date.now() - 172800000).toISOString(), read: false, type: "maintenance_alert" },
  //       { id: 4, title: "Review Received", message: "New review from Priya Patel (4.5 stars)", created_at: new Date(Date.now() - 259200000).toISOString(), read: true, type: "review_received" },
  //       { id: 5, title: "PG Approval", message: "Your PG 'Sunrise Hostel' has been approved", created_at: new Date(Date.now() - 604800000).toISOString(), read: true, type: "pg_approval" }
  //     ]);
  //   } finally {
  //     setLoadingNotifications(false);
  //   }
  // };

  const fetchNotifications = async () => {
  try {
    setLoadingNotifications(true);
    const token = localStorage.getItem("hlopgToken");
    const res = await api.get("/owner/notifications", {
      headers: { Authorization: `Bearer ${token}` },
    });
    
    if (res.data.success && res.data.data) {
      // Sort notifications by date (newest first)
      const sortedNotifications = res.data.data.sort((a, b) => 
        new Date(b.created_at) - new Date(a.created_at)
      );
      setNotifications(sortedNotifications);
    } else {
      console.log("No notifications found or API error");
      setNotifications([]);
    }
  } catch (error) {
    console.error("Error fetching notifications:", error);
    setNotifications([]);
  } finally {
    setLoadingNotifications(false);
  }
};

  const fetchMyPGs = async () => {
    try {
      setLoadingPGs(true);
      const token = localStorage.getItem("hlopgToken");
      const res = await api.get("/hostel/owner/pgs", {
        headers: { Authorization: `Bearer ${token}` },
      });
      
      if (res.data.success) {
        const pgData = res.data.data || res.data.hostels || [];
        setMyPGs(pgData);
      }
    } catch (error) {
      console.error("Error fetching PGs:", error);
      // Sample data for demo
      setMyPGs([
        { 
          hostel_id: 1, 
          hostel_name: "RGV PG Hyderabad, KPHB", 
          address: "Plot No. 123, KPHB Phase 6, Hyderabad",
          area: "KPHB", 
          city: "Hyderabad", 
          state: "Telangana",
          pincode: "500072",
          price: "12000",
          total_rooms: 15,
          occupied_rooms: 12,
          vacant_rooms: 3,
          status: "Active"
        },
        { 
          hostel_id: 2, 
          hostel_name: "Sunrise Hostel", 
          address: "Near Hitech City, Madhapur, Hyderabad",
          area: "Madhapur", 
          city: "Hyderabad", 
          state: "Telangana",
          pincode: "500081",
          price: "15000",
          total_rooms: 20,
          occupied_rooms: 18,
          vacant_rooms: 2,
          status: "Active"
        }
      ]);
    } finally {
      setLoadingPGs(false);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("hlopgToken");
    localStorage.removeItem("hlopgUser");
    localStorage.removeItem("hlopgOwner");
    alert("Logged out successfully!");
    navigate("/");
  };

  const handleBack = () => {
    navigate("/owner-dashboard");
  };

  const handleEditProfile = () => {
    alert("Edit profile feature coming soon!");
  };

  const handlePasswordChange = (e) => {
    const { name, value } = e.target;
    setPasswordData(prev => ({
      ...prev,
      [name]: value
    }));
    // Clear errors when user starts typing
    if (passwordError) setPasswordError("");
    if (passwordSuccess) setPasswordSuccess("");
  };

  const togglePasswordVisibility = (field) => {
    setShowPassword(prev => ({
      ...prev,
      [field]: !prev[field]
    }));
  };

  const handleChangePasswordSubmit = async (e) => {
    e.preventDefault();
    
    // Validate passwords
    if (!passwordData.currentPassword || !passwordData.newPassword || !passwordData.confirmPassword) {
      setPasswordError("All fields are required");
      return;
    }
    
    if (passwordData.newPassword.length < 6) {
      setPasswordError("New password must be at least 6 characters long");
      return;
    }
    
    if (passwordData.newPassword !== passwordData.confirmPassword) {
      setPasswordError("New password and confirm password do not match");
      return;
    }
    
    if (passwordData.currentPassword === passwordData.newPassword) {
      setPasswordError("New password must be different from current password");
      return;
    }
    
    try {
      setChangingPassword(true);
      setPasswordError("");
      
      const token = localStorage.getItem("hlopgToken");
      const response = await api.put("/auth/change-password", {
        currentPassword: passwordData.currentPassword,
        newPassword: passwordData.newPassword
      }, {
        headers: { Authorization: `Bearer ${token}` }
      });
      
      if (response.data.success) {
        setPasswordSuccess("Password changed successfully!");
        
        // Reset form
        setPasswordData({
          currentPassword: "",
          newPassword: "",
          confirmPassword: ""
        });
        
        // Clear success message after 3 seconds
        setTimeout(() => {
          setPasswordSuccess("");
        }, 3000);
      } else {
        setPasswordError(response.data.message || "Failed to change password");
      }
    } catch (error) {
      console.error("Error changing password:", error);
      if (error.response?.status === 401) {
        setPasswordError("Current password is incorrect");
      } else if (error.response?.data?.message) {
        setPasswordError(error.response.data.message);
      } else {
        setPasswordError("An error occurred. Please try again.");
      }
    } finally {
      setChangingPassword(false);
    }
  };

  const markNotificationAsRead = async (id) => {
    try {
      const token = localStorage.getItem("hlopgToken");
      await api.put(`/owner/notifications/${id}/read`, {}, {
        headers: { Authorization: `Bearer ${token}` }
      });
      
      // Update local state
      setNotifications(prev => 
        prev.map(notification => 
          notification.id === id ? { ...notification, read: true } : notification
        )
      );
    } catch (error) {
      console.error("Error marking notification as read:", error);
      // Update UI anyway
      setNotifications(prev => 
        prev.map(notification => 
          notification.id === id ? { ...notification, read: true } : notification
        )
      );
    }
  };

  const markAllAsRead = async () => {
    try {
      const token = localStorage.getItem("hlopgToken");
      await api.put("/owner/notifications/read-all", {}, {
        headers: { Authorization: `Bearer ${token}` }
      });
      
      setNotifications(prev => 
        prev.map(notification => ({ ...notification, read: true }))
      );
    } catch (error) {
      console.error("Error marking all as read:", error);
      setNotifications(prev => 
        prev.map(notification => ({ ...notification, read: true }))
      );
    }
  };

  const getNotificationIcon = (type) => {
    switch(type) {
      case 'booking_request':
        return '📋';
      case 'payment_received':
        return '💰';
      case 'maintenance_alert':
        return '🔧';
      case 'review_received':
        return '⭐';
      case 'pg_approval':
        return '✅';
      default:
        return '📢';
    }
  };

  const getUnreadCount = () => {
    return notifications.filter(n => !n.read).length;
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const now = new Date();
    const diffMs = now - date;
    const diffMins = Math.floor(diffMs / 60000);
    const diffHours = Math.floor(diffMs / 3600000);
    const diffDays = Math.floor(diffMs / 86400000);
    
    if (diffMins < 60) return `${diffMins}m ago`;
    if (diffHours < 24) return `${diffHours}h ago`;
    if (diffDays < 7) return `${diffDays}d ago`;
    
    return date.toLocaleDateString('en-IN', {
      day: 'numeric',
      month: 'short',
      year: 'numeric'
    });
  };

  const renderContent = () => {
    switch (activeSection) {
      case "basic-info":
        return (
          <>
            <div className="section-header">
              <h2>BASIC INFORMATION</h2>
              <button className="change-btn" onClick={handleEditProfile}>
                Change
              </button>
            </div>
            
            <div className="info-grid">
              {/* Row 1: First Name & Last Name */}
              <div className="info-row">
                <div className="info-group">
                  <div className="info-label">First Name</div>
                  <div className="info-value">
                    {user?.firstName || "Thota"}
                  </div>
                </div>
               
              </div>
              
              {/* Row 2: Mobile Number & Gender */}
              <div className="info-row">
                <div className="info-group">
                  <div className="info-label">Mobile Number</div>
                  <div className="info-value">
                    {user?.phone || "1234567890"}
                  </div>
                </div>
                <div className="info-group">
                  <div className="info-label">Gender</div>
                  <div className="info-value">
                    {user?.gender || "Male"}
                  </div>
                </div>
              </div>
              
              {/* Row 3: City & Mail */}
              <div className="info-row">
                <div className="info-group">
                  <div className="info-label">City</div>
                  <div className="info-value">
                    {user?.city || "Hyderabad"}
                  </div>
                </div>
                <div className="info-group">
                  <div className="info-label">Mail</div>
                  <div className="info-value">
                    {user?.email || "hlopg123@gmail.com"}
                  </div>
                </div>
              </div>
            </div>
          </>
        );

      case "my-pgs":
        return (
          <>
            <div className="section-header">
              <h2>MY PG'S INFO</h2>
            </div>
            
            {loadingPGs ? (
              <div className="loading-pgs">
                <div className="loading-spinner"></div>
                <p>Loading your PGs...</p>
              </div>
            ) : myPGs.length === 0 ? (
              <div className="no-pgs-info">
                <p>No PGs found. Please upload your first PG from the dashboard.</p>
              </div>
            ) : (
              <div className="pgs-info-grid">
                {myPGs.map((pg) => (
                  <div key={pg.hostel_id} className="pg-info-card">
                    <div className="pg-info-header">
                      <h3>{pg.hostel_name}</h3>
                      <span className={`pg-status ${pg.status?.toLowerCase()}`}>
                        {pg.status || "Active"}
                      </span>
                    </div>
                    
                    <div className="pg-info-details">
                      <div className="pg-info-row">
                        <span className="info-label">Address:</span>
                        <span className="info-value">{pg.address || `${pg.area}, ${pg.city}, ${pg.state} - ${pg.pincode}`}</span>
                      </div>
                      
                      <div className="pg-info-row">
                        <span className="info-label">Location:</span>
                        <span className="info-value">{pg.area}, {pg.city}, {pg.state}</span>
                      </div>
                      
                      <div className="pg-info-row">
                        <span className="info-label">Price:</span>
                        <span className="info-value">₹{pg.price}/month</span>
                      </div>
                      
                      <div className="pg-info-row">
                        <span className="info-label">Rooms:</span>
                        <span className="info-value">
                          Total: {pg.total_rooms || 0} | 
                          Occupied: {pg.occupied_rooms || 0} | 
                          Vacant: {pg.vacant_rooms || 0}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </>
        );

      // case "notifications":
      //   return (
      //     <>
      //       <div className="section-header">
      //         <h2>NOTIFICATIONS</h2>
      //         <div className="header-actions">
      //           {getUnreadCount() > 0 && (
      //             <span className="badge">{getUnreadCount()} unread</span>
      //           )}
      //           <button className="mark-all-btn" onClick={markAllAsRead}>
      //             Mark all as read
      //           </button>
      //         </div>
      //       </div>
            
      //       <div className="notifications-list">
      //         {loadingNotifications ? (
      //           <div className="loading-notifications">
      //             <div className="loading-spinner"></div>
      //             <p>Loading notifications...</p>
      //           </div>
      //         ) : notifications.length === 0 ? (
      //           <div className="no-notifications">
      //             <p>No notifications yet</p>
      //             <p className="sub-text">You'll see notifications here for bookings, payments, and updates.</p>
      //           </div>
      //         ) : (
      //           notifications.map(notification => (
      //             <div 
      //               key={notification.id} 
      //               className={`notification-item ${notification.read ? 'read' : 'unread'}`}
      //               onClick={() => markNotificationAsRead(notification.id)}
      //             >
      //               <div className="notification-icon">
      //                 {getNotificationIcon(notification.type)}
      //               </div>
                    
      //               <div className="notification-content">
      //                 <div className="notification-header">
      //                   <h4 className="notification-title">{notification.title}</h4>
      //                   <span className="notification-time">{formatDate(notification.created_at)}</span>
      //                 </div>
                      
      //                 <p className="notification-message">{notification.message}</p>
                      
      //                 {/* Additional details based on notification type */}
      //                 {notification.hostel_name && (
      //                   <div className="notification-details">
      //                     <span className="detail-label">PG:</span>
      //                     <span className="detail-value">{notification.hostel_name}</span>
      //                   </div>
      //                 )}
                      
      //                 {notification.user_name && (
      //                   <div className="notification-details">
      //                     <span className="detail-label">User:</span>
      //                     <span className="detail-value">{notification.user_name}</span>
      //                     {notification.user_phone && (
      //                       <span className="detail-phone"> | 📱 {notification.user_phone}</span>
      //                     )}
      //                   </div>
      //                 )}
                      
      //                 {notification.amount && (
      //                   <div className="notification-details">
      //                     <span className="detail-label">Amount:</span>
      //                     <span className="detail-value amount">₹{notification.amount}</span>
      //                   </div>
      //                 )}
                      
      //                 {notification.rating && (
      //                   <div className="notification-details">
      //                     <span className="detail-label">Rating:</span>
      //                     <span className="detail-value rating">⭐ {notification.rating}/5</span>
      //                   </div>
      //                 )}
      //               </div>
                    
      //               {!notification.read && (
      //                 <div className="notification-status">
      //                   <span className="unread-dot"></span>
      //                 </div>
      //               )}
      //             </div>
      //           ))
      //         )}
      //       </div>
      //     </>
      //   );

      case "notifications":
  return (
    <>
      <div className="section-header">
        <h2>NOTIFICATIONS</h2>
        <div className="header-actions">
          {getUnreadCount() > 0 && (
            <span className="badge">{getUnreadCount()} unread</span>
          )}
          <button className="mark-all-btn" onClick={markAllAsRead}>
            Mark all as read
          </button>
        </div>
      </div>
      
      <div className="notifications-list">
        {loadingNotifications ? (
          <div className="loading-notifications">
            <div className="loading-spinner"></div>
            <p>Loading notifications...</p>
          </div>
        ) : notifications.length === 0 ? (
          <div className="no-notifications">
            <p>No notifications yet</p>
            <p className="sub-text">You'll see booking requests and updates here.</p>
          </div>
        ) : (
          notifications.map(notification => (
            <div 
              key={notification.id} 
              className={`notification-item ${notification.read ? 'read' : 'unread'}`}
              onClick={() => markNotificationAsRead(notification.id)}
            >
              <div className="notification-icon">
                {notification.type === "booking_request" ? "📋" : 
                 notification.type === "payment_received" ? "💰" :
                 notification.type === "review_received" ? "⭐" : "📢"}
              </div>
              
              <div className="notification-content">
                <div className="notification-header">
                  <h4 className="notification-title">{notification.title}</h4>
                  <span className="notification-time">
                    {formatDate(notification.created_at)}
                  </span>
                </div>
                
                <p className="notification-message">{notification.message}</p>
                
                {/* Show detailed booking information for booking requests */}
                {notification.type === "booking_request" && (
                  <div className="booking-details">
                    <div className="detail-row">
                      <span className="detail-label">PG Name:</span>
                      <span className="detail-value">{notification.hostel_name || "Unknown PG"}</span>
                    </div>
                    <div className="detail-row">
                      <span className="detail-label">Location:</span>
                      <span className="detail-value">{notification.hostel_address || "Address not available"}</span>
                    </div>
                    <div className="detail-row">
                      <span className="detail-label">User:</span>
                      <span className="detail-value">{notification.user_name}</span>
                    </div>
                    <div className="detail-row">
                      <span className="detail-label">Contact:</span>
                      <span className="detail-value">
                        📧 {notification.user_email} | 📱 {notification.user_phone || "Not provided"}
                      </span>
                    </div>
                    <div className="detail-row">
                      <span className="detail-label">Sharing Type:</span>
                      <span className="detail-value">{notification.sharing_type}</span>
                    </div>
                    <div className="detail-row">
                      <span className="detail-label">Booking ID:</span>
                      <span className="detail-value booking-id">{notification.booking_id || "N/A"}</span>
                    </div>
                    
                    {/* Contact user buttons */}
                    <div className="action-buttons">
                      <button 
                        className="contact-btn"
                        onClick={(e) => {
                          e.stopPropagation();
                          if (notification.user_phone) {
                            window.open(`tel:${notification.user_phone}`, '_blank');
                          } else {
                            alert("Phone number not available. Please email instead.");
                          }
                        }}
                      >
                        📞 Call User
                      </button>
                      <button 
                        className="email-btn"
                        onClick={(e) => {
                          e.stopPropagation();
                          window.open(`mailto:${notification.user_email}`, '_blank');
                        }}
                      >
                        📧 Email User
                      </button>
                    </div>
                  </div>
                )}
              </div>
              
              {!notification.read && (
                <div className="notification-status">
                  <span className="unread-dot"></span>
                </div>
              )}
            </div>
          ))
        )}
      </div>
    </>
  );

      case "change-password":
        return (
          <>
            <div className="section-header">
              <h2>CHANGE PASSWORD</h2>
            </div>
            
            <form className="password-form" onSubmit={handleChangePasswordSubmit}>
              {passwordSuccess && (
                <div className="success-message">
                  <span>{passwordSuccess}</span>
                </div>
              )}
              
              {passwordError && (
                <div className="error-message">
                  <span>{passwordError}</span>
                </div>
              )}
              
              <div className="form-group">
                <label htmlFor="currentPassword">
                  Current Password <span className="required">*</span>
                </label>
                <div className="password-input-wrapper">
                  <input
                    type={showPassword.current ? "text" : "password"}
                    id="currentPassword"
                    name="currentPassword"
                    value={passwordData.currentPassword}
                    onChange={handlePasswordChange}
                    placeholder="Enter your current password"
                    required
                    className="password-input"
                  />
                  <button 
                    type="button"
                    className="toggle-password"
                    onClick={() => togglePasswordVisibility("current")}
                  >
                    {showPassword.current ? <FaEyeSlash /> : <FaEye />}
                  </button>
                </div>
              </div>
              
              <div className="form-group">
                <label htmlFor="newPassword">
                  New Password <span className="required">*</span>
                </label>
                <div className="password-input-wrapper">
                  <input
                    type={showPassword.new ? "text" : "password"}
                    id="newPassword"
                    name="newPassword"
                    value={passwordData.newPassword}
                    onChange={handlePasswordChange}
                    placeholder="Enter new password (min. 6 characters)"
                    required
                    minLength="6"
                    className="password-input"
                  />
                  <button 
                    type="button"
                    className="toggle-password"
                    onClick={() => togglePasswordVisibility("new")}
                  >
                    {showPassword.new ? <FaEyeSlash /> : <FaEye />}
                  </button>
                </div>
                <div className="password-hint">
                  Password must be at least 6 characters long
                </div>
              </div>
              
              <div className="form-group">
                <label htmlFor="confirmPassword">
                  Confirm New Password <span className="required">*</span>
                </label>
                <div className="password-input-wrapper">
                  <input
                    type={showPassword.confirm ? "text" : "password"}
                    id="confirmPassword"
                    name="confirmPassword"
                    value={passwordData.confirmPassword}
                    onChange={handlePasswordChange}
                    placeholder="Confirm your new password"
                    required
                    className="password-input"
                  />
                  <button 
                    type="button"
                    className="toggle-password"
                    onClick={() => togglePasswordVisibility("confirm")}
                  >
                    {showPassword.confirm ? <FaEyeSlash /> : <FaEye />}
                  </button>
                </div>
              </div>
              
              <div className="form-actions">
                <button 
                  type="button" 
                  className="cancel-btn"
                  onClick={() => {
                    setPasswordData({
                      currentPassword: "",
                      newPassword: "",
                      confirmPassword: ""
                    });
                    setPasswordError("");
                    setPasswordSuccess("");
                  }}
                >
                  Cancel
                </button>
                <button 
                  type="submit" 
                  className="submit-btn"
                  disabled={changingPassword}
                >
                  {changingPassword ? "Changing..." : "Change Password"}
                </button>
              </div>
            </form>
          </>
        );

      case "terms":
        return (
          <>
            <div className="section-header">
              <h2>TERMS AND CONDITIONS</h2>
            </div>
            
            <div className="terms-content">
              <div className="terms-intro">
                <p>Please read these terms and conditions carefully before using our services as a PG Owner.</p>
              </div>
              
              <div className="terms-list">
                {termsContent.map((term, index) => (
                  <div key={index} className="term-item">
                    <span className="term-number">{index + 1}.</span>
                    <span className="term-text">{term}</span>
                  </div>
                ))}
              </div>
              
              <div className="terms-footer">
                <h4>Acceptance of Terms</h4>
                <p>By using our platform, you acknowledge that you have read, understood, and agree to be bound by these Terms and Conditions. If you do not agree to these terms, please do not use our services.</p>
                
                <h4>Contact Information</h4>
                <p>If you have any questions about these Terms, please contact us at:</p>
                <div className="contact-info">
                  <p><strong>Email:</strong> support@hlopg.com</p>
                  <p><strong>Phone:</strong> +91 9876543210</p>
                  <p><strong>Address:</strong> 123 Tech Park, Hyderabad, Telangana</p>
                </div>
              </div>
            </div>
          </>
        );

      default:
        return (
          <>
            <div className="section-header">
              <h2>BASIC INFORMATION</h2>
              <button className="change-btn" onClick={handleEditProfile}>
                Change
              </button>
            </div>
            
            <div className="info-grid">
              <div className="info-row">
                <div className="info-group">
                  <div className="info-label">First Name</div>
                  <div className="info-value">
                    {user?.firstName || "Thota"}
                  </div>
                </div>
                {/* <div className="info-group">
                  <div className="info-label">Last Name</div>
                  <div className="info-value">
                    {user?.name?.split(' ').slice(1).join(' ') || "Chaitanya"}
                  </div>
                </div> */}
              </div>
              
              <div className="info-row">
                <div className="info-group">
                  <div className="info-label">Mobile Number</div>
                  <div className="info-value">
                    {user?.phone || "1234567890"}
                  </div>
                </div>
                <div className="info-group">
                  <div className="info-label">Gender</div>
                  <div className="info-value">
                    {user?.gender || "Male"}
                  </div>
                </div>
              </div>
              
              <div className="info-row">
                <div className="info-group">
                  <div className="info-label">City</div>
                  <div className="info-value">
                    {user?.city || "Hyderabad"}
                  </div>
                </div>
                <div className="info-group">
                  <div className="info-label">Mail</div>
                  <div className="info-value">
                    {user?.email || "hlopg123@gmail.com"}
                  </div>
                </div>
              </div>
            </div>
          </>
        );
    }
  };

  if (loading) {
    return (
      <div className="profile-loading">
        <div className="loading-spinner"></div>
        <p>Loading...</p>
      </div>
    );
  }

  return (
    <div className="profile-container">
      <div className="back-button-container">
        <button className="back-btn" onClick={handleBack}>
          <FaArrowLeft /> Back
        </button>
      </div>

      <div className="profile-layout">
        <div className="profile-sidebar">
          <div className="sidebar-menu">
            <div 
              className={`menu-item ${activeSection === "basic-info" ? "active" : ""}`}
              onClick={() => setActiveSection("basic-info")}
            >
              <span className="menu-icon"><FaUser /></span>
              <span className="menu-text">Basic Information</span>
            </div>
            
            <div 
              className={`menu-item ${activeSection === "my-pgs" ? "active" : ""}`}
              onClick={() => setActiveSection("my-pgs")}
            >
              <span className="menu-icon"><FaList /></span>
              <span className="menu-text">My PG's Info</span>
            </div>
            
            <div 
              className={`menu-item ${activeSection === "notifications" ? "active" : ""}`}
              onClick={() => setActiveSection("notifications")}
            >
              <span className="menu-icon"><FaBell /></span>
              <span className="menu-text">Notifications</span>
              {getUnreadCount() > 0 && (
                <span className="menu-badge">{getUnreadCount()}</span>
              )}
            </div>
            
            <div 
              className={`menu-item ${activeSection === "change-password" ? "active" : ""}`}
              onClick={() => setActiveSection("change-password")}
            >
              <span className="menu-icon"><FaKey /></span>
              <span className="menu-text">Change Password</span>
            </div>
            
            <div 
              className={`menu-item ${activeSection === "terms" ? "active" : ""}`}
              onClick={() => setActiveSection("terms")}
            >
              <span className="menu-icon"><FaFileAlt /></span>
              <span className="menu-text">Terms And Conditions</span>
            </div>
            
            <div className="menu-divider"></div>
            
            <div className="menu-item logout-item" onClick={handleLogout}>
              <span className="menu-icon"><FaSignOutAlt /></span>
              <span className="menu-text">Logout</span>
            </div>
          </div>
        </div>

        <div className="profile-content">
          {renderContent()}
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;