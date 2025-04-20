import { courseService } from './appwrite';

// Razorpay configuration
const RAZORPAY_KEY_ID = 'rzp_test_YourTestKeyId'; // Replace with your actual Razorpay key ID

// Initialize Razorpay
export const initRazorpay = () => {
  return new Promise((resolve) => {
    const script = document.createElement('script');
    script.src = 'https://checkout.razorpay.com/v1/checkout.js';
    script.onload = () => {
      resolve(true);
    };
    script.onerror = () => {
      resolve(false);
    };
    document.body.appendChild(script);
  });
};

// Payment services
export const paymentService = {
  // Create a new payment order
  createOrder: async (courseId, amount, userId, courseName) => {
    try {
      // In a production environment, you would create an order on your backend
      // For this implementation, we'll simulate order creation
      const orderData = {
        id: 'order_' + Math.random().toString(36).substring(2, 15),
        amount: amount * 100, // Razorpay expects amount in paise
        currency: 'INR',
        receipt: 'receipt_' + Math.random().toString(36).substring(2, 10),
      };
      
      return orderData;
    } catch (error) {
      console.error('Razorpay service :: createOrder :: error', error);
      throw error;
    }
  },

  // Process payment
  processPayment: async (orderData, userData, courseData) => {
    try {
      const options = {
        key: RAZORPAY_KEY_ID,
        amount: orderData.amount,
        currency: orderData.currency,
        name: 'Infoziant',
        description: `Payment for ${courseData.title}`,
        order_id: orderData.id,
        handler: async function (response) {
          try {
            // Save purchase record in Appwrite
            await courseService.purchaseCourse(
              userData.$id,
              courseData.$id,
              response.razorpay_payment_id,
              orderData.amount / 100
            );
            
            return {
              success: true,
              payment_id: response.razorpay_payment_id,
              order_id: response.razorpay_order_id,
              signature: response.razorpay_signature,
            };
          } catch (error) {
            console.error('Payment handler error:', error);
            return { success: false, error: error.message };
          }
        },
        prefill: {
          name: userData.name,
          email: userData.email,
        },
        theme: {
          color: '#3399cc',
        },
        modal: {
          ondismiss: function () {
            console.log('Payment dismissed');
          },
        },
      };

      return new Promise((resolve) => {
        const finalOptions = {
          ...options,
          handler: async function (response) {
            try {
              // Save purchase record in Appwrite BEFORE resolving
              await courseService.purchaseCourse(
                userData.$id,
                courseData.$id,
                response.razorpay_payment_id,
                orderData.amount / 100 // Use original amount
              );
              
              resolve({
                success: true,
                payment_id: response.razorpay_payment_id,
                order_id: response.razorpay_order_id,
                signature: response.razorpay_signature,
              });
            } catch (error) {
              console.error('Payment handler error (saving purchase):', error);
              // Resolve as failure if saving purchase fails
              resolve({ 
                success: false, 
                error: { 
                  description: 'Payment successful, but failed to record purchase. Please contact support.',
                  internalError: error
                } 
              });
            }
          },
          modal: {
            ondismiss: function () {
              console.log('Payment dismissed by user');
              resolve({ success: false, error: { description: 'Payment cancelled by user' } });
            },
          },
        };

        const razorpay = new window.Razorpay(finalOptions);
        
        razorpay.on('payment.failed', function (response) {
          console.error('Razorpay payment failed:', response.error);
          resolve({
            success: false,
            error: response.error,
          });
        });

        razorpay.open();
      });
    } catch (error) {
      console.error('Razorpay service :: processPayment :: error', error);
      throw error;
    }
  },

  // Verify payment (in a real implementation, this would be done on the backend)
  verifyPayment: async (paymentId, orderId, signature) => {
    try {
      // In a production environment, payment verification should be done on the backend
      // For this implementation, we'll simulate verification
      return { verified: true };
    } catch (error) {
      console.error('Razorpay service :: verifyPayment :: error', error);
      throw error;
    }
  },
};