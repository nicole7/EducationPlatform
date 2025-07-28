const Profile = () => {
    return (
    <div>
      <div>
        <select
          onChange={(e) => {
        const value = e.target.value;
        if (value === "student") {
          window.location.href = "/student-portal";
        } else if (value === "teacher") {
          window.location.href = "/teacher-portal";
        } else if (value === "login") {
          window.location.href = "/login";
        } else if (value === "logout") {
          // Implement your logout logic here
          window.location.href = "/logout";
        }
          }}
          defaultValue=""
        >
          <option value="" disabled>
        Profile Menu
          </option>
          {/* Replace this with your user role logic */}
          <option value="student">Go to Student Portal</option>
          <option value="teacher">Go to Teacher Portal</option>
          <option value="login">Log In</option>
          <option value="logout">Log Out</option>
        </select>
      </div>
    </div>
    )
  }
  
  export default Profile