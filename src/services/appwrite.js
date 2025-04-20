import { Client, Account, Databases, ID, Query } from 'appwrite';

// Initialize Appwrite client
const client = new Client();

// Appwrite endpoint and project ID
const endpoint = 'https://fra.cloud.appwrite.io/v1';
const projectId = '6804180400067f46f6e5'; // Infoziant project ID

// Initialize Appwrite services
client.setEndpoint(endpoint).setProject(projectId);

// Initialize Appwrite account service
const account = new Account(client);

// Initialize Appwrite database service
const databases = new Databases(client);

// Database and collection IDs
const databaseId = '680418610036fb043b24'; // Infoziant database ID
const coursesCollectionId = '6804186c00001dd097d2'; // Courses collection ID
const userCoursesCollectionId = '680418780002975e0872'; // User courses collection ID

// Authentication services
export const authService = {
  // Create a new account
  createAccount: async (email, password, name) => {
    try {
      const newAccount = await account.create(ID.unique(), email, password, name);
      if (newAccount) {
        // Send verification email
        await account.createVerification(window.location.origin + '/verify');
        // Login the user
        return await authService.login(email, password);
      }
      return newAccount;
    } catch (error) {
      console.error('Appwrite service :: createAccount :: error', error);
      throw error;
    }
  },

  // Login user
  login: async (email, password) => {
    try {
      // Use the account instance that's already initialized at the top level
      // Use createEmailPasswordSession for email/password authentication
      return await account.createEmailPasswordSession(email, password);
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

  // Logout user
  logout: async () => {
    try {
      return await account.deleteSession('current');
    } catch (error) {
      console.error('Appwrite service :: logout :: error', error);
      throw error;
    }
  },

  // Verify email
  verifyEmail: async (userId, secret) => {
    try {
      return await account.updateVerification(userId, secret);
    } catch (error) {
      console.error('Appwrite service :: verifyEmail :: error', error);
      throw error;
    }
  },

  // Reset password
  resetPassword: async (email) => {
    try {
      return await account.createRecovery(email, window.location.origin + '/reset-password');
    } catch (error) {
      console.error('Appwrite service :: resetPassword :: error', error);
      throw error;
    }
  },

  // Complete password reset
  completeReset: async (userId, secret, password, confirmPassword) => {
    try {
      return await account.updateRecovery(userId, secret, password, confirmPassword);
    } catch (error) {
      console.error('Appwrite service :: completeReset :: error', error);
      throw error;
    }
  }
};

// Course services
export const courseService = {
  // Get all courses
  getAllCourses: async () => {
    try {
      const response = await databases.listDocuments(databaseId, coursesCollectionId);
      return response.documents;
    } catch (error) {
      console.error('Appwrite service :: getAllCourses :: error', error);
      throw error;
    }
  },

  // Get course by ID
  getCourseById: async (courseId) => {
    try {
      return await databases.getDocument(databaseId, coursesCollectionId, courseId);
    } catch (error) {
      console.error('Appwrite service :: getCourseById :: error', error);
      throw error;
    }
  },

  // Purchase a course
  purchaseCourse: async (userId, courseId, paymentId, amount) => {
    try {
      return await databases.createDocument(
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
    } catch (error) {
      console.error('Appwrite service :: purchaseCourse :: error', error);
      throw error;
    }
  },

  // Get user's purchased courses
  getUserCourses: async (userId) => {
    try {
      const response = await databases.listDocuments(
        databaseId,
        userCoursesCollectionId,
        [Query.equal('userId', userId)]
      );
      return response.documents;
    } catch (error) {
      console.error('Appwrite service :: getUserCourses :: error', error);
      throw error;
    }
  },

  // Update course progress
  updateCourseProgress: async (userCourseId, progress) => {
    try {
      return await databases.updateDocument(
        databaseId,
        userCoursesCollectionId,
        userCourseId,
        { progress }
      );
    } catch (error) {
      console.error('Appwrite service :: updateCourseProgress :: error', error);
      throw error;
    }
  }
};

export { client, account, databases };