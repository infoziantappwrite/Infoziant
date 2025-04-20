import { Client, Account, Databases, ID, Query } from 'appwrite';

// Initialize Appwrite client
const client = new Client();
client.setEndpoint('https://cloud.appwrite.io/v1').setProject('67dd08bb00338a6cdf8b');

// Initialize Appwrite services
const account = new Account(client);
const databases = new Databases(client);

// Database and collection IDs
const DATABASE_ID = '67dd1d13000b5edf92bb';
const COURSES_COLLECTION_ID = '67dd23630031cc6352bf';
const ENROLLMENTS_COLLECTION_ID = '67dd1d360022aa3123c1';

// Authentication service
export const authService = {
  // Create a new account
  createAccount: async (email, password, name) => {
    try {
      const response = await account.create(ID.unique(), email, password, name);
      if (response.$id) {
        // Login immediately after successful account creation
        await authService.login(email, password);
      }
      return response;
    } catch (error) {
      console.error('Appwrite service :: createAccount :: error', error);
      throw error;
    }
  },

  // Login to account
  login: async (email, password) => {
    try {
      return await account.createSession(email, password);
    } catch (error) {
      console.error('Appwrite service :: login :: error', error);
      throw error;
    }
  },

  // Get current user
  getCurrentUser: async () => {
    try {
      return await account.get();
    } catch (error) {
      console.error('Appwrite service :: getCurrentUser :: error', error);
      return null;
    }
  },

  // Logout
  logout: async () => {
    try {
      return await account.deleteSessions();
    } catch (error) {
      console.error('Appwrite service :: logout :: error', error);
      throw error;
    }
  }
};

// Course service
export const courseService = {
  // Get all courses
  getAllCourses: async () => {
    try {
      const response = await databases.listDocuments(
        DATABASE_ID,
        COURSES_COLLECTION_ID
      );
      return response.documents;
    } catch (error) {
      console.error('Appwrite service :: getAllCourses :: error', error);
      throw error;
    }
  },

  // Get a single course by ID
  getCourse: async (courseId) => {
    try {
      return await databases.getDocument(
        DATABASE_ID,
        COURSES_COLLECTION_ID,
        courseId
      );
    } catch (error) {
      console.error('Appwrite service :: getCourse :: error', error);
      throw error;
    }
  },

  // Get user enrollments
  getUserEnrollments: async (userId) => {
    try {
      // Try to get the user's enrollment document
      return await databases.getDocument(
        DATABASE_ID,
        ENROLLMENTS_COLLECTION_ID,
        userId
      );
    } catch (error) {
      // If document doesn't exist, create a new one with empty courses array
      if (error.code === 404) {
        try {
          return await databases.createDocument(
            DATABASE_ID,
            ENROLLMENTS_COLLECTION_ID,
            userId,
            { coursesCollection: [] }
          );
        } catch (createError) {
          console.error('Appwrite service :: createUserEnrollment :: error', createError);
          throw createError;
        }
      }
      console.error('Appwrite service :: getUserEnrollments :: error', error);
      throw error;
    }
  },

  // Enroll user in a course
  enrollInCourse: async (userId, course) => {
    try {
      // First get the user's enrollment document
      let userEnrollment;
      try {
        userEnrollment = await databases.getDocument(
          DATABASE_ID,
          ENROLLMENTS_COLLECTION_ID,
          userId
        );
      } catch (error) {
        // If document doesn't exist, create a new one
        if (error.code === 404) {
          userEnrollment = await databases.createDocument(
            DATABASE_ID,
            ENROLLMENTS_COLLECTION_ID,
            userId,
            { coursesCollection: [] }
          );
        } else {
          throw error;
        }
      }

      // Check if user is already enrolled in this course
      const enrolledCourses = userEnrollment.coursesCollection || [];
      const alreadyEnrolled = enrolledCourses.some(c => c.$id === course.$id);
      
      if (alreadyEnrolled) {
        return userEnrollment; // User already enrolled, no action needed
      }

      // Add course to user's enrollments
      return await databases.updateDocument(
        DATABASE_ID,
        ENROLLMENTS_COLLECTION_ID,
        userId,
        {
          coursesCollection: [...enrolledCourses, course]
        }
      );
    } catch (error) {
      console.error('Appwrite service :: enrollInCourse :: error', error);
      throw error;
    }
  },

  // Unenroll user from a course
  unenrollFromCourse: async (userId, courseId) => {
    try {
      // Get the user's enrollment document
      const userEnrollment = await databases.getDocument(
        DATABASE_ID,
        ENROLLMENTS_COLLECTION_ID,
        userId
      );

      // Filter out the course to unenroll from
      const enrolledCourses = userEnrollment.coursesCollection || [];
      const updatedCourses = enrolledCourses.filter(course => course.$id !== courseId);

      // Update the enrollment document
      return await databases.updateDocument(
        DATABASE_ID,
        ENROLLMENTS_COLLECTION_ID,
        userId,
        {
          coursesCollection: updatedCourses
        }
      );
    } catch (error) {
      console.error('Appwrite service :: unenrollFromCourse :: error', error);
      throw error;
    }
  }
};