# Course Selling Implementation Plan

## Overview
This document outlines the implementation plan for adding a course selling feature to the Infoziant website, including Appwrite authentication, Razorpay payment integration, and a user dashboard.

## Features to Implement

### 1. Authentication System (Appwrite)
- User registration and login
- Email verification
- Password reset functionality
- Protected routes for authenticated users
- User profile management

### 2. Course Catalog
- Display of two courses with details
- Course curriculum display
- YouTube video embedding for course previews
- Course details page with syllabus and information

### 3. Payment Integration (Razorpay)
- Secure checkout process
- Payment status tracking
- Order history
- Payment receipts

### 4. User Dashboard
- Purchased courses display
- Course progress tracking
- Profile management
- Order history

## Implementation Steps

### Step 1: Set Up Appwrite Authentication
1. Create Appwrite project and configure authentication
2. Implement authentication context provider
3. Create login, register, and verification components
4. Set up protected routes

### Step 2: Create Course Pages
1. Design course catalog page
2. Create individual course detail pages
3. Implement course curriculum display
4. Add YouTube video embedding

### Step 3: Implement Razorpay Integration
1. Set up Razorpay account and get API keys
2. Create payment processing components
3. Implement checkout flow
4. Handle payment success/failure scenarios

### Step 4: Build User Dashboard
1. Design dashboard layout
2. Create purchased courses section
3. Implement profile management
4. Add order history display

### Step 5: Connect Everything
1. Ensure proper flow from course selection to payment
2. Implement course access after purchase
3. Update user dashboard with purchased courses
4. Test the entire flow

## File Structure

```
src/
  Components/
    Auth/
      AuthContext.jsx
      Login.jsx
      Register.jsx
      VerifyEmail.jsx
      ProtectedRoute.jsx
      ResetPassword.jsx
    Courses/
      CoursesList.jsx
      CourseDetail.jsx
      Curriculum.jsx
      VideoPlayer.jsx
    Payment/
      Checkout.jsx
      PaymentStatus.jsx
      OrderSummary.jsx
    Dashboard/
      UserDashboard.jsx
      PurchasedCourses.jsx
      Profile.jsx
      OrderHistory.jsx
  services/
    appwrite.js
    razorpay.js
    courses.js
  assets/
    courses/
      course1.jpg
      course2.jpg
```

## Dependencies

- appwrite: For authentication and user management
- react-razorpay: For payment integration
- react-hook-form: For form handling
- @hookform/resolvers and yup: For form validation
- react-hot-toast: For notifications

## Implementation Notes

1. **Authentication Flow**:
   - When a user tries to purchase a course, check if they're logged in
   - If not, redirect to login/register page
   - After successful authentication, return to course purchase

2. **Payment Flow**:
   - After clicking "Buy Now", show order summary
   - Process payment through Razorpay
   - On successful payment, add course to user's account
   - Redirect to success page or dashboard

3. **Course Access**:
   - Only show full curriculum to users who purchased the course
   - Show preview content to non-purchasers
   - Track course progress for authenticated users

4. **Data Storage**:
   - Store user data in Appwrite
   - Store course purchase records
   - Track course progress

## Next Steps

1. Set up Appwrite project and configure authentication
2. Create basic UI components for courses and authentication
3. Implement Razorpay integration
4. Build user dashboard
5. Connect all components and test the flow