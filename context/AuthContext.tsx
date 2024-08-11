import React, { createContext, useContext, useEffect, useState } from "react"

import { supabase } from "../lib/supabase"
import { User } from "@supabase/supabase-js"
import * as RootNavigation from "../RootNavigation"

// Context type definition
interface AuthContextType {
     user: User | null
     isAuthenticated: boolean
     signIn: (email: string, password: string) => Promise<void>
     signUp: (email: string, password: string) => Promise<void>
     signOut: () => Promise<void>
}

// Creating context
const AuthContext = createContext<AuthContextType | undefined>(undefined)

// AuthProvider component
export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
     const [user, setUser] = useState<User | null>(null)
     const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false)

     useEffect(() => {
          const { data: listener } = supabase.auth.onAuthStateChange((_event, session) => {
               setUser(session?.user ?? null)
               setIsAuthenticated(!!session)
          })
          return () => {
               listener?.subscription.unsubscribe()
          }
     }, [])

     const signIn = async (email: string, password: string) => {
          console.log({ email, password })
          const { error, data } = await supabase.auth.signInWithPassword({ email, password })
          if (error) throw error
          setUser(data?.user)
          RootNavigation.navigate("Feed", "")
     }

     const signUp = async (email: string, password: string) => {
          const { error, data } = await supabase.auth.signUp({ email, password })
          if (error) throw error
          setUser(data?.user)
     }

     const signOut = async () => {
          const { error } = await supabase.auth.signOut()
          if (error) throw error
          setUser(null)
     }

     return <AuthContext.Provider value={{ user, signIn, signUp, signOut, isAuthenticated }}>{children}</AuthContext.Provider>
}

// Custom hook to use auth context
export const useAuth = () => {
     const context = useContext(AuthContext)
     if (context === undefined) {
          throw new Error("useAuth must be used within an AuthProvider")
     }
     return context
}
