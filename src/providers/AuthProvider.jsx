import { createContext, useState } from "react";

const AuthContex = createContext(null);

const AuthProvider = ({ childre }) => {


  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);



  const authInfo = {
    user,
    loading
  }

  return (
    <AuthContex.Provider value={authInfo}>
      {childre}
    </AuthContex.Provider>
  );
};

export default AuthProvider;