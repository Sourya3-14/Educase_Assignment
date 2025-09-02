# PopX - React Authentication App

## Features

- **Welcome Page**: Landing page with call-to-action buttons
- **User Registration**: Complete signup form with validation
- **User Authentication**: Login system with form validation
- **Account Management**: User profile and settings page
- **Form Validation**: Real-time validation with error messages
- **Local Storage**: Persistent user data storage
- **Responsive Design**: Mobile-friendly interface
- **React Router**: Client-side routing for smooth navigation

## Tech Stack

- **React 18+**: Modern React with hooks
- **React Router DOM**: Client-side routing
- **CSS3**: Custom styling with modern design patterns
- **localStorage**: Browser storage for user persistence

## Routes

- `/` - Welcome page (home)
- `/login` - User login
- `/signup` - User registration  
- `/account` - User account settings
- `*` - Redirects to home for unknown routes

## Features Overview

### Welcome Page
- Clean landing page with PopX branding
- Navigation buttons to login or signup
- Responsive design with modern styling

### Signup Page
- Complete registration form with required fields:
  - Full Name*
  - Phone Number*
  - Email Address*
  - Password*
  - Company Name (optional)
  - Agency selection (Yes/No)
- Form validation with error messages
- Automatic navigation to account page on success

### Login Page
- Simple login form with email and password
- Real-time form validation
- Error handling for invalid credentials
- Automatic redirect to signup if no account exists
- Success navigation to account page

### Account Page
- User profile display with avatar
- Shows user information (name, email)
- Profile picture placeholder with camera icon
- Clean settings interface

## Form Validation

- **Real-time validation**: Errors clear as user types
- **Email validation**: Proper email format checking
- **Required fields**: Clear indication and validation
- **Consistent error styling**: Uniform error messages across forms

## Data Persistence

- User data stored in browser's localStorage
- Automatic data loading on app initialization
- Persistent login state across sessions
- Error handling for corrupted data

## Styling

- Modern CSS with clean design
- Consistent color scheme and typography
- Responsive layout for mobile devices
- Smooth transitions and hover effects
- Form styling with proper focus states


## Browser Compatibility

- Modern browsers (Chrome, Firefox, Safari, Edge)
- ES6+ features used
- localStorage support required


