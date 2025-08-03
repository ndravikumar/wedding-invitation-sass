// src/App.tsx
import React, { useState, useEffect } from "react";
import { supabase } from "./supabaseClient"; // Your client from Task 1
import { Session } from "@supabase/supabase-js";
import Auth from "./components/Auth"; // We will create this next
import Account from "./components/Account"; // And this one too

function App() {
  const [session, setSession] = useState<Session | null>(null);

  useEffect(() => {
    // Immediately check if a session exists
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
    });

    // Listen for changes in authentication state (login, logout)
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });

    // Cleanup the listener when the component unmounts
    return () => subscription.unsubscribe();
  }, []);

  return (
    <div className="container" style={{ padding: "50px 0 100px 0" }}>
      {!session ? (
        <Auth />
      ) : (
        <Account key={session.user.id} session={session} />
      )}
    </div>
  );
}

export default App;
