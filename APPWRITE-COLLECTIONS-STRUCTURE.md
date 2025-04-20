# Appwrite Collections Structure for Infoziant

This document provides a detailed overview of the Appwrite database collections used in the Infoziant course platform, including their data types and relationships.

## Database Information

- **Database ID**: `67dd1d13000b5edf92bb`
- **Endpoint**: `https://fra.cloud.appwrite.io/v1`
- **Project ID**: `6804180400067f46f6e5`

## Collections

### 1. Courses Collection

- **Collection ID**: `67dd23630031cc6352bf`

#### Schema

| Field | Type | Description |
|-------|------|-------------|
| `$id` | String | Unique identifier for the course (auto-generated) |
| `title` | String | Title of the course |
| `description` | String | Detailed description of the course |
| `price` | Number | Price of the course in currency units (e.g., INR) |
| `instructor` | String | Name of the course instructor |
| `duration` | Number | Duration of the course in hours |
| `level` | String | Difficulty level (e.g., Beginner, Intermediate, Advanced) |
| `topics` | Array | List of topics covered in the course |
| `thumbnail` | String | URL to the course thumbnail image |
| `videoUrl` | String | URL to the course preview video |
| `modules` | Array | List of course modules and their content |
| `requirements` | Array | Prerequisites or requirements for the course |
| `createdAt` | DateTime | Timestamp when the course was created |
| `updatedAt` | DateTime | Timestamp when the course was last updated |
| `isPublished` | Boolean | Whether the course is published and available |
| `rating` | Number | Average rating of the course (0-5) |
| `enrollmentCount` | Number | Number of students enrolled in the course |

### 2. User Courses Collection

- **Collection ID**: `67dd1d360022aa3123c1`

#### Schema

| Field | Type | Description |
|-------|------|-------------|
| `$id` | String | Unique identifier for the user-course relationship (auto-generated) |
| `userId` | String | ID of the user who purchased the course |
| `courseId` | String | ID of the purchased course |
| `paymentId` | String | ID of the payment transaction from Razorpay |
| `amount` | Number | Amount paid for the course |
| `purchasedAt` | DateTime | Timestamp when the course was purchased |
| `progress` | Number | User's progress through the course (0-100%) |
| `completedModules` | Array | List of completed module IDs |
| `certificateIssued` | Boolean | Whether a certificate has been issued |
| `certificateUrl` | String | URL to the issued certificate (if any) |
| `lastAccessedAt` | DateTime | Timestamp when the user last accessed the course |

## Relationships

- The `userId` in the User Courses collection relates to the Appwrite Auth user ID
- The `courseId` in the User Courses collection relates to the `$id` in the Courses collection

## Indexes

### Courses Collection
- Primary Index: `$id`
- Additional Indexes: `title`, `instructor`, `level`, `isPublished`

### User Courses Collection
- Primary Index: `$id`
- Additional Indexes: `userId`, `courseId`, `purchasedAt`

## Access Control

### Courses Collection
- Read: All authenticated users
- Write: Admin users only

### User Courses Collection
- Read: Owner of the record and admin users
- Write: Owner of the record (limited fields) and admin users

## API Usage Examples

### Fetching All Courses
```javascript
const courses = await databases.listDocuments(databaseId, coursesCollectionId);
```

### Fetching User's Purchased Courses
```javascript
const userCourses = await databases.listDocuments(
  databaseId,
  userCoursesCollectionId,
  [Query.equal('userId', userId)]
);
```

### Purchasing a Course
```javascript
const purchaseRecord = await databases.createDocument(
  databaseId,
  userCoursesCollectionId,
  ID.unique(),
  {
    userId,
    courseId,
    paymentId,
    amount,
    purchasedAt: new Date().toISOString(),
    progress: 0
  }
);
```

### Updating Course Progress
```javascript
const updatedRecord = await databases.updateDocument(
  databaseId,
  userCoursesCollectionId,
  userCourseId,
  { progress }
);
```

## Notes

- The actual schema may need to be adjusted based on specific business requirements
- Additional collections might be needed for features like reviews, comments, or course categories
- Consider adding appropriate indexes for frequently queried fields to improve performance
- Implement proper access control rules in the Appwrite console to secure your data