import React, { useState, useEffect } from 'react';
import { authService, userService } from '../../services/appwrite';
import './Profile.css'; // We'll create this CSS file next

const Profile = () => {
  const [user, setUser] = useState(null);
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [profilePic, setProfilePic] = useState(null);
  const [profilePicPreview, setProfilePicPreview] = useState('');
  const [profilePicUploading, setProfilePicUploading] = useState(false);
  const [profilePicError, setProfilePicError] = useState(null);
  const [passwordData, setPasswordData] = useState({
    currentPassword: '',
    newPassword: '',
    confirmPassword: '',
  });
  const [passwordUpdating, setPasswordUpdating] = useState(false);
  const [passwordError, setPasswordError] = useState(null);
  const [passwordSuccess, setPasswordSuccess] = useState(false);
  const [phone, setPhone] = useState('');
  const [phoneUpdating, setPhoneUpdating] = useState(false);
  const [phoneError, setPhoneError] = useState(null);
  const [phoneSuccess, setPhoneSuccess] = useState(false);

  useEffect(() => {
    const fetchProfileData = async () => {
      try {
        setLoading(true);
        const currentUser = await authService.getCurrentUser();
        setUser(currentUser);

        if (currentUser) {
          const dbUserData = await userService.getUserData(currentUser.$id);
          setUserData(dbUserData);
          setPhone(dbUserData?.phone || '');
          setProfilePicPreview(dbUserData?.UserImages || '/assets/default-avatar.png'); // Use default if no image
        }
      } catch (err) {
        console.error('Error fetching profile data:', err);
        setError('Failed to load profile data. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    fetchProfileData();
  }, []);

  const handlePasswordChange = (e) => {
    setPasswordData({ ...passwordData, [e.target.name]: e.target.value });
  };

  const handleUpdatePassword = async (e) => {
    e.preventDefault();
    setPasswordError(null);
    setPasswordSuccess(false);

    if (passwordData.newPassword !== passwordData.confirmPassword) {
      setPasswordError('New passwords do not match.');
      return;
    }
    if (passwordData.newPassword.length < 8) {
      setPasswordError('Password must be at least 8 characters long.');
      return;
    }

    setPasswordUpdating(true);
    try {
      await authService.updatePassword(passwordData.currentPassword, passwordData.newPassword);
      setPasswordSuccess(true);
      setPasswordData({ currentPassword: '', newPassword: '', confirmPassword: '' }); // Clear fields
    } catch (err) {
      console.error('Password update error:', err);
      setPasswordError(err.message || 'Failed to update password. Check current password.');
    } finally {
      setPasswordUpdating(false);
    }
  };

  const handlePhoneChange = (e) => {
    setPhone(e.target.value);
  };

  const handleUpdatePhone = async (e) => {
    e.preventDefault();
    setPhoneError(null);
    setPhoneSuccess(false);
    setPhoneUpdating(true);
    try {
      await userService.updateUserData(user.$id, { phone });
      setUserData(prev => ({ ...prev, phone })); // Update local state
      setPhoneSuccess(true);
    } catch (err) {
      console.error('Phone update error:', err);
      setPhoneError(err.message || 'Failed to update phone number.');
    } finally {
      setPhoneUpdating(false);
    }
  };

  const handleProfilePicChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setProfilePic(file);
      setProfilePicPreview(URL.createObjectURL(file));
      setProfilePicError(null);
    }
  };

  const handleUploadProfilePic = async () => {
    if (!profilePic) {
      setProfilePicError('Please select an image file first.');
      return;
    }
    setProfilePicUploading(true);
    setProfilePicError(null);
    try {
      const fileUrl = await userService.uploadProfilePicture(user.$id, profilePic);
      await userService.updateUserData(user.$id, { UserImages: fileUrl });
      setUserData(prev => ({ ...prev, UserImages: fileUrl })); // Update local state
      setProfilePicPreview(fileUrl); // Update preview with the stored URL
      setProfilePic(null); // Clear the file input state
    } catch (err) {
      console.error('Profile picture upload error:', err);
      setProfilePicError(err.message || 'Failed to upload profile picture.');
    } finally {
      setProfilePicUploading(false);
    }
  };

  if (loading) {
    return (
      <div className="profile-container loading">
        <div className="spinner"></div>
        <p>Loading profile...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="profile-container error">
        <p>{error}</p>
        <button onClick={() => window.location.reload()}>Try Again</button>
      </div>
    );
  }

  if (!user) {
    return <div className="profile-container error"><p>Please log in to view your profile.</p></div>;
  }

  return (
    <div className="profile-container">
      <h1>My Profile</h1>

      {/* Account Settings */}
      <div className="profile-section account-settings">
        <h2>Account Settings</h2>
        <div className="setting-item">
          <span className="setting-label">Email:</span>
          <span className="setting-value">{user.email}</span>
        </div>
        <div className="setting-item">
          <span className="setting-label">Name:</span>
          <span className="setting-value">{user.name || 'Not Set'}</span>
        </div>
        {/* Add other read-only fields if needed */}
      </div>

      {/* Profile Picture */}
      <div className="profile-section profile-picture">
        <h2>Profile Picture</h2>
        <div className="profile-pic-display">
          <img src={profilePicPreview || '/assets/default-avatar.png'} alt="Profile" className="current-profile-pic" />
        </div>
        <div className="form-group">
          <label htmlFor="profile-pic-upload">Change Profile Picture</label>
          <input
            type="file"
            id="profile-pic-upload"
            accept="image/*"
            onChange={handleProfilePicChange}
            disabled={profilePicUploading}
          />
          <button
            onClick={handleUploadProfilePic}
            disabled={!profilePic || profilePicUploading}
            className="btn-update"
          >
            {profilePicUploading ? 'Uploading...' : 'Upload Image'}
          </button>
        </div>
        {profilePicError && <p className="error-message">{profilePicError}</p>}
      </div>

      {/* Phone Number */}
      <div className="profile-section phone-number">
        <h2>Mobile Number</h2>
        <form onSubmit={handleUpdatePhone}>
          <div className="form-group">
            <label htmlFor="phone">Phone Number</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={phone}
              onChange={handlePhoneChange}
              placeholder="Enter your phone number"
              disabled={phoneUpdating}
            />
          </div>
          <button type="submit" className="btn-update" disabled={phoneUpdating}>
            {phoneUpdating ? 'Updating...' : 'Update Phone'}
          </button>
          {phoneError && <p className="error-message">{phoneError}</p>}
          {phoneSuccess && <p className="success-message">Phone number updated successfully!</p>}
        </form>
      </div>

      {/* Change Password */}
      <div className="profile-section change-password">
        <h2>Change Password</h2>
        <form onSubmit={handleUpdatePassword}>
          <div className="form-group">
            <label htmlFor="currentPassword">Current Password</label>
            <input
              type="password"
              id="currentPassword"
              name="currentPassword"
              value={passwordData.currentPassword}
              onChange={handlePasswordChange}
              placeholder="Enter current password"
              required
              disabled={passwordUpdating}
            />
          </div>
          <div className="form-group">
            <label htmlFor="newPassword">New Password</label>
            <input
              type="password"
              id="newPassword"
              name="newPassword"
              value={passwordData.newPassword}
              onChange={handlePasswordChange}
              placeholder="Enter new password (min 8 chars)"
              required
              disabled={passwordUpdating}
            />
          </div>
          <div className="form-group">
            <label htmlFor="confirmPassword">Confirm New Password</label>
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              value={passwordData.confirmPassword}
              onChange={handlePasswordChange}
              placeholder="Confirm new password"
              required
              disabled={passwordUpdating}
            />
          </div>
          <button type="submit" className="btn-update" disabled={passwordUpdating}>
            {passwordUpdating ? 'Updating...' : 'Update Password'}
          </button>
          {passwordError && <p className="error-message">{passwordError}</p>}
          {passwordSuccess && <p className="success-message">Password updated successfully!</p>}
        </form>
      </div>

    </div>
  );
};

export default Profile;